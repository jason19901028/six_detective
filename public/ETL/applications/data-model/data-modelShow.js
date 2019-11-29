var _extends=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t};define(function(require,exports,module){require("plugins/jstree/dist/jstree"),require("plugins/jstree/dist/themes/default/style.css"),require("plugins/select2/js/select2.js"),require("plugins/select2/css/select2.css"),require("plugins/bootstrap-fileinput/bootstrap-fileinput.js"),require("plugins/bootstrap-fileinput/bootstrap-fileinput.css"),require("plugins/codemirror/codemirror.css"),require("plugins/codemirror/codemirror.js"),require("plugins/select2/css/select2-compatible.css"),require("plugins/codemirror/addon/hint/show-hint.css"),require("plugins/codemirror/addon/hint/show-hint.js"),require("plugins/codemirror/addon/hint/sql-hint.js"),require("plugins/codemirror/clike"),require("plugins/codemirror/sql"),require("plugins/sql-formatter-2.3.0/sql-formatter"),require("plugins/drag/kd_drag.js");var o=location.hash.replace("#",".page-"),t=new(require("assets/js/global/treeCommon"))(o,"#J_dataModel_tree","#J_dataModel_query_btn","#J_dataModel_query","7"),i={_load:function(){t.getTask(),i.getdict(),i.field()},getTaskList:function(t){var a={folderId:$("#J_dataModel_tree li[aria-selected=true]").attr("folderId")};a=_extends(a,t),$.kingdom.getList({apiName:"kingdom.retl.get_folder_menu",apiVision:"v4.0",params:a,tableId:"J_dataModal_list",template:"data-model/template/modal-list.handlebars",cb:i.getTaskList})},getdict:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_all_dict_data_list","v4.0",t||{},function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;a&&0<a.length&&(i.dict=a[0].DATA_MODEL_THEME)}})},field:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_all_dict_data_list","v4.0",t||{},function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;a&&0<a.length&&(i.fieldType=a[0].FIELD_TYPE)}})},getDataModel:function(t){var a={folderId:$("#J_dataModel_tree li[aria-selected=true]").attr("folderId")};$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_model_info","v4.0",a,function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;a&&0<a.length?require.async("./template/modal-list.handlebars",function(t){$("#J_dataModal_list").html(t(a)),$("#J_dataModal_list tr:first").click()}):($(o+" #J_dataModal_list").html('<tr class="lastTr"><td colspan="9" class="t-c">暂无数据</td></tr>'),$(o+" #J_dataModal_type_list").html('<tr class="lastTr"><td colspan="10" class="t-c">暂无数据</td></tr>'))}else toastr.error(t.bcjson.msg),$(o+" #J_dataModal_list").html('<tr class="lastTr"><td colspan="9" class="t-c">暂无数据</td></tr>'),$(o+" #J_dataModal_type_list").html('<tr class="lastTr"><td colspan="10" class="t-c">暂无数据</td></tr>')})},treeData:function(s){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_folder_menu","v4.0",{fileType:"7"},function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items,e="";a&&0<a.length&&$.each(a,function(t,a){foldName=a.foldName.substring(a.foldName.lastIndexOf("/")+1,a.foldName.length),e+='\n                            <option value="'+a.folderId+'"> '+foldName+" </option>\n                        "});var l="";for(var d in i.dict)l+='<option value="'+d+'">'+i.dict[d]+"</option>";var n='\n                <tr edit="1" addNew="'+s.addNew+'">\n                    <td> <input class="form-control input-small" value="'+s.tableId+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.chianeseName+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.englishName+'"> </td>\n                    <td class="foldername"> \n                        <select class="form-control input-small">\n                            '+e+'\n                        </select> \n                    </td>\n                    <td> <input class="form-control input-small" value="'+s.dbTablespace+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.dbUser+'"> </td>\n                    <td class="dictname">\n                        <select class="form-control input-small">\n                            '+l+'\n                        </select>\n                    </td>\n                    <td> <input class="form-control input-small" value="'+s.remark+'"> </td>\n                    <td> \n                        <a class="J_dataModel_save">保存</a>\n                        <a class="J_dataModel_edit hide">编辑</a> \n                        <a class="J_dataModel_cancel">取消</a> \n                        <a class="J_dataModel_del">删除</a> \n                    </td>\n                </tr>';s.isNull?$(o+" #J_dataModal_list").append(n):$(o+" #J_dataModal_list").html(n),$(o+" #J_dataModal_list tr[edit=1] td").css("padding","4px"),$(o+" #J_dataModal_list .dictname select").val(s.dictId),$(o+" #J_dataModal_list .foldername select").val(s.folderId)}else toastr.error(t.bcjson.msg)})},treeDataEdit:function(s){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_folder_menu","v4.0",{fileType:"7"},function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items,e="";a&&0<a.length&&$.each(a,function(t,a){foldName=a.foldName.substring(a.foldName.lastIndexOf("/")+1,a.foldName.length),e+='\n                            <option value="'+a.folderId+'"> '+foldName+" </option>\n                        "});var l="";for(var d in i.dict)l+='<option value="'+d+'">'+i.dict[d]+"</option>";var n='\n                    <td> <input class="form-control input-small" value="'+s.tableId+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.chianeseName+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.englishName+'"> </td>\n                    <td class="foldername">\n                        <select class="form-control input-small">\n                            '+e+'\n                        </select> \n                    </td>\n                    <td> <input class="form-control input-small" value="'+s.dbTablespace+'"> </td>\n                    <td> <input class="form-control input-small" value="'+s.dbUser+'"> </td>\n                    <td class="dictname">\n                        <select class="form-control input-small">\n                            '+l+'\n                        </select>\n                    </td>\n                    <td> <input class="form-control input-small" value="'+s.remark+'"> </td>\n                    <td> \n                        <a class="J_dataModel_save">保存</a>\n                        <a class="J_dataModel_edit hide">编辑</a> \n                        <a class="J_dataModel_cancel">取消</a> \n                        <a class="J_dataModel_del">删除</a> \n                    </td>\n                ';$(o+" #J_dataModal_list tr:eq("+s.index+")").html(n),$(o+" #J_dataModal_list tr:eq("+s.index+")").attr({edit:"1",addNew:0}),$(o+" #J_dataModal_list tr[edit=1] td").css("padding","4px"),$(o+" #J_dataModal_list .dictname select").val(s.dictId),$(o+" #J_dataModal_list .foldername select").val(s.folderId)}else toastr.error(t.bcjson.msg)})},setModify:function(t,a){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_data_model_info_modify","v4.0",t,function(t){App.unblockUI(),"1"==t.bcjson.flag?(toastr.success(t.bcjson.msg),a&&(a.tr.attr({tableId:a.tableId,chianeseName:a.chianeseName,englishName:a.englishName,folderId:a.folderId,folderName:a.folderName,dbTablespace:a.dbTablespace,dictId:a.dictId,dictName:a.dictName,dbUser:a.dbUser,remark:a.remark,edit:0,addNew:0}),a.tr.children("td").css("padding","8px"),a.tr.html('<td class="t-c"> '+a.tableId+" </td>\n                        <td> "+a.chianeseName+" </td>\n                        <td> "+a.englishName+' </td>\n                        <td class="foldername"> '+a.folderName+" </td>\n                        <td> "+a.dbTablespace+" </td>\n                        <td> "+a.dbUser+' </td>\n                        <td class="dictname"> '+a.dictName+' </td>\n                        <td title="'+a.remark+'"> <div>'+a.remark+'</div> </td>\n                        <td> \n                            <a class="J_dataModel_save hide">保存</a>\n                            <a class="J_dataModel_edit">编辑</a> \n                            <a class="J_dataModel_cancel hide">取消</a> \n                            <a class="J_dataModel_del hide">删除</a> \n                        </td>\n                        ')),i.getDataModel()):toastr.error(t.bcjson.msg)})},getMember:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_model_member_info","v4.0",t,function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;a&&0<a.length?require.async("./template/model_member-list.handlebars",function(t){$("#J_dataModal_type_list").html(t(a))}):$(o+" #J_dataModal_type_list").html('<tr class="lastTr"><td colspan="10" class="t-c">暂无数据</td></tr>')}else toastr.error(t.bcjson.msg)})},setMember:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_model_member_info_modify","v4.0",t,function(t){if(App.unblockUI(),"1"==t.bcjson.flag){toastr.success(t.bcjson.msg);var a=$(o+" #J_dataModal_list tr.active").attr("tableId");i.getMember({tableId:a})}else toastr.error(t.bcjson.msg)})},export:function(e){return new Promise(function(a,t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_model_exp_list","v4.0",e,function(t){"1"==t.bcjson.flag?a(t):(App.unblockUI(),toastr.error(t.bcjson.msg))})})},listImport2:function(e,t){return new Promise(function(a,t){$.kingdom.doKoauthAdminAPI("kingdom.retl.file_info","v4.0",e,function(t){"1"==t.bcjson.flag?a(t):(App.unblockUI(),toastr.error(t.bcjson.msg))})})},listImport3:function(t,a){var e="/retl/rest/admin/v4.0/kingdom.retl.file_download.json?p="+encodeURI(JSON.stringify(t));try{var l=document.createElement("a");l.href=e,l.download=e,l.click(),App.unblockUI()}catch(t){console.error(t)}},addTable:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_new_table_info","v4.0",t,function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;$(o+" #add_table").modal("show"),a&&0<a.length?require.async("./template/table-list.handlebars",function(t){$(o+" #J_table_list").html(t(a))}):$(o+" #J_table_list").html('<tr><td colspan="7" class="text-center">暂无数据</td></tr>')}else $(o+" #J_table_list").html('<tr><td colspan="7" class="text-center">暂无数据</td></tr>'),toastr.error(t.bcjson.msg)})},dataQuery:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_model_data_info","v4.0",t,function(t){if("1"==t.bcjson.flag){var a=t.bcjson.items;if(a&&a.length){var l="<tr>",d="";$.each(a,function(t,a){if(0==t){for(var e in a)l+="<th>"+e+"</th>";l+="</tr>"}for(var e in d+="<tr>",a)d+="<td>"+a[e]+"</td>";d+="</tr>"}),$(o+" #J_data-query_list thead").html(l),$(o+" #J_data-query_list tbody").html(d),$(o+" #data-query").modal("show")}else toastr.info("暂无数据")}else toastr.error(t.bcjson.msg)})},tabledel:function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_model_physics_table_del","v4.0",t,function(t){"1"==t.bcjson.flag?$(o+" #add_table").modal("hide"):toastr.error(t.bcjson.msg)})}};module.exports=i});