define(function(require,exports,module){var l={};function i(a){var e=document.querySelectorAll('[data-toggle="link"]');if(e){for(var t={sysType:a,legalerCode:sessionStorage.getItem(location.hash.substr(1,location.hash.length))+""},s=0;s<e.length;s++)"quick-add"===e[s].dataset.type&&(t.type=e[s].dataset.type);$('[data-type="quick-add"]').attr("data-params",JSON.stringify(t))}}l.genUIAfterRequestDataReturn=function(a,e,t){if(Array.isArray(e.bcjson.items)&&0===e.bcjson.items.length)toastr.error("请先配置法人信息！");else if(Array.isArray(e.bcjson.items)&&0<e.bcjson.items.length){var s=e.bcjson.items;$(".J_legalPersonTabs").empty(),null===sessionStorage.getItem(location.hash.substr(1,location.hash.length))&&sessionStorage.setItem(location.hash.substr(1,location.hash.length),s[0].paramId),i(a);for(var n=0;n<s.length;n++)0===n?$(".J_legalPersonTabs").append('<label class="btn red btn-outline btn-circle btn-sm active" data-paramid='+s[n].paramId+' title="'+s[n].comment+" - "+s[n].paramValue+" - "+s[n].paramId+'"><input type="radio" name="options" class="toggle">'+s[n].comment+"</label>"):$(".J_legalPersonTabs").append('<label class="btn red btn-outline btn-circle btn-sm" data-paramid='+s[n].paramId+' title="'+s[n].comment+" - "+s[n].paramValue+" - "+s[n].paramId+'"><input type="radio" name="options" class="toggle">'+s[n].comment+"</label>");var o=document.querySelectorAll(".J_legalPersonTabs label");o=Array.from(o);for(n=0;n<o.length;n++)null!==sessionStorage.getItem(location.hash.substr(1,location.hash.length))&&o[n].dataset.paramid===sessionStorage.getItem(location.hash.substr(1,location.hash.length))&&($(o[n]).addClass("active"),$(o[n]).siblings().removeClass("active"));t(),$(".J_legalPersonTabs label").click(function(){sessionStorage.setItem(location.hash.substr(1,location.hash.length),$(this).data("paramid")),i(a),App.blockUI({target:".page-content",animate:!0}),window.setTimeout(function(){App.unblockUI(".page-content")},500),t(),"SIPF"==a?$(".page-sipf-task-config .tab_location_change a label.active").click():"GPZY"==a?$(".page-gpzy-task-config .tab_location_change a label.active").click():"CSFC"==a&&$(".page-csfc-task-config .tab_location_change a label.active").click()})}},l.getLegalPersons=function(e,t){var s=!1,a=localStorage.getItem(e+"legalerInfo");if(a){var n=JSON.parse(a);l.genUIAfterRequestDataReturn(e,n,t),s=!0}var o={sysType:e};$.kingdom.doKoauthAdminAPI("kingdom.krcs.get_biz_sys_legaler_code_list","v4.0",o,function(a){"1"===a.bcjson.flag&&a.bcjson.items&&(s||l.genUIAfterRequestDataReturn(e,a,t),localStorage.setItem(e+"legalerInfo",JSON.stringify(a)))})},module.exports=l});