import { successfulResponse, notFoundStatusResponse, undefinedDataResponse } from '../__mocks__/mockResponse'
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
    mockedDistancematrix.mockReturnValue(Promise.resolve(successfulResponse()))

    helper.start()

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('Starting module helper: MMM-Google-Driving-Time')
  })

  test('GIVEN valid request WHEN response is successful THEN response is sent via socket', async () => {
    mockedDistancematrix.mockReturnValue(Promise.resolve(successfulResponse()))

    helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
    jest.useRealTimers()
    await global.waitForAsync()

    expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_SUCCESS_RESPONSE)
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

  test('GIVEN invalid request WHEN response is failed THEN response with error is sent via socker', async () => {
    mockedDistancematrix.mockReturnValue(Promise.resolve(successfulResponse()))
    config.departureTimes = []

    helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)

    jest.useRealTimers()
    await global.waitForAsync()

    expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE)
    expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
      lastUpdate: expect.any(Number),
      error: 'Error retrieving driving time, check console.',
      details: 'Array of departureTimes is not valid. Maybe it is undefined, null or empty?'
    })
  })

  test('GIVEN error status WHEN google api responds THEN response with error is sent via socker', async () => {
    mockedDistancematrix.mockReturnValue(Promise.resolve(notFoundStatusResponse()))
    helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)

    jest.useRealTimers()
    await global.waitForAsync()

    expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE)
    expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
      lastUpdate: expect.any(Number),
      error: 'Error retrieving driving time, check console.',
      details: 'Error occurred in one or more of the service calls to Google Distance Matrix API'
    })
  })

  test('GIVEN undefined data WHEN google api responds THEN response with error is sent via socker', async () => {
    mockedDistancematrix.mockReturnValue(Promise.resolve(undefinedDataResponse()))
    helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)

    jest.useRealTimers()
    await global.waitForAsync()

    expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE)
    expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
      lastUpdate: expect.any(Number),
      error: 'Error retrieving driving time, check console.',
      details: 'Data returned from Google Distance Matrix Service where undefined.'
    })
  })

})
