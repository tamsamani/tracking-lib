(self.webpackChunkTF=self.webpackChunkTF||[]).push([[371],{625:(e,r)=>{var t;r=e.exports=p,t="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var n=Number.MAX_SAFE_INTEGER||9007199254740991,o=r.re=[],i=r.src=[],s=r.tokens={},a=0;function c(e){s[e]=a++}c("NUMERICIDENTIFIER"),i[s.NUMERICIDENTIFIER]="0|[1-9]\\d*",c("NUMERICIDENTIFIERLOOSE"),i[s.NUMERICIDENTIFIERLOOSE]="[0-9]+",c("NONNUMERICIDENTIFIER"),i[s.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",c("MAINVERSION"),i[s.MAINVERSION]="("+i[s.NUMERICIDENTIFIER]+")\\.("+i[s.NUMERICIDENTIFIER]+")\\.("+i[s.NUMERICIDENTIFIER]+")",c("MAINVERSIONLOOSE"),i[s.MAINVERSIONLOOSE]="("+i[s.NUMERICIDENTIFIERLOOSE]+")\\.("+i[s.NUMERICIDENTIFIERLOOSE]+")\\.("+i[s.NUMERICIDENTIFIERLOOSE]+")",c("PRERELEASEIDENTIFIER"),i[s.PRERELEASEIDENTIFIER]="(?:"+i[s.NUMERICIDENTIFIER]+"|"+i[s.NONNUMERICIDENTIFIER]+")",c("PRERELEASEIDENTIFIERLOOSE"),i[s.PRERELEASEIDENTIFIERLOOSE]="(?:"+i[s.NUMERICIDENTIFIERLOOSE]+"|"+i[s.NONNUMERICIDENTIFIER]+")",c("PRERELEASE"),i[s.PRERELEASE]="(?:-("+i[s.PRERELEASEIDENTIFIER]+"(?:\\."+i[s.PRERELEASEIDENTIFIER]+")*))",c("PRERELEASELOOSE"),i[s.PRERELEASELOOSE]="(?:-?("+i[s.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+i[s.PRERELEASEIDENTIFIERLOOSE]+")*))",c("BUILDIDENTIFIER"),i[s.BUILDIDENTIFIER]="[0-9A-Za-z-]+",c("BUILD"),i[s.BUILD]="(?:\\+("+i[s.BUILDIDENTIFIER]+"(?:\\."+i[s.BUILDIDENTIFIER]+")*))",c("FULL"),c("FULLPLAIN"),i[s.FULLPLAIN]="v?"+i[s.MAINVERSION]+i[s.PRERELEASE]+"?"+i[s.BUILD]+"?",i[s.FULL]="^"+i[s.FULLPLAIN]+"$",c("LOOSEPLAIN"),i[s.LOOSEPLAIN]="[v=\\s]*"+i[s.MAINVERSIONLOOSE]+i[s.PRERELEASELOOSE]+"?"+i[s.BUILD]+"?",c("LOOSE"),i[s.LOOSE]="^"+i[s.LOOSEPLAIN]+"$",c("GTLT"),i[s.GTLT]="((?:<|>)?=?)",c("XRANGEIDENTIFIERLOOSE"),i[s.XRANGEIDENTIFIERLOOSE]=i[s.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",c("XRANGEIDENTIFIER"),i[s.XRANGEIDENTIFIER]=i[s.NUMERICIDENTIFIER]+"|x|X|\\*",c("XRANGEPLAIN"),i[s.XRANGEPLAIN]="[v=\\s]*("+i[s.XRANGEIDENTIFIER]+")(?:\\.("+i[s.XRANGEIDENTIFIER]+")(?:\\.("+i[s.XRANGEIDENTIFIER]+")(?:"+i[s.PRERELEASE]+")?"+i[s.BUILD]+"?)?)?",c("XRANGEPLAINLOOSE"),i[s.XRANGEPLAINLOOSE]="[v=\\s]*("+i[s.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+i[s.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+i[s.XRANGEIDENTIFIERLOOSE]+")(?:"+i[s.PRERELEASELOOSE]+")?"+i[s.BUILD]+"?)?)?",c("XRANGE"),i[s.XRANGE]="^"+i[s.GTLT]+"\\s*"+i[s.XRANGEPLAIN]+"$",c("XRANGELOOSE"),i[s.XRANGELOOSE]="^"+i[s.GTLT]+"\\s*"+i[s.XRANGEPLAINLOOSE]+"$",c("COERCE"),i[s.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",c("COERCERTL"),o[s.COERCERTL]=new RegExp(i[s.COERCE],"g"),c("LONETILDE"),i[s.LONETILDE]="(?:~>?)",c("TILDETRIM"),i[s.TILDETRIM]="(\\s*)"+i[s.LONETILDE]+"\\s+",o[s.TILDETRIM]=new RegExp(i[s.TILDETRIM],"g");c("TILDE"),i[s.TILDE]="^"+i[s.LONETILDE]+i[s.XRANGEPLAIN]+"$",c("TILDELOOSE"),i[s.TILDELOOSE]="^"+i[s.LONETILDE]+i[s.XRANGEPLAINLOOSE]+"$",c("LONECARET"),i[s.LONECARET]="(?:\\^)",c("CARETTRIM"),i[s.CARETTRIM]="(\\s*)"+i[s.LONECARET]+"\\s+",o[s.CARETTRIM]=new RegExp(i[s.CARETTRIM],"g");c("CARET"),i[s.CARET]="^"+i[s.LONECARET]+i[s.XRANGEPLAIN]+"$",c("CARETLOOSE"),i[s.CARETLOOSE]="^"+i[s.LONECARET]+i[s.XRANGEPLAINLOOSE]+"$",c("COMPARATORLOOSE"),i[s.COMPARATORLOOSE]="^"+i[s.GTLT]+"\\s*("+i[s.LOOSEPLAIN]+")$|^$",c("COMPARATOR"),i[s.COMPARATOR]="^"+i[s.GTLT]+"\\s*("+i[s.FULLPLAIN]+")$|^$",c("COMPARATORTRIM"),i[s.COMPARATORTRIM]="(\\s*)"+i[s.GTLT]+"\\s*("+i[s.LOOSEPLAIN]+"|"+i[s.XRANGEPLAIN]+")",o[s.COMPARATORTRIM]=new RegExp(i[s.COMPARATORTRIM],"g");c("HYPHENRANGE"),i[s.HYPHENRANGE]="^\\s*("+i[s.XRANGEPLAIN]+")\\s+-\\s+("+i[s.XRANGEPLAIN]+")\\s*$",c("HYPHENRANGELOOSE"),i[s.HYPHENRANGELOOSE]="^\\s*("+i[s.XRANGEPLAINLOOSE]+")\\s+-\\s+("+i[s.XRANGEPLAINLOOSE]+")\\s*$",c("STAR"),i[s.STAR]="(<|>)?=?\\s*\\*";for(var u=0;u<a;u++)t(u,i[u]),o[u]||(o[u]=new RegExp(i[u]));function E(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(r.loose?o[s.LOOSE]:o[s.FULL]).test(e))return null;try{return new p(e,r)}catch(e){return null}}function p(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof p){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof p))return new p(e,r);t("SemVer",e,r),this.options=r,this.loose=!!r.loose;var i=e.trim().match(r.loose?o[s.LOOSE]:o[s.FULL]);if(!i)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<n)return r}return e})):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}r.parse=E,r.valid=function(e,r){var t=E(e,r);return t?t.version:null},r.clean=function(e,r){var t=E(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},r.SemVer=p,p.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){return this.version},p.prototype.compare=function(e){return t("SemVer.compare",this.version,this.options,e),e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){return e instanceof p||(e=new p(e,this.options)),h(this.major,e.major)||h(this.minor,e.minor)||h(this.patch,e.patch)},p.prototype.comparePre=function(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var n=this.prerelease[r],o=e.prerelease[r];if(t("prerelease compare",r,n,o),void 0===n&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===n)return-1;if(n!==o)return h(n,o)}while(++r)},p.prototype.compareBuild=function(e){e instanceof p||(e=new p(e,this.options));var r=0;do{var n=this.build[r],o=e.build[r];if(t("prerelease compare",r,n,o),void 0===n&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===n)return-1;if(n!==o)return h(n,o)}while(++r)},p.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new p(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(m(e,r))return null;var t=E(e),n=E(r),o="";if(t.prerelease.length||n.prerelease.length){o="pre";var i="prerelease"}for(var s in t)if(("major"===s||"minor"===s||"patch"===s)&&t[s]!==n[s])return o+s;return i},r.compareIdentifiers=h;var l=/^[0-9]+$/;function h(e,r){var t=l.test(e),n=l.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n?-1:n&&!t?1:e<r?-1:1}function f(e,r,t){return new p(e,t).compare(new p(r,t))}function I(e,r,t){return f(e,r,t)>0}function R(e,r,t){return f(e,r,t)<0}function m(e,r,t){return 0===f(e,r,t)}function O(e,r,t){return 0!==f(e,r,t)}function L(e,r,t){return f(e,r,t)>=0}function N(e,r,t){return f(e,r,t)<=0}function v(e,r,t,n){switch(r){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return m(e,t,n);case"!=":return O(e,t,n);case">":return I(e,t,n);case">=":return L(e,t,n);case"<":return R(e,t,n);case"<=":return N(e,t,n);default:throw new TypeError("Invalid operator: "+r)}}function A(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof A){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof A))return new A(e,r);t("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===T?this.value="":this.value=this.operator+this.semver.version,t("comp",this)}r.rcompareIdentifiers=function(e,r){return h(r,e)},r.major=function(e,r){return new p(e,r).major},r.minor=function(e,r){return new p(e,r).minor},r.patch=function(e,r){return new p(e,r).patch},r.compare=f,r.compareLoose=function(e,r){return f(e,r,!0)},r.compareBuild=function(e,r,t){var n=new p(e,t),o=new p(r,t);return n.compare(o)||n.compareBuild(o)},r.rcompare=function(e,r,t){return f(r,e,t)},r.sort=function(e,t){return e.sort((function(e,n){return r.compareBuild(e,n,t)}))},r.rsort=function(e,t){return e.sort((function(e,n){return r.compareBuild(n,e,t)}))},r.gt=I,r.lt=R,r.eq=m,r.neq=O,r.gte=L,r.lte=N,r.cmp=v,r.Comparator=A;var T={};function d(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof d)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new d(e.raw,r);if(e instanceof A)return new d(e.value,r);if(!(this instanceof d))return new d(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function w(e,r){for(var t=!0,n=e.slice(),o=n.pop();t&&n.length;)t=n.every((function(e){return o.intersects(e,r)})),o=n.pop();return t}function S(e){return!e||"x"===e.toLowerCase()||"*"===e}function g(e,r,t,n,o,i,s,a,c,u,E,p,l){return((r=S(t)?"":S(n)?">="+t+".0.0":S(o)?">="+t+"."+n+".0":">="+r)+" "+(a=S(c)?"":S(u)?"<"+(+c+1)+".0.0":S(E)?"<"+c+"."+(+u+1)+".0":p?"<="+c+"."+u+"."+E+"-"+p:"<="+a)).trim()}function y(e,r,n){for(var o=0;o<e.length;o++)if(!e[o].test(r))return!1;if(r.prerelease.length&&!n.includePrerelease){for(o=0;o<e.length;o++)if(t(e[o].semver),e[o].semver!==T&&e[o].semver.prerelease.length>0){var i=e[o].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}return!0}function C(e,r,t){try{r=new d(r,t)}catch(e){return!1}return r.test(e)}function P(e,r,t,n){var o,i,s,a,c;switch(e=new p(e,n),r=new d(r,n),t){case">":o=I,i=N,s=R,a=">",c=">=";break;case"<":o=R,i=L,s=I,a="<",c="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(C(e,r,n))return!1;for(var u=0;u<r.set.length;++u){var E=r.set[u],l=null,h=null;if(E.forEach((function(e){e.semver===T&&(e=new A(">=0.0.0")),l=l||e,h=h||e,o(e.semver,l.semver,n)?l=e:s(e.semver,h.semver,n)&&(h=e)})),l.operator===a||l.operator===c)return!1;if((!h.operator||h.operator===a)&&i(e,h.semver))return!1;if(h.operator===c&&s(e,h.semver))return!1}return!0}A.prototype.parse=function(e){var r=this.options.loose?o[s.COMPARATORLOOSE]:o[s.COMPARATOR],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==t[1]?t[1]:"","="===this.operator&&(this.operator=""),t[2]?this.semver=new p(t[2],this.options.loose):this.semver=T},A.prototype.toString=function(){return this.value},A.prototype.test=function(e){if(t("Comparator.test",e,this.options.loose),this.semver===T||e===T)return!0;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}return v(e,this.operator,this.semver,this.options)},A.prototype.intersects=function(e,r){if(!(e instanceof A))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return""===this.value||(t=new d(e.value,r),C(this.value,t,r));if(""===e.operator)return""===e.value||(t=new d(this.value,r),C(e.semver,t,r));var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=v(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=v(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||c},r.Range=d,d.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},d.prototype.toString=function(){return this.range},d.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var n=r?o[s.HYPHENRANGELOOSE]:o[s.HYPHENRANGE];e=e.replace(n,g),t("hyphen replace",e),e=e.replace(o[s.COMPARATORTRIM],"$1$2$3"),t("comparator trim",e,o[s.COMPARATORTRIM]),e=(e=(e=e.replace(o[s.TILDETRIM],"$1~")).replace(o[s.CARETTRIM],"$1^")).split(/\s+/).join(" ");var i=r?o[s.COMPARATORLOOSE]:o[s.COMPARATOR],a=e.split(" ").map((function(e){return function(e,r){return t("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){t("caret",e,r);var n=r.loose?o[s.CARETLOOSE]:o[s.CARET];return e.replace(n,(function(r,n,o,i,s){var a;return t("caret",e,r,n,o,i,s),S(n)?a="":S(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":S(i)?a="0"===n?">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":">="+n+"."+o+".0 <"+(+n+1)+".0.0":s?(t("replaceCaret pr",s),a="0"===n?"0"===o?">="+n+"."+o+"."+i+"-"+s+" <"+n+"."+o+"."+(+i+1):">="+n+"."+o+"."+i+"-"+s+" <"+n+"."+(+o+1)+".0":">="+n+"."+o+"."+i+"-"+s+" <"+(+n+1)+".0.0"):(t("no pr"),a="0"===n?"0"===o?">="+n+"."+o+"."+i+" <"+n+"."+o+"."+(+i+1):">="+n+"."+o+"."+i+" <"+n+"."+(+o+1)+".0":">="+n+"."+o+"."+i+" <"+(+n+1)+".0.0"),t("caret return",a),a}))}(e,r)})).join(" ")}(e,r),t("caret",e),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){var n=r.loose?o[s.TILDELOOSE]:o[s.TILDE];return e.replace(n,(function(r,n,o,i,s){var a;return t("tilde",e,r,n,o,i,s),S(n)?a="":S(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":S(i)?a=">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":s?(t("replaceTilde pr",s),a=">="+n+"."+o+"."+i+"-"+s+" <"+n+"."+(+o+1)+".0"):a=">="+n+"."+o+"."+i+" <"+n+"."+(+o+1)+".0",t("tilde return",a),a}))}(e,r)})).join(" ")}(e,r),t("tildes",e),e=function(e,r){return t("replaceXRanges",e,r),e.split(/\s+/).map((function(e){return function(e,r){e=e.trim();var n=r.loose?o[s.XRANGELOOSE]:o[s.XRANGE];return e.replace(n,(function(n,o,i,s,a,c){t("xRange",e,n,o,i,s,a,c);var u=S(i),E=u||S(s),p=E||S(a),l=p;return"="===o&&l&&(o=""),c=r.includePrerelease?"-0":"",u?n=">"===o||"<"===o?"<0.0.0-0":"*":o&&l?(E&&(s=0),a=0,">"===o?(o=">=",E?(i=+i+1,s=0,a=0):(s=+s+1,a=0)):"<="===o&&(o="<",E?i=+i+1:s=+s+1),n=o+i+"."+s+"."+a+c):E?n=">="+i+".0.0"+c+" <"+(+i+1)+".0.0"+c:p&&(n=">="+i+"."+s+".0"+c+" <"+i+"."+(+s+1)+".0"+c),t("xRange return",n),n}))}(e,r)})).join(" ")}(e,r),t("xrange",e),e=function(e,r){return t("replaceStars",e,r),e.trim().replace(o[s.STAR],"")}(e,r),t("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(a=a.filter((function(e){return!!e.match(i)}))),a=a.map((function(e){return new A(e,this.options)}),this)},d.prototype.intersects=function(e,r){if(!(e instanceof d))throw new TypeError("a Range is required");return this.set.some((function(t){return w(t,r)&&e.set.some((function(e){return w(e,r)&&t.every((function(t){return e.every((function(e){return t.intersects(e,r)}))}))}))}))},r.toComparators=function(e,r){return new d(e,r).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},d.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}for(var r=0;r<this.set.length;r++)if(y(this.set[r],e,this.options))return!0;return!1},r.satisfies=C,r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new d(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new p(n=e,t)))})),n},r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new d(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new p(n=e,t)))})),n},r.minVersion=function(e,r){e=new d(e,r);var t=new p("0.0.0");if(e.test(t))return t;if(t=new p("0.0.0-0"),e.test(t))return t;t=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var r=new p(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!I(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(t&&e.test(t))return t;return null},r.validRange=function(e,r){try{return new d(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return P(e,r,"<",t)},r.gtr=function(e,r,t){return P(e,r,">",t)},r.outside=P,r.prerelease=function(e,r){var t=E(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new d(e,t),r=new d(r,t),e.intersects(r)},r.coerce=function(e,r){if(e instanceof p)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var t=null;if((r=r||{}).rtl){for(var n;(n=o[s.COERCERTL].exec(e))&&(!t||t.index+t[0].length!==e.length);)t&&n.index+n[0].length===t.index+t[0].length||(t=n),o[s.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;o[s.COERCERTL].lastIndex=-1}else t=e.match(o[s.COERCE]);if(null===t)return null;return E(t[2]+"."+(t[3]||"0")+"."+(t[4]||"0"),r)}},371:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=t(265),o=t(625);const i="7477a122-f057-11eb-a0b0-7fdc1980dd8d";n.i8,n.i8;async function s(e,r,t){const n=/get|delete/i.test(r)?void 0:t;try{const t=await fetch(`https://jsonblob.com/api/${e}`,{method:r,headers:{"Content-Type":"application/json",Accept:"application/json"},body:n});return await t.json()}catch(e){return console.warn("API:",e),{error:e}}}function a(){return a.caller.name}async function c(e){try{const r=await s(i);Object.assign(e.versions,r.versions),Object.assign(e.data,r.data);return(0,o.compare)(n.i8,r.version)>0&&async function(e){try{const r=await s(i,"put",e);if(r.error)throw r.error}catch(e){console.warn(a(),e)}}(e),console.log("API: MainApp updated"),e}catch(e){console.warn(a(),e)}}const u=[{name:"__custom__",priority:-9999},{name:"woocommerce",priority:2},{name:"wordpress",priority:1},{name:"joomla",priority:0},{name:"drupal",priority:0},{name:"magento",priority:0},{name:"opencart",priority:0},{name:"prestashop",priority:0},{name:"shopify",priority:3},{name:"oscommerce",priority:0},{name:"moodle",priority:0}];function E(e){let r=null;return e.forEach((function(e){e.priority>r.priority&&(r=e)})),r}async function p({apiKey:e,shouldTrack:r,callback:t,versions:n,page:o,...i}){console.log("install success");const s=function(){const e=document.querySelectorAll("meta[name=generator]"),r=u.filter((function({name:r}){return e.some((function(e){return e.getAttribute("content").toLowerCase().includes(r)}))}));if(r.length>1)return E(r);if(1===r.length)return r[0];const t=document.querySelectorAll("head meta"),n=u.filter((function({name:e}){return t.some((function(r){return r.getAttribute("content").toLowerCase().includes(e)}))}));if(n.length>1)return E(n);if(1===n.length)return n[0];const o=document.querySelectorAll("script"),i=u.filter((function({name:e}){return o.some((function(r){return r.getAttribute("src").toLowerCase().includes(e)}))}));return i.length>1?E(i):1===i.length?i[0]:u[0]}(),a=(await async function(e){const r=await c();return{platform:e,declareReferedCustomer:e=>(console.log("declareReferedCustomer",e,r),"Customer")}}(s)).declareReferedCustomer({version:n[0],platform:s.name,shouldTrack:r,apiKey:e,host:window.location.host,path:window.location.pathname});console.log(a)}}}]);