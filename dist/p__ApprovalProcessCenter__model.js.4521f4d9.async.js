(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{dQiY:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getApprovalTaskList=o,t.getTaskDetail=l,t.claimTask=f,t.setTaskSave=v,t.setTaskSubmit=h,t.approveAndReject=m,t.setTaskWithdraw=x,t.setTaskAssign=_,t.getTaskGroup=L,t.getUserList=I,t.getUserListByUserId=U,t.getApprovalTaskHistory=A,t.default=void 0,a("miYZ");var s=r(a("tsqr")),n=r(a("d6i3")),u=r(a("p0pE")),i=r(a("1l/V")),c=a("jveU");function o(e){return p.apply(this,arguments)}function p(){return p=(0,i.default)(n.default.mark(function e(t){var a,r,s,u,i,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.page,r=void 0===a?1:a,s=t.pageSize,u=void 0===s?10:s,i=t.taskCode,o=t.type,e.abrupt("return",(0,c.request)("get_approval_task_list_page",{data:{pageNumber:r.toString(),pageSize:u.toString(),taskCode:i?i.toString():"",type:o}}));case 2:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,i.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,c.request)("get_approval_task_detail",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return k.apply(this,arguments)}function k(){return k=(0,i.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,c.request)("set_task_claim",{data:{taskCode:a.join(",")}}));case 2:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return w=(0,i.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("set_approval_task_data_save",{data:t}));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return y=(0,i.default)(n.default.mark(function e(t){var a,r,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,s=t.epCname,e.abrupt("return",(0,c.request)("set_task_submit",{data:{taskCode:a.toString(),userId:r.toString(),epCname:s}}));case 2:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=(0,i.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("set_task_approve_and_reject",{data:t}));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return C=(0,i.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.comment,e.abrupt("return",(0,c.request)("set_task_withdraw",{data:{taskCode:a.toString(),comment:r}}));case 2:case"end":return e.stop()}},e)})),C.apply(this,arguments)}function _(e){return b.apply(this,arguments)}function b(){return b=(0,i.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,e.abrupt("return",(0,c.request)("set_task_assign",{data:{taskCode:a.toString(),userId:r.toString()}}));case 2:case"end":return e.stop()}},e)})),b.apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return T=(0,i.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,c.request)("get_approval_task_node_group",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),T.apply(this,arguments)}function I(e){return S.apply(this,arguments)}function S(){return S=(0,i.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.operType,r=t.groupId,e.abrupt("return",(0,c.request)("get_user_list_information",{data:{operType:a,groupId:r}}));case 2:case"end":return e.stop()}},e)})),S.apply(this,arguments)}function U(){return q.apply(this,arguments)}function q(){return q=(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("get_user_list_by_user_id",{data:{}}));case 1:case"end":return e.stop()}},e)})),q.apply(this,arguments)}function A(e){return G.apply(this,arguments)}function G(){return G=(0,i.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,c.request)("get_approval_task_history",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),G.apply(this,arguments)}var H={namespace:"approvalCenter",state:{tasks:[],alertItems:[],detailItems:{},total:0,alertOwner:"",userList:[],submitRadioList:[],currentUserList:[],assignRadioList:[],taskGroup:"",taskHistoryList:[],logList:[]},reducers:{save:function(e,t){var a=t.payload,r=a.tasks,s=a.page,n=a.total;return(0,u.default)({},e,{tasks:r,page:s,total:n})},saveDetail:function(e,t){var a=t.payload,r=a.detailItems;return(0,u.default)({},e,{detailItems:r})},saveTaskGroup:function(e,t){var a=t.payload,r=a.taskGroup;return(0,u.default)({},e,{taskGroup:r})},saveUserList:function(e,t){var a=t.payload,r=a.userList,s=r.map(function(e){return{label:e.userName,value:e.userId}});return(0,u.default)({},e,{userList:r,submitRadioList:s})},saveCurrentUserList:function(e,t){var a=t.payload,r=a.currentUserList,s=r.map(function(e){return{label:e.userName,value:e.userId}});return(0,u.default)({},e,{currentUserList:r,assignRadioList:s})},saveTaskHistory:function(e,t){var a=t.payload,r=a.taskHistoryList,s=a.logList;return(0,u.default)({},e,{taskHistoryList:r,logList:s})}},effects:{fetch:n.default.mark(function e(t,a){var r,s,u,i,c,p,l,d,f,k,v,w;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,i=r||{},c=i.page,p=i.pageSize,l=i.taskCode,d=i.type,e.next=5,s(o,{page:c,pageSize:p,taskCode:l,type:d});case 5:if(f=e.sent,k=f.items,v=f.totalCount,w=f.err,!w){e.next=11;break}throw new Error(w);case 11:return e.next=13,u({type:"save",payload:{tasks:k,page:c,total:v}});case 13:case"end":return e.stop()}},e)}),fetchTaskDetail:n.default.mark(function e(t,a){var r,s,u,i,c,o,p,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,i=r||{},c=i.taskCode,e.next=5,s(l,{taskCode:c});case 5:if(o=e.sent,p=o.items,d=o.err,!d){e.next=10;break}throw new Error(d);case 10:return e.next=12,u({type:"saveDetail",payload:{detailItems:p}});case 12:case"end":return e.stop()}},e)}),claim:n.default.mark(function e(t,a){var r,u,i,c,o,p,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,i=a.call,c=r||[],o=c.taskCode,e.next=5,i(f,{taskCode:o});case 5:p=e.sent,l=p.err,l?s.default.error("claim failure"):(s.default.success("claim success"),u());case 8:case"end":return e.stop()}},e)}),saveTask:n.default.mark(function e(t,a){var r,u,i,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,e.next=4,u(v,r);case 4:i=e.sent,c=i.err,c?s.default.error("save failure"):s.default.success("save success");case 7:case"end":return e.stop()}},e)}),submitTask:n.default.mark(function e(t,a){var r,u,i,c,o,p,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,i=r||[],c=i.taskCode,o=i.userId,p=i.epCname,e.next=5,u(h,{taskCode:c,userId:o,epCname:p});case 5:l=e.sent,d=l.err,d?s.default.error("submit failure"):s.default.success("submit success");case 8:case"end":return e.stop()}},e)}),approveAndReject:n.default.mark(function e(t,a){var r,u,i,c,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,i=a.call,e.next=4,i(m,r);case 4:c=e.sent,o=c.err,o?s.default.error("failure"):(s.default.success("success"),u());case 7:case"end":return e.stop()}},e)}),setTaskWithdraw:n.default.mark(function e(t,a){var r,u,i,c,o,p,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,i=a.call,c=r||[],o=c.taskCode,p=c.comment,e.next=5,i(x,{taskCode:o,comment:p});case 5:l=e.sent,d=l.err,d?s.default.error("Withdraw failure"):(s.default.success("Withdraw success"),u());case 8:case"end":return e.stop()}},e)}),setTaskAssign:n.default.mark(function e(t,a){var r,u,i,c,o,p,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,i=a.call,c=r||[],o=c.taskCode,p=c.userId,e.next=5,i(_,{taskCode:o,userId:p});case 5:l=e.sent,d=l.err,d?s.default.error("Assign failure"):(s.default.success("Assign success"),u());case 8:case"end":return e.stop()}},e)}),featchTaskGroup:n.default.mark(function e(t,a){var r,u,i,c,o,p,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,i=a.put,c=r||[],o=c.taskCode,e.next=5,u(L,{taskCode:o});case 5:return p=e.sent,l=p.items,d=p.err,d&&s.default.error("getTaskGroup failure"),e.next=11,i({type:"saveTaskGroup",payload:{taskGroup:l}});case 11:case"end":return e.stop()}},e)}),fetchUserList:n.default.mark(function e(t,a){var r,s,u,i,c,o,p,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,i=r||[],c=i.operType,o=i.groupId,e.next=5,s(I,{operType:c,groupId:o});case 5:if(p=e.sent,l=p.items,d=p.err,!d){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,u({type:"saveUserList",payload:{userList:l}});case 12:case"end":return e.stop()}},e)}),getUserListByUserId:n.default.mark(function e(t,a){var r,s,u,i,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,r=a.call,s=a.put,e.next=4,r(U);case 4:if(u=e.sent,i=u.items,c=u.err,!c){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,s({type:"saveCurrentUserList",payload:{currentUserList:i}});case 11:case"end":return e.stop()}},e)}),getApprovalTaskHistory:n.default.mark(function e(t,a){var r,s,u,i,c,o,p,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,i=r||[],c=i.taskCode,e.next=5,s(A,{taskCode:c});case 5:if(o=e.sent,p=o.items,l=o.err,!l){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,u({type:"saveTaskHistory",payload:{taskHistoryList:p.approvalHistory,logList:p.taskLifecycle}});case 12:case"end":return e.stop()}},e)})}};t.default=H}}]);