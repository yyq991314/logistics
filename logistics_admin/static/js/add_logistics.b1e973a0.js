(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add_logistics"],{4127:function(e,r,t){"use strict";var o=t("d233"),n=t("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(r,t,n,a,i,s,c,u,f,m,d,p){var b=r;if("function"===typeof c)b=c(t,b);else if(b instanceof Date)b=m(b);else if(null===b){if(a)return s&&!p?s(t,l.encoder):t;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||o.isBuffer(b)){if(s){var g=p?t:s(t,l.encoder);return[d(g)+"="+d(s(b,l.encoder))]}return[d(t)+"="+d(String(b))]}var y,v=[];if("undefined"===typeof b)return v;if(Array.isArray(c))y=c;else{var h=Object.keys(b);y=u?h.sort(u):h}for(var w=0;w<y.length;++w){var x=y[w];i&&null===b[x]||(v=Array.isArray(b)?v.concat(e(b[x],n(t,x),n,a,i,s,c,u,f,m,d,p)):v.concat(e(b[x],t+(f?"."+x:"["+x+"]"),n,a,i,s,c,u,f,m,d,p)))}return v};e.exports=function(e,r){var t=e,i=r?o.assign({},r):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,f="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,m="boolean"===typeof i.encode?i.encode:l.encode,d="function"===typeof i.encoder?i.encoder:l.encoder,p="function"===typeof i.sort?i.sort:null,b="undefined"!==typeof i.allowDots&&i.allowDots,g="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,y="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=n["default"];else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var v,h,w=n.formatters[i.format];"function"===typeof i.filter?(h=i.filter,t=h("",t)):Array.isArray(i.filter)&&(h=i.filter,v=h);var x,j=[];if("object"!==typeof t||null===t)return"";x=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var O=a[x];v||(v=Object.keys(t)),p&&v.sort(p);for(var k=0;k<v.length;++k){var A=v[k];f&&null===t[A]||(j=j.concat(s(t[A],A,O,u,f,m?d:null,h,p,b,g,w,y)))}var $=j.join(c),C=!0===i.addQueryPrefix?"?":"";return $.length>0?C+$:""}},4328:function(e,r,t){"use strict";var o=t("4127"),n=t("9e6a"),a=t("b313");e.exports={formats:a,parse:n,stringify:o}},"5ad9":function(e,r,t){"use strict";t.d(r,"d",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"b",(function(){return a})),t.d(r,"a",(function(){return i}));t("c5f6");function o(e,r,t){var o=/^[1][3,4,5,7,8][0-9]{9}$/;""==r||void 0==r||null==r||o.test(r)||""==r?t():t(new Error("请输入正确的电话号码"))}function n(e,r,t){var o=/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;""==r||void 0==r||null==r||o.test(r)?t():t(new Error("请输入正确的邮箱地址"))}function a(e,r,t){Number(r)?r<=0?t(new Error("请输入大于0的数字")):t():t(new Error("请输入数字"))}function i(e,r,t){r.length<6?t(new Error("请输入大于等于6位数的内容")):t()}},"9e6a":function(e,r,t){"use strict";var o=t("d233"),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,r){for(var t={},o=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,l=o.split(r.delimiter,i),s=0;s<l.length;++s){var c,u,f=l[s],m=f.indexOf("]="),d=-1===m?f.indexOf("="):m+1;-1===d?(c=r.decoder(f,a.decoder),u=r.strictNullHandling?null:""):(c=r.decoder(f.slice(0,d),a.decoder),u=r.decoder(f.slice(d+1),a.decoder)),n.call(t,c)?t[c]=[].concat(t[c]).concat(u):t[c]=u}return t},l=function(e,r,t){for(var o=r,n=e.length-1;n>=0;--n){var a,i=e[n];if("[]"===i)a=[],a=a.concat(o);else{a=t.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&t.parseArrays&&s<=t.arrayLimit?(a=[],a[s]=o):a[l]=o}o=a}return o},s=function(e,r,t){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!t.plainObjects&&n.call(Object.prototype,c)&&!t.allowPrototypes)return;u.push(c)}var f=0;while(null!==(s=i.exec(o))&&f<t.depth){if(f+=1,!t.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!t.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,r,t)}};e.exports=function(e,r){var t=r?o.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!==typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"===typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:a.delimiter,t.depth="number"===typeof t.depth?t.depth:a.depth,t.arrayLimit="number"===typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"===typeof t.decoder?t.decoder:a.decoder,t.allowDots="boolean"===typeof t.allowDots?t.allowDots:a.allowDots,t.plainObjects="boolean"===typeof t.plainObjects?t.plainObjects:a.plainObjects,t.allowPrototypes="boolean"===typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,t.parameterLimit="number"===typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,t.strictNullHandling="boolean"===typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return t.plainObjects?Object.create(null):{};for(var n="string"===typeof e?i(e,t):e,l=t.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var f=c[u],m=s(f,n[f],t);l=o.merge(l,m,t)}return o.compact(l)}},b313:function(e,r,t){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},cd3f:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 表单\n            ")]),t("el-breadcrumb-item",[e._v("快递代发派单")])],1)],1),t("div",{staticClass:"container"},[t("div",{staticClass:"form-box"},[t("el-form",{ref:"add",attrs:{rules:e.rules,model:e.form,"label-width":"160px"}},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),t("el-breadcrumb-item",[e._v("寄件基础信息")])],1)],1),t("el-form-item",{attrs:{label:"寄件物品",prop:"goods"}},[t("el-input",{model:{value:e.form.goods,callback:function(r){e.$set(e.form,"goods",r)},expression:"form.goods"}})],1),t("el-form-item",{attrs:{label:"物品重量（kg）",prop:"weight"}},[t("el-input",{attrs:{placeholder:"单位为kg"},model:{value:e.form.weight,callback:function(r){e.$set(e.form,"weight",r)},expression:"form.weight"}})],1),t("el-form-item",{attrs:{label:"物品数量",prop:"number"}},[t("el-input",{model:{value:e.form.number,callback:function(r){e.$set(e.form,"number",r)},expression:"form.number"}})],1),t("el-form-item",{attrs:{label:"寄件价格（元）"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.weight*e.form.unit,callback:function(r){e.$set(e.form.weight*e.form,"unit",r)},expression:"form.weight*form.unit"}})],1),t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),t("el-breadcrumb-item",[e._v("寄件人信息")])],1)],1),t("el-form-item",{attrs:{label:"寄件人姓名",prop:"mname"}},[t("el-input",{model:{value:e.form.mname,callback:function(r){e.$set(e.form,"mname",r)},expression:"form.mname"}})],1),t("el-form-item",{attrs:{label:"寄件人电话",prop:"mtelephone"}},[t("el-input",{model:{value:e.form.mtelephone,callback:function(r){e.$set(e.form,"mtelephone",r)},expression:"form.mtelephone"}})],1),t("el-form-item",{attrs:{label:"寄件人地址",prop:"maddress"}},[t("el-input",{model:{value:e.form.maddress,callback:function(r){e.$set(e.form,"maddress",r)},expression:"form.maddress"}})],1),t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),t("el-breadcrumb-item",[e._v("收件人信息")])],1)],1),t("el-form-item",{attrs:{label:"收件人姓名",prop:"rname"}},[t("el-input",{model:{value:e.form.rname,callback:function(r){e.$set(e.form,"rname",r)},expression:"form.rname"}})],1),t("el-form-item",{attrs:{label:"收件人电话",prop:"rtelephone"}},[t("el-input",{model:{value:e.form.rtelephone,callback:function(r){e.$set(e.form,"rtelephone",r)},expression:"form.rtelephone"}})],1),t("el-form-item",{attrs:{label:"收件人地址",prop:"raddress"}},[t("el-input",{model:{value:e.form.raddress,callback:function(r){e.$set(e.form,"raddress",r)},expression:"form.raddress"}})],1),t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),t("el-breadcrumb-item",[e._v("寄件方式")])],1)],1),t("el-form-item",{attrs:{label:"寄件方式"}},[t("el-radio-group",{model:{value:e.form.intypes,callback:function(r){e.$set(e.form,"intypes",r)},expression:"form.intypes"}},[t("el-radio",{attrs:{label:"1"}},[e._v("派单代发")])],1)],1),t("el-form-item",{attrs:{label:"代发价格（元）",prop:"service_price"}},[t("el-input",{model:{value:e.form.service_price,callback:function(r){e.$set(e.form,"service_price",r)},expression:"form.service_price"}})],1),t("el-form-item",{attrs:{label:"寄件备注"}},[t("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.mark,callback:function(r){e.$set(e.form,"mark",r)},expression:"form.mark"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("表单提交")]),t("el-button",[e._v("取消")])],1)],1)],1)])])},n=[],a=t("5ad9"),i=t("4328"),l=t.n(i),s={name:"baseform",data:function(){return{form:{unit:0,username:localStorage.getItem("ms_username"),goods:"",weight:"",number:"",price:"",mname:"",mtelephone:"",maddress:"",rname:"",rtelephone:"",raddress:"",intypes:"1",service_price:"",orders:0,mark:""},rules:{goods:[{required:!0,message:"请输入寄件物品",trigger:"blur"}],weight:[{required:!0,message:"请输入物品重量",trigger:"blur"}],number:[{required:!0,message:"请输入物品数量",trigger:"blur"}],mname:[{required:!0,message:"请输入寄件人姓名",trigger:"blur"}],mtelephone:[{required:!0,message:"请输入寄件人电话",trigger:"blur"},{validator:a["d"],message:"请输入正确的寄件人电话",trigger:"blur"}],maddress:[{required:!0,message:"请输入寄件人地址",trigger:"blur"}],rname:[{required:!0,message:"请输入收件人姓名",trigger:"blur"}],rtelephone:[{required:!0,message:"请输入收件人电话",trigger:"blur"},{validator:a["d"],message:"请输入正确的收件人电话",trigger:"blur"}],raddress:[{required:!0,message:"请输入收件人地址",trigger:"blur"}],service_price:[{required:!0,message:"请输入代发价格",trigger:"blur"}]}}},created:function(){this.unitInfo()},methods:{onSubmit:function(){var e=this;this.$refs.add.validate((function(r){if(r){var t=e;t.form.price=t.form.weight*t.form.unit,e.$axios({method:"post",url:"/logistics/save.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return l.a.stringify(e)}],data:t.form}).then((function(e){1===e.data.status?(t.$message.success(e.data.msg),t.$router.go(0)):t.$message.error(e.data.msg)}))}}))},unitInfo:function(){var e=this;this.$axios({method:"post",url:"/logistics/unit.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return l.a.stringify(e)}],data:{username:localStorage.getItem("ms_username")}}).then((function(r){1===r.data.status?e.form.unit=r.data.info.unit:"Signature has expired"==r.data.msg?(e.$message.error("登录过期"),e.$router.push("/login")):e.$message.error(r.data.msg)}))}}},c=s,u=t("2877"),f=Object(u["a"])(c,o,n,!1,null,null,null);r["default"]=f.exports},d233:function(e,r,t){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),a=function(e){var r;while(e.length){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var o=[],n=0;n<r.length;++n)"undefined"!==typeof r[n]&&o.push(r[n]);t.obj[t.prop]=o}}return r},i=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(t[o]=e[o]);return t},l=function e(r,t,n){if(!t)return r;if("object"!==typeof t){if(Array.isArray(r))r.push(t);else{if("object"!==typeof r)return[r,t];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,t))&&(r[t]=!0)}return r}if("object"!==typeof r)return[r].concat(t);var a=r;return Array.isArray(r)&&!Array.isArray(t)&&(a=i(r,n)),Array.isArray(r)&&Array.isArray(t)?(t.forEach((function(t,a){o.call(r,a)?r[a]&&"object"===typeof r[a]?r[a]=e(r[a],t,n):r.push(t):r[a]=t})),r):Object.keys(t).reduce((function(r,a){var i=t[a];return o.call(r,a)?r[a]=e(r[a],i,n):r[a]=i,r}),a)},s=function(e,r){return Object.keys(r).reduce((function(e,t){return e[t]=r[t],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},u=function(e){if(0===e.length)return e;for(var r="string"===typeof e?e:String(e),t="",o=0;o<r.length;++o){var a=r.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?t+=r.charAt(o):a<128?t+=n[a]:a<2048?t+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?t+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&r.charCodeAt(o)),t+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return t},f=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],i=n.obj[n.prop],l=Object.keys(i),s=0;s<l.length;++s){var c=l[s],u=i[c];"object"===typeof u&&null!==u&&-1===t.indexOf(u)&&(r.push({obj:i,prop:c}),t.push(u))}return a(r)},m=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:s,compact:f,decode:c,encode:u,isBuffer:d,isRegExp:m,merge:l}}}]);