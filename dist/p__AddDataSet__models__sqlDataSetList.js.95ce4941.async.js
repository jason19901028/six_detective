(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{s5Ey:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("p0pE")),c=n(a("gWZ8")),r=n(a("d6i3"));a("miYZ");var s=n(a("tsqr")),u=n(a("Y/ft")),i=n(a("ywRk")),l=i.default.getDataSourceList,d=i.default.getTableData,f={namespace:"sqlDataSetList",state:{activeKey:"",totalCount:0,metaDataTableList:[],dataSourceList:[],connectionId:""},effects:{getDataSourceConfig:r.default.mark(function e(t,a){var n,o,c,i,d,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,c=a.put,i=n.connectionId,d=(0,u.default)(n,["connectionId"]),e.next=5,o(l,{param:d});case 5:if(f=e.sent,!f||"1"!==f.bcjson.flag){e.next=15;break}return e.next=9,c({type:"setDataSourceList",payload:f.bcjson.items});case 9:return e.next=11,c({type:"clear",payload:[]});case 11:return e.next=13,c({type:"getMetadataTableInfo",payload:{connection_id:i||f.bcjson.items[0]&&f.bcjson.items[0].connectionId,pageNumber:"1",pageSize:"30",ignoreMdType:"U"}});case 13:e.next=16;break;case 15:s.default.error(f.bcjson.msg.substring(0,1e3));case 16:case"end":return e.stop()}},e)}),getMetadataTableInfo:r.default.mark(function e(t,a){var n,o,u,i,l,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,u=a.put,i=a.select,e.next=4,i(function(e){var t=e.sqlDataSetList;return t.metaDataTableList});case 4:return l=e.sent,e.next=7,o(d,{param:n});case 7:if(f=e.sent,!f||"1"!==f.bcjson.flag){e.next=13;break}return e.next=11,u({type:"setDataTableList",payload:{list:[].concat((0,c.default)(l),(0,c.default)(f.bcjson.items.map(function(e){return{id:e.tableId,name:"".concat(e.schemName,".").concat(e.tableName),icon:"iconbianjiqi_charubiaoge",otherInfo:e}}))),totalCount:f.bcjson.totalCount}});case 11:e.next=14;break;case 13:s.default.error(f.bcjson.msg.substring(0,1e3));case 14:case"end":return e.stop()}},e)})},reducers:{changeActive:function(e,t){return(0,o.default)({},e,{activeKey:t.payload})},clear:function(e){return(0,o.default)({},e,{metaDataTableList:[]})},setDataTableList:function(e,t){var a=t.payload,n=a.list,c=a.totalCount;return(0,o.default)({},e,{metaDataTableList:n,totalCount:c})},setDataSourceList:function(e,t){return(0,o.default)({},e,{dataSourceList:t.payload})},saveConnectionId:function(e,t){return(0,o.default)({},e,{connectionId:t.payload.connectionId})}}};t.default=f}}]);