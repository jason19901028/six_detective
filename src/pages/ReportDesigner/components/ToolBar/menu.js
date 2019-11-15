const previewMenu = [
  {
    name: '分页预览',
    icon: 'pagingPreview',
  },
  {
    name: '填报预览',
    icon: 'reportPreview',
  },
];

const borderMenu = [
  {
    name: '无框线(N)',
    icon: 'noBorder',
    params: 'none',
  },
  {
    name: '所有框线(A)',
    icon: 'allBorder',
    params: 'all',
  },
  {
    name: '外侧框线(S)',
    icon: 'outsideBorder',
    params: 'outside',
  },
  // {
  //   name: '粗匣框线(T)',
  //   icon: 'boldBorder',
  //   params: '{"border":"3px solid black"}',
  // },
  {
    name: '下框线(O)',
    icon: 'bottomBorder',
    params: 'bottom',
  },
  {
    name: '上框线(P)',
    icon: 'topBorder',
    params: 'top',
  },
  {
    name: '左框线(L)',
    icon: 'leftBorder',
    params: 'left',
  },
  {
    name: '右框线(R)',
    icon: 'rightBorder',
    params: 'right',
  },
  // {
  //   name: '双底框线(B)',
  //   icon: 'doubleBottomBorder',
  //   params: '{"border":"3px double black","border-type":"out-bottom"}',
  // },
  // {
  //   name: '粗底框线(H)',
  //   icon: 'boldBottomBorder',
  //   params: '{"border-bottom":"3px solid black"}',
  // },
  // {
  //   name: '上下框线(D)',
  //   icon: 'topBottomBorder',
  //   params:
  //     '{"border-top":"1px solid black",
  //      "border-bottom":"1px solid black","border-type":"out-top,out-bottom"}',
  // },
  // {
  //   name: '上下框线和粗下框线(C)',
  //   icon: 'topAndBoldBottomBorder',
  //   params:
  //   '{"border-top":"1px solid black",
  // "border-bottom":"3px solid black","border-type":"out-top,out-bottom"}',
  // },
  // {
  //   name: '上框线和双下框线(U)',
  //   icon: 'topAndDoubleBottomBorder',
  //   params:
  //     '{"border-top":"1px solid black",
  // "border-bottom":"3px double black","border-type":"out-top,out-bottom"}',
  // },
];

const drawingBorderMenu = [
  {
    name: '绘图边框(R)',
    icon: 'drawingBorder',
  },
  {
    name: '绘图边框网络(G)',
    icon: 'drawingBorderNet',
  },
  {
    name: '擦除边框(E)',
    icon: 'clearBorder',
  },
  {
    name: '线条颜色(I)',
    icon: 'lineColor',
  },
  {
    name: '线条样式(Y)',
    icon: 'lineStyle',
  },
];

const rowsAndColsMenu = [
  {
    name: '插入行',
    icon: 'insertCell',
    operatype: 'row',
    value: 'insert-row',
  },
  {
    name: '删除行',
    icon: 'delCell',
    operatype: 'row',
    value: 'delete-row',
  },
  {
    name: '插入列',
    icon: 'insertCell',
    operatype: 'column',
    value: 'insert-column',
  },
  {
    name: '删除列',
    icon: 'delCell',
    operatype: 'column',
    value: 'delete-column',
  },
  // {
  //   name: '隐藏与取消隐藏(U)',
  //   icon: 'hideOrShow',
  // },
];

const clearMenu = [
  {
    name: '全部(A)',
    icon: 'clearAll',
    params: 'null',
  },
  {
    name: '格式(F)',
    icon: 'clearFormat',
    params: 'null',
  },
  {
    name: '内容(C)',
    icon: 'clearContent',
    params: 'null',
  },
  {
    name: '批注(M)',
    icon: 'clearMark',
    params: 'null',
  },
];

const freezeMenu = [
  {
    name: '冻结窗格(F)',
    icon: 'freezeFrame',
    params: false,
  },
  {
    name: '冻结首行(R)',
    icon: 'freezeFirstRow',
  },
  {
    name: '冻结首列(C)',
    icon: 'freezeFirstCol',
  },
];

export { previewMenu, borderMenu, drawingBorderMenu, rowsAndColsMenu, freezeMenu, clearMenu };