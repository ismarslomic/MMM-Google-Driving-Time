import * as Log from 'logger'
import { DrivingTimeResponse } from '../types/DrivingTimeResponse'
import { HumanizeDuration, HumanizeDurationLanguage } from 'humanize-duration-ts'
import { DistanceMatrixResponse } from '@googlemaps/google-maps-services-js'
import { DistanceMatrixRequest } from '@googlemaps/google-maps-services-js/dist/distance'
import { DrivingDeparture } from '../types/DrivingDeparture'
import { DrivingTimeRequest } from '../types/DrivingTimeRequest'
import { DepartureDateUtil } from './DepartureDateUtil'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Client, TrafficModel, TravelMode, Status } = require('@googlemaps/google-maps-services-js')

const langService = new HumanizeDurationLanguage()
const humanizer = new HumanizeDuration(langService)

export class DrivingTimeService {
  /**
   * Returns driving time for the departure times in the future.
   *
   * @param dtRequest request to be sent to Google Matrix API
   * @returns DrivingTimeResponse if requested at least one departure time in the future and Google found the
   * origin and destination. Return undefined if none departure times in the future were requested.
   */
  static async requestDrivingTime(dtRequest: DrivingTimeRequest): Promise<DrivingTimeResponse | undefined> {
    Log.info(`Requesting driving time from Google.`)

    const requests = this.createDistanceMatrixRequest(dtRequest)
    const promises = Promise.all(requests.map((request) => this.callGoogleMatrixApi(request)))

    return promises
      .then((responses) => {
        if (responses.length == 0) {
          return undefined
        }

        const drivingDepartures = responses.map((response) => response.drivingDepartures[0])
        const firstResponse = responses[0]
        firstResponse.drivingDepartures = drivingDepartures
        return firstResponse
      })
      .catch((error) => {
        if (error) {
          throw Error(error.message || error)
        } else throw Error('Error occurred in one or more of the service calls to Google Distance Matrix API')
      })
  }

  private static async callGoogleMatrixApi(request: DistanceMatrixRequest): Promise<DrivingTimeResponse> {
    const googleClient = new Client({})

    return new Promise((resolve, reject) => {
      googleClient
        .distancematrix(request)
        .then(async (response: DistanceMatrixResponse) => {
          if (!response.data) {
            reject('Data returned from Google Distance Matrix Service where undefined.')
          } else if (response.data.status !== Status.OK) {
            reject(response.data.error_message)
          } else if (response.data.rows[0].elements[0].status !== Status.OK) {
            reject(
              `Status for row data from Google Distance Matrix Service where ${response.data.rows[0].elements[0].status}`
            )
          }

          const normalDurationInSeconds = response.data.rows[0].elements[0].duration.value
          const drivingDepartures = [
            this.mapToDrivingDeparture(
              response,
              request.params.language,
              normalDurationInSeconds,
              new Date(request.params.departure_time)
            )
          ]
          resolve(this.mapToDrivingTimeResponse(response, drivingDepartures))
        })
        .catch((error) => {
          reject(error.message)
        })
    })
  }

  private static createDistanceMatrixRequest(dtRequest: DrivingTimeRequest): DistanceMatrixRequest[] {
    const departureDates = new DepartureDateUtil(dtRequest.departureDate, dtRequest.departureTimes).getDatesInFuture()

    return departureDates.map((departureDate) => {
      return {
        params: {
          key: dtRequest.apiKey,
          departure_time: departureDate.getTime(),
          origins: [dtRequest.origin],
          destinations: [dtRequest.destination],
          language: dtRequest.language,
          mode: TravelMode.driving,
          traffic_model: this.mapToTrafficModel(dtRequest.trafficModel)
        },
        timeout: 1000 // in milliseconds, 1 second
      }
    })
  }

  private static mapToTrafficModel(trafficModel: string): typeof TrafficModel {
    if (trafficModel === TrafficModel.optimistic.valueOf()) {
      return TrafficModel.optimistic
    } else if (trafficModel === TrafficModel.pessimistic.valueOf()) {
      return TrafficModel.pessimistic
    } else {
      return TrafficModel.best_guess
    }
  }

  private static mapToDrivingDeparture(
    response: DistanceMatrixResponse,
    language: string,
    normalDurationInSeconds: number,
    departureTime: Date
  ): DrivingDeparture {
    const firstElement = response.data.rows[0].elements[0]
    const durationDiffInSeconds = firstElement.duration_in_traffic.value - normalDurationInSeconds

    humanizer.addLanguage('shortNo', {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 't',
      m: () => 'min',
      s: () => 's',
      ms: () => 'ms',
      decimal: ''
    })

    let durationDiffDescription = humanizer.humanize(durationDiffInSeconds * 1000, {
      language: 'shortNo',
      units: ['h', 'm'],
      serialComma: false,
      round: true
    })

    durationDiffDescription = durationDiffInSeconds <= -60 ? '-' + durationDiffDescription : durationDiffDescription

    return {
      departureTime: departureTime,
      durationInTraffic: {
        inSeconds: firstElement.duration_in_traffic.value,
        description: firstElement.duration_in_traffic.text
      },
      durationDiff: {
        inSeconds: durationDiffInSeconds,
        description: durationDiffDescription
      }
    }
  }

  private static mapToDrivingTimeResponse(
    parent: DistanceMatrixResponse,
    drivingDepartures: DrivingDeparture[]
  ): DrivingTimeResponse {
    const firstElement = parent.data.rows[0].elements[0]

    return {
      origin: parent.data.origin_addresses[0],
      destination: parent.data.destination_addresses[0],
      distance: {
        inMeter: firstElement.distance.value,
        description: firstElement.distance.text
      },
      duration: {
        inSeconds: firstElement.duration.value,
        description: firstElement.duration.text
      },
      drivingDepartures: drivingDepartures
    }
  }
}
