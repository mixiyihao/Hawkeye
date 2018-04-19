webpackJsonp([11],{dEEB:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("vc3q"),r=new(o.n(n).a),a={data:function(){return{querys:[],dialogFormVisible:!1,formLabelWidth:"120px",form:{tag:"",keyword:"",enabled:!0}}},filters:{timeago:function(t){return r.format(t,"zh_CN")}},methods:{handleEdit:function(t,e){this.form=e,this.dialogFormVisible=!0},fetchQuery:function(){var t=this;this.axios.get(this.GLOBAL.settingQuery).then(function(e){t.querys=e.data.result}).catch(function(e){t.$message.error(e.toString())})},handleSpiderResult:function(t){var e=r.format(1e3*t.last,"zh_CN");t.status>-1?this.$message.success(e+t.reason):this.$message.warning(e+t.reason)},handleDeleteQuery:function(t,e){var o=this;this.axios.delete(this.GLOBAL.settingQuery+"?_id="+e._id+"&tag="+e.tag).then(function(t){o.$message.success(t.data.msg),o.dialogFormVisible=!1,o.querys=t.data.result}).catch(function(t){o.$message.error(t.toString()),o.dialogFormVisible=!1})},updateEnabled:function(t){var e=this,o={tag:t.tag,keyword:t.keyword,enabled:t.enabled};this.axios.post(this.GLOBAL.settingQuery,o).then(function(t){e.$message.success(t.data.msg),e.dialogFormVisible=!1,e.querys=t.data.result}).catch(function(t){e.$message.error(t.toString()),e.dialogFormVisible=!1})},handleAddQuery:function(t){var e=this;this.axios.post(this.GLOBAL.settingQuery,t).then(function(t){e.$message.success(t.data.msg),e.dialogFormVisible=!1,e.querys=t.data.result}).catch(function(t){e.$message.error(t.toString()),e.dialogFormVisible=!1})}},mounted:function(){this.fetchQuery(),this.$nextTick(function(){})}},i=o("18Nq"),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting-card"},[o("el-card",{attrs:{shadow:"never"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",{staticClass:"tip"},[o("svg",{staticClass:"icon",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#icon-tip"}})]),t._v(" "),o("a",{attrs:{rel:"noopener noreferrer",href:"https://github.com/search/advanced",target:"_blank"}},[t._v("搜索语法")])]),t._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{type:"info"},on:{click:function(e){t.dialogFormVisible=!0}}},[o("i",{staticClass:"el-icon-plus"})]),t._v(" "),o("el-dialog",{attrs:{title:"添加",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}},model:{value:t.dialogFormVisible,callback:function(e){t.dialogFormVisible=e},expression:"dialogFormVisible"}},[o("el-form",{attrs:{model:t.form}},[o("el-tooltip",{attrs:{content:"若存在，会覆盖已有值",placement:"right"}},[o("el-form-item",{attrs:{label:"名称","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}})],1)],1),t._v(" "),o("el-tooltip",{attrs:{content:"熟悉搜索语法可以提高监控效率: OR/AND/NOT",placement:"right"}},[o("el-form-item",{attrs:{label:"关键字","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"开启/关闭","label-width":t.formLabelWidth}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.enabled,callback:function(e){t.$set(t.form,"enabled",e)},expression:"form.enabled"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleAddQuery(t.form)}}},[t._v("确 定")])],1)],1)],1),t._v(" "),o("el-table",{attrs:{data:t.querys,stripe:!0}},[o("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("router-link",{attrs:{to:"/view/tag/"+e.row.tag}},[t._v("\n            "+t._s(e.row.tag)+"\n          ")])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"状态",width:"100",prop:"enabled",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(o){t.updateEnabled(e.row)}},model:{value:e.row.enabled,callback:function(o){t.$set(e.row,"enabled",o)},expression:"scope.row.enabled"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"关键字",width:"400","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{attrs:{rel:"noopener noreferrer",href:"https://github.com/search?o=desc&q="+e.row.keyword+"&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93",target:"_blank"}},[t._v(t._s(e.row.keyword))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"最后抓取时间",prop:"last",width:"150",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.last?o("span",[t._v(t._s(t._f("timeago")(1e3*e.row.last)))]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button-group",[o("el-button",{attrs:{size:"mini",plain:""},on:{click:function(o){t.handleEdit(e.$index,e.row)}}},[t._v("编辑\n            ")]),t._v(" "),o("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(o){t.handleDeleteQuery(e.$index,e.row)}}},[t._v("删除\n            ")]),t._v(" "),0===e.row.status?o("el-button",{attrs:{size:"mini",plain:"",type:"primary",icon:"el-icon-loading"},on:{click:function(o){t.handleSpiderResult(e.row)}}}):t._e(),t._v(" "),1===e.row.status?o("el-button",{attrs:{size:"mini",type:"success",plain:"",icon:"el-icon-success"},on:{click:function(o){t.handleSpiderResult(e.row)}}}):t._e(),t._v(" "),-1===e.row.status?o("el-button",{attrs:{size:"mini",type:"warning",plain:"",icon:"el-icon-warning"},on:{click:function(o){t.handleSpiderResult(e.row)}}}):t._e()],1)]}}])})],1)],1)],1)},[],!1,null,null,null);e.default=s.exports},vc3q:function(t,e){var o,n;o="undefined"!=typeof window?window:this,n=function(){function t(t){return t instanceof Date?t:isNaN(t)?/^\d+$/.test(t)?new Date(e(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t)):new Date(e(t))}function e(t){return parseInt(t)}function o(t,o,n){o=u[o]?o:u[n]?n:"en";for(var r=0,a=t<0?1:0,i=t=Math.abs(t);t>=d[r]&&r<f;r++)t/=d[r];return(t=e(t))>(0===(r*=2)?9:1)&&(r+=1),u[o](t,r,i)[a].replace("%s",t)}function n(e,o){return((o=o?t(o):new Date)-t(e))/1e3}function r(t){return a(t,"data-timeago")||a(t,"datetime")}function a(t,e){return t.getAttribute?t.getAttribute(e):t.attr?t.attr(e):void 0}function i(t,e){this.nowDate=t,this.defaultLocale=e||"en"}function s(t,e){return new i(t,e)}var l="second_minute_hour_day_week_month_year".split("_"),c="秒_分钟_小时_天_周_月_年".split("_"),u={en:function(t,e){if(0===e)return["just now","right now"];var o=l[parseInt(e/2)];return t>1&&(o+="s"),[t+" "+o+" ago","in "+t+" "+o]},zh_CN:function(t,e){if(0===e)return["刚刚","片刻后"];var o=c[parseInt(e/2)];return[t+o+"前",t+o+"后"]}},d=[60,60,24,7,365/7/12,12],f=6,h="data-tid",m={};return i.prototype.doRender=function(t,e,r){var a,i=n(e,this.nowDate),s=this;t.innerHTML=o(i,r,this.defaultLocale),m[a=setTimeout(function(){s.doRender(t,e,r),delete m[a]},Math.min(1e3*function(t){for(var e=1,o=0,n=Math.abs(t);t>=d[o]&&o<f;o++)t/=d[o],e*=d[o];return n=(n%=e)?e-n:e,Math.ceil(n)}(i),2147483647))]=0,function(t,e){t.setAttribute?t.setAttribute(h,e):t.attr&&t.attr(h,e)}(t,a)},i.prototype.format=function(t,e){return o(n(t,this.nowDate),e,this.defaultLocale)},i.prototype.render=function(t,e){void 0===t.length&&(t=[t]);for(var o=0,n=t.length;o<n;o++)this.doRender(t[o],r(t[o]),e)},i.prototype.setLocale=function(t){this.defaultLocale=t},s.register=function(t,e){u[t]=e},s.cancel=function(t){var e;if(t)(e=a(t,h))&&(clearTimeout(e),delete m[e]);else{for(e in m)clearTimeout(e);m={}}},s},"object"==typeof t&&t.exports?(t.exports=n(),t.exports.default=t.exports):o.timeago=n()}});