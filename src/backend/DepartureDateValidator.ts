import { DepartureTime } from '../types/DepartureTime'
import { ValidationResult } from '../types/ValidationResult'

export class DepartureDateValidator {
  /**
   * DepartureTime[] is valid if all of these conditions are met:
   *  - valid array (not null og undefined)
   *  - contains at least one element
   *  - all hours in range [0..23]
   *  - all minutes in range [0..59]
   * @param departureTimes array of departure times
   * @returns true if valid otherwise false
   */
  static isDepartureTimesValid(departureTimes: DepartureTime[]): ValidationResult {
    // If not an array, array undefined or null, or array is empty
    if (!departureTimes || !departureTimes.length) {
      return { valid: false, reason: 'Array of departureTimes is not valid. Maybe it is undefined, null or empty?' }
    }

    // Validate hours and minutes in array of departureTimes
    const hoursValidity = this.isHoursValid(departureTimes)
    const minutesValidity = this.isMinutesValid(departureTimes)
    if (!hoursValidity.valid) {
      return hoursValidity
    } else if (!minutesValidity.valid) {
      return minutesValidity
    } else {
      return { valid: true }
    }
  }

  /**
   * Valid if following condition is met:
   *  - all hours in range [0..23]
   */
  private static isHoursValid(departureTimes: DepartureTime[]): ValidationResult {
    const minHours = Math.min(...departureTimes.map((time: DepartureTime) => time.hours))
    const maxHours = Math.max(...departureTimes.map((time: DepartureTime) => time.hours))

    if (minHours < 0 || maxHours > 23) {
      return {
        valid: false,
        reason: 'One or more elements in array of departureTimes is not valid. Hours must be in range [0..23]'
      }
    } else {
      return { valid: true }
    }
  }

  /**
   * Valid if following condition is met:
   *  - all minutes in range [0..59]
   */
  private static isMinutesValid(departureTimes: DepartureTime[]): ValidationResult {
    const minMinutes = Math.min(...departureTimes.map((time: DepartureTime) => time.minutes))
    const maxMinutes = Math.max(...departureTimes.map((time: DepartureTime) => time.minutes))

    if (minMinutes < 0 || maxMinutes > 59) {
      return {
        valid: false,
        reason: 'One or more elements in array of departureTimes is not valid. Minutes must be in range [0..59]'
      }
    } else {
      return { valid: true }
    }
  }
}
