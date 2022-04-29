import { Config } from '../types/Config'
import * as Log from 'logger'
import { DrivingTimeResponse } from '../types/DrivingTimeResponse'
import { HumanizeDuration, HumanizeDurationLanguage } from 'humanize-duration-ts'

const langService = new HumanizeDurationLanguage()
const humanizer = new HumanizeDuration(langService)

export default class DrivingTimeService {
  static async requestDrivingTime(config: Config): Promise<DrivingTimeResponse> {
    Log.info(`Requesting driving time from Google ${config}`)

    const durationDiffInSeconds = 10523 - 10899

    return {
      origin: 'VJ27+FP Ulsåk, Norge',
      destination: 'Gøteborggata 32, 0566 Oslo, Norge',
      distance: {
        description: '204 km',
        inMeter: 203555
      },
      duration: {
        description: '3 timer 2 min',
        inSeconds: 10899
      },
      durationInTraffic: {
        description: '2 timer 55 min',
        inSeconds: 10523
      },
      durationDiff: {
        description: humanizer.humanize(durationDiffInSeconds * 1000, {
          language: 'no',
          units: ['h', 'm'],
          serialComma: false,
          round: true
        }),
        inSeconds: durationDiffInSeconds
      }
    }
  }
}
