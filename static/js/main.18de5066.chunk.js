(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[7],{23:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"f",(function(){return r})),n.d(a,"m",(function(){return i})),n.d(a,"s",(function(){return c})),n.d(a,"t",(function(){return l})),n.d(a,"r",(function(){return d})),n.d(a,"z",(function(){return u})),n.d(a,"d",(function(){return s})),n.d(a,"w",(function(){return p})),n.d(a,"c",(function(){return f})),n.d(a,"l",(function(){return T})),n.d(a,"x",(function(){return m})),n.d(a,"y",(function(){return h})),n.d(a,"e",(function(){return g})),n.d(a,"b",(function(){return v})),n.d(a,"n",(function(){return y})),n.d(a,"u",(function(){return j})),n.d(a,"v",(function(){return A})),n.d(a,"k",(function(){return S})),n.d(a,"j",(function(){return D})),n.d(a,"i",(function(){return k})),n.d(a,"h",(function(){return b})),n.d(a,"g",(function(){return w})),n.d(a,"q",(function(){return F})),n.d(a,"o",(function(){return O})),n.d(a,"p",(function(){return C}));var t=n(24),o="https://api.covid19india.org/v4/min",r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},i=["confirmed","active","recovered","deceased"],c=[].concat(i,["tested"]),l=[].concat(i,["other","tested","active ratio","recovery ratio","case fatality ratio","population"]),d={confirmed:{key:"confirmed",format:"int"},active:{key:"active",hideDelta:!0,format:"int"},recovered:{key:"recovered",format:"int"},deceased:{key:"deceased",format:"int"},other:{key:"migrated",format:"int"},tested:{key:"tested",format:"short"},"active ratio":{key:"active",options:{percentagePerConfirmed:!0},hideDelta:!0,format:"%"},"recovery ratio":{key:"recovered",options:{percentagePerConfirmed:!0},hideDelta:!0,format:"%"},"case fatality ratio":{key:"deceased",options:{percentagePerConfirmed:!0},hideDelta:!0,format:"%"},population:{key:"population",hideDelta:!0,format:"short"}},u=5,s=30,p=[].concat(i,["tested"]),f=300,T=20,m="UN",h="Unknown",g="T00:00:00+05:30",v={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},y={clamp:!0,precision:1},j={total:"Cumulative",delta:"Daily"},A={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},S={CHOROPLETH:0,BUBBLES:1},D={STATES:0,DISTRICTS:1},k={COUNTRY:0,STATE:1},E="/mini_maps",b={AP:{geoDataFile:"".concat(E,"/andhrapradesh.json"),mapType:k.STATE},AR:{geoDataFile:"".concat(E,"/arunachalpradesh.json"),mapType:k.STATE},AS:{geoDataFile:"".concat(E,"/assam.json"),mapType:k.STATE},BR:{geoDataFile:"".concat(E,"/bihar.json"),mapType:k.STATE},CT:{name:"Chhattisgarh",geoDataFile:"".concat(E,"/chhattisgarh.json"),mapType:k.STATE},GA:{geoDataFile:"".concat(E,"/goa.json"),mapType:k.STATE},GJ:{geoDataFile:"".concat(E,"/gujarat.json"),mapType:k.STATE},HR:{geoDataFile:"".concat(E,"/haryana.json"),mapType:k.STATE},HP:{geoDataFile:"".concat(E,"/himachalpradesh.json"),mapType:k.STATE},JK:{geoDataFile:"".concat(E,"/jammukashmir.json"),mapType:k.STATE},JH:{geoDataFile:"".concat(E,"/jharkhand.json"),mapType:k.STATE},KA:{geoDataFile:"".concat(E,"/karnataka.json"),mapType:k.STATE},KL:{geoDataFile:"".concat(E,"/kerala.json"),mapType:k.STATE},MP:{geoDataFile:"".concat(E,"/madhyapradesh.json"),mapType:k.STATE},MH:{geoDataFile:"".concat(E,"/maharashtra.json"),mapType:k.STATE},MN:{geoDataFile:"".concat(E,"/manipur.json"),mapType:k.STATE},ML:{geoDataFile:"".concat(E,"/meghalaya.json"),mapType:k.STATE},MZ:{geoDataFile:"".concat(E,"/mizoram.json"),mapType:k.STATE},NL:{geoDataFile:"".concat(E,"/nagaland.json"),mapType:k.STATE},OR:{geoDataFile:"".concat(E,"/odisha.json"),mapType:k.STATE},PB:{geoDataFile:"".concat(E,"/punjab.json"),mapType:k.STATE},RJ:{geoDataFile:"".concat(E,"/rajasthan.json"),mapType:k.STATE},SK:{geoDataFile:"".concat(E,"/sikkim.json"),mapType:k.STATE},TN:{geoDataFile:"".concat(E,"/tamilnadu.json"),mapType:k.STATE},TG:{geoDataFile:"".concat(E,"/telangana.json"),mapType:k.STATE},TR:{geoDataFile:"".concat(E,"/tripura.json"),mapType:k.STATE},UT:{geoDataFile:"".concat(E,"/uttarakhand.json"),mapType:k.STATE},UP:{geoDataFile:"".concat(E,"/uttarpradesh.json"),mapType:k.STATE},WB:{geoDataFile:"".concat(E,"/westbengal.json"),mapType:k.STATE},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(E,"/andamannicobarislands.json"),mapType:k.STATE},CH:{geoDataFile:"".concat(E,"/chandigarh.json"),mapType:k.STATE},DN:{geoDataFile:"".concat(E,"/dnh-and-dd.json"),mapType:k.STATE},DL:{geoDataFile:"".concat(E,"/delhi.json"),mapType:k.STATE},LA:{geoDataFile:"".concat(E,"/ladakh.json"),mapType:k.STATE},LD:{geoDataFile:"".concat(E,"/lakshadweep.json"),mapType:k.STATE},PY:{geoDataFile:"".concat(E,"/puducherry.json"),mapType:k.STATE},TT:{geoDataFile:"".concat(E,"/india.json"),mapType:k.COUNTRY}},w=50,F=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},m,"Unassigned"),N=[],P={};Object.keys(F).map((function(e,a){return P[F[e]]=e,N.push({code:e,name:F[e]}),null}));var O=P,C=N},31:function(e,a,n){"use strict";n.d(a,"j",(function(){return s})),n.d(a,"f",(function(){return p})),n.d(a,"g",(function(){return f})),n.d(a,"h",(function(){return T})),n.d(a,"d",(function(){return m})),n.d(a,"k",(function(){return h})),n.d(a,"c",(function(){return g})),n.d(a,"e",(function(){return v})),n.d(a,"a",(function(){return y})),n.d(a,"l",(function(){return j})),n.d(a,"i",(function(){return A})),n.d(a,"b",(function(){return S}));var t=n(23),o=n(59),r=n(60),i=n(71),c=n(72),l=n(35),d=n(21),u=null,s=function(){return!1},p=function(){return Object(l.a)(new Date,"Asia/Kolkata")},f=function(){return Object(o.a)(p(),{representation:"date"})},T=function(){return Object(o.a)(Object(r.a)(p(),1),{representation:"date"})},m=function(e){return n.e(37).then(n.bind(null,77)).then((function(e){u=e[t.f[d.a.language||window.localStorage.i18nextLng]]})),Object(i.a)(new Date(e),new Date,{locale:u})},h=function(e){return Object(l.a)(new Date(e+t.e),"Asia/Kolkata")},g=function(e,a){"string"===typeof e&&e.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(e+=t.e);var n=Object(l.a)(new Date(e),"Asia/Kolkata");return Object(c.a)(n,a,{locale:u})},v=function(e,a){return isNaN(e)?"-":"short"===a?function(e){var a=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return e<1e3?a.format(e):e>=1e3&&e<1e6?a.format(e/1e3)+"K":e>=1e6&&e<1e9?a.format(e/1e6)+"M":e>=1e9&&e<1e12?a.format(e/1e9)+"B":e>=1e12?a.format(e/1e12)+"T":void 0}(e):("int"===a&&(e=Math.floor(e)),new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(e)+("%"===a?"%":""))},y=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},j=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},A=function e(a,n,t){var o,r,i,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("population"===t)o="total"===n?(null===a||void 0===a||null===(r=a.meta)||void 0===r?void 0:r.population)||NaN:0;else if("tested"===t){var l;o=(null===a||void 0===a||null===(l=a[n])||void 0===l?void 0:l[t])||NaN}else if("active"===t){var d,u,s,p,f=(null===a||void 0===a||null===(d=a[n])||void 0===d?void 0:d.confirmed)||0,T=(null===a||void 0===a||null===(u=a[n])||void 0===u?void 0:u.deceased)||0,m=(null===a||void 0===a||null===(s=a[n])||void 0===s?void 0:s.recovered)||0,h=(null===a||void 0===a||null===(p=a[n])||void 0===p?void 0:p.migrated)||0;o=f-T-m-h}else{var g;o=(null===a||void 0===a||null===(g=a[n])||void 0===g?void 0:g[t])||0}if(!c.percentagePerConfirmed)return c.perMillion?1e6*o/(null===a||void 0===a||null===(i=a.meta)||void 0===i?void 0:i.population)||0:o;var v,y=(null===a||void 0===a||null===(v=a.total)||void 0===v?void 0:v.confirmed)||0;if("delta"===n){var j,A=y-(null===a||void 0===a||null===(j=a.delta)||void 0===j?void 0:j.confirmed)||0,S=e(a,"total",t),D=S-o,k=y?S/y:NaN,E=A?D/A:NaN;return 100*(k-E)}return"total"===n?y?100*o/y:NaN:void 0},S=function(e){return fetch(e).then((function(e){return e.json()}))}},61:function(e,a,n){e.exports=n(70)},70:function(e,a,n){"use strict";n.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r=n(31),i=n(21),c=n(53),l=n(54),d=n(76);i.a.use(l.a).use(c.a).use(d.e).init({debug:Object(r.j)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&!1,interpolation:{escapeValue:!1}});i.a;var u=n(0),s=n.n(u),p=n(44),f=n(37),T=Object(u.lazy)((function(){return Promise.all([n.e(11),n.e(15)]).then(n.bind(null,243))})),m=document.getElementById("root"),h=function(){return Object(p.render)(s.a.createElement(u.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(f.a,null,s.a.createElement(T,null))),m)};window.requestIdleCallback&&window.IntersectionObserver?h():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",h),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}),3e3)}))}}()}},[[61,8,9]]]);
//# sourceMappingURL=main.18de5066.chunk.js.map