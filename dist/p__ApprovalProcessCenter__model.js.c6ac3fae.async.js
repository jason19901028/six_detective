(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{dQiY:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getApprovalTaskList=i,t.getTaskDetail=l,t.claimTask=f,t.setTaskSave=w,t.approveAndReject=h,t.setTaskWithdraw=m,t.setTaskAssign=x,t.getTaskGroup=b,t.getApprovalTaskHistory=I,t.default=void 0,a("miYZ");var n=r(a("tsqr")),s=r(a("d6i3")),u=r(a("p0pE")),c=r(a("1l/V")),o=a("jveU");function i(e){return p.apply(this,arguments)}function p(){return p=(0,c.default)(s.default.mark(function e(t){var a,r,n,u,c,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.page,r=void 0===a?1:a,n=t.pageSize,u=void 0===n?10:n,c=t.taskCode,i=t.type,e.abrupt("return",(0,o.request)("get_approval_task_list_page",{data:{pageNumber:r.toString(),pageSize:u.toString(),taskCode:c?c.toString():"",type:i}}));case 2:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,c.default)(s.default.mark(function e(t){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,o.request)("get_approval_task_detail",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return k.apply(this,arguments)}function k(){return k=(0,c.default)(s.default.mark(function e(t){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,o.request)("set_task_claim",{data:{taskCode:a.join(",")}}));case 2:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function w(e){return v.apply(this,arguments)}function v(){return v=(0,c.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("set_approval_task_data_save",{data:t}));case 1:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return y=(0,c.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("set_task_approve_and_reject",{data:t}));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=(0,c.default)(s.default.mark(function e(t){var a,r;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.comment,e.abrupt("return",(0,o.request)("set_task_withdraw",{data:{taskCode:a.toString(),comment:r}}));case 2:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return C=(0,c.default)(s.default.mark(function e(t){var a,r;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,e.abrupt("return",(0,o.request)("set_task_assign",{data:{taskCode:a.toString(),userId:r.toString()}}));case 2:case"end":return e.stop()}},e)})),C.apply(this,arguments)}function b(e){return _.apply(this,arguments)}function _(){return _=(0,c.default)(s.default.mark(function e(t){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,o.request)("get_approval_task_node_group",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),_.apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return T=(0,c.default)(s.default.mark(function e(t){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,o.request)("get_approval_task_history",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),T.apply(this,arguments)}var S={namespace:"approvalCenter",state:{tasks:[],alertItems:[],detailItems:[],judgeItems:[],total:0,alertOwner:"",currentUsers:[],nextUsers:[],taskHistoryList:[],logList:[]},reducers:{save:function(e,t){var a=t.payload,r=a.tasks,n=a.page,s=a.total;return(0,u.default)({},e,{tasks:r,page:n,total:s})},saveDetail:function(e,t){var a=t.payload,r=a.detailItems;return(0,u.default)({},e,{detailItems:r})},saveJudgeItems:function(e,t){var a=t.payload,r=a.detailItems;return(0,u.default)({},e,{judgeItems:r})},saveTaskGroup:function(e,t){var a=t.payload,r=a.taskGroup,n=r&&r[0].currentUsers&&r[0].currentUsers.map(function(e){return{label:e.userId,value:e.userId}}),s=r&&r[1].nextUsers&&r[1].nextUsers.map(function(e){return{label:e.userId,value:e.userId}});return(0,u.default)({},e,{currentUsers:n,nextUsers:s})},saveTaskHistory:function(e,t){var a=t.payload,r=a.taskHistoryList,n=a.logList;return(0,u.default)({},e,{taskHistoryList:r,logList:n})}},effects:{fetch:s.default.mark(function e(t,a){var r,n,u,c,o,p,l,d,f,k,w,v;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,c=r||{},o=c.page,p=c.pageSize,l=c.taskCode,d=c.type,e.next=5,n(i,{page:o,pageSize:p,taskCode:l,type:d});case 5:if(f=e.sent,k=f.items,w=f.totalCount,v=f.err,!v){e.next=11;break}throw new Error(v);case 11:return e.next=13,u({type:"save",payload:{tasks:k,page:o,total:w}});case 13:case"end":return e.stop()}},e)}),fetchTaskDetail:s.default.mark(function e(t,a){var r,n,u,c,o,i,p,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,c=r||{},o=c.taskCode,e.next=5,n(l,{taskCode:o});case 5:if(i=e.sent,p=i.items,d=i.err,!d){e.next=10;break}throw new Error(d);case 10:return e.next=12,u({type:"saveDetail",payload:{detailItems:p}});case 12:case"end":return e.stop()}},e)}),fetchJudgeDetail:s.default.mark(function e(t,a){var r,n,u,c,o,i,p,d,f;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,u=a.call,c=a.put,o=r||{},i=o.taskCode,e.next=5,u(l,{taskCode:i});case 5:if(p=e.sent,d=p.items,f=p.err,!f){e.next=10;break}throw new Error(f);case 10:return e.next=12,c({type:"saveJudgeItems",payload:{detailItems:d}});case 12:n(d);case 13:case"end":return e.stop()}},e)}),claim:s.default.mark(function e(t,a){var r,u,c,o,i,p,l,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,o=r||[],i=o.taskCode,e.next=5,c(f,{taskCode:i});case 5:if(p=e.sent,l=p.msg,d=p.err,!d){e.next=10;break}throw new Error(d);case 10:n.default.success(l),u();case 12:case"end":return e.stop()}},e)}),saveTask:s.default.mark(function e(t,a){var r,u,c,o,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,e.next=4,u(w,r);case 4:if(c=e.sent,o=c.msg,i=c.err,!i){e.next=9;break}throw new Error(i);case 9:n.default.success(o);case 10:case"end":return e.stop()}},e)}),approveAndReject:s.default.mark(function e(t,a){var r,u,c,o,i,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,e.next=4,c(h,r);case 4:if(o=e.sent,i=o.msg,p=o.err,!p){e.next=9;break}throw new Error(p);case 9:n.default.success(i),u();case 11:case"end":return e.stop()}},e)}),setTaskWithdraw:s.default.mark(function e(t,a){var r,u,c,o,i,p,l,d,f;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,o=r||[],i=o.taskCode,p=o.comment,e.next=5,c(m,{taskCode:i,comment:p});case 5:if(l=e.sent,d=l.msg,f=l.err,!f){e.next=10;break}throw new Error(f);case 10:n.default.success(d),u();case 12:case"end":return e.stop()}},e)}),setTaskAssign:s.default.mark(function e(t,a){var r,u,c,o,i,p,l,d,f;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,o=r||[],i=o.taskCode,p=o.userId,e.next=5,c(x,{taskCode:i,userId:p});case 5:if(l=e.sent,d=l.msg,f=l.err,!f){e.next=10;break}throw new Error(f);case 10:n.default.success(d),u();case 12:case"end":return e.stop()}},e)}),featchTaskGroup:s.default.mark(function e(t,a){var r,n,u,c,o,i,p,l,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,c=r||[],o=c.taskCode,i=c.type,e.next=5,n(b,{taskCode:o,type:i});case 5:if(p=e.sent,l=p.items,d=p.err,!d){e.next=10;break}throw new Error(d);case 10:return e.next=12,u({type:"saveTaskGroup",payload:{taskGroup:l}});case 12:case"end":return e.stop()}},e)}),getApprovalTaskHistory:s.default.mark(function e(t,a){var r,n,u,c,o,i,p,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,c=r||[],o=c.taskCode,e.next=5,n(I,{taskCode:o});case 5:if(i=e.sent,p=i.items,l=i.err,!l){e.next=10;break}throw new Error(l);case 10:return e.next=12,u({type:"saveTaskHistory",payload:{taskHistoryList:p.approvalHistory,logList:p.taskLifecycle}});case 12:case"end":return e.stop()}},e)})}};t.default=S}}]);