// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-underscore-dangle */
/*
 * @Description: lan
 * @Author: lan
 * @Date: 2019-08-28 10:01:59
 * @LastEditTime : 2020-01-19 14:49:03
 * @LastEditors  : dailinbo
 */

import { components, menuIcons, iframe } from '@/utils/common';

const geneMenuData = data => {
  if (!data || !data.length || !data[0] || !data[0].menu) return [];
  const id = 'menuid';
  const pid = 'parentmenuid';
  // 删除 所有 routes,以防止多次调用
  const newData = data[0].menu.map(item => ({
    ...item,
    menuid: item.menuid,
    // key: item.menuid,
    menuname: item.menuname,
    path: item.page || '',
    icon: menuIcons[item.menuname],
    // name: item.parentmenuid === '-1' ? item.menuname.toUpperCase() : item.menuname,
    name: item.menuname,
    // name: item.page.includes('/report/report-designer/report-designer')
    //   ? 'Report Management'
    //   : item.menuname,
    hideInMenu: item.menutype === '1',
    target: item.linecss,
    component: components[item.page],
    iframeUrl: getIframe(iframe[item.page]),
  }));

  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  const map = {};
  newData.forEach(item => {
    map[item[id]] = item;
  });
  const val = [];
  newData.forEach(item => {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    const parent = map[item[pid]];
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
};

export function getIframe(page) {
  if (page && page.includes('#')) {
    const url = `/ETL/${page}`;
    return url;
  }
  return '';
}

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = path => reg.test(path);

const isProOrDev = () => {
  const { NODE_ENV } = process.env;
  return NODE_ENV === 'development';
};
// 得到随机的NVPS
const getRandowNVPS = () => {
  const array = ['N', 'V', 'P', 'S'];
  const newArray = [];
  while (array.length > 0) {
    const random = Math.floor(Math.random() * array.length);
    newArray.push(array.splice(random, 1)[0]);
  }
  return newArray;
};

// 密码级别
const passWordStrength = passwd => {
  // 密码强度
  let grade = 0;
  // 判断密码是否存在
  if (!passwd) {
    return grade;
  }
  // 判断长度。并给出分数
  /*
  密码长度：
  0 分: 小于等于 4 个字符
  10 分: 5 到 7 字符
  20 分: 大于8 个字符
  */
  // grade += passwd.length<=4?0:(passwd.length>8?20:10);
  if (passwd.length <= 4) {
    grade += 0;
  } else if (passwd.length > 8) {
    grade += 20;
  } else {
    grade += 10;
  }
  /*
  字母:
  0 分: 没有字母
  10 分: 全都是小（大）写字母
  20 分: 大小写混合字母
  */
  // grade += !passwd.match(/[a-z]/i)?0:(passwd.match(/[a-z]/) && passwd.match(/[A-Z]/)?20:10);
  if (!passwd.match(/[a-z]/i)) {
    grade += 0;
  } else if (passwd.match(/[a-z]/) && passwd.match(/[A-Z]/)) {
    grade += 20;
  } else {
    grade += 10;
  }
  /*
  数字:
  0 分: 没有数字
  10 分: 1 个数字
  15 分: 大于等于 3 个数字
  */
  // grade += !passwd.match(/[0-9]/)?0:(passwd.match(/[0-9]/g).length >= 3?15:10);
  if (!passwd.match(/[0-9]/)) {
    grade += 0;
  } else if (passwd.match(/[0-9]/g).length > 3) {
    grade += 15;
  } else {
    grade += 10;
  }
  /*
  符号:
  0 分: 没有符号
  10 分: 1 个符号
  20 分: 大于 1 个符号
  */
  // grade += !passwd.match(/\W/)?0:(passwd.match(/\W/g).length > 1?20:10);
  if (!passwd.match(/\W/)) {
    grade += 0;
  } else if (passwd.match(/\W/g).length > 1) {
    grade += 20;
  } else {
    grade += 10;
  }
  if (!passwd.match(/(.+)\1{2,}/gi)) {
    grade += 10;
  } else {
    grade += 5;
  }
  /*
  奖励:
  0 分: 只有字母或数字
  5 分: 只有字母和数字
  10 分: 字母、数字和符号
  15 分: 大小写字母、数字和符号
  */
  // eslint-disable-next-line max-len
  // grade += !passwd.match(/[0-9]/) || !passwd.match(/[a-z]/i)?0:(!passwd.match(/\W/)?5:(!passwd.match(/[a-z]/) || !passwd.match(/[A-Z]/)?10:15));
  if (!passwd.match(/[0-9]/) || !passwd.match(/[a-z]/i)) {
    grade += 0;
  } else if (!passwd.match(/\W/)) {
    grade += 5;
  } else if (!passwd.match(/[a-z]/) || !passwd.match(/[A-Z]/)) {
    grade += 10;
  } else {
    grade += 15;
  }
  return grade;
};

// flat -> tree
export function formatTree(list, key = 'departmentId', pKey = 'parentDepartmentId') {
  // deep clone
  const arr = JSON.parse(JSON.stringify(list));
  const map = {};
  const tree = [];

  arr.forEach(item => {
    map[item[key]] = item;
  });

  arr.forEach(item => {
    const parent = map[item[pKey]];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}

export function flatteningTree(data) {
  const dataList = [];
  function flattening(tree) {
    for (let i = 0; i < tree.length; i += 1) {
      const node = tree[i];
      const { menuid, parentmenuid, menuname, page, isShow, sortNo, updatetime } = node;
      dataList.push({ menuid, parentmenuid, menuname, page, isShow, sortNo, updatetime });
      if (node.children) {
        flattening(node.children);
      }
    }
  }
  flattening(data);
  return dataList;
}

export function formatRoutes(data) {
  const dataList = [];
  function flattening(routes) {
    for (let i = 0; i < routes.length; i += 1) {
      const node = routes[i];
      const { name, path, hideInMenu } = node;
      dataList.push({ name, path, hideInMenu });
      if (node.routes) {
        flattening(node.routes);
      }
    }
  }
  flattening(data);
  return dataList;
}

// 日期时间 格式化(yyyy-MM-dd HH:mm:ss) 2015-12-04 14:27:29
export function formatTimeString(time) {
  if (!time) {
    return '';
  }
  let t = time.toString();
  const len = t.length;
  t = len > 14 ? t.slice(0, 14) : t;
  t = len < 14 ? `${t}${Array(14 - len + 1).join('0')}` : t;

  return t.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, '$1/$2/$3 $4:$5:$6');
}

export function msFormat(ms) {
  const s = Math.floor(parseInt(ms, 10) / 1000);
  let min = 0;
  let h = 0;
  let sec = 0;
  if (s >= 60) {
    min = Math.floor(s / 60);
    sec = Math.floor(s % 60);
  }

  if (min >= 60) {
    h = Math.floor(sec / 60);
    min = Math.floor(min % 60);
  }

  [h, min, sec] = [h, min, sec].map(t => (t >= 10 ? t : `0${t}`));

  return `${h}:${min}:${sec}`;
}
export function GetQueryString(name) {
  const regs = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(regs);
  if (r != null) return r[2];
  return null;
}

export function createCellPos(n) {
  const ordA = 'A'.charCodeAt(0);
  const ordZ = 'Z'.charCodeAt(0);
  const len = ordZ - ordA + 1;
  let s = '';

  while (n >= 0) {
    s = String.fromCharCode((n % len) + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s;
}

export function stringToNum(a) {
  const str = a.toLowerCase().split('');
  const al = str.length;
  function getCharNumber(charx) {
    return charx.charCodeAt() - 96;
  }
  let numout = 0;
  let charnum = 0;
  for (let i = 0; i < al; i += 1) {
    charnum = getCharNumber(str[i]);
    const factor = 26 ** (al - i - 1);
    numout += charnum * factor;
  }
  return numout;
}
export function isFormData(v) {
  return Object.prototype.toString.call(v) === '[object FormData]';
}

export function showLogFormat(value) {
  if (!value) {
    return '';
  }
  const str = value.replace(/\{|}/g, '');
  const strArray = str.split(',');
  let resultStr = '';
  function formatArray(item) {
    const element = item.replace(/\[|]/g, '');
    let result = '';
    if (element.includes('=')) {
      // eslint-disable-next-line prefer-destructuring
      result = element.split('=')[1];
    } else {
      result = element;
    }
    return result;
  }
  for (let i = 0; i < strArray.length; i += 1) {
    resultStr += `${formatArray(strArray[i])},`;
  }
  resultStr = resultStr.substring(0, resultStr.length - 1);
  return resultStr;
}
export { isProOrDev, isUrl, geneMenuData, getRandowNVPS, passWordStrength };
