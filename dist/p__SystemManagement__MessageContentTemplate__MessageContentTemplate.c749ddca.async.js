(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{QoX1:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var s=n(a("BMrR"));a("+L6B");var r=n(a("2/Rp"));a("jCWc");var o=n(a("kPKH"));a("y8nQ");var p=n(a("Vl3Y"));a("5NDa");var u=n(a("5rEg")),m=n(a("2Taf")),i=n(a("vZ4D")),d=n(a("l4Ni")),f=n(a("ujKo")),c=n(a("MhPg"));a("OaEy");var g=n(a("2fM7")),y=l(a("q1tI")),h=a("LLXN"),v=n(a("d8wp")),M=n(a("BN5G")),b=g.default.Option,C=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return a=(0,d.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(n))),a.state={},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.typeOptions,l=t.search;return y.default.createElement(p.default,{className:"ant-advanced-search-form search-wraper",layout:"vertical"},y.default.createElement(s.default,{gutter:{xs:0,sm:8,md:10,lg:20,xl:24},align:"bottom",type:"flex"},y.default.createElement(o.default,{xs:12,sm:12,lg:7,xxl:5},y.default.createElement(p.default.Item,{label:(0,h.formatMessage)({id:"systemManagement.template.templateName"})},e("templateName",{})(y.default.createElement(u.default,{className:v.default.inputvalue,placeholder:"Please Input ".concat((0,h.formatMessage)({id:"systemManagement.template.templateName"}))})))),y.default.createElement(o.default,{xs:12,sm:12,lg:7,xxl:5},y.default.createElement(p.default.Item,{label:(0,h.formatMessage)({id:"systemManagement.template.templateId"})},e("templateId",{})(y.default.createElement(u.default,{className:v.default.inputvalue,placeholder:"Please Input ".concat((0,h.formatMessage)({id:"systemManagement.template.templateId"}))})))),y.default.createElement(o.default,{xs:12,sm:12,lg:7,xxl:5},y.default.createElement(p.default.Item,{label:(0,h.formatMessage)({id:"systemManagement.template.templateType"})},e("type",{initialValue:""})(y.default.createElement(g.default,{className:v.default.inputvalue,placeholder:"Please Select",allowClear:!0},a.map(function(e){return y.default.createElement(b,{key:e.key,value:e.value},e.title)}))))),y.default.createElement(o.default,{xs:12,sm:12,lg:8,xxl:6},y.default.createElement(p.default.Item,null,y.default.createElement(r.default,{type:"primary",onClick:l},y.default.createElement(M.default,{type:"iconsousuo",style:{color:"#fff"}}),(0,h.formatMessage)({id:"app.common.search"}))))))}}]),t}(y.Component);t.default=C},ZTlW:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DjyN");var s=l(a("NUBc"));a("g9YV");var r=l(a("wCAj"));a("2qtc");var o=l(a("kLXV"));a("bbsP");var p=l(a("/wGt")),u=l(a("2Taf")),m=l(a("vZ4D")),i=l(a("l4Ni")),d=l(a("ujKo")),f=l(a("MhPg"));a("y8nQ");var c,g,y,h=l(a("Vl3Y")),v=n(a("q1tI")),M=a("Hx5s"),b=a("LLXN"),C=a("MuoO"),E=l(a("BN5G")),I=a("fwgp"),k=l(a("d8wp")),N=l(a("QoX1")),T=l(a("sf48")),w=h.default.create({})(N.default),S=(c=(0,C.connect)(function(e){var t=e.messageContentTemplate,a=e.loading;return{loading:a.effects,messageTemplate:t.data,updateTemplate:t.updateData}}),c((y=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,i.default)(this,(0,d.default)(t).call(this)),e.searchForm=v.default.createRef(),e.onClose=function(){e.setState({modifyVisible:!1})},e.onSave=function(){e.setState({modifyVisible:!1});var t=e.state.page.pageSize,a={pageNumber:1,pageSize:t};e.setState({page:a},function(){e.queryUserList()})},e.updateUser=function(t,a){var l=Object.assign({},a);e.setState({modifyVisible:!0,updateFlag:!0,groupTitle:"Message Content Template Modify",groupMenuInfo:l})},e.deleteConfirm=function(){var t=e.props.dispatch,a=e.state.groupMenuInfo,l={operType:"deleteById",roleId:a.roleId};t({type:"messageContentTemplate/updateTemplate",payload:l,callback:function(){e.queryUserList(),e.setState({deleteVisible:!1})}})},e.deleteCancel=function(){e.setState({deleteVisible:!1})},e.queryLog=function(){e.searchForm.current.validateFields(function(t,a){e.setState({searchTemplateName:a.templateName,searchTemplateId:a.templateId,searchType:a.type},function(){e.queryUserList()})})},e.pageChange=function(t,a){var l={pageNumber:t,pageSize:a};e.setState({page:l},function(){e.queryUserList()})},e.queryUserList=function(){var t=e.props.dispatch,a=e.state,l=a.searchTemplateName,n=a.searchTemplateId,s=a.searchType,r={templateName:l,templateId:n,type:s,pageNumber:e.state.page.pageNumber.toString(),pageSize:e.state.page.pageSize.toString()};t({type:"messageContentTemplate/getTemplateList",payload:r})},e.onShowSizeChange=function(t,a){var l={pageNumber:t,pageSize:a};e.setState({page:l},function(){e.queryUserList()})},e.state={modifyVisible:!1,deleteVisible:!1,updateFlag:!1,searchTemplateName:void 0,searchTemplateId:void 0,searchType:void 0,groupMenuInfo:{},typeOptions:[{key:"",value:"",title:"All"},{key:"1",value:"1",title:"Management Email"},{key:"2",value:"2",title:"Alert Email"},{key:"3",value:"3",title:"Information Email"},{key:"4",value:"4",title:"Information Message"},{key:"5",value:"5",title:"Alert Message"}],columns:[{title:(0,b.formatMessage)({id:"app.common.number"}),dataIndex:"index",key:"index",align:"center",width:60,render:function(t,a,l){return v.default.createElement("span",null,(e.state.page.pageNumber-1)*e.state.page.pageSize+l+1)}},{title:(0,b.formatMessage)({id:"systemManagement.template.templateName"}),dataIndex:"templateName",key:"templateName",ellipsis:!0,width:150},{title:(0,b.formatMessage)({id:"systemManagement.template.templateId"}),dataIndex:"templateId",key:"templateId",width:120},{title:(0,b.formatMessage)({id:"systemManagement.template.templateType"}),dataIndex:"type",key:"type",render:function(e,t){return v.default.createElement("span",null,(0,I.templateTypeFormat)(t.type))},ellipsis:!0,width:120},{title:(0,b.formatMessage)({id:"systemManagement.template.templateTitle"}),dataIndex:"title",key:"title",ellipsis:!0,width:120},{title:(0,b.formatMessage)({id:"systemManagement.template.templateContent"}),dataIndex:"content",key:"content",ellipsis:!0,width:180},{title:(0,b.formatMessage)({id:"systemManagement.template.keyword"}),dataIndex:"keyWord",key:"keyWord",ellipsis:!0,width:180},{title:(0,b.formatMessage)({id:"app.common.operation"}),dataIndex:"operation",key:"operation",width:100,align:"center",render:function(t,a){return v.default.createElement("span",{className:k.default.operation},v.default.createElement("a",{href:"#",onClick:function(){return e.updateUser(t,a)}},v.default.createElement(E.default,{type:"icon-edit",className:"operation-icon"})))}}],page:{pageNumber:1,pageSize:10}},e}return(0,f.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){this.queryUserList()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.messageTemplate,l=this.state,n=l.groupTitle,u=l.deleteVisible,m=l.groupMenuInfo,i=l.updateFlag,d=this.state,f=d.typeOptions,c=d.columns,g=d.page,y=d.modifyVisible,h=Object.assign([],f);return h.shift(),v.default.createElement(M.PageHeaderWrapper,null,v.default.createElement(w,{search:this.queryLog,ref:this.searchForm,typeOptions:f}),v.default.createElement(p.default,{closable:!1,title:n,width:700,onClose:this.onClose,visible:y},y&&v.default.createElement(T.default,{onCancel:this.onClose,onSave:this.onSave,groupMenuInfo:m,updateFlag:i,typeOptions:h})),v.default.createElement(o.default,{title:"CONFIRM",visible:u,onOk:this.deleteConfirm,onCancel:this.deleteCancel,cancelText:(0,b.formatMessage)({id:"app.common.cancel"}),okText:(0,b.formatMessage)({id:"app.common.confirm"})},v.default.createElement("span",null,"Please confirm that you want to delete this record?")),v.default.createElement("div",{className:k.default.content},v.default.createElement(r.default,{loading:t["messageContentTemplate/getTemplateList"],dataSource:a.items,columns:c,pagination:!1}),a.items&&a.items.length>0&&v.default.createElement(s.default,{showSizeChanger:!0,current:g.pageNumber,showTotal:function(){return"Total ".concat(a.totalCount," items")},onShowSizeChange:this.onShowSizeChange,onChange:this.pageChange,total:a.totalCount,pageSize:g.pageSize})))}}]),t}(v.Component),g=y))||g);t.default=S},d8wp:function(e,t,a){e.exports={inputValue:"antd-pro-pages-system-management-message-content-template-message-content-template-inputValue",content:"antd-pro-pages-system-management-message-content-template-message-content-template-content",tableTop:"antd-pro-pages-system-management-message-content-template-message-content-template-tableTop",title:"antd-pro-pages-system-management-message-content-template-message-content-template-title",userGroup:"antd-pro-pages-system-management-message-content-template-message-content-template-userGroup",groupTitle:"antd-pro-pages-system-management-message-content-template-message-content-template-groupTitle",treeWraper:"antd-pro-pages-system-management-message-content-template-message-content-template-treeWraper"}},sf48:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var s=l(a("BMrR"));a("jCWc");var r=l(a("kPKH"));a("+L6B");var o=l(a("2/Rp"));a("miYZ");var p=l(a("tsqr"));a("y8nQ");var u=l(a("Vl3Y")),m=l(a("2Taf")),i=l(a("vZ4D")),d=l(a("l4Ni")),f=l(a("ujKo")),c=l(a("MhPg"));a("OaEy");var g=l(a("2fM7"));a("5NDa");var y,h,v,M=l(a("5rEg")),b=n(a("q1tI")),C=a("LLXN"),E=a("MuoO"),I=M.default.TextArea,k=g.default.Option,N=function(e){function t(){var e;return(0,m.default)(this,t),e=(0,d.default)(this,(0,f.default)(t).call(this)),e.state={},e}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.groupMenuInfo,l=t.typeOptions;return b.default.createElement(b.Fragment,null,b.default.createElement(u.default,null,b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.templateName"}),labelCol:{span:4},wrapperCol:{span:8}},e("templateName",{rules:[{required:!0,message:"Please input Name of Alert User Group"}],initialValue:a&&a.templateName})(b.default.createElement(M.default,{disabled:!0,placeholder:"Please input"}))),b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.templateId"}),labelCol:{span:4},wrapperCol:{span:8}},e("templateId",{initialValue:a&&a.templateId})(b.default.createElement(M.default,{disabled:!0,placeholder:"Please input"}))),b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.templateType"}),labelCol:{span:4},wrapperCol:{span:8}},e("type",{rules:[{required:!0,message:"Type of email should not be empty"}],initialValue:a&&a.type})(b.default.createElement(g.default,{placeholder:"Please Select"},l.map(function(e){return b.default.createElement(k,{key:e.key,value:e.value},e.title)})))),b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.templateTitle"}),labelCol:{span:4},wrapperCol:{span:16}},e("title",{rules:[{required:!0,message:"Title of email should not be empty"}],initialValue:a&&a.title})(b.default.createElement(M.default,{placeholder:"Please input"}))),b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.templateContent"}),labelCol:{span:4},wrapperCol:{span:16}},e("content",{rules:[{required:!0,message:"Content of email should not be empty"}],initialValue:a&&a.content})(b.default.createElement(I,{rows:8,placeholder:"Please input"}))),b.default.createElement(u.default.Item,{label:(0,C.formatMessage)({id:"systemManagement.template.keyword"}),labelCol:{span:4},wrapperCol:{span:8}},e("keyWord",{initialValue:a&&a.keyWord})(b.default.createElement(M.default,{disabled:!0,placeholder:"Please input"})))))}}]),t}(b.Component),T=u.default.create()(N),w=(y=(0,E.connect)(function(e){var t=e.messageContentTemplate,a=e.loading;return{loading:a.effects,userGroup:t.saveUser,updateGroup:t.updateData}}),y((v=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,d.default)(this,(0,f.default)(t).call(this,e)),a.newUserRef=b.default.createRef(),a.onCancel=function(){a.props.onCancel()},a.onSave=function(){var e=a.props,t=e.dispatch,l=e.updateFlag;a.newUserRef.current.validateFields(function(e,n){if(console.log("err=======",e),!e)if(l){var s={templateId:n.templateId,templateName:n.templateName,type:n.type,title:n.title,content:n.content,keyWord:n.keyWord};t({type:"messageContentTemplate/updateTemplate",payload:s,callback:function(){p.default.success("save success"),a.props.onSave()}})}else{var r={templateId:n.templateId,templateName:n.templateName,title:n.title,content:n.content,type:n.type,keyWord:n.keyWord};t({type:"messageContentTemplate/newAlertUser",payload:r,callback:function(){p.default.success("success"),a.props.onSave()}})}})},a.state={},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.groupMenuInfo,a=e.typeOptions;return b.default.createElement(b.Fragment,null,b.default.createElement(T,{ref:this.newUserRef,groupMenuInfo:t,typeOptions:a}),b.default.createElement(s.default,{type:"flex",justify:"end",style:{position:"absolute",right:0,bottom:0,width:"100%",padding:"10px 16px",background:"#fff",textAlign:"right"}},b.default.createElement(r.default,null,b.default.createElement(o.default,{onClick:this.onCancel},"CANCEL"),b.default.createElement(o.default,{type:"primary",onClick:this.onSave,style:{marginLeft:"10px"}},"SAVE"))))}}]),t}(b.Component),h=v))||h),S=w;t.default=S}}]);