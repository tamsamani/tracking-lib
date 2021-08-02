var TF;(()=>{"use strict";var e,r={69:(e,r,t)=>{t.r(r);const o=JSON.parse('{"u2":"@tousfactor/tracking-lib","i8":"0.1.1","WL":"A library for tracking user interactions with your application"}'),n={name:o.u2,version:o.i8,description:o.WL};if(console.log("Tousfacteurs: ",n.name,"v"+n.version),"undefined"!=typeof window){console.log("Tousfacteurs is running in a browser with version",n.version);const{apiKey:e}=function(){const e=document.currentScript.src.split("?")[1];return{apiKey:new URLSearchParams(e).get("apiKey")}}(),r={versions:[n.version],apiKey:e};console.log("Tousfacteurs default settings: ",r),t.e(450).then(t.bind(t,450)).then((e=>{e.default(r)}))}else console.log("The current system is not supported.")}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>{if(450===e)return"core/450.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},o.l=(r,t,n,i)=>{if(e[r])e[r].push(t);else{var a,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")=="TF:"+n){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack","TF:"+n),a.src=r),e[r]=[t];var p=(t,o)=>{a.onerror=a.onload=null,clearTimeout(d);var n=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=i);var a=o.p+o.u(r),s=new Error;o.l(a,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,i,[a,s,u]=t,c=0;for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(u)u(o);for(r&&r(t);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0},t=self.webpackChunkTF=self.webpackChunkTF||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o(69);TF=n})();