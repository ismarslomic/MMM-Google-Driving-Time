import { DrivingDuration } from './DrivingDuration'
import { DrivingDeparture } from './DrivingDeparture'

export type DrivingTimeResponse = {
  /**
   * Resolved address of the origin, based on the origin sent in request
   */
  origin: string
  /**
   * Resolved address of the destination, based on the origin sent in request
   */
  destination: string
  /**
   * The total distance of this route, expressed in meters (inMeter) and as text (description).
   * The textual value uses the unit system specified with the unit parameter of the
   * original request, or the origin's region.
   */
  distance: {
    inMeter: number
    description: string
  }
  /**
   * The length of time it takes to travel this route without taking in account current and historical traffic conditions.
   */
  duration: DrivingDuration,
  /**
   * The length of time it takes to drive the route on specific departure times in the future
   */
  drivingDepartures: DrivingDeparture[]
}
