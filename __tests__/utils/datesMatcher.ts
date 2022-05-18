import { DepartureTime } from '../../src/types/DepartureTime'

expect.extend({
  datesToBeEqual(received: Date, expected: Date) {
    const pass = received.getFullYear() === expected.getFullYear() &&
      received.getMonth() === expected.getMonth() &&
      received.getDay() === expected.getDay()

    if (pass) {
      return {
        message: () =>
          `expected year, month and day in ${received} not to be equal with ${expected}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `expected year, month and day in ${received} to be equal with  ${expected}`,
        pass: false
      }
    }
  },
  timesAreEqual(received: Date, expected: DepartureTime) {
    const pass = received.getHours() === expected.hours &&
      received.getMinutes() === expected.minutes

    if (pass) {
      return {
        message: () =>
          `expected hours and minutes in ${received} not to be equal with ${expected}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `expected hours and minutes in ${received} to be equal with  ${expected}`,
        pass: false
      }
    }
  }
})
