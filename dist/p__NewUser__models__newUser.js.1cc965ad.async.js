(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{Ix9k:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),s=n(t("d6i3")),u=n(t("ywRk")),c=u.default.addUser,o=u.default.getMenuUserGroup,d={namespace:"newUser",state:{saveUser:{},data:[]},effects:{newUser:s.default.mark(function e(a,t){var n,r,u,o,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,u=t.call,o=t.put,e.next=4,u(c,{param:n});case 4:if(d=e.sent,"1"!==d.bcjson.flag&&d.bcjson.flag){e.next=9;break}return e.next=8,o({type:"save",payload:d.bcjson.items});case 8:r();case 9:case"end":return e.stop()}},e)}),getMenuUserGroup:s.default.mark(function e(a,t){var n,r,u,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,u=t.put,e.next=4,r(o,{param:n});case 4:if(c=e.sent,"1"!==c.bcjson.flag){e.next=9;break}if(!c.bcjson.items){e.next=9;break}return e.next=9,u({type:"getDatas",payload:c.bcjson});case 9:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,r.default)({},e,{saveUser:a.payload})},getDatas:function(e,a){return(0,r.default)({},e,{data:a.payload})}}};a.default=d}}]);