export type Config = {
  lastUpdateFormat?: string
  updateIntervalInSeconds?: number
  origin: string
  destination: string
  language: string
  trafficMode: 'best_guess' | 'pessimistic' | 'optimistic'
  apiKey: string
}
