import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Button, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi/locale';
import { defaultDateRange, downloadFile } from '../constants';
import FilterForm from '../FilterForm';
import LopLogList from './LopLogList';
import LopLogManualModal from './LopLogManualModal';
import styles from '../index.less';

export function LopLog({ dispatch, loading, page: current, logs, total, submitters }) {
  const [visible, setVisible] = useState(false);
  const [searchParams, setSearchParams] = useState({
    startDate: defaultDateRange[0],
    endDate: defaultDateRange[1],
  });

  useEffect(() => {
    dispatch({
      type: 'lop/fetch',
      payload: searchParams,
    });
  }, []);

  function getSubmitters(params) {
    dispatch({
      type: 'lop/fetchSubmitters',
      payload: params,
    });
  }

  function handleParams(type, params) {
    setSearchParams(params);
    dispatch({ type, payload: params });
  }

  function handlePageChange(page, pageSize) {
    dispatch({ type: 'lop/fetch', payload: { page, pageSize, ...searchParams } });
  }
  async function handleUpload(params) {
    await dispatch({ type: 'lop/importByManual', payload: params });
    setVisible(false);
  }
  async function handleDownload(lopImpId) {
    const reportUrl = await dispatch({
      type: 'lop/fetchReportUrl',
      payload: {
        lopImpId,
      },
    });

    if (reportUrl) {
      downloadFile(reportUrl);
    }
  }

  return (
    <PageHeaderWrapper>
      <div className={styles.container}>
        <FilterForm formType={0} loading={loading} onParams={handleParams} />
        <LopLogManualModal
          visible={visible}
          loading={loading}
          submitters={submitters}
          onSubmitter={getSubmitters}
          onCancel={() => setVisible(false)}
          onUpload={handleUpload}
        />
        <div className={styles['list-wrap']}>
          <Row className={styles['btn-group']}>
            <Button type="primary" className={styles['no-margin']} onClick={() => setVisible(true)}>
              <FormattedMessage id="data-import.manual-import" />
            </Button>
          </Row>
          <LopLogList
            dataSource={logs}
            page={current}
            total={total}
            loading={loading}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageChange}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default connect(({ loading, lop: { logs, page, total, submitters } }) => ({
  loading: loading.effects,
  submitters,
  logs,
  page,
  total,
}))(LopLog);
