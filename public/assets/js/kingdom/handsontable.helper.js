if("undefined"==typeof jQuery)throw new Error("jquery.kingdom requires jQuery");$.extend({handsontable:{valueExchange:function(e){var l="文本框";if("input"==e.cellType)switch(e.inputType){case"text_255":l="文本（<255字符）";break;case"text_500":l="文本（<500字符）";break;case"text_1000":l="文本（<1000字符）";break;case"text_4000":l="文本（<4000字符）";break;case"text_clob":l="文本（>4000字符）";break;case"int":l="整数";break;case"number_2":l="金额（2位小数）";break;case"number_4":l="金额（4位小数）";break;case"ratio_1":l="百分比（x）％";break;case"ratio_100":l="百分比（x*100）％";break;case"ratio_1000":l="千分比（x*1000）‰";break;case"date":l="日期";break;case"select":l="下拉选择框";break;default:l=""}return l},boxType:function(e,l,t){var a=l.inputType;switch((a=a.split("_"))[0]){case"text":e.type="text";var o=new RegExp("^.{0,"+a[1]+"}$");e.validator=o;break;case"number":e.type="numeric";var r=a[1];if(!r){e.format="0,0";break}for(var c=0<r?"0,0":"0,0.",n=0;n<r;n++)c+="0";e.format=c;break;case"ratio":e.type="numeric","1"==a[1]?e.format="0,0.00P":"100"==a[1]?e.format="0,0.00%":"1000"==a[1]&&(e.format="0,0.00‰");break;case"date":e.type="date",e.dateFormat="YYYY-MM-DD",e.correctFormat=!0,e.defaultDate="",e.datePickerConfig={i18n:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["日","一","二","三","四","五","六"],weekdaysShort:["日","一","二","三","四","五","六"]}};break;case"select":e.editor="select",e.type="dropdown",t&&(e.selectOptions=t[l.cellTableField]);break;default:e.type="text"}return e},setReportData:function(e,o,t,r,c){var n,i,l=new Array,a=[],s=[],w={tableType:t.tableType};if("list-business"==t.tableType){var u=new Array,d=0,h=0,p={},f={};(F={}).dataArray=new Array,o&&($.each(e,function(e,a){"select"==a.inputType&&$.each(o,function(e,l){var t=a.cellTableField;r&&r[t]&&(l[t]=r[t][l[t]])})}),$.each(o,function(e,l){F.dataArray.push(l)}));var R=new Array,g={},C=F.dataArray,y=0,b=0;$.each(e,function(e,l){if("input"==l.cellType)return t.startRow=l.cellRow,!1}),$.each(e,function(e,l){if(t.startRow==l.cellRow)n=l.rowHeights,i=l.colWidths,"1"==l.STARTROW&&(y=e),"1"==l.ENDROW&&(b=e);else if(t.startRow<l.cellRow)return!1});for(var m=e.length,T=0;T<m;){if((k=e[T]).cellRow<t.startRow)g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++;else if(t.startRow==k.cellRow)if(C&&0<C.length){for(var I=0;I<C.length;I++)for(var v=y;v<=b;v++){(S=$.extend({},e[v])).cellRow=S.cellRow+I,v==y&&(g[S.cellRow+"|"+S.cellCol+"rowId"]=C[I].rowId),S.cellTableValue=C[I][S.cellTableField],g[S.cellRow+"|"+S.cellCol]=S,R.push(S)}T=T+b-y+1}else g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++;else k.cellRow>t.startRow&&(0!=C.length&&(k.cellRow=k.cellRow+C.length-1),g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++)}$.each(R,function(e,l){if(l.rowHeight&&(p[l.cellRow]=l.rowHeight<24?24:l.rowHeight),l.colWidth&&(f[l.cellCol]=1.33*l.colWidth),0==l.cellRow&&(d+=0==l.mergedColCount?1:l.mergedColCount),1<l.mergedRowCount||1<l.mergedColCount){var t={};t.row=l.cellRow,t.col=l.cellCol,t.rowspan=l.mergedRowCount?l.mergedRowCount:1,t.colspan=l.mergedColCount?l.mergedColCount:1,u.push(t)}h=l.cellRow+(l.mergedRowCount?l.mergedRowCount:1)}),n?a=n.split(","):$.each(p,function(e,l){a.push(l)}),i?s=i.split(","):$.each(f,function(e,l){s.push(l)});for(T=0;T<h;T++){l[T]=new Array;for(var A=0;A<d;A++){(D=g[T+"|"+A])?"show"==D.cellType?l[T][A]=D.fieldShowText:"templateSets"==t.type?l[T][A]=t.inputTypeMap[D.inputTypeDict]:l[T][A]=D.cellTableValue:l[T][A]=""}}if(w.newMap=g,w.dataStartRow=t.startRow,0<F.dataArray.length)var M=F.dataArray.length;else M=1;return w.ishjRow=t.startRow+M,w.mergeCells=u,w.sumCol=d,w.sumRow=h,w.dataArrays=l,w.rowHeights=a,w.colWidths=s,w}if("list"==t.tableType){u=new Array;var F,j={};d=0,h=0,p={},f={};(F={}).dataArray=new Array,F.hjdataArray,o&&($.each(e,function(e,a){"select"==a.inputType&&$.each(o,function(e,l){var t=a.cellTableField;r&&r[t]&&(l[t]=r[t][l[t]])})}),$.each(o,function(e,l){"1"==l.ISHJ?F.hjdataArray=l:F.dataArray.push(l)}));R=new Array,g={},C=F.dataArray,y=0,b=0;t.startRow||$.each(e,function(e,l){if("input"==l.cellType)return t.startRow=l.cellRow,!1}),$.each(e,function(e,l){if(t.startRow==l.cellRow)"1"==l.STARTROW&&(y=e),"1"==l.ENDROW&&(b=e),n=l.rowHeights,i=l.colWidths,c&&c[l.cellRow+"|"+l.cellCol]&&(l.autoFormulaMap=c[l.cellRow+"|"+l.cellCol]);else if(t.startRow+1==l.cellRow)c&&c[l.cellRow+"|"+l.cellCol]&&(l.autoFormulaMap=c[l.cellRow+"|"+l.cellCol]);else if(t.startRow+1<l.cellRow)return!1});for(m=e.length,T=0;T<m;){var k;if((k=e[T]).cellRow<t.startRow)g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++;else if(t.startRow==k.cellRow)if(C&&0<C.length){for(I=0;I<C.length;I++)for(v=y;v<=b;v++){var S;(S=$.extend({},e[v])).cellRow=S.cellRow+I,v==y&&(g[S.cellRow+"|"+S.cellCol+"rowId"]=C[I].rowId),S.cellTableValue=C[I][S.cellTableField],g[S.cellRow+"|"+S.cellCol]=S,R.push(S),S.fieldFormula&&(S.resultCell=!0,S.borderStyle+="background-color:#efdcdc !important;",j[S.cellTableField]=S)}T=T+b-y+1}else k.fieldFormula&&((j[k.cellTableField]=k).resultCell=!0,k.borderStyle+="background-color:#efdcdc !important;"),g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++;else k.cellRow>t.startRow&&(0!=C.length&&(k.cellRow=k.cellRow+C.length-1),"1"==k.ishj&&(w.ishjRow=k.cellRow,g[k.cellRow+"|0ishj"]="1","input"==k.cellType&&(F.hjdataArray&&(g[k.cellRow+"|0rowId"]=F.hjdataArray.rowId,k.cellTableValue=F.hjdataArray[k.cellTableField]),k.fieldFormula&&((j[k.cellRow+"|"+k.cellTableField]=k).resultCell=!0,k.borderStyle+="background-color:#efdcdc !important;"))),g[k.cellRow+"|"+k.cellCol]=k,R.push(k),T++)}console.log(R),$.each(R,function(e,l){if(l.rowHeight&&(p[l.cellRow]=l.rowHeight<24?24:l.rowHeight),l.colWidth&&(f[l.cellCol]=1.33*l.colWidth),0==l.cellRow&&(d+=0==l.mergedColCount?1:l.mergedColCount),1<l.mergedRowCount||1<l.mergedColCount){var t={};t.row=l.cellRow,t.col=l.cellCol,t.rowspan=l.mergedRowCount?l.mergedRowCount:1,t.colspan=l.mergedColCount?l.mergedColCount:1,u.push(t)}h=l.cellRow+(l.mergedRowCount?l.mergedRowCount:1)}),n?a=n.split(","):$.each(p,function(e,l){a.push(l)}),i?s=i.split(","):$.each(f,function(e,l){s.push(l)});for(T=0;T<h;T++){l[T]=new Array;for(A=0;A<d;A++){(D=g[T+"|"+A])?"show"==D.cellType?l[T][A]=D.fieldShowText:(l[T][A]=D.cellTableValue,"templateSets"==t.type?l[T][A]=t.inputTypeMap[D.inputTypeDict]:l[T][A]=D.cellTableValue):l[T][A]=""}}if(w.newMap=g,w.formulaMap=j,w.dataStartRow=t.startRow,w.ishj=!0,!w.ishjRow){if(w.ishj=!1,0<F.dataArray.length)M=F.dataArray.length;else M=1;w.ishjRow=t.startRow+M}return w.mergeCells=u,w.sumCol=d,w.sumRow=h,w.dataArrays=l,w.rowHeights=a,w.colWidths=s,console.log(l),w}l=new Array,u=new Array,g={};var x={};j={},d=0,h=0,p={},f={};if(o&&1==o.length){C=o[0];g["0|0rowId"]=C.rowId,$.each(e,function(e,a){"select"==a.inputType&&$.each(o,function(e,l){var t=a.cellTableField;r&&r[t]&&(l[t]=r[t][l[t]])})})}$.each(e,function(e,l){n=l.rowHeights,i=l.colWidths,l.rowHeight&&(p[l.cellRow]=l.rowHeight<24?24:l.rowHeight),l.colWidth&&(f[l.cellCol]=1.33*l.colWidth),0==l.cellRow&&(d+=0==l.mergedColCount?1:l.mergedColCount);var t={};(1<l.mergedRowCount||1<l.mergedColCount)&&(t.row=l.cellRow,t.col=l.cellCol,t.rowspan=l.mergedRowCount?l.mergedRowCount:1,t.colspan=l.mergedColCount?l.mergedColCount:1,u.push(t));var a=l.cellRow+"|"+l.cellCol;"input"==l.cellType&&(x[l.cellTableField]=l,o&&1==o.length&&(l.cellTableValue=C[l.cellTableField]),l.fieldFormula&&((j[l.cellTableField]=l).resultCell=!0,l.borderStyle+="background-color:#efdcdc !important;"),c&&c[a]&&(l.autoFormulaMap=c[a])),g[a]=l,h=l.cellRow+(l.mergedRowCount?l.mergedRowCount:1)}),n?a=n.split(","):$.each(p,function(e,l){a.push(l)}),i?s=i.split(","):$.each(f,function(e,l){s.push(l)});for(T=0;T<h;T++){l[T]=new Array;for(A=0;A<d;A++){var D;(D=g[T+"|"+A])?"show"==D.cellType?l[T][A]=D.fieldShowText:"templateSets"==t.type?l[T][A]=t.inputTypeMap[D.inputTypeDict]:l[T][A]=D.cellTableValue:l[T][A]=""}}return w.newMap=g,w.cellFieldMap=x,w.formulaMap=j,w.mergeCells=u,w.sumCol=d,w.sumRow=h,w.dataArrays=l,w.rowHeights=a,w.colWidths=s,w},getReportData:function(e){var l=new Array,n=e.TransferDictItems;if("list-business"==e.tableType){for(var t=e.dataStartRow,a=hotInstance.countRows(),o=e.ishjRow,r=t;r<o;r++){var c=hotInstance.getDataAtRow(r);u=new Object;for(var i=0;i<c.length;i++){var s=hotInstance.getCellMeta(r,i);if(p=hotInstance.getCellMeta(r,i).cellTableField)if(c[i])if("select"==s.editor){var w=n[p];u[p]=w[c[i]]}else!c[i]&&0!=c[i]||(u[p]=c[i]);else 0==c[i]&&(u[p]=c[i])}u.rowId=hotInstance.getCellMeta(r,0).rowId,"{}"!=JSON.stringify(u)&&l.push(u)}return l}if("list"==e.tableType){var u;for(t=e.dataStartRow,a=e.ishj?e.ishjRow+1:e.ishjRow,r=t;r<a;r++){var d=r,h=hotInstance.getCellMeta(d,0).ishj;c=hotInstance.getDataAtRow(r);if(u=new Object,1==h){for(i=0;i<c.length;i++){(p=hotInstance.getCellMeta(d,i).cellTableField)&&(c[i]?"合计"!=c[i]&&"-"!=c[i]&&(u[p]=c[i]):0==c[i]&&(u[p]=c[i]))}u.rowId=hotInstance.getCellMeta(d,0).rowId,u.ISHJ="1",l.push(u);break}for(i=0;i<c.length;i++){var p=(s=hotInstance.getCellMeta(d,i)).cellTableField,f=s.editor;if(p)if(c[i])if("select"==f){w=n[p];u[p]=w[c[i]]}else u[p]=c[i];else 0==c[i]&&(u[p]=c[i])}u.rowId=hotInstance.getCellMeta(d,0).rowId,"{}"!=JSON.stringify(u)&&l.push(u)}return l}var R=e.newMap,g=hotInstance.getData();return dataMapItem=new Object,$.each(R,function(e,l){if(l&&"input"==l.cellType){var t=l.cellRow,a=l.cellCol,o=g[t][a],r=hotInstance.getCellMeta(t,a).editor;if(l.cellTableField&&o||0==o)if("select"==r){var c=n[l.cellTableField];dataMapItem[l.cellTableField]=c[o]}else dataMapItem[l.cellTableField]=o}}),dataMapItem.rowId=hotInstance.getCellMeta(0,0).rowId,l.push(dataMapItem),l},getReportDataForBigData:function(e,l){var t=new Array,a=e.TransferDictItems;if("list-business"==e.tableType)return null;if("list"!=e.tableType)return null;var o,r=e.dataStartRow,c=e.ishj?e.ishjRow+1:e.ishjRow;if(!(l<r||c<=l)){var n=l,i=n,s=hotInstance.getCellMeta(i,0).ishj,w=hotInstance.getDataAtRow(n);if((o=new Object).addRowIndex=l-r+"",1==s){for(var u=0;u<w.length;u++){(h=hotInstance.getCellMeta(i,u).cellTableField)&&(w[u]?"合计"!=w[u]&&"-"!=w[u]&&(o[h]=w[u]):0===w[u]&&(o[h]=0))}o.rowId=hotInstance.getCellMeta(i,0).rowId,o.ISHJ="1",t.push(o)}else{for(u=0;u<w.length;u++){var d=hotInstance.getCellMeta(i,u),h=d.cellTableField,p=d.editor;if(h)if(w[u])if("select"==p){var f=a[h];o[h]=f[w[u]]}else o[h]=w[u];else 0===w[u]&&(o[h]=0)}o.rowId=hotInstance.getCellMeta(i,0).rowId,"{}"!=JSON.stringify(o)&&t.push(o)}return t}}}}),seajs&&define(function(require,exports,module){module.exports=jQuery.handsontable});