/*
 * @Des: unified error message for model (dva)
 * @Author: iron
 * @Email: chenggang@szkingdom.com.cn
 * @Date: 2019-11-07 17:09:07
 * @LastEditors: iron
 * @LastEditTime: 2019-11-14 19:06:56
 */

import { notification } from 'antd';
// import dvaLogger from 'dva-logger';

export const dva = {
  config: {
    onError(e) {
      // if it's comment,component can not capture error
      e.preventDefault();
      notification.error({
        message: 'oops error!!!',
        description: e.toString(),
      });
    },
  },
  // plugins: [dvaLogger()],
};
