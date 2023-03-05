import { successfulResponse, notFoundStatusResponse, undefinedDataResponse } from '../__mocks__/mockResponse'
import { Config } from '../src/types/Config'
import { Client } from '@googlemaps/google-maps-services-js'
import { ModuleNotification } from '../src/constants/ModuleNotification'
import { DepartureDay } from '../src/types/DepartureDay'
import 'jest-given-when-then'

describe('Backend', () => {
  let helper
  const mockedGoogleMatrixApi = jest.fn()
  let mockedSendSocketNotification
  let config: Config

  beforeEach(() => {
    helper = require('../src/backend/Backend')
    helper.setName('MMM-Google-Driving-Time')

    // Mock the Google Distance Matrix API and return mocked response
    Client.prototype.distancematrix = mockedGoogleMatrixApi

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

  describe('Printing to console when starting the Backend module', () => {
    When(() => helper.start())
    // eslint-disable-next-line no-console
    Then(() => expect(console.log).toHaveBeenCalledWith('Starting module helper: MMM-Google-Driving-Time'))
  })

  describe('Responding with successful notification via websocket', () => {
    describe('Departure times in the past are ignored when departure day is today', () => {
      Given(() => {
        mockedGoogleMatrixApi.mockReturnValue(Promise.resolve(successfulResponse()))
        config.departureDate = DepartureDay.TODAY
        config.departureTimes = [
          { hours: 7, minutes: 0 },
          { hours: 8, minutes: 0 },
          { hours: 9, minutes: 0 },
          { hours: 10, minutes: 0 }
        ]
      })
      When(async (done) => {
        helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
        jest.useRealTimers()
        await global.waitForAsync()
        done()
      })
      Then(() => expect(mockedGoogleMatrixApi).toBeCalledTimes(2))
      And(() => expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_SUCCESS_RESPONSE))
      And(() => expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({ lastUpdate: expect.any(Number) }))
    })

    describe('When all departure times are in the past then empty list is returned', () => {
      Given(() => {
        mockedGoogleMatrixApi.mockReturnValue(Promise.resolve(successfulResponse()))
        config.departureDate = DepartureDay.TODAY
        config.departureTimes = [
          { hours: 7, minutes: 0 },
          { hours: 8, minutes: 0 }
        ]
      })
      When(async (done) => {
        helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
        jest.useRealTimers()
        await global.waitForAsync()
        done()
      })
      Then(() => expect(mockedGoogleMatrixApi).toBeCalledTimes(0))
      And(() => expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_SUCCESS_RESPONSE))
      And(() => expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({ lastUpdate: expect.any(Number) }))
    })
  })

  describe('Responding with failed notification via websocket', () => {
    describe('Request has empty array of departure times', () => {
      Given(() => (config.departureTimes = []))
      When(async (done) => {
        helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
        jest.useRealTimers()
        await global.waitForAsync()
        done()
      })
      Then(() => expect(mockedGoogleMatrixApi).toBeCalledTimes(0))
      And(() => expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE))
      And(() => {
        expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
          lastUpdate: expect.any(Number),
          error: 'Error retrieving driving time, check console.',
          details: 'Array of departureTimes is not valid. Maybe it is undefined, null or empty?'
        })
      })
    })

    describe('Google Matrix API responds with NOT FOUND error', () => {
      Given(() => mockedGoogleMatrixApi.mockReturnValue(Promise.resolve(notFoundStatusResponse())))
      When(async (done) => {
        helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
        jest.useRealTimers()
        await global.waitForAsync()
        done()
      })
      Then(() => expect(mockedGoogleMatrixApi).toBeCalledTimes(1))
      And(() => expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE))
      And(() => {
        expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
          lastUpdate: expect.any(Number),
          error: 'Error retrieving driving time, check console.',
          details: 'Error occurred in one or more of the service calls to Google Distance Matrix API'
        })
      })
    })

    describe('Google Matrix API responds with undefined data object', () => {
      Given(() => mockedGoogleMatrixApi.mockReturnValue(Promise.resolve(undefinedDataResponse())))
      When(async (done) => {
        helper.socketNotificationReceived(ModuleNotification.DRIVING_TIME_REQUEST, config)
        jest.useRealTimers()
        await global.waitForAsync()
        done()
      })
      Then(() => expect(mockedGoogleMatrixApi).toBeCalledTimes(1))
      And(() => expect(mockedSendSocketNotification.calls[0][0]).toBe(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE))
      And(() => {
        expect(mockedSendSocketNotification.calls[0][1]).toMatchSnapshot({
          lastUpdate: expect.any(Number),
          error: 'Error retrieving driving time, check console.',
          details: 'Data returned from Google Distance Matrix Service where undefined.'
        })
      })
    })
  })
})
