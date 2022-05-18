import { generateResponse } from '../__mocks__/mockResponse'
import { Config } from '../src/types/Config'
import { Client } from '@googlemaps/google-maps-services-js'
import { ModuleNotification } from '../src/constants/ModuleNotification'
import { DepartureDay } from '../src/types/DepartureDay'

describe('Backend', () => {
  let helper
  const mockedDistancematrix = jest.fn()
  let mockedSendSocketNotification
  let config: Config

  beforeEach(() => {
    helper = require('../src/backend/Backend')
    helper.setName('MMM-Google-Driving-Time')

    // Mock the Google Distance Matrix API and return mocked response
    Client.prototype.distancematrix = mockedDistancematrix
    mockedDistancematrix.mockReturnValue(Promise.resolve(generateResponse()))

    // Mock the MMM sendSocketNotification function which returns data back to the frontend
    mockedSendSocketNotification = helper.sendSocketNotification.mock

    config = {
      origin: 'place_id:ChIJt8uR5A3pP0YRFsY8zU7Bg5g',
      destination: 'place_id:ChIJMYz3QEJuQUYRLRlABAEinJA',
      language: 'no',
      trafficModel: 'best_guess',
      apiKey: 'abcdefg',
      departureDate: DepartureDay.TODAY,
      departureTimes: [{ hours: 10, minutes: 0 }]
    }

    jest.useFakeTimers().setSystemTime(new Date('2022-05-01T09:00:00'))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('GIVEN starting the module THEN log starting module to console', () => {
    helper.start()

    expect(console.log).toHaveBeenCalledWith('Starting module helper: MMM-Google-Driving-Time')
  })

  test('GIVEN requesting driving time WHEN response is successful THEN response is sent via socket', async () => {
    helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
    jest.useRealTimers()
    await global.waitForAsync()

    expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_RESPONSE)
    expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
      lastUpdate: expect.any(Number),
      drivingTime: {
        drivingDepartures: [
          {
            departureTime: expect.any(Date)
          }
        ]
      }
    })
  })
})
