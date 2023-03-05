/**
 * The length of time it takes to drive the route on specific departure time.
 */
import { DrivingDuration } from './DrivingDuration'

export type DrivingDeparture = {
  /**
   * Departure time (date and time) in future
   */
  departureTime: Date
  /**
   * The length of time it takes to drive this route, based on current and historical traffic conditions.
   */
  durationInTraffic: DrivingDuration
  /**
   * Difference (in seconds) between the length of time it takes to travel this route normally and the
   * length of time it takes to travel this route based on current and historical traffic conditions
   *
   * Negative duration means shorter time to travel based on current and historical traffic conditions, positive means
   * longer.
   */
  durationDiff: {
    /**
     * Difference in time duration expressed in seconds, negative means shorter time to travel then normally
     */
    inSeconds: number
    /**
     * Difference in time duration expressed as text, localized according to the query's language parameter.
     */
    description: string
  }
}
