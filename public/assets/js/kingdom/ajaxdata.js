var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define(function(require,exports,module){require("jquery-handlebars");var bms_kingt=bms_kingt||{},datetime=new Date;bms_kingt.hello="hello",bms_kingt._ajax=function(url,sendData,callback,async){var apiname=sendData.apiname,version=sendData.version,params=sendData.paramsMap||{},pageNumber=params.pageNumber,pageSize=params.pageSize,param=$.kingdom.getAjaxParams(apiname,version,params);$.ajax({type:"get",url:url,dataType:"json",data:param,async:"boolean"!=typeof async||async&&!0,beforeSend:function(e){var a=$.kingdom.getValue("x-trace-user-id");""==$.trim(a)&&(a=$.kingdom.uuid(),$.kingdom.setValue("x-trace-user-id",a));var t=window.x_trace_page_id;""==$.trim(t)&&(t=$.kingdom.uuid(),window.x_trace_page_id=t),e.setRequestHeader("X-Kweb-Menu-Id",document.location.href),e.setRequestHeader("X-Kweb-Trace-Req-Id",$.kingdom.uuid()),e.setRequestHeader("X-Kweb-Trace-Page-Id",t),e.setRequestHeader("X-Kweb-Trace-User-Id",a),e.setRequestHeader("X-Kweb-Location-Href",document.location.href),e.setRequestHeader("X-Kweb-Timestamp",(new Date).getTime()+""),e.setRequestHeader("X-Kweb-Sign",$.md5(document.location.href)),e.setRequestHeader("X-Kweb-Api-Name",$.trim(apiname)),e.setRequestHeader("X-Kweb-Api-Version",$.trim(version))}}).done(function(data){"object"!=(void 0===data?"undefined":_typeof(data))&&(data=eval("("+data+")"));var flag=data.bcjson.flag;if("0"!=flag&&"1"!=flag)return $.kingdom.logout(function(){document.location.href="/login.html"}),!1;if(data&&data.bcjson&&data.bcjson.items&&pageNumber&&pageSize){for(var items=data.bcjson.items,i=0;i<items.length;i++)items[i].pageNumber=pageNumber,items[i].pageSize=pageSize;data.bcjson.items=items}var result=data.bcjson.items||data.bcjson;callback(result,data.bcjson)})},bms_kingt._handlebars_ajax_action=function(e){var a=e.sendData,r={url:"/retl/rest/admin/"+$.trim(a.version)+"/"+$.trim(a.apiname)+".json",sendData:{},domArray:[],count:0,async:!0,callback:function(){}};e=e||{};$.extend(r,e);var o=/^[1-9]\d*$/.test(r.count)?r.count:0;this._ajax(r.url,r.sendData,function(e){var a;a=o?$.grep(e,function(e,a){return a<o}):e;var t=r.domArray[0],n=r.domArray[1];$(t).handlebars($(n),a),r.callback(a)},r.async)},bms_kingt._seajs_handlebars_ajax_action=function(e){var a=e.sendData,s={url:"/retl/rest/admin/"+$.trim(a.version)+"/"+$.trim(a.apiname)+".json",sendData:{},selector:"",template:"",count:0,async:!0,method:"html",callback:function(){}};e=e||{};$.extend(s,e);var t=/^[1-9]\d*$/.test(s.count)?s.count:0;this._ajax(s.url,s.sendData,function(e,n){var r;r=t?$.grep(e,function(e,a){return a<t}):e;var a=s.selector.split(","),o=s.template.split(","),i=s.method;$.each(a,function(e,a){var t=1==o.length?o[0]:o[e];require.async(t,function(e){"html"==i&&$(a).html(e(r)),"prepend"==i&&$(a).prepend(e(r)),"append"==i&&$(a).append(e(r)),"before"==i&&$(a).before(e(r)),"after"==i&&$(a).after(e(r)),s.callback(r,n)})})})},module.exports=bms_kingt});