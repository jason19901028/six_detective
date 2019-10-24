/*
 * @Description: lan
 * @Author: lan
 * @Date: 2019-08-07 13:33:44
 * @LastEditTime: 2019-10-24 14:25:19
 * @LastEditors: lan
 */
const getDatas = (req, res) => {
  setTimeout(() => {
    res.json({
      bcjson: {
        code: '0',
        detail: '',
        flag: '1',
        items: [
          {
            key: 1,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 2,
            ParameterID: 'HKE0002',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 3,
            ParameterID: 'HKE0003',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 4,
            ParameterID: 'HKE0004',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 5,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 6,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 7,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 8,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 9,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 10,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 11,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
          {
            key: 12,
            ParameterID: 'HKE0001',
            ParameterName: 'Participant Name',
            GenerationTime: '15/10/2019 20:30:15',
            Source: 'SLOP',
            GenerationMaker: 'Alan',
            LastUpdateTime: '15/10/2019 20:30:15',
            LastUpdateMarker: 'Thomas',
          },
        ],
        len: 2,
        lengths: 2,
        msg: '查询成功',
        timeSpent: 0,
        totalCount: 2,
      },
    });
  }, 1000);
};

const delDatas = (req, res) => {
  res.json({
    bcjson: {
      code: '0',
      detail: '',
      flag: '1',
      len: 1,
      lengths: 1,
      msg: '删除成功',
      timeSpent: 0,
      totalCount: 1,
    },
  });
};

const getDataSourceList = (req, res) => {
  setTimeout(() => {
    res.json({
      bcjson: {
        code: '0',
        detail: '',
        flag: '1',
        items: [
          {
            active: true,
            closeCharacter: null,
            conType: null,
            connectWay: null,
            connectionDesc: null,
            connectionId: 'DB862A221E4DE149F588D02FF434085552',
            connectionName: '校验数据RETL',
            connectionType: 'Oracle',
            connectionTypeOri: 'DRIVERORACLE90e902db003152dc56f',
            conseparator: null,
            createdTime: '20190815191709',
            creator: null,
            dbDatabase: 'retldb',
            dbInstance: 'retldb',
            dbPassword: 'FDC0DD5D885F963A',
            dbPort: '1521',
            dbUser: 'retl',
            driverInfo: 'oracle.jdbc.driver.OracleDriver',
            driverLogo: 'oracle_name.jpg',
            fileCharset: null,
            fileExtName: null,
            filePath: null,
            fileType: null,
            ifData: null,
            jdbcFlag: null,
            jdbcString: 'jdbc:oracle:thin:@10.60.69.43:1521/retldb',
            maxConnectCount: null,
            modifiedTime: '20190815191709',
            modifieder: null,
            server: '10.60.69.43',
            stateFlag: 'T',
          },
          {
            active: false,
            closeCharacter: null,
            conType: null,
            connectWay: null,
            connectionDesc: null,
            connectionId: 'DBE825E384A3E44645831213A41CAA9269',
            connectionName: '48_trd',
            connectionType: 'Oracle',
            connectionTypeOri: 'DRIVERORACLE90e902db003152dc56f',
            conseparator: null,
            createdTime: '20190712143138',
            creator: null,
            dbDatabase: 'retl',
            dbInstance: 'retl',
            dbPassword: 'E53AEE9FC60E485E5A09F6D6B911712A',
            dbPort: '1521',
            dbUser: 'trd',
            driverInfo: 'oracle.jdbc.driver.OracleDriver',
            driverLogo: 'oracle_name.jpg',
            fileCharset: null,
            fileExtName: null,
            filePath: null,
            fileType: null,
            ifData: null,
            jdbcFlag: null,
            jdbcString: 'jdbc:oracle:thin:@10.60.69.48:1521/retl',
            maxConnectCount: null,
            modifiedTime: '20190712143138',
            modifieder: null,
            server: '10.60.69.48',
            stateFlag: 'T',
          },
        ],
        len: 2,
        lengths: 2,
        msg: '查询成功',
        timeSpent: 0,
        totalCount: 2,
      },
    });
  }, 1000);
};

export default {
  'POST /api/v2.0/kingdom.retl.getDatas.json': getDatas,
  'POST /api/v2.0/kingdom.retl.delDatas.json': delDatas,
  'POST /api/v2.0/kingdom.retl.getDataSourceList.json': getDataSourceList,
};
