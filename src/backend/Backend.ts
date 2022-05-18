// noinspection JSVoidFunctionReturnValueUsed

import * as NodeHelper from 'node_helper'
import * as Log from 'logger'
import { ModuleNotification } from '../constants/ModuleNotification'
import { DrivingTimeService } from './DrivingTimeService'
import { Config } from '../types/Config'
import { DrivingTimeRequest } from '../types/DrivingTimeRequest'

module.exports = NodeHelper.create({

  async socketNotificationReceived(notification: ModuleNotification, config: Config) {
    if (notification === ModuleNotification.DRIVING_TIME_REQUEST) {
      const request: DrivingTimeRequest = {
        origin: config.origin,
        destination: config.destination,
        language: config.language,
        trafficModel: config.trafficModel,
        departureDate: config.departureDate,
        departureTimes: config.departureTimes,
        apiKey: config.apiKey
      }
      const drivingTime = await DrivingTimeService.requestDrivingTime(request)

      const response = {
        lastUpdate: Date.now(),
        drivingTime
      }
      this.sendSocketNotification(ModuleNotification.DRIVING_TIME_RESPONSE, response)
    } else {
      Log.warn(`${notification} is invalid notification`)
    }
  }
})
