import { DepartureDay } from '../types/DepartureDay'
import { DepartureTime } from '../types/DepartureTime'
import { DepartureDateValidator } from './DepartureDateValidator'

export class DepartureDateUtil {
  private readonly _departureDay: DepartureDay
  private readonly _departureTimes: DepartureTime[]
  private readonly _dateNow: Date
  private readonly _departureDate: Date

  constructor(departureDay: DepartureDay, departureTimes: DepartureTime[]) {
    if (departureDay === null || departureDay === undefined) {
      throw new Error('Argument departureDay cannot be undefined or null')
    }

    const isDepartureTimesValid = DepartureDateValidator.isDepartureTimesValid(departureTimes)
    if (!isDepartureTimesValid.valid) {
      throw new Error(isDepartureTimesValid.reason)
    }

    this._dateNow = new Date()

    this._departureDay = departureDay
    this._departureTimes = departureTimes
    this._departureDate = new Date(this._dateNow)

    if (this._departureDay === DepartureDay.TOMORROW) {
      this._departureDate = new Date(this._dateNow)
      this._departureDate.setDate(this._dateNow.getDate() + 1)
    }
  }

  /**
   * Creates departure dates for each _departureTime_ on the _departureDay_.
   * Departure dates in past are filtered are ignored.
   *
   * @returns list of departure dates in the future (compared with _dateNow_) sorted ascending
   */
  getDatesInFuture(): Date[] {
    const dates = this._departureTimes.map((departureTime: DepartureTime) => {
      const copyDepartureDate = new Date(this._departureDate)
      copyDepartureDate.setHours(departureTime.hours)
      copyDepartureDate.setMinutes(departureTime.minutes)

      return copyDepartureDate
    })

    const datesInFuture = this.filterDatesInFuture(dates)
    DepartureDateUtil.sortDatesAscending(datesInFuture)

    return datesInFuture
  }

  private filterDatesInFuture(dates: Date[]): Date[] {
    return dates.filter((date: Date) => {
      return date >= this._dateNow
    })
  }

  private static sortDatesAscending(dates: Date[]) {
    dates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
  }
}
