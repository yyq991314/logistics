(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{4127:function(e,r,t){"use strict";var n=t("d233"),o=t("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(r,t,o,a,i,s,c,u,p,f,d,y){var m=r;if("function"===typeof c)m=c(t,m);else if(m instanceof Date)m=f(m);else if(null===m){if(a)return s&&!y?s(t,l.encoder):t;m=""}if("string"===typeof m||"number"===typeof m||"boolean"===typeof m||n.isBuffer(m)){if(s){var b=y?t:s(t,l.encoder);return[d(b)+"="+d(s(m,l.encoder))]}return[d(t)+"="+d(String(m))]}var g,h=[];if("undefined"===typeof m)return h;if(Array.isArray(c))g=c;else{var v=Object.keys(m);g=u?v.sort(u):v}for(var w=0;w<g.length;++w){var j=g[w];i&&null===m[j]||(h=Array.isArray(m)?h.concat(e(m[j],o(t,j),o,a,i,s,c,u,p,f,d,y)):h.concat(e(m[j],t+(p?"."+j:"["+j+"]"),o,a,i,s,c,u,p,f,d,y)))}return h};e.exports=function(e,r){var t=e,i=r?n.assign({},r):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,p="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"===typeof i.encode?i.encode:l.encode,d="function"===typeof i.encoder?i.encoder:l.encoder,y="function"===typeof i.sort?i.sort:null,m="undefined"!==typeof i.allowDots&&i.allowDots,b="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,g="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var h,v,w=o.formatters[i.format];"function"===typeof i.filter?(v=i.filter,t=v("",t)):Array.isArray(i.filter)&&(v=i.filter,h=v);var j,O=[];if("object"!==typeof t||null===t)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[j];h||(h=Object.keys(t)),y&&h.sort(y);for(var k=0;k<h.length;++k){var A=h[k];p&&null===t[A]||(O=O.concat(s(t[A],A,x,u,p,f?d:null,v,y,m,b,w,g)))}var C=O.join(c),N=!0===i.addQueryPrefix?"?":"";return C.length>0?N+C:""}},4328:function(e,r,t){"use strict";var n=t("4127"),o=t("9e6a"),a=t("b313");e.exports={formats:a,parse:o,stringify:n}},"74af":function(e,r,t){"use strict";t("be8d")},"9e6a":function(e,r,t){"use strict";var n=t("d233"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,r){for(var t={},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,l=n.split(r.delimiter,i),s=0;s<l.length;++s){var c,u,p=l[s],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(c=r.decoder(p,a.decoder),u=r.strictNullHandling?null:""):(c=r.decoder(p.slice(0,d),a.decoder),u=r.decoder(p.slice(d+1),a.decoder)),o.call(t,c)?t[c]=[].concat(t[c]).concat(u):t[c]=u}return t},l=function(e,r,t){for(var n=r,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=[],a=a.concat(n);else{a=t.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&t.parseArrays&&s<=t.arrayLimit?(a=[],a[s]=n):a[l]=n}n=a}return n},s=function(e,r,t){if(e){var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(n),c=s?n.slice(0,s.index):n,u=[];if(c){if(!t.plainObjects&&o.call(Object.prototype,c)&&!t.allowPrototypes)return;u.push(c)}var p=0;while(null!==(s=i.exec(n))&&p<t.depth){if(p+=1,!t.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!t.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+n.slice(s.index)+"]"),l(u,r,t)}};e.exports=function(e,r){var t=r?n.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!==typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"===typeof t.delimiter||n.isRegExp(t.delimiter)?t.delimiter:a.delimiter,t.depth="number"===typeof t.depth?t.depth:a.depth,t.arrayLimit="number"===typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"===typeof t.decoder?t.decoder:a.decoder,t.allowDots="boolean"===typeof t.allowDots?t.allowDots:a.allowDots,t.plainObjects="boolean"===typeof t.plainObjects?t.plainObjects:a.plainObjects,t.allowPrototypes="boolean"===typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,t.parameterLimit="number"===typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,t.strictNullHandling="boolean"===typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return t.plainObjects?Object.create(null):{};for(var o="string"===typeof e?i(e,t):e,l=t.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var p=c[u],f=s(p,o[p],t);l=n.merge(l,f,t)}return n.compact(l)}},b313:function(e,r,t){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},be8d:function(e,r,t){},d233:function(e,r,t){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),a=function(e){var r;while(e.length){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o]);t.obj[t.prop]=n}}return r},i=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(t[n]=e[n]);return t},l=function e(r,t,o){if(!t)return r;if("object"!==typeof t){if(Array.isArray(r))r.push(t);else{if("object"!==typeof r)return[r,t];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,t))&&(r[t]=!0)}return r}if("object"!==typeof r)return[r].concat(t);var a=r;return Array.isArray(r)&&!Array.isArray(t)&&(a=i(r,o)),Array.isArray(r)&&Array.isArray(t)?(t.forEach((function(t,a){n.call(r,a)?r[a]&&"object"===typeof r[a]?r[a]=e(r[a],t,o):r.push(t):r[a]=t})),r):Object.keys(t).reduce((function(r,a){var i=t[a];return n.call(r,a)?r[a]=e(r[a],i,o):r[a]=i,r}),a)},s=function(e,r){return Object.keys(r).reduce((function(e,t){return e[t]=r[t],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},u=function(e){if(0===e.length)return e;for(var r="string"===typeof e?e:String(e),t="",n=0;n<r.length;++n){var a=r.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?t+=r.charAt(n):a<128?t+=o[a]:a<2048?t+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?t+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&r.charCodeAt(n)),t+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return t},p=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var o=r[n],i=o.obj[o.prop],l=Object.keys(i),s=0;s<l.length;++s){var c=l[s],u=i[c];"object"===typeof u&&null!==u&&-1===t.indexOf(u)&&(r.push({obj:i,prop:c}),t.push(u))}return a(r)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:s,compact:p,decode:c,encode:u,isBuffer:d,isRegExp:f,merge:l}},ea51:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"ms-login"},[t("div",{staticClass:"ms-title"},[e._v("物流管理系统")]),t("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.param.username,callback:function(r){e.$set(e.param,"username",r)},expression:"param.username"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.param.email,callback:function(r){e.$set(e.param,"email",r)},expression:"param.email"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-message"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm()}},model:{value:e.param.password,callback:function(r){e.$set(e.param,"password",r)},expression:"param.password"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm()}}},[e._v("注 册")])],1),t("p",{staticClass:"login-tips"},[e._v("已经有账号？"),t("span",{staticClass:"login",on:{click:function(r){return e.login()}}},[e._v("返回登录")])])],1)],1)])},o=[],a=t("4328"),i=t.n(a),l={data:function(){return{param:{username:"",password:"",email:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.login.validate((function(r){if(!r)return e.$message.error("请输入账号、邮箱和密码"),console.log("error submit!!"),!1;var t=e;e.$axios({method:"post",url:"/register/check.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return i.a.stringify(e)}],data:t.param}).then((function(e){1===e.data.status?(console.log(e),t.$message.success("注册成功"),t.$router.push("/login")):t.$message.error(e.data.msg)}))}))},login:function(){this.$router.push("/login")}}},s=l,c=(t("74af"),t("2877")),u=Object(c["a"])(s,n,o,!1,null,"7e7cc76d",null);r["default"]=u.exports}}]);