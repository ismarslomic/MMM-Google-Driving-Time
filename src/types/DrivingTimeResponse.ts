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
    description: string
    inMeter: number
  }
  /**
   * The length of time it takes to travel this route, expressed in seconds (inSeconds) and as text (description).
   * The textual representation is localized according to the query's language parameter.
   */
  duration: {
    description: string
    inSeconds: number
  },
  /**
   * The length of time it takes to travel this route, based on current and historical traffic conditions.
   * See the traffic_model request parameter for the options you can use to request that the returned value is
   * optimistic, pessimistic, or a best-guess estimate. The duration is expressed in seconds (inSeconds)
   * and as text (description). The textual representation is localized according to the query's language parameter.
   *
   * The duration in traffic is returned only if all of the following are true:
   *     - The request includes a departure_time parameter.
   *     - Traffic conditions are available for the requested route.
   *     - The mode parameter is set to driving.
   */
  durationInTraffic: {
    description: string
    inSeconds: number
  },
  /**
   * Difference (in seconds) between the length of time it takes to travel this route (duration.inSeconds) and the
   * length of time it takes to travel this route based on current and historical traffic conditions
   * durationInTraffic.inSeconds.
   *
   * Negative duration means shorter time to travel based on current and historical traffic conditions, positive means
   * longer.
   */
  durationDiff: {
    description: string
    inSeconds: number
  }
}
