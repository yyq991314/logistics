(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["picked_logistics"],{"112b":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var o=r("b775"),a=(r("4328"),function(e){return Object(o["a"])({url:"/pick/lists.html",method:"get",params:e})}),i=function(e){return Object(o["a"])({url:"/pick/listsed.html",method:"get",params:e})}},4127:function(e,t,r){"use strict";var o=r("d233"),a=r("b313"),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},n=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return n.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,a,i,n,s,c,u,d,f,m,p){var b=t;if("function"===typeof c)b=c(r,b);else if(b instanceof Date)b=f(b);else if(null===b){if(i)return s&&!p?s(r,l.encoder):r;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||o.isBuffer(b)){if(s){var y=p?r:s(r,l.encoder);return[m(y)+"="+m(s(b,l.encoder))]}return[m(r)+"="+m(String(b))]}var h,g=[];if("undefined"===typeof b)return g;if(Array.isArray(c))h=c;else{var v=Object.keys(b);h=u?v.sort(u):v}for(var w=0;w<h.length;++w){var x=h[w];n&&null===b[x]||(g=Array.isArray(b)?g.concat(e(b[x],a(r,x),a,i,n,s,c,u,d,f,m,p)):g.concat(e(b[x],r+(d?"."+x:"["+x+"]"),a,i,n,s,c,u,d,f,m,p)))}return g};e.exports=function(e,t){var r=e,n=t?o.assign({},t):{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!==typeof n.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof n.delimiter?l.delimiter:n.delimiter,u="boolean"===typeof n.strictNullHandling?n.strictNullHandling:l.strictNullHandling,d="boolean"===typeof n.skipNulls?n.skipNulls:l.skipNulls,f="boolean"===typeof n.encode?n.encode:l.encode,m="function"===typeof n.encoder?n.encoder:l.encoder,p="function"===typeof n.sort?n.sort:null,b="undefined"!==typeof n.allowDots&&n.allowDots,y="function"===typeof n.serializeDate?n.serializeDate:l.serializeDate,h="boolean"===typeof n.encodeValuesOnly?n.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof n.format)n.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,n.format))throw new TypeError("Unknown format option provided.");var g,v,w=a.formatters[n.format];"function"===typeof n.filter?(v=n.filter,r=v("",r)):Array.isArray(n.filter)&&(v=n.filter,g=v);var x,k=[];if("object"!==typeof r||null===r)return"";x=n.arrayFormat in i?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var _=i[x];g||(g=Object.keys(r)),p&&g.sort(p);for(var O=0;O<g.length;++O){var C=g[O];d&&null===r[C]||(k=k.concat(s(r[C],C,_,u,d,f?m:null,v,p,b,y,w,h)))}var j=k.join(c),$=!0===n.addQueryPrefix?"?":"";return j.length>0?$+j:""}},4328:function(e,t,r){"use strict";var o=r("4127"),a=r("9e6a"),i=r("b313");e.exports={formats:i,parse:a,stringify:o}},"9bc0":function(e,t,r){"use strict";r("a87f")},"9e6a":function(e,t,r){"use strict";var o=r("d233"),a=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},n=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,n=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,n),s=0;s<l.length;++s){var c,u,d=l[s],f=d.indexOf("]="),m=-1===f?d.indexOf("="):f+1;-1===m?(c=t.decoder(d,i.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,m),i.decoder),u=t.decoder(d.slice(m+1),i.decoder)),a.call(r,c)?r[c]=[].concat(r[c]).concat(u):r[c]=u}return r},l=function(e,t,r){for(var o=t,a=e.length-1;a>=0;--a){var i,n=e[a];if("[]"===n)i=[],i=i.concat(o);else{i=r.plainObjects?Object.create(null):{};var l="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,s=parseInt(l,10);!isNaN(s)&&n!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(i=[],i[s]=o):i[l]=o}o=i}return o},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g,s=i.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!r.plainObjects&&a.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}var d=0;while(null!==(s=n.exec(o))&&d<r.depth){if(d+=1,!r.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"===typeof r.depth?r.depth:i.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?n(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(a),u=0;u<c.length;++u){var d=c[u],f=s(d,a[d],r);l=o.merge(l,f,r)}return o.compact(l)}},a87f:function(e,t,r){},b313:function(e,t,r){"use strict";var o=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},b775:function(e,t,r){"use strict";var o=r("bc3a"),a=r.n(o),i=a.a.create({timeout:5e3,headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!0});i.interceptors.request.use((function(e){return e.headers.Authorization=window.localStorage.getItem("token"),e}),(function(e){return console.log(e),Promise.reject()})),i.interceptors.response.use((function(e){if(200===e.status)return e.data;Promise.reject()}),(function(e){return console.log(e),Promise.reject()})),t["a"]=i},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&o.push(t[a]);r.obj[r.prop]=o}}return t},n=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},l=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=n(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,i){o.call(t,i)?t[i]&&"object"===typeof t[i]?t[i]=e(t[i],r,a):t.push(r):t[i]=r})),t):Object.keys(r).reduce((function(t,i){var n=r[i];return o.call(t,i)?t[i]=e(t[i],n,a):t[i]=n,t}),i)},s=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",o=0;o<t.length;++o){var i=t.charCodeAt(o);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(o):i<128?r+=a[i]:i<2048?r+=a[192|i>>6]+a[128|63&i]:i<55296||i>=57344?r+=a[224|i>>12]+a[128|i>>6&63]+a[128|63&i]:(o+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(o)),r+=a[240|i>>18]+a[128|i>>12&63]+a[128|i>>6&63]+a[128|63&i])}return r},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var a=t[o],n=a.obj[a.prop],l=Object.keys(n),s=0;s<l.length;++s){var c=l[s],u=n[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:n,prop:c}),r.push(u))}return i(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},m=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:n,assign:s,compact:d,decode:c,encode:u,isBuffer:m,isRegExp:f,merge:l}},ea7d:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 已预约列表\n            ")])],1)],1),r("div",{staticClass:"container"},[r("div",{staticClass:"handle-box"},[r("el-select",{attrs:{placeholder:"请选择搜索条件"},model:{value:e.query.searchType,callback:function(t){e.$set(e.query,"searchType",t)},expression:"query.searchType"}},[r("el-option",{key:"1",attrs:{label:"按收运单号",value:"1"}}),r("el-option",{key:"2",attrs:{label:"按收件人姓名",value:"2"}}),r("el-option",{key:"3",attrs:{label:"按收件人电话",value:"3"}})],1),r("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入关键字"},model:{value:e.query.keywords,callback:function(t){e.$set(e.query,"keywords",t)},expression:"query.keywords"}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"sn",label:"运单号",align:"center"}}),r("el-table-column",{attrs:{prop:"goods",label:"物品",align:"center"}}),r("el-table-column",{attrs:{prop:"price",label:"运费（元）",width:"100",align:"center"}}),r("el-table-column",{attrs:{prop:"mname",label:"寄件人",width:"80",align:"center"}}),r("el-table-column",{attrs:{prop:"mtelephone",label:"寄件人电话",width:"120",align:"center"}}),r("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.orders?r("el-tag",{attrs:{type:"success",plain:""}},[e._v("抢单中")]):e._e(),1==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("已接单")]):e._e(),2==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待入库")]):e._e(),3==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待出库")]):e._e(),4==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("运输中")]):e._e(),5==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("派单中")]):e._e(),6==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待取件")]):e._e(),7==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("预约取件")]):e._e(),8==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("已签收")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(r){return e.handleView(t.$index,t.row)}}},[e._v("详情\n                    ")]),1==t.row.orders?r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.rveOrder(t.$index,t.row)}}},[e._v("确认送达\n                    ")]):e._e(),2==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.inOrder(t.$index,t.row)}}},[e._v("立即入库\n                    ")]):e._e(),3==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.outOrder(t.$index,t.row)}}},[e._v("确认出库\n                    ")]):e._e(),4==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.logOrder(t.$index,t.row)}}},[e._v("更新物流\n                    ")]):e._e(),5==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.arrOrder(t.$index,t.row)}}},[e._v("网点揽收\n                    ")]):e._e(),6==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.endOrder(t.$index,t.row)}}},[e._v("预约取件\n                    ")]):e._e(),7==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.endOrder(t.$index,t.row)}}},[e._v("预约取件中\n                    ")]):e._e()]}}])})],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),r("el-dialog",{attrs:{title:e.form._sn,visible:e.editVisible,width:"50%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件基础信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件物品"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.goods,callback:function(t){e.$set(e.form,"goods",t)},expression:"form.goods"}})],1),r("el-form-item",{attrs:{label:"物品重量（kg）"}},[r("el-input",{attrs:{placeholder:"单位为kg",readonly:""},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),r("el-form-item",{attrs:{label:"物品数量"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"寄件价格（元）"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#E6A23C"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件人信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件人姓名"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.mname,callback:function(t){e.$set(e.form,"mname",t)},expression:"form.mname"}})],1),r("el-form-item",{attrs:{label:"寄件人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.mtelephone,callback:function(t){e.$set(e.form,"mtelephone",t)},expression:"form.mtelephone"}})],1),r("el-form-item",{attrs:{label:"寄件人地址"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.maddress,callback:function(t){e.$set(e.form,"maddress",t)},expression:"form.maddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#F56C6C"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("收件人信息")])],1)],1),r("el-form-item",{attrs:{label:"收件人姓名"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.rname,callback:function(t){e.$set(e.form,"rname",t)},expression:"form.rname"}})],1),r("el-form-item",{attrs:{label:"收件人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.rtelephone,callback:function(t){e.$set(e.form,"rtelephone",t)},expression:"form.rtelephone"}})],1),r("el-form-item",{attrs:{label:"收件人地址"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.raddress,callback:function(t){e.$set(e.form,"raddress",t)},expression:"form.raddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#67C23A"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件方式")])],1)],1),r("el-form-item",{attrs:{label:"代发价格（元）"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.service_price,callback:function(t){e.$set(e.form,"service_price",t)},expression:"form.service_price"}})],1),r("el-form-item",{attrs:{label:"寄件备注"}},[r("el-input",{attrs:{type:"textarea",rows:"5",readonly:""},model:{value:e.form.mark,callback:function(t){e.$set(e.form,"mark",t)},expression:"form.mark"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#67C23A"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("代取代发信息")])],1)],1),r("el-form-item",{attrs:{label:"代发人"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daifa,callback:function(t){e.$set(e.form,"daifa",t)},expression:"form.daifa"}})],1),r("el-form-item",{attrs:{label:"代发人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daifaphone,callback:function(t){e.$set(e.form,"daifaphone",t)},expression:"form.daifaphone"}})],1),r("el-form-item",{attrs:{label:"代取人"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daiqu,callback:function(t){e.$set(e.form,"daiqu",t)},expression:"form.daiqu"}})],1),r("el-form-item",{attrs:{label:"代取人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daiquphone,callback:function(t){e.$set(e.form,"daiquphone",t)},expression:"form.daiquphone"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:e.form._sn,visible:e.logVisible,width:"50%"},on:{"update:visible":function(t){e.logVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("更新物流状态")])],1)],1),r("el-form-item",{attrs:{label:"物流状态"}},[r("el-radio-group",{model:{value:e.form.logtypes,callback:function(t){e.$set(e.form,"logtypes",t)},expression:"form.logtypes"}},[r("el-radio",{attrs:{label:"1"}},[e._v("运输中")]),r("el-radio",{attrs:{label:"2"}},[e._v("派件中")])],1)],1),r("el-form-item",{attrs:{label:"状态内容"}},[r("el-input",{model:{value:e.form.logs,callback:function(t){e.$set(e.form,"logs",t)},expression:"form.logs"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitLog}},[e._v("更新物流")])],1)],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#E6A23C"}}),e._v(" 提示\n                ")]),r("el-breadcrumb-item",[e._v("物流历史记录")])],1)],1),r("div",{staticClass:"block"},[r("el-timeline",e._l(e.activities,(function(t,o){return r("el-timeline-item",{key:o,attrs:{timestamp:t.addtime,placement:"top"}},[r("el-card",[r("h4",[e._v(e._s(t.title))])])],1)})),1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.logVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:e.form._sn,visible:e.appVisible,width:"50%"},on:{"update:visible":function(t){e.appVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("选择取件时间")])],1)],1),r("el-form-item",{attrs:{label:"日期时间"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.form.apptime1,callback:function(t){e.$set(e.form,"apptime1",t)},expression:"form.apptime1"}})],1),r("el-form-item",{attrs:{label:"取件备注"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.appmark,callback:function(t){e.$set(e.form,"appmark",t)},expression:"form.appmark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitApp}},[e._v("立即预约")]),r("el-button",{on:{click:function(t){e.appVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)},a=[],i=(r("6b54"),r("112b")),n=r("4328"),l=r.n(n),s={name:"basetable",data:function(){return{query:{searchType:"",username:localStorage.getItem("ms_username"),keywords:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,logVisible:!1,appVisible:!1,pageTotal:0,form:{},idx:0,id:0,activities:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["b"])(this.query).then((function(t){e.tableData=t.data,e.pageTotal=t.count}))},handleSearch:function(){return""==this.query.searchType?(this.$message.error("请选择搜索条件"),!1):""==this.query.keywords?(this.$message.error("请输入关键字"),!1):(this.$set(this.query,"pageIndex",1),void this.getData())},arrOrder:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var r=this;this.idx=e,this.id=t.id,this.form=t,this.$confirm("确定要揽收入库么？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(5!=r.form.orders)return r.$message.error("该订单物品已经揽收入库"),!1;r.form.username=localStorage.getItem("ms_username"),arrOrder(r.form).then((function(e){1==e.status?(r.$message.success(e.msg),r.form.orders=6,r.$set(r.tableData,r.idx,r.form)):r.$message.error(e.msg)}))})).catch((function(){}))})),submitApp:function(){var e=this;return e.form.apptime=e.form.apptime1,""==e.form.apptime||void 0==e.form.apptime?(e.$message.error("请选择预约取件时间"),!1):""==e.form.appmark||void 0==e.form.appmark?(e.$message.error("请填写预约备注"),!1):void this.$axios({method:"post",url:"/pick/apptime.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return l.a.stringify(e)}],data:e.form}).then((function(t){1===t.data.status?(e.$message.success(t.data.msg),e.form.orders=7,e.$set(e.tableData,e.idx,e.form),e.appVisible=!1):e.$message.error(t.data.msg)}))},handleSelectionChange:function(e){this.multipleSelection=e},handleView:function(e,t){this.idx=e,this.id=t.id,this.form=t,this.form._sn="快递详情 "+this.form.sn,this.editVisible=!0},logOrder:function(e,t){this.idx=e,this.id=t.id,this.form=t,this.form._sn="物流信息 "+this.form.sn,this.logVisible=!0,this.getLogLists()},endOrder:function(e,t){this.idx=e,this.id=t.id,this.form=t,this.form._sn="物流运单号 "+this.form.sn,this.appVisible=!0},getLogLists:function(){var e=this;this.$axios({method:"post",url:"/out/loglists.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return l.a.stringify(e)}],data:e.form}).then((function(t){console.log(t),0===t.data.code?e.activities=t.data.data:e.$message.error(t.data.msg)}))},saveEdit:function(){this.editVisible=!1,this.logVisible=!1,this.appVisible=!1},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},c=s,u=(r("9bc0"),r("2877")),d=Object(u["a"])(c,o,a,!1,null,"193b00b8",null);t["default"]=d.exports}}]);