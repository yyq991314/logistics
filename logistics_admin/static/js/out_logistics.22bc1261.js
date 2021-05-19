(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["out_logistics"],{2207:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 快递列表\n            ")])],1)],1),r("div",{staticClass:"container"},[r("div",{staticClass:"handle-box"},[r("el-select",{attrs:{placeholder:"请选择搜索条件"},model:{value:e.query.searchType,callback:function(t){e.$set(e.query,"searchType",t)},expression:"query.searchType"}},[r("el-option",{key:"1",attrs:{label:"按收运单号",value:"1"}}),r("el-option",{key:"2",attrs:{label:"按收件人姓名",value:"2"}}),r("el-option",{key:"3",attrs:{label:"按收件人电话",value:"3"}})],1),r("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入关键字"},model:{value:e.query.keywords,callback:function(t){e.$set(e.query,"keywords",t)},expression:"query.keywords"}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"sn",label:"运单号",align:"center"}}),r("el-table-column",{attrs:{prop:"goods",label:"物品",align:"center"}}),r("el-table-column",{attrs:{prop:"price",label:"运费（元）",width:"100",align:"center"}}),r("el-table-column",{attrs:{prop:"mname",label:"寄件人",width:"80",align:"center"}}),r("el-table-column",{attrs:{prop:"mtelephone",label:"寄件人电话",width:"120",align:"center"}}),r("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.orders?r("el-tag",{attrs:{type:"success",plain:""}},[e._v("抢单中")]):e._e(),1==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("已接单")]):e._e(),2==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待入库")]):e._e(),3==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待出库")]):e._e(),4==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("运输中")]):e._e(),5==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("派单中")]):e._e(),6==t.row.orders&&0==t.row.outtypes?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待取件")]):e._e(),6==t.row.orders&&1==t.row.outtypes?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("派单中")]):e._e(),7==t.row.orders&&0==t.row.outtypes?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("预约取件")]):e._e(),7==t.row.orders&&1==t.row.outtypes?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("派单中")]):e._e(),8==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("待送达")]):e._e(),9==t.row.orders?r("el-tag",{attrs:{type:"danger",plain:""}},[e._v("已签收")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(r){return e.handleView(t.$index,t.row)}}},[e._v("详情\n                    ")]),1==t.row.orders?r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.rveOrder(t.$index,t.row)}}},[e._v("确认送达\n                    ")]):e._e(),2==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.inOrder(t.$index,t.row)}}},[e._v("立即入库\n                    ")]):e._e(),3==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.outOrder(t.$index,t.row)}}},[e._v("确认出库\n                    ")]):e._e(),4==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.logOrder(t.$index,t.row)}}},[e._v("更新物流\n                    ")]):e._e(),5==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.arrOrder(t.$index,t.row)}}},[e._v("网点揽收\n                    ")]):e._e(),6==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.endOrder(t.$index,t.row)}}},[e._v("立即签收\n                    ")]):e._e(),7==t.row.orders?r("el-button",{attrs:{type:"text",icon:"el-icon-location-information"},on:{click:function(r){return e.endOrder(t.$index,t.row)}}},[e._v("立即签收\n                    ")]):e._e()]}}])})],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),r("el-dialog",{attrs:{title:e.form._sn,visible:e.editVisible,width:"50%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("添加人信息")])],1)],1),r("el-form-item",{attrs:{label:"添加人"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"添加人手机"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.usertelephone,callback:function(t){e.$set(e.form,"usertelephone",t)},expression:"form.usertelephone"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件基础信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件物品"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.goods,callback:function(t){e.$set(e.form,"goods",t)},expression:"form.goods"}})],1),r("el-form-item",{attrs:{label:"物品重量（kg）"}},[r("el-input",{attrs:{placeholder:"单位为kg",readonly:""},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),r("el-form-item",{attrs:{label:"物品数量"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"寄件价格（元）"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#E6A23C"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件人信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件人姓名"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.mname,callback:function(t){e.$set(e.form,"mname",t)},expression:"form.mname"}})],1),r("el-form-item",{attrs:{label:"寄件人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.mtelephone,callback:function(t){e.$set(e.form,"mtelephone",t)},expression:"form.mtelephone"}})],1),r("el-form-item",{attrs:{label:"寄件人地址"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.maddress,callback:function(t){e.$set(e.form,"maddress",t)},expression:"form.maddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#F56C6C"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("收件人信息")])],1)],1),r("el-form-item",{attrs:{label:"收件人姓名"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.rname,callback:function(t){e.$set(e.form,"rname",t)},expression:"form.rname"}})],1),r("el-form-item",{attrs:{label:"收件人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.rtelephone,callback:function(t){e.$set(e.form,"rtelephone",t)},expression:"form.rtelephone"}})],1),r("el-form-item",{attrs:{label:"收件人地址"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.raddress,callback:function(t){e.$set(e.form,"raddress",t)},expression:"form.raddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#67C23A"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("寄件方式")])],1)],1),r("el-form-item",{attrs:{label:"代发价格（元）"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.service_price,callback:function(t){e.$set(e.form,"service_price",t)},expression:"form.service_price"}})],1),r("el-form-item",{attrs:{label:"寄件备注"}},[r("el-input",{attrs:{type:"textarea",rows:"5",readonly:""},model:{value:e.form.mark,callback:function(t){e.$set(e.form,"mark",t)},expression:"form.mark"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#67C23A"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("代取代发信息")])],1)],1),r("el-form-item",{attrs:{label:"代发人"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daifa,callback:function(t){e.$set(e.form,"daifa",t)},expression:"form.daifa"}})],1),r("el-form-item",{attrs:{label:"代发人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daifaphone,callback:function(t){e.$set(e.form,"daifaphone",t)},expression:"form.daifaphone"}})],1),r("el-form-item",{attrs:{label:"代取人"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daiqu,callback:function(t){e.$set(e.form,"daiqu",t)},expression:"form.daiqu"}})],1),r("el-form-item",{attrs:{label:"代取人电话"}},[r("el-input",{attrs:{readonly:""},model:{value:e.form.daiquphone,callback:function(t){e.$set(e.form,"daiquphone",t)},expression:"form.daiquphone"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:e.form._sn,visible:e.logVisible,width:"50%"},on:{"update:visible":function(t){e.logVisible=t}}},[r("el-form",{ref:"log",attrs:{rules:e.rules,model:e.form,"label-width":"120px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#409EFF"}}),e._v(" 提示\n                    ")]),r("el-breadcrumb-item",[e._v("更新物流状态")])],1)],1),r("el-form-item",{attrs:{label:"物流状态",prop:"logtypes"}},[r("el-radio-group",{model:{value:e.form.logtypes,callback:function(t){e.$set(e.form,"logtypes",t)},expression:"form.logtypes"}},[r("el-radio",{attrs:{label:"1"}},[e._v("运输中")]),r("el-radio",{attrs:{label:"2"}},[e._v("派件中")])],1)],1),r("el-form-item",{attrs:{label:"状态内容",prop:"logs"}},[r("el-input",{model:{value:e.form.logs,callback:function(t){e.$set(e.form,"logs",t)},expression:"form.logs"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitLog}},[e._v("更新物流")])],1)],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice",staticStyle:{color:"#E6A23C"}}),e._v(" 提示\n                ")]),r("el-breadcrumb-item",[e._v("物流历史记录")])],1)],1),r("div",{staticClass:"block"},[r("el-timeline",e._l(e.activities,(function(t,o){return r("el-timeline-item",{key:o,attrs:{timestamp:t.addtime,placement:"top"}},[r("el-card",[r("h4",[e._v(e._s(t.title))])])],1)})),1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.logVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},a=[],n=r("b775"),i=r("4328"),s=r.n(i),l=function(e){return Object(n["a"])({url:"/out/lists.html",method:"get",params:e})},c=function(e){return Object(n["a"])({url:"/logistics/rev_order.html",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:e})},u=function(e){return Object(n["a"])({url:"/out/in_order.html",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:e})},m=function(e){return Object(n["a"])({url:"/out/out_order.html",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:e})},d=function(e){return Object(n["a"])({url:"/out/arr_order.html",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:e})},f={name:"basetable",data:function(){return{query:{searchType:"",username:localStorage.getItem("ms_username"),keywords:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,logVisible:!1,pageTotal:0,form:{},idx:0,id:0,activities:[],rules:{logtypes:[{required:!0,message:"请选择物流状态",trigger:"blur"}],logs:[{required:!0,message:"请输入状态内容",trigger:"blur"}]}}},created:function(){this.getData()},methods:{getData:function(){var e=this;l(this.query).then((function(t){e.tableData=t.data,e.pageTotal=t.count}))},handleSearch:function(){return""==this.query.searchType?(this.$message.error("请选择搜索条件"),!1):""==this.query.keywords?(this.$message.error("请输入关键字"),!1):(this.$set(this.query,"pageIndex",1),void this.getData())},rveOrder:function(e,t){var r=this;this.idx=e,this.id=t.id,this.form=t,this.$confirm("确定该快递物品已经送达快递网点？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(2==r.form.orders)return r.$message.error("该订单物品已经送达快递网点"),!1;r.form.username=localStorage.getItem("ms_username"),c(r.form).then((function(e){1==e.status?(r.$message.success(e.msg),r.form.orders=2,r.$router.push("/out_list")):r.$message.error(e.msg)}))})).catch((function(){}))},inOrder:function(e,t){var r=this;this.idx=e,this.id=t.id,this.form=t,this.$confirm("确定该快递物品已经送达快递网点？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(2!=r.form.orders)return r.$message.error("该订单物品已经送达快递网点"),!1;r.form.username=localStorage.getItem("ms_username"),u(r.form).then((function(e){1==e.status?(r.$message.success(e.msg),r.form.orders=3):r.$message.error(e.msg)}))})).catch((function(){}))},outOrder:function(e,t){var r=this;this.idx=e,this.id=t.id,this.form=t,this.$confirm("确定要出库？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(3!=r.form.orders)return r.$message.error("该订单物品已经出库"),!1;r.form.username=localStorage.getItem("ms_username"),m(r.form).then((function(e){1==e.status?(r.$message.success(e.msg),r.form.orders=4):r.$message.error(e.msg)}))})).catch((function(){}))},arrOrder:function(e,t){var r=this;this.idx=e,this.id=t.id,this.form=t,this.$confirm("确定要揽收入库么？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(5!=r.form.orders)return r.$message.error("该订单物品已经揽收入库"),!1;r.form.username=localStorage.getItem("ms_username"),d(r.form).then((function(e){1==e.status?(r.$message.success(e.msg),r.form.orders=6,r.$set(r.tableData,r.idx,r.form)):r.$message.error(e.msg)}))})).catch((function(){}))},handleSelectionChange:function(e){this.multipleSelection=e},handleView:function(e,t){this.idx=e,this.id=t.id,this.form=t,this.form._sn="快递详情 "+this.form.sn,this.editVisible=!0},logOrder:function(e,t){this.idx=e,this.id=t.id,this.form=t,this.form._sn="物流信息 "+this.form.sn,this.logVisible=!0,this.getLogLists()},getLogLists:function(){var e=this;this.$axios({method:"post",url:"/out/loglists.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:e.form}).then((function(t){console.log(t),0===t.data.code?e.activities=t.data.data:e.$message.error(t.data.msg)}))},submitLog:function(){var e=this;this.$refs.log.validate((function(t){if(t){var r=e;if(""==r.form.logtypes||void 0==r.form.logtypes)return r.$message.error("请选择快件物流状态"),!1;if(""==r.form.logs||void 0==r.form.logs)return r.$message.error("请填写快件物流状态信息"),!1;e.$axios({method:"post",url:"/out/logs.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return s.a.stringify(e)}],data:r.form}).then((function(e){1===e.data.status?(r.$message.success(e.data.msg),r.getLogLists()):r.$message.error(e.data.msg)}))}}))},saveEdit:function(){this.editVisible=!1,this.logVisible=!1},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},p=f,b=(r("5b76"),r("2877")),g=Object(b["a"])(p,o,a,!1,null,"cf5eab66",null);t["default"]=g.exports},4127:function(e,t,r){"use strict";var o=r("d233"),a=r("b313"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,a,n,i,l,c,u,m,d,f,p){var b=t;if("function"===typeof c)b=c(r,b);else if(b instanceof Date)b=d(b);else if(null===b){if(n)return l&&!p?l(r,s.encoder):r;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||o.isBuffer(b)){if(l){var g=p?r:l(r,s.encoder);return[f(g)+"="+f(l(b,s.encoder))]}return[f(r)+"="+f(String(b))]}var h,y=[];if("undefined"===typeof b)return y;if(Array.isArray(c))h=c;else{var v=Object.keys(b);h=u?v.sort(u):v}for(var w=0;w<h.length;++w){var x=h[w];i&&null===b[x]||(y=Array.isArray(b)?y.concat(e(b[x],a(r,x),a,n,i,l,c,u,m,d,f,p)):y.concat(e(b[x],r+(m?"."+x:"["+x+"]"),a,n,i,l,c,u,m,d,f,p)))}return y};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof i.delimiter?s.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,m="boolean"===typeof i.skipNulls?i.skipNulls:s.skipNulls,d="boolean"===typeof i.encode?i.encode:s.encode,f="function"===typeof i.encoder?i.encoder:s.encoder,p="function"===typeof i.sort?i.sort:null,b="undefined"!==typeof i.allowDots&&i.allowDots,g="function"===typeof i.serializeDate?i.serializeDate:s.serializeDate,h="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof i.format)i.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,w=a.formatters[i.format];"function"===typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,y=v);var x,_=[];if("object"!==typeof r||null===r)return"";x=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var k=n[x];y||(y=Object.keys(r)),p&&y.sort(p);for(var $=0;$<y.length;++$){var C=y[$];m&&null===r[C]||(_=_.concat(l(r[C],C,k,u,m,d?f:null,v,p,b,g,w,h)))}var O=_.join(c),j=!0===i.addQueryPrefix?"?":"";return O.length>0?j+O:""}},4328:function(e,t,r){"use strict";var o=r("4127"),a=r("9e6a"),n=r("b313");e.exports={formats:n,parse:a,stringify:o}},"5b76":function(e,t,r){"use strict";r("c3d8")},"9e6a":function(e,t,r){"use strict";var o=r("d233"),a=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,s=o.split(t.delimiter,i),l=0;l<s.length;++l){var c,u,m=s[l],d=m.indexOf("]="),f=-1===d?m.indexOf("="):d+1;-1===f?(c=t.decoder(m,n.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(m.slice(0,f),n.decoder),u=t.decoder(m.slice(f+1),n.decoder)),a.call(r,c)?r[c]=[].concat(r[c]).concat(u):r[c]=u}return r},s=function(e,t,r){for(var o=t,a=e.length-1;a>=0;--a){var n,i=e[a];if("[]"===i)n=[],n=n.concat(o);else{n=r.plainObjects?Object.create(null):{};var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(s,10);!isNaN(l)&&i!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=o):n[s]=o}o=n}return o},l=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=n.exec(o),c=l?o.slice(0,l.index):o,u=[];if(c){if(!r.plainObjects&&a.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}var m=0;while(null!==(l=i.exec(o))&&m<r.depth){if(m+=1,!r.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+o.slice(l.index)+"]"),s(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"===typeof r.depth?r.depth:n.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?i(e,r):e,s=r.plainObjects?Object.create(null):{},c=Object.keys(a),u=0;u<c.length;++u){var m=c[u],d=l(m,a[m],r);s=o.merge(s,d,r)}return o.compact(s)}},b313:function(e,t,r){"use strict";var o=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},b775:function(e,t,r){"use strict";var o=r("bc3a"),a=r.n(o),n=a.a.create({timeout:5e3,headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!0});n.interceptors.request.use((function(e){return e.headers.Authorization=window.localStorage.getItem("token"),e}),(function(e){return console.log(e),Promise.reject()})),n.interceptors.response.use((function(e){if(200===e.status)return e.data;Promise.reject()}),(function(e){return console.log(e),Promise.reject()})),t["a"]=n},c3d8:function(e,t,r){},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&o.push(t[a]);r.obj[r.prop]=o}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},s=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var n=t;return Array.isArray(t)&&!Array.isArray(r)&&(n=i(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,n){o.call(t,n)?t[n]&&"object"===typeof t[n]?t[n]=e(t[n],r,a):t.push(r):t[n]=r})),t):Object.keys(r).reduce((function(t,n){var i=r[n];return o.call(t,n)?t[n]=e(t[n],i,a):t[n]=i,t}),n)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",o=0;o<t.length;++o){var n=t.charCodeAt(o);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(o):n<128?r+=a[n]:n<2048?r+=a[192|n>>6]+a[128|63&n]:n<55296||n>=57344?r+=a[224|n>>12]+a[128|n>>6&63]+a[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(o)),r+=a[240|n>>18]+a[128|n>>12&63]+a[128|n>>6&63]+a[128|63&n])}return r},m=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],s=Object.keys(i),l=0;l<s.length;++l){var c=s[l],u=i[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:c}),r.push(u))}return n(t)},d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},f=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:l,compact:m,decode:c,encode:u,isBuffer:f,isRegExp:d,merge:s}},e958:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 表单\n            ")]),r("el-breadcrumb-item",[e._v("快递寄件")])],1)],1),r("div",{staticClass:"container"},[r("div",{staticClass:"form-box"},[r("el-form",{ref:"add",attrs:{rules:e.rules,model:e.form,"label-width":"160px"}},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),r("el-breadcrumb-item",[e._v("寄件基础信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件物品",prop:"goods"}},[r("el-input",{model:{value:e.form.goods,callback:function(t){e.$set(e.form,"goods",t)},expression:"form.goods"}})],1),r("el-form-item",{attrs:{label:"物品重量（kg）",prop:"weight"}},[r("el-input",{attrs:{placeholder:"单位为kg"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),r("el-form-item",{attrs:{label:"物品数量",prop:"number"}},[r("el-input",{model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"寄件价格（元）"}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.weight*e.form.unit,callback:function(t){e.$set(e.form.weight*e.form,"unit",t)},expression:"form.weight*form.unit"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),r("el-breadcrumb-item",[e._v("寄件人信息")])],1)],1),r("el-form-item",{attrs:{label:"寄件人姓名",prop:"mname"}},[r("el-input",{model:{value:e.form.mname,callback:function(t){e.$set(e.form,"mname",t)},expression:"form.mname"}})],1),r("el-form-item",{attrs:{label:"寄件人电话",prop:"mtelephone"}},[r("el-input",{model:{value:e.form.mtelephone,callback:function(t){e.$set(e.form,"mtelephone",t)},expression:"form.mtelephone"}})],1),r("el-form-item",{attrs:{label:"寄件人地址",prop:"maddress"}},[r("el-input",{model:{value:e.form.maddress,callback:function(t){e.$set(e.form,"maddress",t)},expression:"form.maddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),r("el-breadcrumb-item",[e._v("收件人信息")])],1)],1),r("el-form-item",{attrs:{label:"收件人姓名",prop:"rname"}},[r("el-input",{model:{value:e.form.rname,callback:function(t){e.$set(e.form,"rname",t)},expression:"form.rname"}})],1),r("el-form-item",{attrs:{label:"收件人电话",prop:"rtelephone"}},[r("el-input",{model:{value:e.form.rtelephone,callback:function(t){e.$set(e.form,"rtelephone",t)},expression:"form.rtelephone"}})],1),r("el-form-item",{attrs:{label:"收件人地址",prop:"raddress"}},[r("el-input",{model:{value:e.form.raddress,callback:function(t){e.$set(e.form,"raddress",t)},expression:"form.raddress"}})],1),r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-notice"}),e._v(" 提示\n                        ")]),r("el-breadcrumb-item",[e._v("寄件备注")])],1)],1),r("el-form-item",{attrs:{label:"寄件备注"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.mark,callback:function(t){e.$set(e.form,"mark",t)},expression:"form.mark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("表单提交")]),r("el-button",[e._v("取消")])],1)],1)],1)])])},a=[],n=r("4328"),i=r.n(n),s={name:"baseform",data:function(){return{form:{unit:0,username:localStorage.getItem("ms_username"),goods:"",weight:"",number:"",price:"",mname:"",mtelephone:"",maddress:"",rname:"",rtelephone:"",raddress:"",intypes:0,service_price:0,orders:3,mark:""},rules:{goods:[{required:!0,message:"请输入寄件物品",trigger:"blur"}],weight:[{required:!0,message:"请输入物品重量",trigger:"blur"}],number:[{required:!0,message:"请输入物品数量",trigger:"blur"}],mname:[{required:!0,message:"请输入寄件人姓名",trigger:"blur"}],mtelephone:[{required:!0,message:"请输入寄件人电话",trigger:"blur"}],maddress:[{required:!0,message:"请输入寄件人地址",trigger:"blur"}],rname:[{required:!0,message:"请输入收件人姓名",trigger:"blur"}],rtelephone:[{required:!0,message:"请输入收件人电话",trigger:"blur"}],raddress:[{required:!0,message:"请输入收件人地址",trigger:"blur"}]}}},created:function(){this.unitInfo()},methods:{onSubmit:function(){var e=this;this.$refs.add.validate((function(t){if(t){var r=e;r.form.price=r.form.weight*r.form.unit,e.$axios({method:"post",url:"/logistics/save.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return i.a.stringify(e)}],data:r.form}).then((function(e){1===e.data.status?(r.$message.success(e.data.msg),r.$router.go(0)):r.$message.error(e.data.msg)}))}}))},unitInfo:function(){var e=this;this.$axios({method:"post",url:"/logistics/unit.html",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return i.a.stringify(e)}],data:{username:localStorage.getItem("ms_username")}}).then((function(t){1===t.data.status?e.form.unit=t.data.info.unit:"Signature has expired"==t.data.msg?(e.$message.error("登录过期"),e.$router.push("/login")):e.$message.error(t.data.msg)}))}}},l=s,c=r("2877"),u=Object(c["a"])(l,o,a,!1,null,null,null);t["default"]=u.exports}}]);