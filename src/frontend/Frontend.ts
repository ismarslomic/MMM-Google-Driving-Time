import * as Log from 'logger'
import { Config } from '../types/Config'
import { ModuleNotification } from '../constants/ModuleNotification'
import { DepartureDay } from '../types/DepartureDay'

// Global or injected variable declarations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const moment: any

Module.register<Config>('MMM-Google-Driving-Time', {
  /**
   * Any properties defined in the defaults object, will be merged with the module config as
   * defined in the user's config.js file. This is the best place to set your modules'
   * configuration defaults. Any of the module configuration properties can be accessed using
   * this.config.propertyName.
   */
  defaults: {
    lastUpdateFormat: 'HH:mm',
    updateIntervalInSeconds: 5,
    origin: undefined,
    destination: undefined,
    language: undefined,
    trafficModel: 'best_guess',
    apiKey: undefined,
    departureDate: DepartureDay.TODAY,
    departureTimes: [{ hours: 13, minutes: 30 }]
  },

  /**
   * The getScripts method is called to request any additional scripts that need to be loaded.
   * This method should therefore return an array with strings. If you want to return a full path
   * to a file in the module folder, use the this.file('filename.js') method. In all cases the
   * loader will only load a file once. It even checks if the file is available in the default
   * vendor folder.
   */
  getScripts() {
    return ['moment.js']
  },

  /**
   * The getStyles method is called to request any additional stylesheets that need to be loaded.
   * This method should therefore return an array with strings. If you want to return a full path
   * to a file in the module folder, use the this.file('filename.css') method. In all cases the
   * loader will only load a file once. It even checks if the file is available in the default
   * vendor folder.
   */
  getStyles() {
    return ['MMM-Google-Driving-Time.css']
  },

  /**
   * The getTranslations method is called to request translation files that need to be loaded.
   * This method should therefore return a dictionary with the files to load, identified by the
   * country's short name.
   *
   * If the module does not have any module specific translations, the function can just be
   * omitted or return false.
   */
  getTranslations() {
    return {
      en: 'translations/en.json',
      de: 'translations/de.json'
    }
  },

  /**
   * Path to the main Nunjucks template file
   */
  getTemplate() {
    return 'templates/MMM-Google-Driving-Time.njk'
  },

  /**
   * Data to be sent to the template, return data used in the template
   */
  getTemplateData() {
    return {
      config: this.config,
      lastUpdate: moment(this.state?.lastUpdate).format(this.config.lastUpdateFormat),
      drivingTime: this.state?.drivingTime
    }
  },

  /**
   * This method is called when all modules are loaded and the system is ready to boot up.
   * Keep in mind that the dom object for the module is not yet created.
   * The start method is a perfect place to define any additional module properties:
   */
  start() {
    this.loadData()
    this.scheduleUpdate()
    this.updateDom()
  },

  /**
   * @private
   */
  scheduleUpdate() {
    this.config.updateIntervalInSeconds =
      this.config.updateIntervalInSeconds < 120 ? 120 : this.config.updateIntervalInSeconds
    setInterval(() => {
      this.loadData()
    }, this.config.updateIntervalInSeconds * 1000)
  },

  /**
   * @private
   */
  loadData() {
    this.sendSocketNotification(ModuleNotification.DRIVING_TIME_REQUEST, this.config)
  },

  /**
   * When using a node_helper, the node helper can send your module notifications.
   * When this module is called, it has 2 arguments:
   *
   * Note 1: When a node helper sends a notification, all modules of that module type receive the
   * same notifications.
   *
   * Note 2: The socket connection is established as soon as the module sends its first message
   * using sendSocketNotification.
   *
   * @param notificationIdentifier - String - The notification identifier.
   * @param payload - AnyType - The payload of a notification.
   *
   */
  socketNotificationReceived(notificationIdentifier: string, payload: unknown) {
    if (notificationIdentifier === ModuleNotification.DRIVING_TIME_RESPONSE) {
      this.state = payload
      Log.log(ModuleNotification.DRIVING_TIME_RESPONSE, this.state)
      this.updateDom()
    }
  }
})
