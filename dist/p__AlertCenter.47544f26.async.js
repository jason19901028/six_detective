(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{H7wn:function(e,t,a){e.exports={"column-title":"antd-pro-pages-alert-center-index-column-title","list-container":"antd-pro-pages-alert-center-index-list-container",alerts:"antd-pro-pages-alert-center-index-alerts",btns:"antd-pro-pages-alert-center-index-btns","btn-icon":"antd-pro-pages-alert-center-index-btn-icon",icon:"antd-pro-pages-alert-center-index-icon","detail-container":"antd-pro-pages-alert-center-index-detail-container","tab-content":"antd-pro-pages-alert-center-index-tab-content",fullscreen:"antd-pro-pages-alert-center-index-fullscreen","detail-des":"antd-pro-pages-alert-center-index-detail-des","fullscreen-icon":"antd-pro-pages-alert-center-index-fullscreen-icon","detail-comment":"antd-pro-pages-alert-center-index-detail-comment","comment-ul":"antd-pro-pages-alert-center-index-comment-ul","comment-box":"antd-pro-pages-alert-center-index-comment-box",txt:"antd-pro-pages-alert-center-index-txt","comment-commit":"antd-pro-pages-alert-center-index-comment-commit"}},RyH4:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.AlertDes=C,t.default=T,a("Q9mQ");var r=l(a("diRs"));a("14J3");var c=l(a("BMrR"));a("jCWc");var d=l(a("kPKH"));a("+L6B");var o=l(a("2/Rp")),i=l(a("qIgq"));a("bbsP");var u=l(a("/wGt"));a("BoS7");var s=l(a("Sdc0"));a("bP8k");var m=l(a("gFTJ"));a("tU7J");var f=l(a("wFql"));a("g9YV");var p=l(a("wCAj"));a("5NDa");var E=l(a("5rEg"));a("Znn+");var g=l(a("ZTPi")),b=n(a("q1tI")),y=a("LLXN"),v=l(a("mOP9")),h=l(a("BN5G")),x=l(a("H7wn")),w=g.default.TabPane,M=E.default.TextArea,N=p.default.Column,k=f.default.Paragraph,F=f.default.Text;function C(e){var t=e.alert,a=t.alertId,n=t.alertType,l=t.tradeDate,r=t.alertTimestamp,c=t.submissionTime,d=t.submitter,o=t.status,i=t.owner,u=t.description,f=t.handleToday;return b.default.createElement(m.default,{column:1},b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-id"})},a),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-type"})},n),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.trade-date"})},l),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-timestamp"})},r),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.submission-time"})},c),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.submitter"})},d),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.description"})},b.default.createElement(k,{ellipsis:{rows:3,expandable:!0}},u)),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.owner"})},i),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.status"})},o),b.default.createElement(m.default.Item,{label:b.default.createElement(y.FormattedMessage,{id:"alert-center.handle-today"})},b.default.createElement(s.default,{checkedChildren:"YES",unCheckedChildren:"NO",defaultChecked:!!f})))}function I(e){var t=e.visible,a=e.handleCancel;return b.default.createElement(u.default,{title:b.default.createElement(y.FormattedMessage,{id:"alert-center.assign"}),width:320,visible:t,onClose:a},"1323")}function S(e){var t=e.dataSource,a=(0,b.useState)(!1),n=(0,i.default)(a,2),l=n[0],r=n[1],c=(0,b.useState)([]),d=(0,i.default)(c,2),u=d[0],s=d[1];return b.default.createElement(b.default.Fragment,null,b.default.createElement(I,{visible:l,handleCancel:function(){return r(!1)}}),b.default.createElement(o.default,{style:{marginBottom:10},disabled:!u.length,onClick:function(){return r(!0)}},b.default.createElement(y.FormattedMessage,{id:"alert-center.assign"})),b.default.createElement(p.default,{border:!0,dataSource:t,rowKey:"epCode",scroll:{y:320},rowSelection:{onChange:function(e){s(e)}}},b.default.createElement(N,{align:"center",dataIndex:"market",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.market"})}),b.default.createElement(N,{align:"center",dataIndex:"epCode",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.ep-code"})}),b.default.createElement(N,{dataIndex:"epName",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.ep-name"})}),b.default.createElement(N,{dataIndex:"owner",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.owner"})}),b.default.createElement(N,{align:"center",dataIndex:"status",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.status"})}),b.default.createElement(N,{align:"center",dataIndex:"action",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.action"}),render:function(){return b.default.createElement(v.default,{to:"/system-management/workflow-design",style:{fontSize:12}},b.default.createElement(y.FormattedMessage,{id:"alert-center.enter-workflow"}))}})))}function O(e){var t=e.attachments;return b.default.createElement(r.default,{placement:"bottomRight",title:b.default.createElement(y.FormattedMessage,{id:"alert-center.attachement-list"}),content:b.default.createElement(c.default,{style:{padding:"6px 14px",width:240,maxHeight:150,overflowY:"auto"}},t.map(function(e,t){var a=e.name,n=e.url;return b.default.createElement(d.default,{key:n},b.default.createElement(F,{ellipsis:!0,style:{width:"100%"},title:a},b.default.createElement("a",{download:!0,href:n,style:{marginBottom:20}},t+1,". ",a)))}))},b.default.createElement(h.default,{type:"iconbiezhen"}),t.length)}function j(e){var t=e.comment,a=t.time,n=t.text,l=t.attachments;return b.default.createElement("li",{key:"".concat(a,"-").concat(n)},b.default.createElement(c.default,null,b.default.createElement(d.default,{span:18,style:{color:"#0D87D4"}},a),b.default.createElement(d.default,{span:5,offset:1,align:"right"},l&&b.default.createElement(O,{attachments:l}))),b.default.createElement(c.default,null,b.default.createElement(k,{ellipsis:{rows:3,expandable:!0}},n)))}function P(e){var t=e.log,a=t.time,n=t.text;return b.default.createElement(b.default.Fragment,null,b.default.createElement(d.default,{span:9},a),b.default.createElement(d.default,{span:15},b.default.createElement(k,{ellipsis:{rows:3,expandable:!0}},n)))}function T(e){var t=e.alert,a=(0,b.useState)(!1),n=(0,i.default)(a,2),l=n[0],r=n[1];return b.default.createElement(c.default,{className:x.default["detail-container"],gutter:16},b.default.createElement(d.default,{span:16,className:l?x.default.fullscreen:""},b.default.createElement(g.default,{defaultActiveKey:"1",className:x.default["detail-des"],tabBarExtraContent:b.default.createElement(h.default,{type:l?"iconfullscreen-exit":"iconfull-screen",className:x.default["fullscreen-icon"],onClick:function(){return r(!l)}})},b.default.createElement(w,{className:x.default["tab-content"],tab:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-detail"}),key:"1"},b.default.createElement(C,{alert:t})),b.default.createElement(w,{className:x.default["tab-content"],tab:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-item-list"}),key:"2"},b.default.createElement(S,{dataSource:t.tasks})))),b.default.createElement(d.default,{span:8},b.default.createElement(g.default,{defaultActiveKey:"1",className:x.default["detail-comment"]},b.default.createElement(w,{tab:b.default.createElement(y.FormattedMessage,{id:"alert-center.comment-history"}),key:"1"},b.default.createElement("ul",{className:x.default["comment-ul"]},t.comments.map(function(e){return b.default.createElement(j,{comment:e,key:e.time})})),b.default.createElement("div",{className:x.default["comment-box"]},b.default.createElement(M,{placeholder:"COMMENT",className:x.default.txt}),b.default.createElement(c.default,{className:x.default["comment-commit"],type:"flex",align:"middle",justify:"space-between"},b.default.createElement(d.default,{span:11,offset:1},b.default.createElement(o.default,{type:"primary"},"Phase")),b.default.createElement(d.default,{span:6},"attachments"),b.default.createElement(d.default,{span:6,align:"right"},b.default.createElement(o.default,{type:"primary"},"Submit"))))),b.default.createElement(w,{className:x.default["tab-content"],tab:b.default.createElement(y.FormattedMessage,{id:"alert-center.alert-lifecycle"}),key:"2"},b.default.createElement(c.default,{gutter:[10,10],style:{height:440,overflowY:"auto"}},t.logs.map(function(e){return b.default.createElement(P,{log:e,key:e.time})}))))))}},S58F:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,a("Q9mQ");var l=n(a("diRs")),r=n(a("q1tI")),c=n(a("BN5G")),d=n(a("H7wn")),o=r.default.createElement("div",null,r.default.createElement("p",null,"Content"),r.default.createElement("p",null,"Content"));function i(e){var t=e.children;return r.default.createElement(l.default,{placement:"bottomLeft",trigger:"click",content:o,className:d.default["column-title"]},r.default.createElement(c.default,{type:"iconfilter1",style:{fontSize:16,marginRight:5,cursor:"pointer",color:"rgba(17, 65, 108, 0.6)"}}),t)}},Y249:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("qIgq")),c=n(a("q1tI")),d=a("MuoO"),o=a("Hx5s"),i=l(a("RyH4")),u=l(a("gJEn")),s=l(a("H7wn"));function m(e){var t=e.dispatch,a=e.loading,n=e.alerts,l=(0,c.useState)(null),d=(0,r.default)(l,2),m=d[0],f=d[1];return(0,c.useEffect)(function(){t({type:"alertCenter/fetch"})},[]),(0,c.useEffect)(function(){if(n.length>0){var e=(0,r.default)(n,1),t=e[0];f(t)}},[n]),c.default.createElement(o.PageHeaderWrapper,null,c.default.createElement("div",{className:s.default["list-container"]},c.default.createElement(u.default,{dataSource:n,getAlert:function(e){return f(e)},loading:a["alertCenter/fetch"]}),m&&c.default.createElement(i.default,{alert:m})))}var f=(0,d.connect)(function(e){var t=e.loading,a=e.alertCenter.alerts;return{alerts:a,loading:t.effects}})(m);t.default=f},bP8k:function(e,t,a){"use strict";a.r(t);a("cIOH"),a("jhiw")},gFTJ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a("TSYQ"),r=a.n(l),c=a("Zm9Q"),d=a("6CfX"),o=a("ACnJ"),i=a("H84U");function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(e){var t,a=e.child,l=e.bordered,c=e.colon,d=e.type,o=e.layout,i=a.props,s=i.prefixCls,m=i.label,f=i.className,p=i.children,E=i.span,g=void 0===E?1:E,b={className:r()("".concat(s,"-item-label"),f,(t={},u(t,"".concat(s,"-item-colon"),c),u(t,"".concat(s,"-item-no-label"),!m),t)),key:"label"};return"vertical"===o&&(b.colSpan=2*g-1),l?"label"===d?n["createElement"]("th",b,m):n["createElement"]("td",{className:r()("".concat(s,"-item-content"),f),key:"content",colSpan:2*g-1},p):"vertical"===o?"content"===d?n["createElement"]("td",{colSpan:g,className:r()("".concat(s,"-item"),f)},n["createElement"]("span",{className:"".concat(s,"-item-content"),key:"content"},p)):n["createElement"]("td",{colSpan:g,className:r()("".concat(s,"-item"),f)},n["createElement"]("span",{className:r()("".concat(s,"-item-label"),u({},"".concat(s,"-item-colon"),c)),key:"label"},m)):n["createElement"]("td",{colSpan:g,className:r()("".concat(s,"-item"),f)},n["createElement"]("span",b,m),n["createElement"]("span",{className:"".concat(s,"-item-content"),key:"content"},p))},m=s;function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,a){return t&&g(e.prototype,t),a&&g(e,a),e}function y(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}var M=function(e){var t=e.children;return t},N=function(e,t){var a,l=[],r=null,o=Object(c["a"])(e);return o.forEach(function(e,c){var i=e;r||(a=t,r=[],l.push(r));var u=c===o.length-1,s=!0;u&&(s=!i.props.span||i.props.span===a,i=n["cloneElement"](i,{span:a}));var m=i.props.span,f=void 0===m?1:m;r.push(i),a-=f,a<=0&&(r=null,Object(d["a"])(0===a&&s,"Descriptions","Sum of column `span` in a line exceeds `column` of Descriptions."))}),l},k=function(e,t,a,l,r,d){var o=a.prefixCls,i=function(e,t,a){return n["createElement"](m,{child:e,bordered:l,colon:d,type:t,key:"".concat(t,"-").concat(e.key||a),layout:r})},u=[],s=[];return Object(c["a"])(e).forEach(function(e,t){u.push(i(e,"label",t)),"vertical"===r?s.push(i(e,"content",t)):l&&u.push(i(e,"content",t))}),"vertical"===r?[n["createElement"]("tr",{className:"".concat(o,"-row"),key:"label-".concat(t)},u),n["createElement"]("tr",{className:"".concat(o,"-row"),key:"content-".concat(t)},s)]:n["createElement"]("tr",{className:"".concat(o,"-row"),key:t},u)},F={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},C=function(e){function t(){var e;return E(this,t),e=y(this,h(t).apply(this,arguments)),e.state={screens:{}},e}return x(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.column;this.token=o["a"].subscribe(function(a){"object"===p(t)&&e.setState({screens:a})})}},{key:"componentWillUnmount",value:function(){o["a"].unsubscribe(this.token)}},{key:"getColumn",value:function(){var e=this.props.column;if("object"===p(e))for(var t=0;t<o["b"].length;t++){var a=o["b"][t];if(this.state.screens[a]&&void 0!==e[a])return e[a]||F[a]}return"number"===typeof e?e:3}},{key:"render",value:function(){var e=this;return n["createElement"](i["a"],null,function(t){var a,l=t.getPrefixCls,d=e.props,o=d.className,i=d.prefixCls,u=d.title,s=d.size,m=d.children,p=d.bordered,E=void 0!==p&&p,g=d.layout,b=void 0===g?"horizontal":g,y=d.colon,v=void 0===y||y,h=d.style,x=l("descriptions",i),w=e.getColumn(),M=Object(c["a"])(m).map(function(e){return n["isValidElement"](e)?n["cloneElement"](e,{prefixCls:x}):null}).filter(function(e){return e}),F=N(M,w);return n["createElement"]("div",{className:r()(x,o,(a={},f(a,"".concat(x,"-").concat(s),"default"!==s),f(a,"".concat(x,"-bordered"),!!E),a)),style:h},u&&n["createElement"]("div",{className:"".concat(x,"-title")},u),n["createElement"]("div",{className:"".concat(x,"-view")},n["createElement"]("table",null,n["createElement"]("tbody",null,F.map(function(e,t){return k(e,t,{prefixCls:x},E,b,v)})))))})}}]),t}(n["Component"]);C.defaultProps={size:"default",column:F},C.Item=M;t["default"]=C},gJEn:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=g,a("2qtc");var r=l(a("kLXV"));a("14J3");var c=l(a("BMrR"));a("+L6B");var d=l(a("2/Rp")),o=l(a("qIgq"));a("g9YV");var i=l(a("wCAj")),u=n(a("q1tI")),s=a("LLXN"),m=l(a("BN5G")),f=l(a("S58F")),p=l(a("H7wn")),E=i.default.Column;function g(e){var t=e.dataSource,a=e.loading,n=e.getAlert,l=(0,u.useState)([]),g=(0,o.default)(l,2),b=g[0],y=g[1];return u.default.createElement("div",{className:p.default.alerts},u.default.createElement(c.default,{className:p.default.btns},u.default.createElement(d.default,{type:"primary",disabled:!b.length},u.default.createElement(m.default,{type:"iconqizhi",className:p.default["btn-icon"]}),u.default.createElement(s.FormattedMessage,{id:"alert-center.claim"})),u.default.createElement(d.default,{disabled:!b.length},u.default.createElement(m.default,{type:"iconic_circle_close",className:p.default["btn-icon"]}),u.default.createElement(s.FormattedMessage,{id:"alert-center.close"})),u.default.createElement(d.default,{disabled:!b.length},u.default.createElement(m.default,{type:"iconbatch-export",className:p.default["btn-icon"]}),u.default.createElement(s.FormattedMessage,{id:"alert-center.export"}))),u.default.createElement(i.default,{border:!0,dataSource:t,rowKey:"alertId",loading:a,rowSelection:{onChange:function(e){y(e)}},onRow:function(e){return{onClick:function(){n(e)}}}},u.default.createElement(E,{ellipsis:!0,width:150,dataIndex:"alertId",title:u.default.createElement(f.default,null,u.default.createElement(s.FormattedMessage,{id:"alert-center.alert-id"}))}),u.default.createElement(E,{align:"center",dataIndex:"alertType",title:u.default.createElement(f.default,null,u.default.createElement(s.FormattedMessage,{id:"alert-center.alert-type"}))}),u.default.createElement(E,{align:"center",dataIndex:"tradeDate",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.trade-date"})}),u.default.createElement(E,{width:120,align:"center",dataIndex:"alertTimestamp",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.alert-timestamp"})}),u.default.createElement(E,{align:"center",width:70,dataIndex:"itemsTotal",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.items-total"})}),u.default.createElement(E,{dataIndex:"owner",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.owner"})}),u.default.createElement(E,{align:"center",width:80,dataIndex:"status",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.status"})}),u.default.createElement(E,{align:"center",width:80,dataIndex:"handleToday",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.handle-today"})}),u.default.createElement(E,{align:"center",dataIndex:"action",title:u.default.createElement(s.FormattedMessage,{id:"alert-center.action"}),render:function(){return u.default.createElement(c.default,{className:p.default.btns},u.default.createElement(m.default,{type:"iconqizhi",className:p.default.icon,title:(0,s.formatMessage)({id:"alert-center.claim"}),onClick:function(){return r.default.confirm({title:"Confirm",content:"Are you sure claim this alert?",okText:"Sure",cancelText:"Cancel",onOk:function(){console.log(123)}})}}),u.default.createElement(m.default,{type:"iconic_circle_close",className:p.default.icon,title:(0,s.formatMessage)({id:"alert-center.close"})}),u.default.createElement(m.default,{type:"iconbatch-export",className:p.default.icon,title:(0,s.formatMessage)({id:"alert-center.export"})}))}})))}},jhiw:function(e,t,a){e.exports={"ant-descriptions-title":"ant-descriptions-title","ant-descriptions-view":"ant-descriptions-view","ant-descriptions-row":"ant-descriptions-row","ant-descriptions-item-label":"ant-descriptions-item-label","ant-descriptions-item-colon":"ant-descriptions-item-colon","ant-descriptions-item-no-label":"ant-descriptions-item-no-label","ant-descriptions-item-content":"ant-descriptions-item-content","ant-descriptions-item":"ant-descriptions-item","ant-descriptions-middle":"ant-descriptions-middle","ant-descriptions-small":"ant-descriptions-small","ant-descriptions-bordered":"ant-descriptions-bordered"}}}]);