/*! *****************************************************************************
  mmm-google-driving-time
  Version 1.0.0

  Get info from Google when to start driving based on shortest duration, for the MagicMirror² platform.
  Please submit bugs at https://github.com/ismarslomic/MMM-Google-Driving-Time/issues

  (c) ismar@slomic.no
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

!function(t){"use strict";function e(t){var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}})),e.default=t,Object.freeze(e)}var i,n,a=e(t);!function(t){t.DRIVING_TIME_REQUEST="DRIVING_TIME_REQUEST",t.DRIVING_TIME_SUCCESS_RESPONSE="DRIVING_TIME_SUCCESS_RESPONSE",t.DRIVING_TIME_FAILED_RESPONSE="DRIVING_TIME_FAILED_RESPONSE"}(i||(i={})),function(t){t.TODAY="TODAY",t.TOMORROW="TOMORROW"}(n||(n={})),Module.register("MMM-Google-Driving-Time",{requiresVersion:"2.19.0",defaults:{lastUpdateFormat:"HH:mm",updateIntervalInSeconds:5,origin:void 0,destination:void 0,language:void 0,trafficModel:"best_guess",apiKey:void 0,departureDate:n.TODAY,departureTimes:[{hours:13,minutes:30}]},getScripts:()=>["moment.js"],getStyles:()=>["MMM-Google-Driving-Time.css"],getTranslations:()=>({en:"translations/en.json",de:"translations/de.json"}),getTemplate:()=>"templates/MMM-Google-Driving-Time.njk",getTemplateData(){var t,e;return{config:this.config,lastUpdate:moment(null===(t=this.state)||void 0===t?void 0:t.lastUpdate).format(this.config.lastUpdateFormat),drivingTime:null===(e=this.state)||void 0===e?void 0:e.drivingTime}},loading:!0,start(){this.loadData(),this.scheduleUpdate(),this.updateDom()},scheduleUpdate(){this.config.updateIntervalInSeconds=this.config.updateIntervalInSeconds<120?120:this.config.updateIntervalInSeconds,setInterval((()=>{this.loadData()}),1e3*this.config.updateIntervalInSeconds)},loadData(){this.sendSocketNotification(i.DRIVING_TIME_REQUEST,this.config)},socketNotificationReceived(t,e){t===i.DRIVING_TIME_SUCCESS_RESPONSE&&(this.state=e,a.log(i.DRIVING_TIME_SUCCESS_RESPONSE,this.state),this.updateDom())}})}(Log);
