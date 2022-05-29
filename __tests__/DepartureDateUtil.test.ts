import { DepartureDateUtil } from '../src/backend/DepartureDateUtil'
import { DepartureDay } from '../src/types/DepartureDay'
import { DepartureTime } from '../src/types/DepartureTime'

require('./utils/datesMatcher')

describe('DepartureDateUtil', () => {
  let departureTimes: DepartureTime[]

  beforeEach(() => {
    departureTimes = [
      {
        hours: 11,
        minutes: 30
      },
      {
        hours: 12,
        minutes: 0
      },
      {
        hours: 12,
        minutes: 30
      }
    ]
    jest.useFakeTimers().setSystemTime(new Date('2022-05-01T09:00:00'))
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  })

  describe('Constructor arguments', () => {
    test('GIVEN departureDay is undefined or null WHEN calling constructor THEN error shall be thrown', () => {
      expect(() => {
        new DepartureDateUtil(undefined, departureTimes)
      }).toThrowError('Argument departureDay cannot be undefined or null')

      expect(() => {
        new DepartureDateUtil(null, departureTimes)
      }).toThrowError('Argument departureDay cannot be undefined or null')
    })

    test('GIVEN departureTimes is undefined or null WHEN calling constructor THEN error shall be thrown', () => {
      expect(() => {
        new DepartureDateUtil(DepartureDay.TODAY, undefined)
      }).toThrowError('Array of departureTimes is not valid. Maybe it is undefined, null or empty?')

      expect(() => {
        new DepartureDateUtil(DepartureDay.TODAY, null)
      }).toThrowError('Array of departureTimes is not valid. Maybe it is undefined, null or empty?')
    })

    test('GIVEN departureTimes is empty WHEN calling constructor THEN error shall be thrown', () => {
      expect(() => {
        new DepartureDateUtil(DepartureDay.TODAY, [])
      }).toThrowError('Array of departureTimes is not valid. Maybe it is undefined, null or empty?')

      expect(() => {
        new DepartureDateUtil(DepartureDay.TOMORROW, [])
      }).toThrowError('Array of departureTimes is not valid. Maybe it is undefined, null or empty?')
    })

    test('GIVEN at least one element in departureTimes has hours outside range [0..23] WHEN calling constructor THEN error shall be thrown', () => {
      expect(() => {
        departureTimes.push({ hours: -1, minutes: 0 })
        new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      }).toThrowError('One or more elements in array of departureTimes is not valid. Hours must be in range [0..23]')

      expect(() => {
        departureTimes.push({ hours: 24, minutes: 0 })
        new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      }).toThrowError('One or more elements in array of departureTimes is not valid. Hours must be in range [0..23]')
    })

    test('GIVEN at least one element in departureTimes has minutes outside range [0..59] WHEN calling constructor THEN error shall be thrown', () => {
      expect(() => {
        departureTimes.push({ hours: 16, minutes: -1 })
        new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      }).toThrowError('One or more elements in array of departureTimes is not valid. Minutes must be in range [0..59]')

      expect(() => {
        departureTimes.push({ hours: 16, minutes: 60 })
        new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      }).toThrowError('One or more elements in array of departureTimes is not valid. Minutes must be in range [0..59]')
    })
  })

  describe('GIVEN departureDay is TODAY', () => {
    test('WHEN departureTimes are in the future THEN all departure dates shall be returned', () => {
      const util = new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(3)
    })

    test('WHEN some departureTimes are in the past THEN only departure dates in the future shall be returned', () => {
      departureTimes.push(
        {
          hours: 8,
          minutes: 0
        },
        {
          hours: 8,
          minutes: 30
        }
      )
      const util = new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(3)
    })

    test('WHEN all departureTimes are in the past THEN empty list shall be returned', () => {
      departureTimes = [
        {
          hours: 8,
          minutes: 0
        },
        {
          hours: 8,
          minutes: 30
        }
      ]

      const util = new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(0)
    })

    test('WHEN departureTimes are unsorted THEN all departure dates shall be returned sorted ascending', () => {
      departureTimes = [
        {
          hours: 12,
          minutes: 0
        },
        {
          hours: 11,
          minutes: 0
        },
        {
          hours: 13,
          minutes: 0
        }
      ]
      const util = new DepartureDateUtil(DepartureDay.TODAY, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(3)
      expect(dates[0]).timesAreEqual(departureTimes[1])
      expect(dates[1]).timesAreEqual(departureTimes[0])
      expect(dates[2]).timesAreEqual(departureTimes[2])
    })
  })

  describe('GIVEN departureDay is TOMORROW', () => {
    test('WHEN departureTimes are in the future THEN all departure dates shall be returned', () => {
      const util = new DepartureDateUtil(DepartureDay.TOMORROW, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(3)
    })

    test('WHEN departureTimes are in the past compared to now THEN all departure dates shall be returned', () => {
      departureTimes.push(
        {
          hours: 8,
          minutes: 0
        },
        {
          hours: 8,
          minutes: 30
        }
      )
      const util = new DepartureDateUtil(DepartureDay.TOMORROW, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(5)
    })

    test('WHEN departureTimes are unsorted THEN all departure dates shall be returned sorted ascending', () => {
      departureTimes = [
        {
          hours: 8,
          minutes: 0
        },
        {
          hours: 7,
          minutes: 0
        },
        {
          hours: 9,
          minutes: 0
        }
      ]
      const util = new DepartureDateUtil(DepartureDay.TOMORROW, departureTimes)
      const dates: Date[] = util.getDatesInFuture()

      expect(dates.length).toEqual(3)
      expect(dates[0].getHours()).toEqual(7)
      expect(dates[1].getHours()).toEqual(8)
      expect(dates[2].getHours()).toEqual(9)
    })
  })
})
