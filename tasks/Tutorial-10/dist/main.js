(()=>{var e={268:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Kilometers:()=>n,Miles:()=>o});class n{static convertToMiles(e){return.6*e}}class o{static convertToKilometers(e){return 1.6*e}}},164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Celsius:()=>n,Kelvin:()=>o,Fahrenheit:()=>a});class n{static convertToKelvin(e){return parseFloat(e)+273.15}static convertToFahrenheit(e){return 9*e/5+32}}class o{static convertToFahrenheit(e){return 1.8*(e-273.15)+32}static convertToCelsius(e){return e-273.15}}class a{static convertToCelsius(e){return(e-32)/1.8}static convertToKelvin(e){return 5*(parseFloat(e)-32)/9+273.15}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{Celsius:e,Kelvin:t,Fahrenheit:n}=r(164),{Kilometers:o,Miles:a}=r(268),l=document.getElementById("celsius"),s=document.getElementById("fahrenheit"),i=document.getElementById("kelvin"),v=document.getElementById("miles"),u=document.getElementById("kilometers");l.addEventListener("change",(t=>{s.value=e.convertToFahrenheit(l.value),i.value=e.convertToKelvin(l.value),t.preventDefault()})),s.addEventListener("change",(e=>{l.value=n.convertToFahrenheit(s.value),i.value=n.convertToKelvin(s.value),e.preventDefault()})),i.addEventListener("change",(e=>{l.value=t.convertToCelsius(i.value),s.value=t.convertToFahrenheit(i.value),e.preventDefault()})),v.addEventListener("change",(e=>{u.value=a.convertToKilometers(v.value),e.preventDefault()})),u.addEventListener("change",(e=>{v.value=o.convertToMiles(u.value),e.preventDefault()}))})()})();