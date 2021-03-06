/*
 * @Description: This is for EmailListModel asynchronization request function.
 * @Author: dailinbo
 * @Date: 2019-11-05 14:04:16
 * @LastEditors  : dailinbo
 * @LastEditTime : 2019-12-18 09:42:29
 */
import Service from '@/utils/Service';

const { emailList, addEmail, deleteEmail, updateEmail } = Service;
const emailParameter = {
  namespace: 'getEmail',
  state: {
    data: [],
    datas: {},
    deleteDatas: {},
    modifyData: {},
  },
  effects: {
    *getEmailList({ payload, callback }, { call, put }) {
      const response = yield call(emailList, { param: payload });
      if (response.bcjson.flag === '1') {
        if (response.bcjson.items) {
          yield put({
            type: 'getDatas',
            payload: response.bcjson,
          });
          callback();
        }
      } else {
        throw new Error(response.bcjson.msg);
      }
    },
    *updateEmail({ payload, callback }, { call, put }) {
      const response = yield call(updateEmail, { param: payload });
      if (response.bcjson.flag === '1') {
        if (response.bcjson.items) {
          yield put({
            type: 'setDatas',
            payload: response.bcjson.items,
          });
          callback();
        }
      } else {
        throw new Error(response.bcjson.msg);
      }
    },
    *addEmailDate({ payload, callback }, { call, put }) {
      const response = yield call(addEmail, { param: payload });
      if (response.bcjson.flag === '1') {
        if (response.bcjson.items) {
          yield put({
            type: 'addDatas',
            payload: response.bcjson.items,
          });
          callback();
        }
      } else {
        throw new Error(response.bcjson.msg);
      }
    },
    *deleteEmailDate({ payload, callback }, { call, put }) {
      const response = yield call(deleteEmail, { param: payload });
      if (response.bcjson.flag === '1') {
        if (response.bcjson.items) {
          yield put({
            type: 'deleteDatas',
            payload: response.bcjson.items,
          });
        }
        callback();
      } else {
        throw new Error(response.bcjson.msg);
      }
    },
  },
  reducers: {
    getDatas(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    setDatas(state, action) {
      return {
        ...state,
        modifyData: action.payload,
      };
    },
    addDatas(state, action) {
      return {
        ...state,
        datas: action.payload,
      };
    },
    deleteDatas(state, action) {
      return {
        ...state,
        datas: action.payload,
      };
    },
  },
};

export default emailParameter;
