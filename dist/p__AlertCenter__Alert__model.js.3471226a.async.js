(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"35+Y":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlerts=i,t.getAlertItems=p,t.getAlertComments=f,t.getAlertLogs=w,t.setAlertComment=v,t.claimAlert=g,t.getAssignUsers=I,t.assignAlertItem=b,t.closeAlert=C,t.default=void 0;var n=a(r("d6i3"));r("miYZ");var s=a(r("tsqr")),u=a(r("p0pE")),l=a(r("1l/V")),c=r("jveU");function i(e){return o.apply(this,arguments)}function o(){return o=(0,l.default)(n.default.mark(function e(t){var r,a,s,u,l,i,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.page,a=void 0===r?1:r,s=t.pageSize,u=void 0===s?10:s,l=t.sort,i=t.currentColumn,o=t.conditions,e.abrupt("return",(0,c.request)("get_alert_center_page_list",{data:{sort:l,currentColumn:i,conditions:o&&JSON.stringify(o),pageNumber:a.toString(),pageSize:u.toString()}}));case 2:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.alertTypeId,e.abrupt("return",(0,c.request)("get_alert_item_list",{data:{alertTypeId:a,alertId:r}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return m=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,e.abrupt("return",(0,c.request)("get_alert_comment_list",{data:{alertId:r}}));case 2:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function w(e){return h.apply(this,arguments)}function h(){return h=(0,l.default)(n.default.mark(function e(t){var r,a,s,u,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.page,s=void 0===a?1:a,u=t.pageSize,l=void 0===u?10:u,e.abrupt("return",(0,c.request)("get_alert_log_list",{data:{alertId:r,pageNumber:s.toString(),pageSize:l.toString()}}));case 2:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return y=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.content,e.abrupt("return",(0,c.request)("set_alert_comment",{data:{alertId:r,commentContent:a}}));case 2:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return x=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,a=t.isCoverClaim,e.abrupt("return",(0,c.request)("set_alert_claim",{data:{alertIds:r.join(","),isCoverClaim:a.toString()}}));case 2:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function I(e){return k.apply(this,arguments)}function k(){return k=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertItemIds,e.abrupt("return",(0,c.request)("get_user_list_by_process_instance_step",{data:{alertItemIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function b(e){return _.apply(this,arguments)}function _(){return _=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.taskIds,a=t.userId,e.abrupt("return",(0,c.request)("set_alert_item_owner",{data:{taskIds:r.join(","),userId:a}}));case 2:case"end":return e.stop()}},e)})),_.apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return A=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,e.abrupt("return",(0,c.request)("set_alert_close",{data:{alertIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),A.apply(this,arguments)}var S={namespace:"alertCenter",state:{alerts:[],alertItems:[],total:0,comments:[],logs:[],users:[],claimInfo:[]},reducers:{save:function(e,t){var r=t.payload,a=r.alerts,n=r.page,s=r.total;return(0,u.default)({},e,{alerts:a,page:n,total:s})},saveAlertItems:function(e,t){var r=t.payload;return(0,u.default)({},e,{alertItems:r.alertItems})},saveComments:function(e,t){var r=t.payload,a=r.comments;return(0,u.default)({},e,{comments:a})},saveLogs:function(e,t){var r=t.payload;return(0,u.default)({},e,{logs:r.logs})},saveUsers:function(e,t){var r=t.payload;return(0,u.default)({},e,{users:r.users})},closeFail:function(e,t){var r=t.payload,a=r.msg;return s.default.warn(a),e},assignUserOk:function(e){return s.default.success("assign success"),(0,u.default)({},e)},reclaim:function(e,t){var r=t.payload;return(0,u.default)({},e,{claimInfo:r.claimInfo})}},effects:{fetch:n.default.mark(function e(t,r){var a,s,u,l,c,o,p,d,f,m,w,h,v;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||{},c=l.page,o=l.pageSize,p=l.currentColumn,d=l.sort,f=l.conditions,e.next=5,s(i,{page:c,pageSize:o,sort:d,currentColumn:p,conditions:f});case 5:if(m=e.sent,w=m.items,h=m.totalCount,v=m.err,!v){e.next=11;break}throw new Error(v);case 11:return e.next=13,u({type:"save",payload:{alerts:w,page:c,total:h}});case 13:case"end":return e.stop()}},e)}),fetchAlertItems:n.default.mark(function e(t,r){var a,s,u,l,c,i,o,d,f;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||{},c=l.alertTypeId,i=l.alertId,e.next=5,s(p,{alertTypeId:c,alertId:i});case 5:if(o=e.sent,d=o.items,f=o.err,!f){e.next=10;break}throw new Error(f);case 10:return e.next=12,u({type:"saveAlertItems",payload:{alertItems:d}});case 12:case"end":return e.stop()}},e)}),fetchComments:n.default.mark(function e(t,r){var a,s,u,l,c,i,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,e.next=5,s(f,{alertId:l});case 5:if(c=e.sent,i=c.items,o=c.err,!o){e.next=10;break}throw new Error(o);case 10:return e.next=12,u({type:"saveComments",payload:{comments:i}});case 12:case"end":return e.stop()}},e)}),fetchLogs:n.default.mark(function e(t,r){var a,s,u,l,c,i,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,e.next=5,s(w,{alertId:l});case 5:if(c=e.sent,i=c.items,o=c.err,!o){e.next=10;break}throw new Error(o);case 10:return e.next=12,u({type:"saveLogs",payload:{logs:i}});case 12:case"end":return e.stop()}},e)}),fetchAssignUsers:n.default.mark(function e(t,r){var a,s,u,l,c,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,e.next=4,s(I,a);case 4:if(l=e.sent,c=l.items,i=l.err,!i){e.next=9;break}throw new Error(i);case 9:return e.next=11,u({type:"saveUsers",payload:{users:c}});case 11:case"end":return e.stop()}},e)}),assignTask:n.default.mark(function e(t,r){var a,s,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,e.next=4,s(b,a);case 4:if(l=e.sent,c=l.err,!c){e.next=8;break}throw new Error(c);case 8:return e.next=10,u({type:"assignUserOk"});case 10:case"end":return e.stop()}},e)}),postComment:n.default.mark(function e(t,r){var a,s,u,l,c,i,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,c=a.content,e.next=5,s(v,{alertId:l,content:c});case 5:if(i=e.sent,o=i.err,!o){e.next=9;break}throw new Error(o);case 9:return e.next=11,u({type:"fetchComments",payload:{alertId:l}});case 11:case"end":return e.stop()}},e)}),claim:n.default.mark(function e(t,r){var a,u,l,c,i,o,p,d,f;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,u=r.call,l=r.put,c=a||[],i=c.alertIds,o=c.isCoverClaim,e.next=5,u(g,{alertIds:i,isCoverClaim:o});case 5:if(p=e.sent,d=p.err,f=p.items,!d){e.next=10;break}throw new Error(d);case 10:if(!f||!f.length){e.next=15;break}return e.next=13,l({type:"reclaim",payload:{claimInfo:f}});case 13:e.next=20;break;case 15:return e.next=17,l({type:"claimOk"});case 17:return e.next=19,l({type:"fetch"});case 19:s.default.success("claim success");case 20:case"end":return e.stop()}},e)}),close:n.default.mark(function e(t,r){var a,s,u,l,c,i,o,p,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||[],c=l.alertIds,e.next=5,s(C,{alertIds:c});case 5:if(i=e.sent,o=i.err,p=i.msg,d=i.items,!o){e.next=11;break}throw new Error(o);case 11:if(!p){e.next=16;break}return e.next=14,u({type:"closeFail",payload:{msg:p}});case 14:e.next=19;break;case 16:if(!d){e.next=19;break}return e.next=19,u({type:"fetch"});case 19:case"end":return e.stop()}},e)})}};t.default=S}}]);