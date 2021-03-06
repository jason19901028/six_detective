/*
 * @Des: lop log mock data
 * @Author: iron
 * @Email: chenggang@szkingdom.com.cn
 * @Date: 2019-12-04 09:16:05
 * @LastEditors: iron
 * @LastEditTime: 2019-12-17 16:00:51
 */
import { mp, mockRes } from './utils';
import { PROCESSING_STATUS, SUBMISSION_REPORT } from '@/pages/DataImportLog/constants';

export default {
  [mp('loplogs')]: mockRes(100, [
    {
      tradeDate: '@date("dd/MM/yyyy")',
      submitterCode: '@string(8)',
      submitterName: '@name',
      arrivalTime: '@date(dd/MM/yyyy)',
      submissionDate: '@date(dd/MM/yyyy)',
      'submissionChannel|1': ['ECP', 'USER'],
      'lateSubmission|1': ['Y', 'N'],
      'latestVersion|1.1-3': '1',
      'submissionReport|1': SUBMISSION_REPORT,
      'submissionStatus|1': ['0', '1'],
      'processingStatus|1': PROCESSING_STATUS,
    },
  ]),
  [mp('manual-import')]: mockRes(1, []),
  [mp('auto-import')]: mockRes(5, []),
};
