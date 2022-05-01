// noinspection JSVoidFunctionReturnValueUsed

import * as NodeHelper from 'node_helper'
import * as Log from 'logger'
import { ModuleNotification } from '../constants/ModuleNotification'
import DrivingTimeService from './DrivingTimeService'

module.exports = NodeHelper.create({

  async socketNotificationReceived(notification, payload) {
    if (notification === ModuleNotification.JAST_STOCKS_REQUEST) {
      const drivingTime = await DrivingTimeService.requestDrivingTime(payload)

      const response = {
        lastUpdate: Date.now(),
        drivingTime
      }
      this.sendSocketNotification(ModuleNotification.JAST_STOCKS_RESPONSE, response)
    } else {
      Log.warn(`${notification} is invalid notification`)
    }
  }
})
