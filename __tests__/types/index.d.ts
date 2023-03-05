import { DepartureTime } from '../../src/types/DepartureTime'

export {}
declare global {
  namespace jest {
    interface Matchers<R> {
      datesToBeEqual(expected: Date): R

      timesAreEqual(expected: DepartureTime): R
    }
  }
}
