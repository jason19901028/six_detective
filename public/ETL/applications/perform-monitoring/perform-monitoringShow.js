var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define(function(require,exports,module){require("plugins/jstree/dist/jstree"),require("plugins/jstree/dist/themes/default/style.css"),require("assets/js/global/tableTree"),require("plugins/drag/kd_drag.js");var m={};function F(e,t){var n;return"B"===t?n="#ed6b75":"R"===t?n="#659be0":"S"===t?n="#3fc9d5":"F"===t?n="#F1C40F":"N"===t&&(n="#bac3d0"),'<span style="color:'+n+'">'+e+"</span>"}function T(e,t,n){return'<span style="margin-right: 10px;" title=\''+e+"' >"+e+("F,B".includes(t)?"<i class='fa fa-info-circle' title='"+n.substring(0,100)+"'></i>":"")+"</span>"}function A(e){return'<span class="execute-error-msg" msg=\''+e.replace(/\'/g,'"')+'\' style="color:#3fc9d5;cursor:pointer;">'+e.substring(0,100)+"</span>"}function l(I){var e=!0,t=!1,n=void 0;try{function o(){var n=k.value;if(!n.parentMonitorId){var r=[{id:n.monitorId,pId:"-1",columns:{"序号":n.orderNo,"节点":{formatter:function(){return T(n.nodeName,n.executeFlag,n.executeMsg)}},"任务名称":n.jobname,"任务类型":n.memberTypeName,"删除":n.deleteNum,"插入":n.insertNum,"开始时间":$.kingdom.toDateTime(n.startTime),"执行时长":$.kingdom.formatMillisecond(n.zxsj),"执行状态":{formatter:function(){return F(n.executeFlagName,n.executeFlag)}},"执行信息(点击显示全部信息)":{formatter:function(){return A(n.executeMsg)}}},children:[]}],e=!0,t=!1,o=void 0;try{function a(){var e=i.value;if(e.parentMonitorId===n.monitorId){var t={id:e.monitorId,pId:e.parentMonitorId,attr:{obj:JSON.stringify(e)},columns:{"序号":e.orderNo,"节点":{formatter:function(){return T(e.nodeName,e.executeFlag,e.executeMsg)}},"任务名称":e.jobname,"任务类型":e.memberTypeName,"删除":e.deleteNum,"插入":e.successNum,"开始时间":$.kingdom.toDateTime(e.startTime),"执行时长":$.kingdom.formatMillisecond(e.zxsj),"执行状态":{formatter:function(){return F(e.executeFlagName,e.executeFlag)}},"执行信息(点击显示全部信息)":{formatter:function(){return A(e.executeMsg)}}},children:[]};r[0].children.push(t)}}for(var i,l=I[Symbol.iterator]();!(e=(i=l.next()).done);e=!0)a()}catch(e){t=!0,o=e}finally{try{!e&&l.return&&l.return()}finally{if(t)throw o}}for(var s=r[0].children,c=0,d=s.length;c<d;c++){var m=!0,f=!1,u=void 0;try{function p(){var e=g.value;if(e.parentMonitorId===s[c].id){var t={id:e.monitorId,pId:e.parentMonitorId,attr:{obj:JSON.stringify(e)},columns:{"序号":e.orderNo,"节点":{formatter:function(){return T(e.nodeName,e.executeFlag,e.executeMsg)}},"任务名称":e.jobname,"任务类型":e.memberTypeName,"删除":e.deleteNum,"插入":e.successNum,"开始时间":$.kingdom.toDateTime(e.startTime),"执行时长":$.kingdom.formatMillisecond(e.zxsj),"执行状态":{formatter:function(){return F(e.executeFlagName,e.executeFlag)}},"执行信息(点击显示全部信息)":{formatter:function(){return A(e.executeMsg)}}},children:[]};r[0].children[c].children.push(t)}}for(var g,h=I[Symbol.iterator]();!(m=(g=h.next()).done);m=!0)p()}catch(e){f=!0,u=e}finally{try{!m&&h.return&&h.return()}finally{if(f)throw u}}var b=r[0].children[c].children,j=!0,_=!1,x=void 0;try{function v(){for(var e=y.value,t=0,n=b.length;t<n;t++)if(e.parentMonitorId===b[t].id){var o={id:e.monitorId,pId:e.parentMonitorId,attr:{obj:JSON.stringify(e)},columns:{"序号":e.orderNo,"节点":{formatter:function(){return T(e.nodeName,e.executeFlag,e.executeMsg)}},"任务名称":e.jobname,"任务类型":e.memberTypeName,"删除":e.deleteNum,"插入":e.successNum,"开始时间":$.kingdom.toDateTime(e.startTime),"执行时长":$.kingdom.formatMillisecond(e.zxsj),"执行状态":{formatter:function(){return F(e.executeFlagName,e.executeFlag)}},"执行信息(点击显示全部信息)":{formatter:function(){return A(e.executeMsg)}}},children:[]};r[0].children[c].children[t].children.push(o)}}for(var y,N=I[Symbol.iterator]();!(j=(y=N.next()).done);j=!0)v()}catch(e){_=!0,x=e}finally{try{!j&&N.return&&N.return()}finally{if(_)throw x}}}return{v:r}}}for(var k,r=I[Symbol.iterator]();!(e=(k=r.next()).done);e=!0){var a=o();if("object"===(void 0===a?"undefined":_typeof(a)))return a.v}}catch(e){t=!0,n=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}}m.BulletBoxData={},m.handleParams=new App.handleParams("#J_pm_perfrom_modal_var_set"),m.handleParams.delAllRow(),m._load=function(){App.initUniform(),m.preLeftBoxItems=[],m.getLeftBoxList(),m.getLeftBoxMyList({info:"focus"}),m.setIntervalLeftBox=setInterval(function(){m.getLeftBoxList()},5e3),App.handleDatePickers(),m.ExecutionFrequency()},m.addMyTree=function(e){var t=$.extend({operType:"ADD"},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_my_focus_job_modify","v4.0",t,function(e){App.unblockUI(),"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),m.getLeftBoxMyList({info:"focus "})):toastr.error(e.bcjson.msg)})},m.delMyTree=function(e){var t=$.extend({operType:"DEL"},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_my_focus_job_modify","v4.0",t,function(e){App.unblockUI(),"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),m.getLeftBoxMyList({info:"focus "})):toastr.error(e.bcjson.msg)})},m.getLeftBoxList=function(e,a){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_all_job_deal_info","v4.0",e||{},function(e){var t=e.bcjson.items||e.bcjson;if("1"==e.bcjson.flag&&function(e,t){m.preLeftBoxItems=t;{if(e.length!==t.length)return!0;for(var n=0,o=e.length;n<o;n++)if(e[n].jobName!==t[n].jobName||e[n].executeFlag!==t[n].executeFlag)return!0;return!1}}(m.preLeftBoxItems,t))if(0<t.length){var n=$("#perform-monitoring  #J_pm_jobname_tree .jstree-children .jstree-children a").index($("#perform-monitoring  #J_pm_jobname_tree .jstree-children .jstree-children a.jstree-clicked")),o=$("#perform-monitoring  #J_pm_jobname_tree .jstree-children .jstree-children a.jstree-clicked").attr("jobid");$("#J_pm_jobname_tree").jstree("destroy");var r=[{text:"出错中断",typeFlag:"B",icon:"fa fa-times-circle icon-state-danger",children:[]},{text:"执行中",typeFlag:"R",icon:"fa fa-spinner icon-state-info",children:[],state:{opened:!0}},{text:"成功完成",typeFlag:"S",icon:"fa fa-check-circle icon-state-success",children:[]},{text:"出错完成",typeFlag:"F",icon:"fa fa-times-circle icon-state-warning",children:[]},{text:"新建",typeFlag:"N",icon:"fa fa-plus-circle icon-state-default",children:[]}];$.each(t,function(e,t){var n={};n.a_attr={jobId:t.jobId,batchNo:t.batchNo,executeFlag:t.executeFlag,title:t.jobNo+"("+t.jobName+")"},n.text=t.jobNo?t.jobName+"("+t.jobNo+")":t.jobName,t.jobId===o&&(t.parentShouldOpen=!0),"N"===t.executeFlag?(n.icon="fa fa-folder icon-state-default",r[4].children.push(n),t.parentShouldOpen&&(r[4].state={opened:!0})):"R"===t.executeFlag?(n.icon="fa fa-folder icon-state-info",r[1].children.push(n),t.parentShouldOpen&&(r[1].state={opened:!0})):"S"===t.executeFlag?(n.icon="fa fa-folder icon-state-success",r[2].children.push(n),t.parentShouldOpen&&(r[2].state={opened:!0})):"B"===t.executeFlag?(n.icon="fa fa-folder icon-state-danger",r[0].children.push(n),t.parentShouldOpen&&(r[0].state={opened:!0})):"F"===t.executeFlag?(n.icon="fa fa-folder icon-state-warning",r[3].children.push(n),t.parentShouldOpen&&(r[3].state={opened:!0})):(n.icon="fa fa-folder icon-state-default",r[4].children.push(n),t.parentShouldOpen&&(r[4].state={opened:!0}))}),$.each(r,function(e,t){var n=t.children.length;t.text+=" ("+n+")"}),a&&(delete r[0].state,$.each(r,function(e,t){0<t.children.length&&(t.state={opened:!0})})),$("#J_pm_jobname_tree").jstree({types:{default:{icon:!1}},core:{themes:{responsive:!1},data:r,multiple:!1,dblclick_toggle:!1},plugins:["types","themes","html_data"]}).on("loaded.jstree",function(){n<0?a&&($("#perform-monitoring  #J_pm_jobname_tree .jstree-children .jstree-children a:eq(0)").click(),App.treeEllipsis1("#J_pm_jobname_tree")):($("#perform-monitoring #J_pm_jobname_tree .jstree-children .jstree-children a").removeClass("jstree-clicked"),$("#perform-monitoring #J_pm_jobname_tree .jstree-children .jstree-children a[jobid='"+o+"']").addClass("jstree-clicked"),App.treeEllipsis1("#J_pm_jobname_tree"))}).on("click",function(){App.treeEllipsis1("#J_pm_jobname_tree")})}else $("#J_pm_jobname_tree").html("")})},m.getLeftBoxMyList=function(e,a){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_all_job_deal_info","v4.0",e||{},function(e){var t=e.bcjson.items||e.bcjson;if("1"==e.bcjson.flag&&0<t.length){var n=$("#perform-monitoring  #J_pm_jobname_my_tree .jstree-children .jstree-children a").index($("#perform-monitoring  #J_pm_jobname_tree .jstree-children .jstree-children a.jstree-clicked")),o=$("#perform-monitoring  #J_pm_jobname_my_tree .jstree-children .jstree-children a.jstree-clicked").attr("jobid");$("#J_pm_jobname_my_tree").jstree("destroy");var r=[{text:"出错中断",typeFlag:"B",icon:"fa fa-times-circle icon-state-danger",children:[]},{text:"执行中",typeFlag:"R",icon:"fa fa-spinner icon-state-info",children:[],state:{opened:!0}},{text:"成功完成",typeFlag:"S",icon:"fa fa-check-circle icon-state-success",children:[]},{text:"出错完成",typeFlag:"F",icon:"fa fa-times-circle icon-state-warning",children:[]},{text:"新建",typeFlag:"N",icon:"fa fa-plus-circle icon-state-default",children:[]}];$.each(t,function(e,t){var n={};n.a_attr={jobId:t.jobId,batchNo:t.batchNo,executeFlag:t.executeFlag,title:t.jobNo+"("+t.jobName+")"},n.text=t.jobNo?t.jobName+"("+t.jobNo+")":t.jobName,t.jobId===o&&(t.parentShouldOpen=!0),"N"===t.executeFlag?(n.icon="fa fa-folder icon-state-default",r[4].children.push(n),t.parentShouldOpen&&(r[4].state={opened:!0})):"R"===t.executeFlag?(n.icon="fa fa-folder icon-state-info",r[1].children.push(n),t.parentShouldOpen&&(r[1].state={opened:!0})):"S"===t.executeFlag?(n.icon="fa fa-folder icon-state-success",r[2].children.push(n),t.parentShouldOpen&&(r[2].state={opened:!0})):"B"===t.executeFlag?(n.icon="fa fa-folder icon-state-danger",r[0].children.push(n),t.parentShouldOpen&&(r[0].state={opened:!0})):"F"===t.executeFlag?(n.icon="fa fa-folder icon-state-warning",r[3].children.push(n),t.parentShouldOpen&&(r[3].state={opened:!0})):(n.icon="fa fa-folder icon-state-default",r[4].children.push(n),t.parentShouldOpen&&(r[4].state={opened:!0}))}),$.each(r,function(e,t){var n=t.children.length;t.text+=" ("+n+")"}),a&&(delete r[0].state,$.each(r,function(e,t){0<t.children.length&&(t.state={opened:!0})})),$("#J_pm_jobname_my_tree").jstree({types:{default:{icon:!1}},core:{themes:{responsive:!1},data:r,multiple:!1,dblclick_toggle:!1},plugins:["types","themes","html_data"]}).on("loaded.jstree",function(){n<0?a&&($("#perform-monitoring  #J_pm_jobname_my_tree .jstree-children .jstree-children a:eq(0)").click(),App.treeEllipsis1("#J_pm_jobname_my_tree")):($("#perform-monitoring #J_pm_jobname_my_tree .jstree-children .jstree-children a").removeClass("jstree-clicked"),$("#perform-monitoring #J_pm_jobname_my_tree .jstree-children .jstree-children a[jobid='"+o+"']").addClass("jstree-clicked"),App.treeEllipsis1("#J_pm_jobname_my_tree"))}).on("click",function(){App.treeEllipsis1("#J_pm_jobname_my_tree")}),App.treeEllipsis1("#J_tps_1_5")}else $("#J_pm_jobname_my_tree").html("")})},m.getRightTopBoxList=function(e){var o=$.extend({},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.get_job_finish_rate_info","v4.0",o,function(e){var t=e.bcjson.items||e.bcjson;if("1"===e.bcjson.flag&&0<t.length){var n={};n.jobId=t[0].jobId,m.jobId=n,m.selectTask(m.jobId),m.variableSetting(m.jobId),"R"===t[0].executeFlag&&m.getAlreadyTime(t[0].startTime),"N"!==t[0].executeFlag&&t[0].executeFlag||(t[0].endTime=8===t[0].endTime.length&&t[0].endTime+"000000",t[0].startTime=8===t[0].startTime.length&&t[0].startTime+"000000"),m.BulletBoxData.memberNo=t[0].jobNo,m.BulletBoxData.nodeName=t[0].jobName,$(" input[name=task-Process]").val("【"+m.BulletBoxData.memberNo+"】"+m.BulletBoxData.nodeName),require.async("./template/perform-rightTop-list.handlebars",function(e){$(".page-perform-monitoring #right-content-top").html(e([t[0]]))}),m.getPieList(o),m.getThirdBoardData(t[0],null,!1)}else toastr.error(e.bcjson.msg)})},m.getThirdBoardData=function(t,e,n){n?(require.async("./template/perform-rightMiddle-tast.handlebars",function(e){$(".page-perform-monitoring #right-content-middle-tast").html(e([t]))}),require.async("./template/perform-rightTop-list.handlebars",function(e){$(".page-perform-monitoring #right-content-top").html(e([t]))}),m.getTableData(e,t.executeFlag,!0),"R"===t.executeFlag?m.getAlreadyTime(t.startTime):clearInterval(m.timeInterval)):require.async("./template/perform-rightMiddle-tast.handlebars",function(e){$(".page-perform-monitoring #right-content-middle-tast").html(e([t]))})},m.getPieList=function(e){e.pageSize="100",e.pageNumber="1",$.kingdom.doKoauthAdminAPI("kingdom.retl.get_each_batch_finish_data_info","v4.0",e,function(e){if(1==e.bcjson.flag){var t=e.bcjson.items||e.bcjson;t=0<t.length?t:e.bcjson,require.async("./template/perform-rightMiddle-round.handlebars",function(e){$(".page-perform-monitoring #right-content-middle-round").html(e(t)),t&&0<t.length&&$.each(t,function(e,t){var n,o=t.taskSum,r=t.successNum,a=t.errorNum;n=o?[{value:o-r-a,name:"未执行"},{value:r,name:"执行成功"},{value:a,name:"执行失败"}]:[{value:0,name:"执行中"}];var i={batchNo:t.batchNo,jobId:t.jobId};m.createPieChart(n,e,i)})})}})},m.createPieChart=function(e,t,n){"0"==t&&$("#circle"+t).siblings(".circleChart-text").css("margin-left","65px").siblings(".num-block").css("width","120%");var o=echarts.init(document.getElementById("circle"+t)),r={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"top",data:["未执行","执行成功","执行失败"],itemWidth:16,itemHeight:10},color:["#ccc","#17C4BB","#ed6b75"],series:[{center:["60%","50%"],name:"执行结果",type:"pie",radius:["75%","90%"],startAngle:225,avoidLabelOverlap:!1,silent:!0,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"12",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:e}]};0!==t&&(delete r.legend,delete r.series[0].center),o.setOption(r)},m.updateTableData=function(i){var e=$.extend({},i);$.kingdom.doKoauthAdminAPI("kingdom.retl.get_job_detail_flow_info","v4.0",e,function(e){var t=e.bcjson.items||e.bcjson;if("1"==e.bcjson.flag){if(0<t.length){var o=[];if($.each(t,function(e,t){t.executeFlag&&"N"!==t.executeFlag&&o.push(t.monitorId)}),m.currentMsgCollection={},$.each(t,function(e,t){m.currentMsgCollection[e]=t.executeMsg,t.errorIndex=e}),function(e,t){m.preTableData=t;{if(e.length!==t.length)return!0;for(var n=0,o=e.length;n<o;n++)if(e[n].executeFlag!==t[n].executeFlag)return!0;return!1}}(m.preTableData,t)){$("#perform-monitoring-table-tree tbody").jstree("destroy");var n=l(t);$("#perform-monitoring-table-tree").tableTree({widthScale:1.5,data:n}).openNode($('[pkey="-1"]').attr("key")),1<$("#perform-monitoring-table-tree tbody.jstree-leaf").length&&$("#perform-monitoring-table-tree tbody .jstree-leaf").css("display","none")}var r=$("#J_tableList li");if($.each(r,function(e,t){var n=$(t).attr("monitorid");o.includes(n)&&$(t).css("display","block")}),"R"!==t[0].executeFlag){$(".perform-play").find("img").attr("src","/assets/img/perform-start.png").removeClass("current-play"),m.getLeftBoxList(),m.getLeftBoxMyList({info:"focus"}),m.getRightTopBoxList({jobId:i.jobId}),clearInterval(m.setInterval),clearInterval(m.timeInterval);var a=$("#perform-monitoring #J_change_view_job iframe")[0].contentWindow;a.clearInterval(a.setIntervalVarIframe)}}}else toastr.error(e.bcjson.msg)})},m.getTableData=function(o,r,a){$("#right-content-table").show();var i=$.extend({},o);$.kingdom.doKoauthAdminAPI("kingdom.retl.get_job_detail_flow_info","v4.0",i,function(e){var t=e.bcjson.items||e.bcjson;if("1"==e.bcjson.flag)if($("#J_tableList").jstree("destroy"),0<t.length){m.currentMsgCollection={},$.each(t,function(e,t){m.currentMsgCollection[e]=t.executeMsg,t.errorIndex=e});var n=l(t);$("#perform-monitoring-table-tree").tableTree({data:n}),$("#perform-monitoring-table-tree").tableTree({widthScale:2,data:n}).openNode($('[pkey="-1"]').attr("key")),a||m.getRightTopBoxList({jobId:o.jobId}),clearInterval(m.setInterval),"R"===r&&(m.preTableData=[],1<$("#perform-monitoring-table-tree .jstree-leaf").length&&$("#perform-monitoring-table-tree .jstree-leaf").css("display","none"),m.updateTableData(i),m.setInterval=setInterval(function(){m.updateTableData(i)},3e3))}else $("#J_tableList").html("<image src='assets/img/nonedata.png'/>").css("text-align","center");else toastr.error(e.bcjson.msg)})},m.getTreeData=function(){this.menus="";var m=0,f=[];this.GetData=function(e,t,n,o,r,a){f[e+""]||(f[e+""]="exist",m++);var i=this.GetParentArry(e,r,t);if(0<i.length){for(var l in this.menus+="<ul>",i){var s=$.kingdom.toDateTime(i[l].startTime),c=i[l].executeFlag,d="";"B"===c?d="#ed6b75":"R"===c?d="#659be0":"S"===c?d="#3fc9d5":"F"===c?d="#F1C40F":"N"===c&&(d="#bac3d0"),this.menus+='<li executeFlag="'+i[l].executeFlag+'" monitorId="'+i[l].monitorId+'"'+o+'="'+i[l][o]+'"><div style=" border-bottom: 1px solid #ddd;" jobNo="'+i[l].jobNo+"\" nodeName='"+i[l].nodeName+'\'>\n                            <span class="text-overflow t-c" style="width:20px">'+i[l].orderNo+'</span>\n                            <span class="text-overflow t-l" title=\''+i[l].nodeName+"' style='width:"+(180-12*m)+"px;padding-right: 15px; position:relative;'>"+i[l].nodeName+" "+("F,B".includes(i[l].executeFlag)?"<i class='fa fa-info-circle execute-error-msg' style='font-size:16px;color:#d84c15;position:absolute; top: 7px; right: 0;' title='"+i[l].executeMsg.substring(0,100)+"' errorindex='"+i[l].errorIndex+"'></i>":"")+'</span>\n                            <span class="text-overflow t-l pdleft10 pdright10"  title=\''+i[l].jobname+"'>"+i[l].jobname+'</span>\n                            <span class="text-overflow t-c pdleft10 pdright10" style="width: 90px;" title=\''+i[l].memberTypeName+"'>"+i[l].memberTypeName+'</span>\n                            <span class="text-overflow pdleft10 pdright10" style="width: 40px;"  title=\'{childArry[i].errorNum}\'>'+i[l].errorNum+'</span>\n                            <span class="text-overflow pdleft10 pdright10" style="width: 40px;"  title=\''+i[l].successNum+"'>"+i[l].successNum+'</span>\n                            <span class="text-overflow pdleft10 pdright10 t-c" style="width: 140px;" title=\''+s+"'>"+s+'</span>\n                            <span class="text-overflow pdleft10 pdright10" style="width:100px; padding-left: 30px;">'+$.kingdom.formatMillisecond(i[l].zxsj)+'</span>\n                            <span class="text-overflow pdleft10 pdright10 t-c" style="width: 100px; color: '+d+"\"  title='"+i[l].executeFlagName+"'>"+i[l].executeFlagName+'</span>\n                            <span class="text-overflow t-l pdleft10 pdright10 execute-error-msg" style="padding-left: 30px;color: #28bcc9" errorindex=\''+i[l].errorIndex+"'  title='"+i[l].executeMsg.substring(0,100)+"'>"+i[l].executeMsg.substring(0,100)+"</span>\n                        </div>",this.GetData(i[l][a],t,n,o,r,a),this.menus+="</li>"}return this.menus+="</ul>",m--,this.menus}m--},this.GetParentArry=function(e,t,n){var o=new Array;for(var r in n)n[r][t]+""===e&&o.push(n[r]);return o}},m.ExecutionFrequency=function(e){var t=$.extend({pageNumber:"1",pageSize:"10"},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.get_schedule_info","v4.0",t,function(e){console.log(e);var t=e.bcjson.items||e.bcjson;"1"==e.bcjson.flag&&t?require.async("./template/perform-ExecutionFrequency.handlebars",function(e){$(".page-perform-monitoring #ExecutionFrequency").html(e(t))}):toastr.error(e.bcjson.msg)})},m.variableSetting=function(e){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_job_task_var_list","v4.0",e,function(e){var t=e.bcjson.items||e.bcjson;if("1"===e.bcjson.flag){var n="";n+='<option value="">- 请选择 -</option>';var o=0,r=!0,a=!1,i=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;c.no=++o,n+='<option value="'+c.varName+'">'+c.varName+"</option>"}}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}$("#J_pm_perfrom_modal_var_set select").html(n),m.handleParams.delAllRow(),m.handleParams.setData(t)}})},m.selectTask=function(e){var t=$.extend({},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.get_job_xml_nodeinfo","v4.0",t,function(e){var t=e.bcjson.items||e.bcjson;"1"==e.bcjson.flag&&t&&(require.async("./template/perform-PerformSomeTasks.handlebars",function(e){$(".page-perform-monitoring #J_pm_tab3_body").html(e(t)),App.initCheckableTable($("#J_pm_tab3_table"))}),require.async("./template/perform-point-perform.handlebars",function(e){$(".page-perform-monitoring #J_pm_tab3_select").html(e(t))}))})},m.performTask=function(r){var e=$.extend({},r);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_job_manual_exec","v4.0",e,function(e){var t=e.bcjson.items||e.bcjson;if("1"==e.bcjson.flag&&t){var n=e.bcjson.items[0].batchNo;$("#J_tableList").jstree("destroy");var o={};o.jobId=r.jobId,o.batchNo=n,m.getPieList({jobId:r.jobId}),m.getTableData(o,"R"),m.getLeftBoxMyList({info:"focus"}),m.getLeftBoxList(),$("#pm-add").modal("hide")}else toastr.error(e.bcjson.msg)})},m.getAlreadyTime=function(d){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_sys_current_date","v4.0",{},function(e){if("1"===e.bcjson.flag&&e.bcjson.items[0]){var t=e.bcjson.items[0].currentDate,n=$.kingdom.toStandardDateObj(t),o=$.kingdom.toStandardDateObj(d),r=n.getTime()-o.getTime(),a=new Date(2018,0,1).getTime()+r,i=new Date(a),l=9<i.getHours()?i.getHours():"0"+i.getHours(),s=9<i.getMinutes()?i.getMinutes():"0"+i.getMinutes(),c=9<i.getSeconds()?i.getSeconds():"0"+i.getSeconds();$("#right-content-top h4").html("时长："+l+":"+s+":"+c),clearInterval(m.timeInterval),m.timeInterval=setInterval(function(){a+=1e3;var e=new Date(a),t=9<e.getHours()?e.getHours():"0"+e.getHours(),n=9<e.getMinutes()?e.getMinutes():"0"+e.getMinutes(),o=9<e.getSeconds()?e.getSeconds():"0"+e.getSeconds();$("#right-content-top h4").html("时长："+t+":"+n+":"+o)},1e3)}})},m.stopCurrentTask=function(t,e){var n={jobId:t,batchNo:e};$.kingdom.doKoauthAdminAPI("kingdom.retl.set_job_manual_break","v4.0",n,function(e){App.unblockUI(),"1"===e.bcjson.flag?$(".page-perform-monitoring  #left-list-show .todo-project-list[jobid='"+t+"']").click():toastr.error(e.bcjson.msg)})},module.exports=m});