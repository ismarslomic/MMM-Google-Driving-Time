/*! *****************************************************************************
  mmm-google-driving-time
  Version 1.0.0

  Get info from Google when to start driving based on shortest duration, for the MagicMirror² platform.
  Please submit bugs at https://github.com/ismarslomic/MMM-Google-Driving-Time/issues

  (c) ismar@slomic.no
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

"use strict";var n=require("node_helper"),t=require("logger");function e(n){if(n&&n.__esModule)return n;var t=Object.create(null);return n&&Object.keys(n).forEach((function(e){if("default"!==e){var r=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:function(){return n[e]}})}})),t.default=n,Object.freeze(t)}var r,i=e(n),u=e(t);function o(n,t,e,r){return new(e||(e=Promise))((function(i,u){function o(n){try{c(r.next(n))}catch(n){u(n)}}function a(n){try{c(r.throw(n))}catch(n){u(n)}}function c(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(o,a)}c((r=r.apply(n,t||[])).next())}))}!function(n){n.DRIVING_TIME_REQUEST="DRIVING_TIME_REQUEST",n.DRIVING_TIME_RESPONSE="DRIVING_TIME_RESPONSE"}(r||(r={}));var a,c=function(){function n(){var n=this;this.languages={ar:{y:function(n){return 1===n?"سنة":"سنوات"},mo:function(n){return 1===n?"شهر":"أشهر"},w:function(n){return 1===n?"أسبوع":"أسابيع"},d:function(n){return 1===n?"يوم":"أيام"},h:function(n){return 1===n?"ساعة":"ساعات"},m:function(t){return["دقيقة","دقائق"][n.getArabicForm(t)]},s:function(n){return 1===n?"ثانية":"ثواني"},ms:function(n){return 1===n?"جزء من الثانية":"أجزاء من الثانية"},decimal:","},bg:{y:function(t){return["години","година","години"][n.getSlavicForm(t)]},mo:function(t){return["месеца","месец","месеца"][n.getSlavicForm(t)]},w:function(t){return["седмици","седмица","седмици"][n.getSlavicForm(t)]},d:function(t){return["дни","ден","дни"][n.getSlavicForm(t)]},h:function(t){return["часа","час","часа"][n.getSlavicForm(t)]},m:function(t){return["минути","минута","минути"][n.getSlavicForm(t)]},s:function(t){return["секунди","секунда","секунди"][n.getSlavicForm(t)]},ms:function(t){return["милисекунди","милисекунда","милисекунди"][n.getSlavicForm(t)]},decimal:","},ca:{y:function(n){return"any"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"os")},w:function(n){return"setman"+(1===n?"a":"es")},d:function(n){return"di"+(1===n?"a":"es")},h:function(n){return"hor"+(1===n?"a":"es")},m:function(n){return"minut"+(1===n?"":"s")},s:function(n){return"segon"+(1===n?"":"s")},ms:function(n){return"milisegon"+(1===n?"":"s")},decimal:","},cs:{y:function(t){return["rok","roku","roky","let"][n.getCzechOrSlovakForm(t)]},mo:function(t){return["měsíc","měsíce","měsíce","měsíců"][n.getCzechOrSlovakForm(t)]},w:function(t){return["týden","týdne","týdny","týdnů"][n.getCzechOrSlovakForm(t)]},d:function(t){return["den","dne","dny","dní"][n.getCzechOrSlovakForm(t)]},h:function(t){return["hodina","hodiny","hodiny","hodin"][n.getCzechOrSlovakForm(t)]},m:function(t){return["minuta","minuty","minuty","minut"][n.getCzechOrSlovakForm(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekund"][n.getCzechOrSlovakForm(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekund"][n.getCzechOrSlovakForm(t)]},decimal:","},da:{y:function(){return"år"},mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uge"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"e")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minut"+(1===n?"":"ter")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},de:{y:function(n){return"Jahr"+(1===n?"":"e")},mo:function(n){return"Monat"+(1===n?"":"e")},w:function(n){return"Woche"+(1===n?"":"n")},d:function(n){return"Tag"+(1===n?"":"e")},h:function(n){return"Stunde"+(1===n?"":"n")},m:function(n){return"Minute"+(1===n?"":"n")},s:function(n){return"Sekunde"+(1===n?"":"n")},ms:function(n){return"Millisekunde"+(1===n?"":"n")},decimal:","},el:{y:function(n){return 1===n?"χρόνος":"χρόνια"},mo:function(n){return 1===n?"μήνας":"μήνες"},w:function(n){return 1===n?"εβδομάδα":"εβδομάδες"},d:function(n){return 1===n?"μέρα":"μέρες"},h:function(n){return 1===n?"ώρα":"ώρες"},m:function(n){return 1===n?"λεπτό":"λεπτά"},s:function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},ms:function(n){return 1===n?"χιλιοστό του δευτερολέπτου":"χιλιοστά του δευτερολέπτου"},decimal:","},en:{y:function(n){return"year"+(1===n?"":"s")},mo:function(n){return"month"+(1===n?"":"s")},w:function(n){return"week"+(1===n?"":"s")},d:function(n){return"day"+(1===n?"":"s")},h:function(n){return"hour"+(1===n?"":"s")},m:function(n){return"minute"+(1===n?"":"s")},s:function(n){return"second"+(1===n?"":"s")},ms:function(n){return"millisecond"+(1===n?"":"s")},decimal:"."},es:{y:function(n){return"año"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"es")},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"día"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milisegundo"+(1===n?"":"s")},decimal:","},et:{y:function(n){return"aasta"+(1===n?"":"t")},mo:function(n){return"kuu"+(1===n?"":"d")},w:function(n){return"nädal"+(1===n?"":"at")},d:function(n){return"päev"+(1===n?"":"a")},h:function(n){return"tund"+(1===n?"":"i")},m:function(n){return"minut"+(1===n?"":"it")},s:function(n){return"sekund"+(1===n?"":"it")},ms:function(n){return"millisekund"+(1===n?"":"it")},decimal:","},fa:{y:function(){return"سال"},mo:function(){return"ماه"},w:function(){return"هفته"},d:function(){return"روز"},h:function(){return"ساعت"},m:function(){return"دقیقه"},s:function(){return"ثانیه"},ms:function(){return"میلی ثانیه"},decimal:"."},fi:{y:function(n){return 1===n?"vuosi":"vuotta"},mo:function(n){return 1===n?"kuukausi":"kuukautta"},w:function(n){return"viikko"+(1===n?"":"a")},d:function(n){return"päivä"+(1===n?"":"ä")},h:function(n){return"tunti"+(1===n?"":"a")},m:function(n){return"minuutti"+(1===n?"":"a")},s:function(n){return"sekunti"+(1===n?"":"a")},ms:function(n){return"millisekunti"+(1===n?"":"a")},decimal:","},fo:{y:function(){return"ár"},mo:function(n){return 1===n?"mánaður":"mánaðir"},w:function(n){return 1===n?"vika":"vikur"},d:function(n){return 1===n?"dagur":"dagar"},h:function(n){return 1===n?"tími":"tímar"},m:function(n){return 1===n?"minuttur":"minuttir"},s:function(){return"sekund"},ms:function(){return"millisekund"},decimal:","},fr:{y:function(n){return"an"+(n>=2?"s":"")},mo:function(){return"mois"},w:function(n){return"semaine"+(n>=2?"s":"")},d:function(n){return"jour"+(n>=2?"s":"")},h:function(n){return"heure"+(n>=2?"s":"")},m:function(n){return"minute"+(n>=2?"s":"")},s:function(n){return"seconde"+(n>=2?"s":"")},ms:function(n){return"milliseconde"+(n>=2?"s":"")},decimal:","},hr:{y:function(n){return n%10==2||n%10==3||n%10==4?"godine":"godina"},mo:function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},w:function(n){return n%10==1&&11!==n?"tjedan":"tjedna"},d:function(n){return 1===n?"dan":"dana"},h:function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},m:function(n){var t=n%10;return 2!==t&&3!==t&&4!==t||!(n<10||n>14)?"minuta":"minute"},s:function(n){return 10===n||11===n||12===n||13===n||14===n||16===n||17===n||18===n||19===n||n%10==5?"sekundi":n%10==1?"sekunda":n%10==2||n%10==3||n%10==4?"sekunde":"sekundi"},ms:function(n){return 1===n?"milisekunda":n%10==2||n%10==3||n%10==4?"milisekunde":"milisekundi"},decimal:","},hu:{y:function(){return"év"},mo:function(){return"hónap"},w:function(){return"hét"},d:function(){return"nap"},h:function(){return"óra"},m:function(){return"perc"},s:function(){return"másodperc"},ms:function(){return"ezredmásodperc"},decimal:","},id:{y:function(){return"tahun"},mo:function(){return"bulan"},w:function(){return"minggu"},d:function(){return"hari"},h:function(){return"jam"},m:function(){return"menit"},s:function(){return"detik"},ms:function(){return"milidetik"},decimal:"."},is:{y:function(){return"ár"},mo:function(n){return"mánuð"+(1===n?"ur":"ir")},w:function(n){return"vik"+(1===n?"a":"ur")},d:function(n){return"dag"+(1===n?"ur":"ar")},h:function(n){return"klukkutím"+(1===n?"i":"ar")},m:function(n){return"mínút"+(1===n?"a":"ur")},s:function(n){return"sekúnd"+(1===n?"a":"ur")},ms:function(n){return"millisekúnd"+(1===n?"a":"ur")},decimal:"."},it:{y:function(n){return"ann"+(1===n?"o":"i")},mo:function(n){return"mes"+(1===n?"e":"i")},w:function(n){return"settiman"+(1===n?"a":"e")},d:function(n){return"giorn"+(1===n?"o":"i")},h:function(n){return"or"+(1===n?"a":"e")},m:function(n){return"minut"+(1===n?"o":"i")},s:function(n){return"second"+(1===n?"o":"i")},ms:function(n){return"millisecond"+(1===n?"o":"i")},decimal:","},ja:{y:function(){return"年"},mo:function(){return"月"},w:function(){return"週"},d:function(){return"日"},h:function(){return"時間"},m:function(){return"分"},s:function(){return"秒"},ms:function(){return"ミリ秒"},decimal:"."},ko:{y:function(){return"년"},mo:function(){return"개월"},w:function(){return"주일"},d:function(){return"일"},h:function(){return"시간"},m:function(){return"분"},s:function(){return"초"},ms:function(){return"밀리 초"},decimal:"."},lo:{y:function(){return"ປີ"},mo:function(){return"ເດືອນ"},w:function(){return"ອາທິດ"},d:function(){return"ມື້"},h:function(){return"ຊົ່ວໂມງ"},m:function(){return"ນາທີ"},s:function(){return"ວິນາທີ"},ms:function(){return"ມິນລິວິນາທີ"},decimal:","},lt:{y:function(n){return n%10==0||n%100>=10&&n%100<=20?"metų":"metai"},mo:function(t){return["mėnuo","mėnesiai","mėnesių"][n.getLithuanianForm(t)]},w:function(t){return["savaitė","savaitės","savaičių"][n.getLithuanianForm(t)]},d:function(t){return["diena","dienos","dienų"][n.getLithuanianForm(t)]},h:function(t){return["valanda","valandos","valandų"][n.getLithuanianForm(t)]},m:function(t){return["minutė","minutės","minučių"][n.getLithuanianForm(t)]},s:function(t){return["sekundė","sekundės","sekundžių"][n.getLithuanianForm(t)]},ms:function(t){return["milisekundė","milisekundės","milisekundžių"][n.getLithuanianForm(t)]},decimal:","},lv:{y:function(t){return["gads","gadi"][n.getLatvianForm(t)]},mo:function(t){return["mēnesis","mēneši"][n.getLatvianForm(t)]},w:function(t){return["nedēļa","nedēļas"][n.getLatvianForm(t)]},d:function(t){return["diena","dienas"][n.getLatvianForm(t)]},h:function(t){return["stunda","stundas"][n.getLatvianForm(t)]},m:function(t){return["minūte","minūtes"][n.getLatvianForm(t)]},s:function(t){return["sekunde","sekundes"][n.getLatvianForm(t)]},ms:function(t){return["milisekunde","milisekundes"][n.getLatvianForm(t)]},decimal:","},ms:{y:function(){return"tahun"},mo:function(){return"bulan"},w:function(){return"minggu"},d:function(){return"hari"},h:function(){return"jam"},m:function(){return"minit"},s:function(){return"saat"},ms:function(){return"milisaat"},decimal:"."},nl:{y:function(){return"jaar"},mo:function(n){return 1===n?"maand":"maanden"},w:function(n){return 1===n?"week":"weken"},d:function(n){return 1===n?"dag":"dagen"},h:function(){return"uur"},m:function(n){return 1===n?"minuut":"minuten"},s:function(n){return 1===n?"seconde":"seconden"},ms:function(n){return 1===n?"milliseconde":"milliseconden"},decimal:","},no:{y:function(){return"år"},mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uke"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"er")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minutt"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},pl:{y:function(t){return["rok","roku","lata","lat"][n.getPolishForm(t)]},mo:function(t){return["miesiąc","miesiąca","miesiące","miesięcy"][n.getPolishForm(t)]},w:function(t){return["tydzień","tygodnia","tygodnie","tygodni"][n.getPolishForm(t)]},d:function(t){return["dzień","dnia","dni","dni"][n.getPolishForm(t)]},h:function(t){return["godzina","godziny","godziny","godzin"][n.getPolishForm(t)]},m:function(t){return["minuta","minuty","minuty","minut"][n.getPolishForm(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekund"][n.getPolishForm(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekund"][n.getPolishForm(t)]},decimal:","},pt:{y:function(n){return"ano"+(1===n?"":"s")},mo:function(n){return 1===n?"mês":"meses"},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"dia"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milissegundo"+(1===n?"":"s")},decimal:","},ro:{y:function(n){return 1===n?"an":"ani"},mo:function(n){return 1===n?"lună":"luni"},w:function(n){return 1===n?"săptămână":"săptămâni"},d:function(n){return 1===n?"zi":"zile"},h:function(n){return 1===n?"oră":"ore"},m:function(n){return 1===n?"minut":"minute"},s:function(n){return 1===n?"secundă":"secunde"},ms:function(n){return 1===n?"milisecundă":"milisecunde"},decimal:","},ru:{y:function(t){return["лет","год","года"][n.getSlavicForm(t)]},mo:function(t){return["месяцев","месяц","месяца"][n.getSlavicForm(t)]},w:function(t){return["недель","неделя","недели"][n.getSlavicForm(t)]},d:function(t){return["дней","день","дня"][n.getSlavicForm(t)]},h:function(t){return["часов","час","часа"][n.getSlavicForm(t)]},m:function(t){return["минут","минута","минуты"][n.getSlavicForm(t)]},s:function(t){return["секунд","секунда","секунды"][n.getSlavicForm(t)]},ms:function(t){return["миллисекунд","миллисекунда","миллисекунды"][n.getSlavicForm(t)]},decimal:","},uk:{y:function(t){return["років","рік","роки"][n.getSlavicForm(t)]},mo:function(t){return["місяців","місяць","місяці"][n.getSlavicForm(t)]},w:function(t){return["тижнів","тиждень","тижні"][n.getSlavicForm(t)]},d:function(t){return["днів","день","дні"][n.getSlavicForm(t)]},h:function(t){return["годин","година","години"][n.getSlavicForm(t)]},m:function(t){return["хвилин","хвилина","хвилини"][n.getSlavicForm(t)]},s:function(t){return["секунд","секунда","секунди"][n.getSlavicForm(t)]},ms:function(t){return["мілісекунд","мілісекунда","мілісекунди"][n.getSlavicForm(t)]},decimal:","},ur:{y:function(){return"سال"},mo:function(n){return 1===n?"مہینہ":"مہینے"},w:function(n){return 1===n?"ہفتہ":"ہفتے"},d:function(){return"دن"},h:function(n){return 1===n?"گھنٹہ":"گھنٹے"},m:function(){return"منٹ"},s:function(){return"سیکنڈ"},ms:function(){return"ملی سیکنڈ"},decimal:"."},sk:{y:function(t){return["rok","roky","roky","rokov"][n.getCzechOrSlovakForm(t)]},mo:function(t){return["mesiac","mesiace","mesiace","mesiacov"][n.getCzechOrSlovakForm(t)]},w:function(t){return["týždeň","týždne","týždne","týždňov"][n.getCzechOrSlovakForm(t)]},d:function(t){return["deň","dni","dni","dní"][n.getCzechOrSlovakForm(t)]},h:function(t){return["hodina","hodiny","hodiny","hodín"][n.getCzechOrSlovakForm(t)]},m:function(t){return["minúta","minúty","minúty","minút"][n.getCzechOrSlovakForm(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekúnd"][n.getCzechOrSlovakForm(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekúnd"][n.getCzechOrSlovakForm(t)]},decimal:","},sv:{y:function(){return"år"},mo:function(n){return"månad"+(1===n?"":"er")},w:function(n){return"veck"+(1===n?"a":"or")},d:function(n){return"dag"+(1===n?"":"ar")},h:function(n){return"timm"+(1===n?"e":"ar")},m:function(n){return"minut"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},tr:{y:function(){return"yıl"},mo:function(){return"ay"},w:function(){return"hafta"},d:function(){return"gün"},h:function(){return"saat"},m:function(){return"dakika"},s:function(){return"saniye"},ms:function(){return"milisaniye"},decimal:","},th:{y:function(){return"ปี"},mo:function(){return"เดือน"},w:function(){return"อาทิตย์"},d:function(){return"วัน"},h:function(){return"ชั่วโมง"},m:function(){return"นาที"},s:function(){return"วินาที"},ms:function(){return"มิลลิวินาที"},decimal:"."},vi:{y:function(){return"năm"},mo:function(){return"tháng"},w:function(){return"tuần"},d:function(){return"ngày"},h:function(){return"giờ"},m:function(){return"phút"},s:function(){return"giây"},ms:function(){return"mili giây"},decimal:","},zh_CN:{y:function(){return"年"},mo:function(){return"个月"},w:function(){return"周"},d:function(){return"天"},h:function(){return"小时"},m:function(){return"分钟"},s:function(){return"秒"},ms:function(){return"毫秒"},decimal:"."},zh_TW:{y:function(){return"年"},mo:function(){return"個月"},w:function(){return"周"},d:function(){return"天"},h:function(){return"小時"},m:function(){return"分鐘"},s:function(){return"秒"},ms:function(){return"毫秒"},decimal:"."}}}return n.prototype.addLanguage=function(n,t){this.languages[n]=t},n.prototype.getCzechForm=function(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3},n.prototype.getPolishForm=function(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3},n.prototype.getSlavicForm=function(n){return Math.floor(n)!==n?2:n>=5&&n<=20||n%10>=5&&n%10<=9||n%10==0?0:n%10==1?1:n>1?2:0},n.prototype.getLithuanianForm=function(n){return 1===n||n%10==1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2},n.prototype.getArabicForm=function(n){return n<=2?0:n>2&&n<11?1:0},n.prototype.getCzechOrSlovakForm=function(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3},n.prototype.getLatvianForm=function(n){return 1===n||n%10==1&&n%100!=11?0:1},n}(),s=function(){function n(n){this.languageUtil=n,this.defaultOptions={language:"en",delimiter:", ",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},largest:10,decimal:".",round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},this.options=void 0,this.options=this.defaultOptions}return n.prototype.humanize=function(n,t){var e=void 0!==t?this.extend(this.options,t):this.defaultOptions;return this.doHumanization(n,e)},n.prototype.setOptions=function(n){this.options=void 0!==n?this.extend(this.defaultOptions,n):this.defaultOptions},n.prototype.getSupportedLanguages=function(){var n=[];for(var t in this.languageUtil.languages)this.languageUtil.languages.hasOwnProperty(t)&&n.push(t);return n},n.prototype.addLanguage=function(n,t){this.languageUtil.addLanguage(n,t)},n.prototype.doHumanization=function(n,t){var e,r,i;n=Math.abs(n);var u=t.languages[t.language]||this.languageUtil.languages[t.language];if(!u)throw new Error("No language "+u+".");var o,a,c,s=[];for(e=0,r=t.units.length;e<r;e++)o=t.units[e],a=t.unitMeasures[o],c=e+1===r?n/a:Math.floor(n/a),s.push({unitCount:c,unitName:o}),n-=c*a;var m=0;for(e=0;e<s.length;e++)if(s[e].unitCount){m=e;break}if(t.round){var f=void 0,d=void 0;for(e=s.length-1;e>=0&&((i=s[e]).unitCount=Math.round(i.unitCount),0!==e);e--)d=s[e-1],f=t.unitMeasures[d.unitName]/t.unitMeasures[i.unitName],(i.unitCount%f==0||t.largest&&t.largest-1<e-m)&&(d.unitCount+=i.unitCount/f,i.unitCount=0)}var l=[];for(e=0,s.length;e<r&&((i=s[e]).unitCount&&l.push(this.render(i.unitCount,i.unitName,u,t)),l.length!==t.largest);e++);return l.length?t.conjunction&&1!==l.length?2===l.length?l.join(t.conjunction):l.length>2?l.slice(0,-1).join(t.delimiter)+(t.serialComma?",":"")+t.conjunction+l.slice(-1):void 0:l.join(t.delimiter):this.render(0,t.units[t.units.length-1],u,t)},n.prototype.render=function(n,t,e,r){var i;i=void 0===r.decimal?e.decimal:r.decimal;var u=n.toString().replace(".",i.toString()),o=e[t](n);return u+r.spacer+o},n.prototype.extend=function(n,t){for(var e in t)n.hasOwnProperty(e)&&(n[e]=t[e]);return n},n}();!function(n){n.TODAY="TODAY",n.TOMORROW="TOMORROW"}(a||(a={}));class m{constructor(n,t){if(null==n)throw new Error("Argument departureDay cannot be undefined or null");const e=class{static isDepartureTimesValid(n){if(!n||!n.length)return{valid:!1,reason:"Array of departureTimes is not valid. Maybe it is undefined, null or empty?"};const t=this.isHoursValid(n),e=this.isMinutesValid(n);return t.valid?e.valid?{valid:!0}:e:t}static isHoursValid(n){const t=Math.min(...n.map((n=>n.hours))),e=Math.max(...n.map((n=>n.hours)));return t<0||e>23?{valid:!1,reason:"One or more elements in array of departureTimes is not valid. Hours must be in range [0..23]"}:{valid:!0}}static isMinutesValid(n){const t=Math.min(...n.map((n=>n.minutes))),e=Math.max(...n.map((n=>n.minutes)));return t<0||e>59?{valid:!1,reason:"One or more elements in array of departureTimes is not valid. Minutes must be in range [0..59]"}:{valid:!0}}}.isDepartureTimesValid(t);if(!e.valid)throw new Error(e.reason);this._dateNow=new Date,this._departureDay=n,this._departureTimes=t,this._departureDate=new Date(this._dateNow),this._departureDay===a.TOMORROW&&(this._departureDate=new Date(this._dateNow),this._departureDate.setDate(this._dateNow.getDate()+1))}getDates(){const n=this._departureTimes.map((n=>{const t=new Date(this._departureDate);return t.setHours(n.hours),t.setMinutes(n.minutes),t})),t=this.filterDatesInFuture(n);return m.sortDatesAscending(t),t}filterDatesInFuture(n){return n.filter((n=>n>=this._dateNow))}static sortDatesAscending(n){n.sort(((n,t)=>n.getTime()-t.getTime()))}}const{Client:f,TrafficModel:d,TravelMode:l,Status:g}=require("@googlemaps/google-maps-services-js"),h=new s(new c);module.exports=i.create({socketNotificationReceived(n,t){return o(this,void 0,void 0,(function*(){if(n===r.DRIVING_TIME_REQUEST){const n={origin:t.origin,destination:t.destination,language:t.language,trafficModel:t.trafficModel,departureDate:t.departureDate,departureTimes:t.departureTimes,apiKey:t.apiKey},e=yield class{static requestDrivingTime(n){return o(this,void 0,void 0,(function*(){u.info("Using Google Distance Matrix Service to calculate driving time");const t=this.createDistanceMatrixRequest(n);return Promise.all(t.map((n=>this.callGoogleMatrixApi(n)))).then((n=>{if(0===n.length)throw Error("The list of responses from Google Distance Matrix API where empty");const t=n.map((n=>n.drivingDepartures[0])),e=n[0];return e.drivingDepartures=t,e})).catch((n=>{throw Error(n||n.message||"Error occurred in one or more of the service calls to Google Distance Matrix API")}))}))}static callGoogleMatrixApi(n){return o(this,void 0,void 0,(function*(){const t=new f({});return new Promise(((e,r)=>{t.distancematrix(n).then((t=>o(this,void 0,void 0,(function*(){t.data?t.data.status!==g.OK?r(t.data.error_message):t.data.rows[0].elements[0].status!==g.OK&&r(`Status for row data from Google Distance Matrix Service where ${t.data.rows[0].elements[0].status}`):r("Data returned from Google Distance Matrix Service where undefined.");const i=t.data.rows[0].elements[0].duration.value,u=[this.mapToDrivingDeparture(t,n.params.language,i,new Date(n.params.departure_time))];e(this.mapToDrivingTimeResponse(t,u))})))).catch((n=>{r(n.message)}))}))}))}static createDistanceMatrixRequest(n){return new m(n.departureDate,n.departureTimes).getDates().map((t=>({params:{key:n.apiKey,departure_time:t.getTime(),origins:[n.origin],destinations:[n.destination],language:n.language,mode:l.driving,traffic_model:this.mapToTrafficModel(n.trafficModel)},timeout:1e3})))}static mapToTrafficModel(n){return n===d.optimistic.valueOf()?d.optimistic:n===d.pessimistic.valueOf()?d.pessimistic:d.best_guess}static mapToDrivingDeparture(n,t,e,r){const i=n.data.rows[0].elements[0],u=i.duration_in_traffic.value-e;h.addLanguage("shortNo",{y:()=>"y",mo:()=>"mo",w:()=>"w",d:()=>"d",h:()=>"t",m:()=>"min",s:()=>"s",ms:()=>"ms",decimal:""});let o=h.humanize(1e3*u,{language:"shortNo",units:["h","m"],serialComma:!1,round:!0});return o=u<=-60?"-"+o:o,{departureTime:r,durationInTraffic:{inSeconds:i.duration_in_traffic.value,description:i.duration_in_traffic.text},durationDiff:{inSeconds:u,description:o}}}static mapToDrivingTimeResponse(n,t){const e=n.data.rows[0].elements[0];return{origin:n.data.origin_addresses[0],destination:n.data.destination_addresses[0],distance:{inMeter:e.distance.value,description:e.distance.text},duration:{inSeconds:e.duration.value,description:e.duration.text},drivingDepartures:t}}}.requestDrivingTime(n),i={lastUpdate:Date.now(),drivingTime:e};this.sendSocketNotification(r.DRIVING_TIME_RESPONSE,i)}else u.warn(`${n} is invalid notification`)}))}});
