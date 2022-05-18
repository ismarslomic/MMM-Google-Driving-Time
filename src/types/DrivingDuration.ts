/**
 * The length of time it takes to drive the route, expressed in seconds (inSeconds) and as text (description).
 * The textual representation is localized according to the query's language parameter.
 */
export type DrivingDuration = {
  /**
   * The length of time in seconds
   */
  inSeconds: number,
  /**
   * The length of time as localized text
   */
  description: string
}
