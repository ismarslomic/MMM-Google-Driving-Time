/*! *****************************************************************************
  mmm-google-driving-time
  Version 1.0.0

  Get info from Google when to start driving based on shortest duration, for the MagicMirror² platform.
  Please submit bugs at https://github.com/ismarslomic/MMM-Google-Driving-Time/issues

  (c) ismar@slomic.no
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

!function(t){"use strict";function e(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}})),e.default=t,Object.freeze(e)}var i,n=e(t);!function(t){t.JAST_STOCKS_REQUEST="JAST_STOCKS_REQUEST",t.JAST_STOCKS_RESPONSE="JAST_STOCKS_RESPONSE"}(i||(i={})),Module.register("MMM-Google-Driving-Time",{defaults:{lastUpdateFormat:"HH:mm",updateIntervalInSeconds:5,origin:void 0,destination:void 0,language:void 0,trafficMode:"best_guess",apiKey:void 0},getScripts:()=>["moment.js"],getStyles:()=>["MMM-Google-Driving-Time.css"],getTranslations:()=>({en:"translations/en.json",de:"translations/de.json"}),getTemplate:()=>"templates/MMM-Google-Driving-Time.njk",getTemplateData(){var t,e;return{config:this.config,lastUpdate:moment(null===(t=this.state)||void 0===t?void 0:t.lastUpdate).format(this.config.lastUpdateFormat),drivingTime:null===(e=this.state)||void 0===e?void 0:e.drivingTime}},start(){this.loadData(),this.scheduleUpdate(),this.updateDom()},scheduleUpdate(){this.config.updateIntervalInSeconds=this.config.updateIntervalInSeconds<120?120:this.config.updateIntervalInSeconds,setInterval((()=>{this.loadData()}),1e3*this.config.updateIntervalInSeconds)},loadData(){this.sendSocketNotification(i.JAST_STOCKS_REQUEST,this.config)},socketNotificationReceived(t,e){t===i.JAST_STOCKS_RESPONSE&&(this.state=e,n.log(i.JAST_STOCKS_RESPONSE,this.state),this.updateDom())}})}(Log);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTU1NLUdvb2dsZS1Ecml2aW5nLVRpbWUuanMiLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHMvTW9kdWxlTm90aWZpY2F0aW9uLnRzIiwic3JjL2Zyb250ZW5kL0Zyb250ZW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgTW9kdWxlTm90aWZpY2F0aW9uO1xuKGZ1bmN0aW9uIChNb2R1bGVOb3RpZmljYXRpb24pIHtcbiAgICBNb2R1bGVOb3RpZmljYXRpb25bXCJKQVNUX1NUT0NLU19SRVFVRVNUXCJdID0gXCJKQVNUX1NUT0NLU19SRVFVRVNUXCI7XG4gICAgTW9kdWxlTm90aWZpY2F0aW9uW1wiSkFTVF9TVE9DS1NfUkVTUE9OU0VcIl0gPSBcIkpBU1RfU1RPQ0tTX1JFU1BPTlNFXCI7XG59KShNb2R1bGVOb3RpZmljYXRpb24gfHwgKE1vZHVsZU5vdGlmaWNhdGlvbiA9IHt9KSk7XG4iLCJpbXBvcnQgKiBhcyBMb2cgZnJvbSAnbG9nZ2VyJztcbmltcG9ydCB7IE1vZHVsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cy9Nb2R1bGVOb3RpZmljYXRpb24nO1xuTW9kdWxlLnJlZ2lzdGVyKCdNTU0tR29vZ2xlLURyaXZpbmctVGltZScsIHtcbiAgICAvKipcbiAgICAgKiBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBkZWZhdWx0cyBvYmplY3QsIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIG1vZHVsZSBjb25maWcgYXNcbiAgICAgKiBkZWZpbmVkIGluIHRoZSB1c2VyJ3MgY29uZmlnLmpzIGZpbGUuIFRoaXMgaXMgdGhlIGJlc3QgcGxhY2UgdG8gc2V0IHlvdXIgbW9kdWxlcydcbiAgICAgKiBjb25maWd1cmF0aW9uIGRlZmF1bHRzLiBBbnkgb2YgdGhlIG1vZHVsZSBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nXG4gICAgICogdGhpcy5jb25maWcucHJvcGVydHlOYW1lLlxuICAgICAqL1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGxhc3RVcGRhdGVGb3JtYXQ6ICdISDptbScsXG4gICAgICAgIHVwZGF0ZUludGVydmFsSW5TZWNvbmRzOiA1LFxuICAgICAgICBvcmlnaW46IHVuZGVmaW5lZCxcbiAgICAgICAgZGVzdGluYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgbGFuZ3VhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgdHJhZmZpY01vZGU6ICdiZXN0X2d1ZXNzJyxcbiAgICAgICAgYXBpS2V5OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBnZXRTY3JpcHRzIG1ldGhvZCBpcyBjYWxsZWQgdG8gcmVxdWVzdCBhbnkgYWRkaXRpb25hbCBzY3JpcHRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBzdHJpbmdzLiBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBmdWxsIHBhdGhcbiAgICAgKiB0byBhIGZpbGUgaW4gdGhlIG1vZHVsZSBmb2xkZXIsIHVzZSB0aGUgdGhpcy5maWxlKCdmaWxlbmFtZS5qcycpIG1ldGhvZC4gSW4gYWxsIGNhc2VzIHRoZVxuICAgICAqIGxvYWRlciB3aWxsIG9ubHkgbG9hZCBhIGZpbGUgb25jZS4gSXQgZXZlbiBjaGVja3MgaWYgdGhlIGZpbGUgaXMgYXZhaWxhYmxlIGluIHRoZSBkZWZhdWx0XG4gICAgICogdmVuZG9yIGZvbGRlci5cbiAgICAgKi9cbiAgICBnZXRTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gWydtb21lbnQuanMnXTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBnZXRTdHlsZXMgbWV0aG9kIGlzIGNhbGxlZCB0byByZXF1ZXN0IGFueSBhZGRpdGlvbmFsIHN0eWxlc2hlZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBzdHJpbmdzLiBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBmdWxsIHBhdGhcbiAgICAgKiB0byBhIGZpbGUgaW4gdGhlIG1vZHVsZSBmb2xkZXIsIHVzZSB0aGUgdGhpcy5maWxlKCdmaWxlbmFtZS5jc3MnKSBtZXRob2QuIEluIGFsbCBjYXNlcyB0aGVcbiAgICAgKiBsb2FkZXIgd2lsbCBvbmx5IGxvYWQgYSBmaWxlIG9uY2UuIEl0IGV2ZW4gY2hlY2tzIGlmIHRoZSBmaWxlIGlzIGF2YWlsYWJsZSBpbiB0aGUgZGVmYXVsdFxuICAgICAqIHZlbmRvciBmb2xkZXIuXG4gICAgICovXG4gICAgZ2V0U3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gWydNTU0tR29vZ2xlLURyaXZpbmctVGltZS5jc3MnXTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBnZXRUcmFuc2xhdGlvbnMgbWV0aG9kIGlzIGNhbGxlZCB0byByZXF1ZXN0IHRyYW5zbGF0aW9uIGZpbGVzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYSBkaWN0aW9uYXJ5IHdpdGggdGhlIGZpbGVzIHRvIGxvYWQsIGlkZW50aWZpZWQgYnkgdGhlXG4gICAgICogY291bnRyeSdzIHNob3J0IG5hbWUuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbW9kdWxlIGRvZXMgbm90IGhhdmUgYW55IG1vZHVsZSBzcGVjaWZpYyB0cmFuc2xhdGlvbnMsIHRoZSBmdW5jdGlvbiBjYW4ganVzdCBiZVxuICAgICAqIG9taXR0ZWQgb3IgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIGdldFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuOiAndHJhbnNsYXRpb25zL2VuLmpzb24nLFxuICAgICAgICAgICAgZGU6ICd0cmFuc2xhdGlvbnMvZGUuanNvbidcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG1haW4gTnVuanVja3MgdGVtcGxhdGUgZmlsZVxuICAgICAqL1xuICAgIGdldFRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gJ3RlbXBsYXRlcy9NTU0tR29vZ2xlLURyaXZpbmctVGltZS5uamsnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGF0YSB0byBiZSBzZW50IHRvIHRoZSB0ZW1wbGF0ZSwgcmV0dXJuIGRhdGEgdXNlZCBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKi9cbiAgICBnZXRUZW1wbGF0ZURhdGEoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZTogbW9tZW50KChfYSA9IHRoaXMuc3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sYXN0VXBkYXRlKS5mb3JtYXQodGhpcy5jb25maWcubGFzdFVwZGF0ZUZvcm1hdCksXG4gICAgICAgICAgICBkcml2aW5nVGltZTogKF9iID0gdGhpcy5zdGF0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRyaXZpbmdUaW1lXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBhbGwgbW9kdWxlcyBhcmUgbG9hZGVkIGFuZCB0aGUgc3lzdGVtIGlzIHJlYWR5IHRvIGJvb3QgdXAuXG4gICAgICogS2VlcCBpbiBtaW5kIHRoYXQgdGhlIGRvbSBvYmplY3QgZm9yIHRoZSBtb2R1bGUgaXMgbm90IHlldCBjcmVhdGVkLlxuICAgICAqIFRoZSBzdGFydCBtZXRob2QgaXMgYSBwZXJmZWN0IHBsYWNlIHRvIGRlZmluZSBhbnkgYWRkaXRpb25hbCBtb2R1bGUgcHJvcGVydGllczpcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRG9tKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVJbnRlcnZhbEluU2Vjb25kcyA9XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVJbnRlcnZhbEluU2Vjb25kcyA8IDEyMCA/IDEyMCA6IHRoaXMuY29uZmlnLnVwZGF0ZUludGVydmFsSW5TZWNvbmRzO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH0sIHRoaXMuY29uZmlnLnVwZGF0ZUludGVydmFsSW5TZWNvbmRzICogMTAwMCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLnNlbmRTb2NrZXROb3RpZmljYXRpb24oTW9kdWxlTm90aWZpY2F0aW9uLkpBU1RfU1RPQ0tTX1JFUVVFU1QsIHRoaXMuY29uZmlnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgYSBub2RlX2hlbHBlciwgdGhlIG5vZGUgaGVscGVyIGNhbiBzZW5kIHlvdXIgbW9kdWxlIG5vdGlmaWNhdGlvbnMuXG4gICAgICogV2hlbiB0aGlzIG1vZHVsZSBpcyBjYWxsZWQsIGl0IGhhcyAyIGFyZ3VtZW50czpcbiAgICAgKlxuICAgICAqIE5vdGUgMTogV2hlbiBhIG5vZGUgaGVscGVyIHNlbmRzIGEgbm90aWZpY2F0aW9uLCBhbGwgbW9kdWxlcyBvZiB0aGF0IG1vZHVsZSB0eXBlIHJlY2VpdmUgdGhlXG4gICAgICogc2FtZSBub3RpZmljYXRpb25zLlxuICAgICAqXG4gICAgICogTm90ZSAyOiBUaGUgc29ja2V0IGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYXMgc29vbiBhcyB0aGUgbW9kdWxlIHNlbmRzIGl0cyBmaXJzdCBtZXNzYWdlXG4gICAgICogdXNpbmcgc2VuZFNvY2tldE5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25JZGVudGlmaWVyIC0gU3RyaW5nIC0gVGhlIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVyLlxuICAgICAqIEBwYXJhbSBwYXlsb2FkIC0gQW55VHlwZSAtIFRoZSBwYXlsb2FkIG9mIGEgbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgc29ja2V0Tm90aWZpY2F0aW9uUmVjZWl2ZWQobm90aWZpY2F0aW9uSWRlbnRpZmllciwgcGF5bG9hZCkge1xuICAgICAgICBpZiAobm90aWZpY2F0aW9uSWRlbnRpZmllciA9PT0gTW9kdWxlTm90aWZpY2F0aW9uLkpBU1RfU1RPQ0tTX1JFU1BPTlNFKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gcGF5bG9hZDtcbiAgICAgICAgICAgIExvZy5sb2coTW9kdWxlTm90aWZpY2F0aW9uLkpBU1RfU1RPQ0tTX1JFU1BPTlNFLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRG9tKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6WyJNb2R1bGVOb3RpZmljYXRpb24iLCJNb2R1bGUiLCJyZWdpc3RlciIsImRlZmF1bHRzIiwibGFzdFVwZGF0ZUZvcm1hdCIsInVwZGF0ZUludGVydmFsSW5TZWNvbmRzIiwib3JpZ2luIiwidW5kZWZpbmVkIiwiZGVzdGluYXRpb24iLCJsYW5ndWFnZSIsInRyYWZmaWNNb2RlIiwiYXBpS2V5IiwiZ2V0U2NyaXB0cyIsImdldFN0eWxlcyIsImdldFRyYW5zbGF0aW9ucyIsImVuIiwiZGUiLCJnZXRUZW1wbGF0ZSIsImdldFRlbXBsYXRlRGF0YSIsIl9hIiwiX2IiLCJjb25maWciLCJ0aGlzIiwibGFzdFVwZGF0ZSIsIm1vbWVudCIsInN0YXRlIiwiZm9ybWF0IiwiZHJpdmluZ1RpbWUiLCJzdGFydCIsImxvYWREYXRhIiwic2NoZWR1bGVVcGRhdGUiLCJ1cGRhdGVEb20iLCJzZXRJbnRlcnZhbCIsInNlbmRTb2NrZXROb3RpZmljYXRpb24iLCJKQVNUX1NUT0NLU19SRVFVRVNUIiwic29ja2V0Tm90aWZpY2F0aW9uUmVjZWl2ZWQiLCJub3RpZmljYXRpb25JZGVudGlmaWVyIiwicGF5bG9hZCIsIkpBU1RfU1RPQ0tTX1JFU1BPTlNFIiwiTG9nIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzZUQUFXQSxVQUNYLENBQVdBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQ1BBLEVBQXdDLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUM1Q0EsRUFBeUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUZqRCxDQUdHQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUF1QkEsQ0FBcUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENDRi9DQyxPQUFPQyxDQUFTLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQTJCLENBT3ZDQyxDQUFVLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUNOQyxpQkFBa0IsQ0FDbEJDLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQXlCLEVBQ3pCQyxDQUFRQyxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUNSQyxpQkFBYUQsQ0FDYkUsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBVUYsRUFDVkcsQ0FBYSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDYkMsWUFBUUosQ0FTWkssQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBVSxDQUNDLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FTWkMsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBUyxJQUNFLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FVWkMsZ0JBQWUsQ0FDSixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQ0hDLEdBQUksQ0FDSkMsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBSSx5QkFNWkMsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDQSx3Q0FLWEMsQ0FDSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSUMsRUFBSUMsQ0FDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFPLENBQ0hDLENBQVFDLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUtELENBQ2JFLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQVlDLENBQTZCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBckJMLEVBQUtHLENBQUtHLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQTBCLElBQVBOLENBQWdCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBU0EsRUFBR0ksQ0FBWUcsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBT0osS0FBS0QsQ0FBT2pCLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQzVHdUIsWUFBbUMsQ0FBckJQLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUtFLEtBQUtHLENBQTBCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVBMLE9BQWdCLENBQVNBLENBQUFBLENBQUFBLENBQUdPLENBUS9FQyxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUNJTixDQUFLTyxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUNMUCxLQUFLUSxDQUNMUixDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFLUyxhQUtURCxDQUNJUixDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFLRCxPQUFPaEIsQ0FDUmlCLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUtELE9BQU9oQixDQUEwQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBTSxJQUFNaUIsQ0FBS0QsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBT2hCLHdCQUNsRTJCLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUNSVixLQUFLTyxDQUNnQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUF0Q1AsQ0FBS0QsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBT2hCLENBS25Cd0IsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDSVAsS0FBS1csQ0FBdUJqQyxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFtQmtDLG9CQUFxQlosQ0FBS0QsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FnQjdFYywyQkFBMkJDLENBQXdCQyxDQUFBQSxDQUFBQSxDQUFBQSxDQUMzQ0QsSUFBMkJwQyxDQUFtQnNDLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQzlDaEIsS0FBS0csQ0FBUVksQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDYkUsRUFBSUMsQ0FBSXhDLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQW1Cc0MscUJBQXNCaEIsQ0FBS0csQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDdERILENBQUtTLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBIn0=
