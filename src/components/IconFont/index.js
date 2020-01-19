/*
 * @Description: iconfont
 * @Author: mus
 * @Date: 2019-08-13 17:14:11
 * @LastEditTime : 2020-01-16 17:54:32
 * @LastEditors  : lan
 * @Email: mus@szkingdom.com
 */
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: `http://${window.location.host}/iconfont.js`,
  // scriptUrl: `//at.alicdn.com/t/font_1472528_flbqieq63zb.js?r=${Math.random()}`,
  // scriptUrl: '//at.alicdn.com/t/font_1472528_sqhbglhvj7d.js',
});

export default IconFont;
