!function(){var t={6168:function(t,e,n){"use strict";n(1102);var s=n(8008),r=n.n(s);function a(t,e,n,s,r,a,c){try{var o=t[a](c),d=o.value}catch(t){return void n(t)}o.done?e(d):Promise.resolve(d).then(s,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(s,r){var c=t.apply(e,n);function o(t){a(c,s,r,o,d,"next",t)}function d(t){a(c,s,r,o,d,"throw",t)}o(void 0)}))}}function o(){return(o=c(regeneratorRuntime.mark((function t(){var e,n,s,a,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://disease.sh/v3/covid-19/historical/all?lastdays=all",t.next=3,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,s=document.querySelector(".chart").getContext("2d"),new(r())(s,{type:"bar",data:{labels:Object.keys(n.cases),datasets:[{label:"",data:Object.values(n.cases),backgroundColor:"yellow",borderColor:"yellow",borderWidth:1}]},options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{ticks:{maxTicksLimit:5,beginAtZero:!0,callback:function(t){return"".concat(t/1e6,"M")}}}],xAxes:[{ticks:{type:"category",maxTicksLimit:13}}]}}}),a=document.querySelector(".chart2").getContext("2d"),new(r())(a,{type:"bar",data:{labels:Object.keys(n.deaths),datasets:[{label:"",data:Object.values(n.deaths),backgroundColor:"#cd0a0a",borderColor:"#cd0a0a",borderWidth:1}]},options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{ticks:{maxTicksLimit:5,beginAtZero:!0,callback:function(t){return"".concat(t/1e6,"M")}}}],xAxes:[{ticks:{type:"category",maxTicksLimit:12}}]}}}),c=document.querySelector(".chart3").getContext("2d"),new(r())(c,{type:"bar",data:{labels:Object.keys(n.recovered),datasets:[{label:"",data:Object.values(n.recovered),backgroundColor:"green",borderColor:"green",borderWidth:1}]},options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{ticks:{maxTicksLimit:5,beginAtZero:!0,callback:function(t){return"".concat(t/1e6,"M")}}}],xAxes:[{ticks:{type:"category",maxTicksLimit:12}}]}}});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}();n(5069),n(6229),n(3523),n(4954)},3523:function(){var t=new Date,e=t.getDate(),n=t.getMonth(),s=t.getFullYear();console.log(e,n),document.querySelector(".actualDate").insertAdjacentHTML("beforeend","".concat(e,"/").concat(n+1,"/").concat(s))},1102:function(){function t(t,e,n,s,r,a,c){try{var o=t[a](c),d=o.value}catch(t){return void n(t)}o.done?e(d):Promise.resolve(d).then(s,r)}function e(e){return function(){var n=this,s=arguments;return new Promise((function(r,a){var c=e.apply(n,s);function o(e){t(c,r,a,o,d,"next",e)}function d(e){t(c,r,a,o,d,"throw",e)}o(void 0)}))}}var n=["Total Cases","Total Deaths","Total Recovered","Cases for yesterday","Deaths for yesterday","Recovered for yesterday","Total Cases per 100 000","Total Deaths per 100 000","Total Recovered per 100 000","Cases for yesterday per 100 000","Deaths for yesterday per 100 000","Recovered for yesterday per 100 000"],s=document.querySelector(".countryData_table_inner"),r=document.querySelector(".countryData_heading_inner"),a=0;function c(){for(;s.firstChild;)s.removeChild(s.firstChild);for(;r.firstChild;)r.removeChild(r.firstChild)}function o(t){return d.apply(this,arguments)}function d(){return(d=e(regeneratorRuntime.mark((function t(e){var o,d,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(),!0===e.target.classList.contains("fa-caret-left")&&(a-=1)<0&&(a=11),!0===e.target.classList.contains("fa-caret-right")&&(a+=1),a===n.length&&(a=0),t.t0=a,t.next=0===t.t0?7:1===t.t0?17:2===t.t0?27:3===t.t0?37:4===t.t0?47:5===t.t0?57:6===t.t0?67:7===t.t0?77:8===t.t0?87:9===t.t0?97:10===t.t0?107:11===t.t0?117:127;break;case 7:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases",t.next=10,fetch(o);case 10:return d=t.sent,t.next=13,d.json();case 13:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.cases.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 17:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=deaths",t.next=20,fetch(o);case 20:return d=t.sent,t.next=23,d.json();case 23:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.deaths.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 27:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=recovered",t.next=30,fetch(o);case 30:return d=t.sent,t.next=33,d.json();case 33:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.recovered.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 37:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases",t.next=40,fetch(o);case 40:return d=t.sent,t.next=43,d.json();case 43:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.todayCases.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 47:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayDeaths",t.next=50,fetch(o);case 50:return d=t.sent,t.next=53,d.json();case 53:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.todayDeaths.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 57:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayRecovered",t.next=60,fetch(o);case 60:return d=t.sent,t.next=63,d.json();case 63:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat(t.todayRecovered.toLocaleString(),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 67:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=casesPerOneMillion",t.next=70,fetch(o);case 70:return d=t.sent,t.next=73,d.json();case 73:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.cases/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 77:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=deathsPerOneMillion",t.next=80,fetch(o);case 80:return d=t.sent,t.next=83,d.json();case 83:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr>\n        <td class="countryRow"><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.deaths/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 87:return o="https://disease.sh/v3/covid-19/countries?yesterday=false&sort=recoveredPerOneMillion",t.next=90,fetch(o);case 90:return d=t.sent,t.next=93,d.json();case 93:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.recovered/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 97:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases",t.next=100,fetch(o);case 100:return d=t.sent,t.next=103,d.json();case 103:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.todayCases/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 107:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayDeaths",t.next=110,fetch(o);case 110:return d=t.sent,t.next=113,d.json();case 113:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.todayDeaths/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 117:return o="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayRecovered",t.next=120,fetch(o);case 120:return d=t.sent,t.next=123,d.json();case 123:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),i.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n      <tr class="countryRow">\n        <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n        <td class="confirmedCases">').concat((t.todayRecovered/t.population*1e5).toFixed(3),"</td>\n        <td>").concat(t.country,"</td>\n      </tr>"))})),t.abrupt("break",127);case 127:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=e(regeneratorRuntime.mark((function t(){var e,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases",t.next=3,fetch("https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),document.querySelectorAll(".data-arrow").forEach((function(t){t.addEventListener("click",o)})),c.forEach((function(t){s.insertAdjacentHTML("beforeend",'\n  <tr class="countryRow">\n    <td><img src=\''.concat(t.countryInfo.flag,'\'></td>\n    <td class="confirmedCases">').concat(t.cases.toLocaleString(),"</td>\n    <td>").concat(t.country,"</td>\n  </tr>"))}));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()},6229:function(){var t=window.L,e={center:[30,30],zoom:2,layers:[new t.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',maxZoom:7,minZoom:2})]},n=t.map("map",e);fetch("https://corona.lmao.ninja/v3/covid-19/countries").then((function(t){return 200===t.status?Promise.resolve(t):Promise.reject(new Error(t.statusText))})).then((function(t){return t.json()})).catch((function(t){return t.message})).then((function(e){var s=0;e.forEach((function(t){t.cases>s&&(s=t.cases)})),e.forEach((function(e){var s,r=e.countryInfo,a=r.lat,c=r.long,o=t.circle([a,c],{color:"#cd0a0a",fillColor:"#cd0a0a",fillOpacity:.7,radius:(s=e.cases,.1*s)}).addTo(n),d=(new Date).toUTCString(),i="<b>".concat(d,"</b><br><b>Country: ").concat(e.country,"</b><br><b>Cases: ").concat(e.cases,"</b><br><b>Deaths: ").concat(e.deaths,"</и><br><b>Today cases: ").concat(e.todayCases,"</b><br><b>Today Deaths: ").concat(e.todayDeaths,"</b>");o.on("mouseover",(function(){var t;t=i,o.bindPopup(t).openPopup()}))}))}))},4954:function(){function t(t){t.target.closest(".box").classList.toggle("changed"),document.body.classList.toggle("noscroll"),document.querySelector(".overflow").classList.toggle("blackout")}document.querySelectorAll(".size").forEach((function(e){return e.addEventListener("click",t)}))},5069:function(){function t(t,e,n,s,r,a,c){try{var o=t[a](c),d=o.value}catch(t){return void n(t)}o.done?e(d):Promise.resolve(d).then(s,r)}function e(e){return function(){var n=this,s=arguments;return new Promise((function(r,a){var c=e.apply(n,s);function o(e){t(c,r,a,o,d,"next",e)}function d(e){t(c,r,a,o,d,"throw",e)}o(void 0)}))}}var n=["Total","For Yesterday","Total Per 100 000","For Yesterday Per 100 000"],s=document.querySelector(".casesData_table_inner"),r=document.querySelector(".casesData_heading_inner"),a=0;function c(){for(;s.firstChild;)s.removeChild(s.firstChild);for(;r.firstChild;)r.removeChild(r.firstChild)}function o(t){return d.apply(this,arguments)}function d(){return(d=e(regeneratorRuntime.mark((function t(e){var o,d,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(),!0===e.target.classList.contains("fa-caret-left")&&(a-=1)<0&&(a=3),!0===e.target.classList.contains("fa-caret-right")&&(a+=1),a===n.length&&(a=0),t.t0=a,t.next=0===t.t0?7:1===t.t0?17:2===t.t0?27:3===t.t0?37:47;break;case 7:return o="https://disease.sh/v3/covid-19/all",t.next=10,fetch(o);case 10:return d=t.sent,t.next=13,d.json();case 13:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),s.insertAdjacentHTML("beforeend",'\n        <tr>\n          <td class="dataName">Cases</td>\n          <td class="confirmedCases">'.concat(i.cases.toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Deaths</td>\n          <td class="confirmedCases">').concat(i.deaths.toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Recovered</td>\n          <td class="confirmedCases">').concat(i.recovered.toLocaleString(),"</td>\n        </tr>\n        ")),t.abrupt("break",47);case 17:return o="https://disease.sh/v3/covid-19/all?yesterday=true",t.next=20,fetch(o);case 20:return d=t.sent,t.next=23,d.json();case 23:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),s.insertAdjacentHTML("beforeend",'\n        <tr>\n          <td class="dataName">Cases</td>\n          <td class="confirmedCases">'.concat(i.cases.toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Deaths</td>\n          <td class="confirmedCases">').concat(i.deaths.toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Recovered</td>\n          <td class="confirmedCases">').concat(i.recovered.toLocaleString(),"</td>\n        </tr>\n        ")),t.abrupt("break",47);case 27:return o="https://disease.sh/v3/covid-19/all",t.next=30,fetch(o);case 30:return d=t.sent,t.next=33,d.json();case 33:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),s.insertAdjacentHTML("beforeend",'\n        <tr>\n          <td class="dataName">Cases</td>\n          <td class="confirmedCases">'.concat((i.cases/i.population*1e5).toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Deaths</td>\n          <td class="confirmedCases">').concat((i.deaths/i.population*1e5).toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Recovered</td>\n          <td class="confirmedCases">').concat((i.recovered/i.population*1e5).toLocaleString(),"</td>\n        </tr>\n        ")),t.abrupt("break",47);case 37:return o="https://disease.sh/v3/covid-19/all?yesterday=true",t.next=40,fetch(o);case 40:return d=t.sent,t.next=43,d.json();case 43:return i=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),s.insertAdjacentHTML("beforeend",'\n        <tr>\n          <td class="dataName">Cases</td>\n          <td class="confirmedCases">'.concat((i.cases/i.population*1e5).toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Deaths</td>\n          <td class="confirmedCases">').concat((i.deaths/i.population*1e5).toLocaleString(),'</td>\n        </tr>\n        <tr>\n          <td class="dataName">Recovered</td>\n          <td class="confirmedCases">').concat((i.recovered/i.population*1e5).toLocaleString(),"</td>\n        </tr>\n        ")),t.abrupt("break",47);case 47:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=e(regeneratorRuntime.mark((function t(){var e,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://disease.sh/v3/covid-19/all",t.next=3,fetch("https://disease.sh/v3/covid-19/all");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,r.insertAdjacentHTML("beforeend","".concat(n[a])),document.querySelectorAll(".table-arrow").forEach((function(t){t.addEventListener("click",o)})),s.insertAdjacentHTML("beforeend",'\n  <tr>\n    <td class="dataName">Cases</td>\n    <td class="confirmedCases">'.concat(c.cases.toLocaleString(),'</td>\n  </tr>\n  <tr>\n    <td class="dataName">Deaths</td>\n    <td class="confirmedCases">').concat(c.deaths.toLocaleString(),'</td>\n  </tr>\n  <tr>\n    <td class="dataName">Recovered</td>\n    <td class="confirmedCases">').concat(c.recovered.toLocaleString(),"</td>\n  </tr>\n  "));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()},5126:function(t,e,n){var s={"./af":1009,"./af.js":1009,"./ar":8769,"./ar-dz":3739,"./ar-dz.js":3739,"./ar-kw":3745,"./ar-kw.js":3745,"./ar-ly":9576,"./ar-ly.js":9576,"./ar-ma":7408,"./ar-ma.js":7408,"./ar-sa":8781,"./ar-sa.js":8781,"./ar-tn":7856,"./ar-tn.js":7856,"./ar.js":8769,"./az":2030,"./az.js":2030,"./be":6476,"./be.js":6476,"./bg":5304,"./bg.js":5304,"./bm":8125,"./bm.js":8125,"./bn":34,"./bn-bd":9835,"./bn-bd.js":9835,"./bn.js":34,"./bo":4082,"./bo.js":4082,"./br":8317,"./br.js":8317,"./bs":3107,"./bs.js":3107,"./ca":8272,"./ca.js":8272,"./cs":8567,"./cs.js":8567,"./cv":1583,"./cv.js":1583,"./cy":76,"./cy.js":76,"./da":1760,"./da.js":1760,"./de":8973,"./de-at":3214,"./de-at.js":3214,"./de-ch":4728,"./de-ch.js":4728,"./de.js":8973,"./dv":4053,"./dv.js":4053,"./el":7499,"./el.js":7499,"./en-au":7876,"./en-au.js":7876,"./en-ca":7010,"./en-ca.js":7010,"./en-gb":4239,"./en-gb.js":4239,"./en-ie":9830,"./en-ie.js":9830,"./en-il":8438,"./en-il.js":8438,"./en-in":5322,"./en-in.js":5322,"./en-nz":3264,"./en-nz.js":3264,"./en-sg":5449,"./en-sg.js":5449,"./eo":9486,"./eo.js":9486,"./es":2430,"./es-do":6310,"./es-do.js":6310,"./es-mx":7038,"./es-mx.js":7038,"./es-us":3099,"./es-us.js":3099,"./es.js":2430,"./et":4975,"./et.js":4975,"./eu":7063,"./eu.js":7063,"./fa":8073,"./fa.js":8073,"./fi":957,"./fi.js":957,"./fil":8764,"./fil.js":8764,"./fo":1775,"./fo.js":1775,"./fr":4179,"./fr-ca":4306,"./fr-ca.js":4306,"./fr-ch":3791,"./fr-ch.js":3791,"./fr.js":4179,"./fy":7014,"./fy.js":7014,"./ga":6911,"./ga.js":6911,"./gd":2958,"./gd.js":2958,"./gl":7344,"./gl.js":7344,"./gom-deva":3161,"./gom-deva.js":3161,"./gom-latn":5798,"./gom-latn.js":5798,"./gu":8485,"./gu.js":8485,"./he":7917,"./he.js":7917,"./hi":2159,"./hi.js":2159,"./hr":5842,"./hr.js":5842,"./hu":5,"./hu.js":5,"./hy-am":1312,"./hy-am.js":1312,"./id":781,"./id.js":781,"./is":4101,"./is.js":4101,"./it":3467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":3467,"./ja":4164,"./ja.js":4164,"./jv":79,"./jv.js":79,"./ka":7036,"./ka.js":7036,"./kk":2022,"./kk.js":2022,"./km":3418,"./km.js":3418,"./kn":3655,"./kn.js":3655,"./ko":986,"./ko.js":986,"./ku":1902,"./ku.js":1902,"./ky":4604,"./ky.js":4604,"./lb":9026,"./lb.js":9026,"./lo":537,"./lo.js":537,"./lt":2288,"./lt.js":2288,"./lv":1495,"./lv.js":1495,"./me":690,"./me.js":690,"./mi":2571,"./mi.js":2571,"./mk":3959,"./mk.js":3959,"./ml":7225,"./ml.js":7225,"./mn":88,"./mn.js":88,"./mr":6622,"./mr.js":6622,"./ms":1070,"./ms-my":8899,"./ms-my.js":8899,"./ms.js":1070,"./mt":3931,"./mt.js":3931,"./my":5393,"./my.js":5393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":3114,"./nl-be":8479,"./nl-be.js":8479,"./nl.js":3114,"./nn":4513,"./nn.js":4513,"./oc-lnc":6549,"./oc-lnc.js":6549,"./pa-in":8264,"./pa-in.js":8264,"./pl":2848,"./pl.js":2848,"./pt":899,"./pt-br":5077,"./pt-br.js":5077,"./pt.js":899,"./ro":2512,"./ro.js":2512,"./ru":1753,"./ru.js":1753,"./sd":6840,"./sd.js":6840,"./se":8362,"./se.js":8362,"./si":464,"./si.js":464,"./sk":6324,"./sk.js":6324,"./sl":1963,"./sl.js":1963,"./sq":3039,"./sq.js":3039,"./sr":3454,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":3454,"./ss":5158,"./ss.js":5158,"./sv":8859,"./sv.js":8859,"./sw":7594,"./sw.js":7594,"./ta":6915,"./ta.js":6915,"./te":5677,"./te.js":5677,"./tet":2154,"./tet.js":2154,"./tg":4098,"./tg.js":4098,"./th":9071,"./th.js":9071,"./tk":9381,"./tk.js":9381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":2346,"./tlh.js":2346,"./tr":1483,"./tr.js":1483,"./tzl":266,"./tzl.js":266,"./tzm":3138,"./tzm-latn":2960,"./tzm-latn.js":2960,"./tzm.js":3138,"./ug-cn":9456,"./ug-cn.js":9456,"./uk":805,"./uk.js":805,"./ur":1127,"./ur.js":1127,"./uz":9628,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":9628,"./vi":6962,"./vi.js":6962,"./x-pseudo":9257,"./x-pseudo.js":9257,"./yo":2423,"./yo.js":2423,"./zh-cn":1002,"./zh-cn.js":1002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":6903,"./zh-mo.js":6903,"./zh-tw":4710,"./zh-tw.js":4710};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id=5126}},e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0},e=[[1202,766],[6168,766]],s=function(){};function r(){for(var s,r=0;r<e.length;r++){for(var a=e[r],c=!0,o=1;o<a.length;o++){var d=a[o];0!==t[d]&&(c=!1)}c&&(e.splice(r--,1),s=n(n.s=a[0]))}return 0===e.length&&(n.x(),n.x=function(){}),s}n.x=function(){n.x=function(){},c=c.slice();for(var t=0;t<c.length;t++)a(c[t]);return(s=r)()};var a=function(r){for(var a,c,d=r[0],i=r[1],u=r[2],l=r[3],f=0,h=[];f<d.length;f++)c=d[f],n.o(t,c)&&t[c]&&h.push(t[c][0]),t[c]=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);for(u&&u(n),o(r);h.length;)h.shift()();return l&&e.push.apply(e,l),s()},c=self.webpackChunk=self.webpackChunk||[],o=c.push.bind(c);c.push=a}(),n.x()}();