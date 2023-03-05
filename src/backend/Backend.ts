// noinspection JSVoidFunctionReturnValueUsed

import * as NodeHelper from 'node_helper'
import * as Log from 'logger'
import { ModuleNotification } from '../constants/ModuleNotification'
import { DrivingTimeService } from './DrivingTimeService'
import { Config } from '../types/Config'
import { DrivingTimeRequest } from '../types/DrivingTimeRequest'

module.exports = NodeHelper.create({
  /**
   * A string that defines the minimum version of the MagicMirror framework. If it is set, the
   * system compares the required version with the users version. If the version of the user is
   * out of date, it won't run the module.
   */
  requiresVersion: '2.19.0',

  async socketNotificationReceived(notification: ModuleNotification, config: Config) {
    if (notification !== ModuleNotification.DRIVING_TIME_REQUEST) {
      Log.warn(`${notification} is invalid notification`)
    }

    try {
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

      const successResponse = {
        lastUpdate: Date.now(),
        drivingTime
      }

      this.sendSocketNotification(ModuleNotification.DRIVING_TIME_SUCCESS_RESPONSE, successResponse)
    } catch (error) {
      const failedResponse = {
        lastUpdate: Date.now(),
        error: 'Error retrieving driving time, check console.',
        details: (error && error.message) || error
      }

      Log.error((error && error.message) || error)
      this.sendSocketNotification(ModuleNotification.DRIVING_TIME_FAILED_RESPONSE, failedResponse)
    }
  }
})
