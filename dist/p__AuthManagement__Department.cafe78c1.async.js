(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"4qiu":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/zsF");var r=l(a("PArb")),u=l(a("qIgq"));a("y8nQ");var d=l(a("Vl3Y"));a("5NDa");var c=l(a("5rEg")),o=l(a("Y/ft"));a("g9YV");var f=l(a("wCAj")),i=n(a("q1tI")),s=f.default.Column,m=i.default.createContext();function p(e){var t=e.editing,a=e.dataIndex,n=e.title,l=e.record,r=e.children,u=(0,o.default)(e,["editing","dataIndex","title","record","children"]);return i.default.createElement(m.Consumer,null,function(e){var o=e.getFieldDecorator;return i.default.createElement("td",u,t?i.default.createElement(d.default.Item,{style:{margin:0}},o(a,{rules:[{required:!0,message:"Please Input ".concat(n,"!")}],initialValue:l[a]})(i.default.createElement(c.default,null))):r)})}function v(e){var t=e.depart,a=e.form,n=(0,i.useState)(""),l=(0,u.default)(n,2),d=l[0],c=l[1];return i.default.createElement(m.Provider,{value:a},i.default.createElement(f.default,{bordered:!0,rowKey:"extendKey",dataSource:t.extendInfo,components:{body:{cell:p}}},i.default.createElement(s,{title:"\u53c2\u6570ID",dataIndex:"extendKey",width:"40",onCell:function(e){return{record:e,dataIndex:"extendKey",title:"\u53c2\u6570ID",editing:d===e.extendKey}}}),i.default.createElement(s,{title:"\u53c2\u6570\u540d\u79f0",dataIndex:"extendKeyName",onCell:function(e){return{record:e,dataIndex:"extendKeyName",editing:d===e.extendKey}}}),i.default.createElement(s,{title:"\u503c",dataIndex:"extendValue",width:"40",onCell:function(e){return{record:e,dataIndex:"extendValue",editing:d===e.extendKey}}}),i.default.createElement(s,{title:"\u8bf4\u660e",dataIndex:"remark",onCell:function(e){return{record:e,dataIndex:"remark",editing:d===e.extendKey}}}),i.default.createElement(s,{title:"\u64cd\u4f5c",dataIndex:"action",width:"14%",render:function(e,t){var a=d===t.extendKey;return a?i.default.createElement("span",null,i.default.createElement(m.Consumer,null,function(){return i.default.createElement("a",null,"\u4fdd\u5b58")}),i.default.createElement(r.default,{type:"vertical"}),i.default.createElement("a",{onClick:function(){return c("")}},"\u53d6\u6d88")):i.default.createElement("a",{onClick:function(){return c(t.extendKey)}},"\u7f16\u8f91")}})))}var g=d.default.create()(v);t.default=g},"9pXR":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("jCWc");var r=l(a("kPKH"));a("7Kak");var u=l(a("9yH6"));a("14J3");var d=l(a("BMrR"));a("5NDa");var c=l(a("5rEg")),o=l(a("qIgq"));a("ozfa");var f=l(a("MJZm")),i=n(a("q1tI")),s=a("MuoO"),m=a("fN+A"),p=l(a("hcA5")),v=l(a("xDnz")),g=l(a("f7gc")),E=l(a("HBR5"));function y(e){var t=e.orgs,a=e.curSelectOrg,n=e.handleDepart;function l(e,t){var a=t.node.props,l=a.title,r=a.eventKey,u=a.parentId;n({departmentId:r,departmentName:l,parentDepartmentId:u})}return i.default.createElement(f.default,{blockNode:!0,selectable:!0,onSelect:l,selectedKeys:[a.departmentId],defaultSelectedKeys:[a.departmentId]},(0,m.loopOrgs)(t))}function h(e){var t=e.roleGroups,a=e.handleRoleGroup;function n(e,t){var n=t.node.props,l=n.title,r=n.roleId,u=n.groupId;a({roleId:r,roleName:l,groupId:u})}return i.default.createElement(f.default,{blockNode:!0,selectable:!0,onSelect:n},(0,m.loopRoleGroups)(t))}function I(e){var t=e.dispatch,a=e.loading,n=e.roleGroups,l=e.orgs,f=e.departments,s=e.employees,m=(0,i.useState)("orgs"),I=(0,o.default)(m,2),x=I[0],b=I[1];(0,i.useEffect)(function(){t({type:"auth/queryOrgs",params:{treeLevel:"2"}})},[]);var k=(0,i.useState)({}),q=(0,o.default)(k,2),w=q[0],N=q[1];function C(e){var a=e.departmentId;a&&(t({type:"auth/queryDepartments",params:{departmentId:a}}),t({type:"auth/queryEmployees",params:{departmentId:a}}))}function D(e){N(e),C(e)}function S(e){console.log(e)}function P(e){var a=e.target.value;"org"===a?C(w):t({type:"auth/queryRoleGroups"}),b(e.target.value)}return(0,i.useEffect)(function(){l.length>0&&(N(l[0]),C(l[0]))},[l]),a["auth/queryOrgs"]?i.default.createElement("p",null,"loading"):0===l.length?i.default.createElement("p",null,"\u6682\u65e0\u6570\u636e"):i.default.createElement("div",{className:E.default.container},i.default.createElement(d.default,null,i.default.createElement(r.default,{span:5},i.default.createElement(d.default,null,i.default.createElement(c.default.Search,{width:"100%",placeholder:"input search text",onSearch:function(e){return console.log(e)},style:{width:200}})),i.default.createElement(d.default,{className:E.default.m},i.default.createElement(u.default.Group,{onChange:P,defaultValue:"orgs"},i.default.createElement(u.default.Button,{value:"orgs"},"\u7ec4\u7ec7\u67b6\u6784"),i.default.createElement(u.default.Button,{value:"roles"},"\u62a5\u9001\u7ba1\u7406\u89d2\u8272"))),i.default.createElement(d.default,null,"orgs"===x?i.default.createElement(y,{orgs:l,curSelectOrg:w,handleDepart:D}):i.default.createElement(h,{roleGroups:n,handleRoleGroup:S}))),i.default.createElement(r.default,{span:18,offset:1},"orgs"===x?i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default,null,i.default.createElement(p.default,{curSelectOrg:w,departments:f})),i.default.createElement(d.default,null,i.default.createElement(v.default,{loading:a,employees:s,departments:f}))):i.default.createElement(d.default,null,i.default.createElement(g.default,null)))))}var x=function(e){var t=e.loading,a=e.auth,n=a.orgs,l=a.employees,r=a.departments,u=a.roleGroups;return{loading:t.effects,orgs:n,employees:l,departments:r,roleGroups:u}},b=(0,s.connect)(x)(I);t.default=b},HBR5:function(e,t,a){e.exports={container:"antd-pro-pages-auth-management-department-index-container",m:"antd-pro-pages-auth-management-department-index-m"}},NbXC:function(e,t,a){e.exports={container:"antd-pro-pages-auth-management-department-department-container","parent-group":"antd-pro-pages-auth-management-department-department-parent-group","child-group":"antd-pro-pages-auth-management-department-department-child-group",list:"antd-pro-pages-auth-management-department-department-list"}},b5Lz:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("d6i3"));a("2qtc");var u=l(a("kLXV"));a("OaEy");var d=l(a("2fM7"));a("14J3");var c=l(a("BMrR"));a("jCWc");var o=l(a("kPKH"));a("y8nQ");var f=l(a("Vl3Y"));a("5NDa");var i=l(a("5rEg")),s=l(a("1l/V")),m=l(a("qIgq")),p=n(a("q1tI")),v=l(a("4qiu"));function g(e){var t=e.type,a=e.isModalVisible,n=e.depart,l=e.childDept,g=e.form,E=e.close,y=e.save,h=1===t?"\u65b0\u589e":"\u4fee\u6539",I=(0,p.useState)({}),x=(0,m.default)(I,2),b=x[0],k=x[1];function q(){return w.apply(this,arguments)}function w(){return w=(0,s.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:g.validateFields(function(e,a){e||y(t,a)});case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}return(0,p.useEffect)(function(){1!==t?(k(n?n||{}:l||{}),console.log(9090)):k({})},[t,n,l]),p.default.createElement(u.default,{title:"".concat(h,"\u90e8\u95e8"),width:"50%",visible:a,onOk:q,onCancel:E},p.default.createElement("div",null,p.default.createElement(f.default,{layout:"inline"},p.default.createElement(c.default,null,p.default.createElement(o.default,{span:12},p.default.createElement(f.default.Item,{label:"\u90e8\u95e8ID",colon:!0},g.getFieldDecorator("departmentId",{initialValue:b.departmentId||"",rules:[{required:!0,message:"Please input your departmentId!"}]})(p.default.createElement(i.default,{placeholder:"\u90e8\u95e8ID",disabled:1!==t})))),p.default.createElement(o.default,{span:12},p.default.createElement(f.default.Item,{label:"\u90e8\u95e8\u540d\u79f0",colon:!0},g.getFieldDecorator("departmentName",{initialValue:b.departmentName||"",rules:[{required:!0,message:"Please input your departmentName!"}]})(p.default.createElement(i.default,{placeholder:"\u90e8\u95e8\u540d\u79f0"}))))),p.default.createElement(c.default,{gutter:[16,30]},p.default.createElement(o.default,{span:12},p.default.createElement(f.default.Item,{label:"\u90e8\u95e8\u7c7b\u578b",colon:!0},g.getFieldDecorator("departmentType",{initialValue:b.departmentType||"1",rules:[{required:!0,message:"Please input your departmenType!"}]})(p.default.createElement(d.default,{style:{width:160}},p.default.createElement(d.default.Option,{value:"0"},"\u516c\u53f8"),p.default.createElement(d.default.Option,{value:"1"},"\u90e8\u95e8")))))))),b.extendInfo&&p.default.createElement(v.default,{depart:b}))}var E=f.default.create()(g);t.default=E},f7gc:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI"));function r(){return l.default.createElement("div",null,"\u89d2\u8272\u6210\u5458")}var u=r;t.default=u},hcA5:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("p0pE")),u=l(a("d6i3"));a("miYZ");var d=l(a("tsqr"));a("Mwp2");var c=l(a("VXEj"));a("+L6B");var o=l(a("2/Rp")),f=l(a("1l/V")),i=l(a("qIgq")),s=n(a("q1tI")),m=a("MuoO"),p=l(a("TSYQ")),v=l(a("b5Lz")),g=l(a("NbXC"));function E(e){var t=e.dispatch,a=e.loading,n=e.curSelectOrg,l=e.departments,m=(0,s.useState)({}),E=(0,i.default)(m,2),y=E[0],h=E[1],I=(0,s.useState)({}),x=(0,i.default)(I,2),b=x[0],k=x[1],q=(0,s.useState)([]),w=(0,i.default)(q,2),N=w[0],C=w[1];(0,s.useEffect)(function(){if(l.length>0){var e=l.find(function(e){return e.departmentId===n.departmentId});e&&(h(e),C(e.childMenus))}},[l]);var D=(0,s.useState)(1),S=(0,i.default)(D,2),P=S[0],V=S[1],O=(0,s.useState)(!1),K=(0,i.default)(O,2),M=K[0],A=K[1];function F(){if(k(null),l.length>0){var e=l.find(function(e){return e.departmentId===n.departmentId});e&&h(e)}V(2),A(!0)}function _(){return R.apply(this,arguments)}function R(){return R=(0,f.default)(u.default.mark(function e(){var a,r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(l.length>0)){e.next=14;break}if(a=l.find(function(e){return e.departmentId===n.departmentId}),!a){e.next=14;break}return r=a.departmentId,e.prev=4,e.next=7,t({type:"auth/delDepartment",params:{departmentId:r}});case 7:C(N.filter(function(e){return e.departmentId!==r})),d.default.success("delete success"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),d.default.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[4,11]])})),R.apply(this,arguments)}function j(e,t){return X.apply(this,arguments)}function X(){return X=(0,f.default)(u.default.mark(function e(a,l){var c,o,f,i,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=1===a?"auth/addDepartment":"auth/updateDepartment",o=l.departmentId,f=l.departmentName,i=l.departmentType,s=n.departmentId,e.prev=3,e.next=6,t({type:c,params:{departmentId:o,departmentName:f,departmentType:i,extendInfo:"",showorder:9999,parentDepartmentId:s}});case 6:C(1===P?N.concat(l):N.map(function(e){return e.departmentId===o?(0,r.default)({},e,l):e})),A(!1),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),d.default.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])})),X.apply(this,arguments)}function z(){V(1),A(!0)}function G(e){return B.apply(this,arguments)}function B(){return B=(0,f.default)(u.default.mark(function e(t){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:h(null),k(t),V(2),A(!0);case 4:case"end":return e.stop()}},e)})),B.apply(this,arguments)}function H(e){return L.apply(this,arguments)}function L(){return L=(0,f.default)(u.default.mark(function e(a){var n;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.departmentId,e.prev=1,e.next=4,t({type:"auth/delDepartment",params:{departmentId:n}});case 4:C(N.filter(function(e){return e.departmentId!==n})),d.default.success("delete success"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),d.default.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),L.apply(this,arguments)}return s.default.createElement("div",{className:g.default.container},s.default.createElement("div",{className:(0,p.default)(g.default["child-group"])},s.default.createElement(v.default,{type:P,depart:y,childDept:b,isModalVisible:M,close:function(){return A(!1)},save:function(e,t){return j(e,t)}}),s.default.createElement(c.default,{className:(0,p.default)(g.default.list),size:"small",header:s.default.createElement("div",null,s.default.createElement(o.default,{type:"primary",onClick:z},"\u65b0\u589e\u4e0b\u7ea7\u90e8\u95e8"),s.default.createElement(o.default,{type:"primary",onClick:F},"\u4fee\u6539\u90e8\u95e8"),s.default.createElement(o.default,{type:"danger",onClick:_},"\u5220\u9664\u90e8\u95e8")),dataSource:N,loading:a["auth/queryDepartments"],pagination:N.length>5&&{pageSize:5},renderItem:function(e){return s.default.createElement(c.default.Item,{actions:[s.default.createElement("a",{key:"list-loadmore-edit",onClick:function(){return G(e)}},"\u4fee\u6539"),s.default.createElement("a",{key:"list-loadmore-more",onClick:function(){return H(e)}},"\u5220\u9664")]},e.departmentName)}})))}var y=function(e){var t=e.loading;return{loading:t.effects}},h=(0,m.connect)(y)(E);t.default=h},isHx:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var r=l(a("kLXV"));a("y8nQ");var u=l(a("Vl3Y"));a("5NDa");var d=l(a("5rEg")),c=l(a("qIgq"));a("nRaC");var o=l(a("5RzL")),f=n(a("q1tI")),i=o.default.TreeNode;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e){var t=e.children,a=e.departmentId,n=e.departmentName,l=e.parentDepartmentId;return t?f.default.createElement(i,{key:a,title:n,parentId:l},s(t)):f.default.createElement(i,{key:a,title:n,parentId:l})})}function m(e){var t=e.user,a=e.form,n=e.departs,l=(0,f.useState)({}),r=(0,c.default)(l,2),i=r[0],m=r[1];console.log(i),console.log(n);var p=a.getFieldDecorator;function v(e){console.log(e),m(e)}var g={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return f.default.createElement(u.default,g,f.default.createElement(u.default.Item,{label:"\u5458\u5de5\u59d3\u540d",hasFeedback:!0},p("name",{initialValue:t.customerName||"",rules:[{required:!0,message:"Please input your name!"}]})(f.default.createElement(d.default,{placeholder:"Please input your name"}))),f.default.createElement(u.default.Item,{label:"\u767b\u5f55\u540d",hasFeedback:!0},p("logName",{initialValue:t.loginName||"",rules:[{required:!0,message:"Please input your log name!"}]})(f.default.createElement(d.default,{placeholder:"Please input your log name"}))),f.default.createElement(u.default.Item,{label:"\u516c\u53f8\u90e8\u95e8",hasFeedback:!0},p("departName",{initialValue:t.departmentName||"",rules:[{required:!0,message:"Please select your depart!"}]})(f.default.createElement(o.default,{allowClear:!0,dropdownStyle:{maxHeight:200,overflow:"auto"},placeholder:"Please select",treeDefaultExpandAll:!0,onChange:v},s(n)))),f.default.createElement(u.default.Item,{label:"\u90ae\u7bb1\u5730\u5740",hasFeedback:!0},p("email",{initialValue:t.email||"",rules:[{required:!1,message:"Please input your email!"}]})(f.default.createElement(d.default,{placeholder:"Please input your email"}))))}function p(e){var t=e.visible,a=e.user,n=e.departments,l=e.form,u=e.handleCancel,d=e.save,c=l.validateFields,o=a?"\u7f16\u8f91":"\u65b0\u589e";function i(){c(function(e,t){e||d(t)})}return f.default.createElement(r.default,{title:"".concat(o,"\u5458\u5de5"),visible:t,onOk:i,onCancel:u},f.default.createElement(m,{user:a||{},form:l,departs:n}))}var v=u.default.create({name:"User"})(p);t.default=v},xDnz:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/zsF");var r=l(a("PArb"));a("+L6B");var u=l(a("2/Rp")),d=l(a("qIgq"));a("g9YV");var c=l(a("wCAj")),o=n(a("q1tI")),f=l(a("isHx")),i=c.default.Column;function s(e){var t=e.loading,a=e.employees,n=e.departments,l=(0,o.useState)(!1),s=(0,d.default)(l,2),m=s[0],p=s[1],v=(0,o.useState)(null),g=(0,d.default)(v,2),E=g[0],y=g[1];function h(e){p(!0),y(e)}function I(e){console.log(e),p(!1)}return o.default.createElement("div",{className:"user"},o.default.createElement(f.default,{visible:m,departs:n,user:E,handleCancel:function(){return p(!1)},save:function(e){return I(e)}}),o.default.createElement(u.default,{type:"primary",onClick:function(){return p(!0)}},"\u6dfb\u52a0\u5458\u5de5"),o.default.createElement(c.default,{bordered:!0,rowKey:"loginName",loading:t["auth/queryEmployees"],dataSource:a,pagination:{pageSize:5}},o.default.createElement(i,{title:"\u5458\u5de5\u59d3\u540d",dataIndex:"customerName",align:"center"}),o.default.createElement(i,{title:"\u767b\u5f55\u540d",dataIndex:"loginName",align:"center"}),o.default.createElement(i,{title:"\u516c\u53f8\u90e8\u95e8",dataIndex:"departmentName",align:"center"}),o.default.createElement(i,{title:"\u90ae\u7bb1\u5730\u5740",dataIndex:"email",align:"center"}),o.default.createElement(i,{title:"Action",key:"\u64cd\u4f5c",width:"120px",align:"center",render:function(e){return o.default.createElement("span",null,o.default.createElement("a",{onClick:function(){return h(e)}},"\u7f16\u8f91"),o.default.createElement(r.default,{type:"vertical"}),o.default.createElement("a",null,"\u67e5\u770b\u804c\u80fd"))}})))}var m=s;t.default=m}}]);