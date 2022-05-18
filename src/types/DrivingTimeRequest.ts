import { DepartureTime } from './DepartureTime'
import { DepartureDay } from './DepartureDay'

export type DrivingTimeRequest = {
  origin: string
  destination: string
  language: string
  trafficModel: 'best_guess' | 'pessimistic' | 'optimistic'
  departureDate: DepartureDay
  departureTimes: DepartureTime[]
  apiKey: string
}
