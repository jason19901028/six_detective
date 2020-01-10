import React, { useState, useEffect, useMemo } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import moment from 'moment';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Table, Row, Col, Icon } from 'antd';
import IconFont from '@/components/IconFont';
import { dateFormat, timestampFormat } from '@/pages/DataImportLog/constants';
import { getStore } from '@/utils/store';
import { ClaimModal, CloseModal, ExportModal } from './components/AlertListModal';
import { AlertListBtns } from './components/AlertListBtns';
import ColumnTitle from '../ColumnTitle';
import AlertDetail from './AlertDetail';
import styles from '../index.less';

const { Column } = Table;

function AlertList({ dispatch, loading, alerts, total }) {
  const [alert, setAlert] = useState(null);
  const [claimVisible, setClaimVisible] = useState(false);
  const [claimContent, setClaimContent] = useState('');
  const [closeVisible, setCloseVisible] = useState(false);
  const [closeContent, setCloseContent] = useState('');
  const [exportVisible, setExportVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isBatchAction, setBatchAction] = useState(false);
  const [isDiscontinue, setDiscontinue] = useState(false);
  // header filter
  const [conditions, setConditions] = useState([]);

  const isAuth = useMemo(() => {
    const userInfo = getStore('userInfo');
    return userInfo && userInfo.isSuperAdmin;
  }, []);

  useEffect(() => {
    dispatch({
      type: 'alertCenter/fetch',
    });
  }, []);

  useEffect(() => {
    if (alerts && alerts.length > 0) {
      const [firstAlert] = alerts;
      const curAlert = alert && alerts.find(item => item.alertId === alert.alertId);
      // should be latest alert,owner and status has been changed
      setAlert(curAlert || firstAlert);
    } else {
      setAlert(null);
    }
  }, [alerts]);

  function handlePageChange(page, pageSize) {
    dispatch({
      type: 'alertCenter/fetch',
      payload: {
        page,
        pageSize,
      },
    });
  }

  function handleCancelClaim() {
    setClaimVisible(false);
    setBatchAction(false);
  }

  // claim single alert
  async function claimAlert(record) {
    setBatchAction(false);
    setAlert(record);
    if (record.userName) {
      const userNameArr = record.userName.split(',');
      setClaimContent(
        <div>
          This alert has been claimed by [{userNameArr.length > 1 ? 'others' : record.userName}]
        </div>,
      );
      setClaimVisible(true);
    } else {
      // check latest alert status
      const users = await dispatch({
        type: 'alertCenter/claim',
        payload: {
          alertIds: [record.alertId],
        },
      });
      if (users && users.length > 0) {
        users.forEach(item => {
          if (item.userName) {
            const userNameArr = item.userName.split(',');
            setClaimContent(
              <div>
                This alert has been claimed by [{userNameArr.length > 1 ? 'others' : item.userName}]
              </div>,
            );
            setClaimVisible(true);
          }
        });
      }
    }
  }

  async function claimAlerts() {
    setBatchAction(true);
    const findAlert = selectedRows.find(item => item.userName);
    if (findAlert && findAlert.userName) {
      setClaimVisible(true);
      setClaimContent(<div>Some alerts has been claimed.</div>);
    } else {
      // check latest alert status
      const users = await dispatch({
        type: 'alertCenter/claimMany',
        payload: {
          alertIds: selectedRows.map(item => item.alertId),
        },
      });
      if (users && users.length > 0) {
        setClaimContent(<div>Some alerts has been claimed.</div>);
        setClaimVisible(true);
      }
    }
  }

  async function handleReClaim() {
    const curAlertId = alert.alertId;
    await dispatch({
      type: 'alertCenter/reClaim',
      payload: {
        alertIds: !isBatchAction ? [curAlertId] : selectedRows.map(item => item.alertId),
      },
    });
    setClaimVisible(false);
  }

  function showCloseModal(record) {
    setCloseVisible(true);
    if (record) {
      setAlert(record);
      setBatchAction(false);
      setCloseContent(
        <>
          <div>Do you confirm to close this alert?</div>
          <div>(AlertId: {record.alertId})</div>
        </>,
      );
    } else {
      setBatchAction(true);
      setCloseContent('Do you confirm to close these alerts?');
    }
  }

  async function closeAlert() {
    const curAlertId = alert.alertId;
    await dispatch({
      type: 'alertCenter/close',
      payload: {
        alertIds: !isBatchAction ? [curAlertId] : selectedRows.map(item => item.alertId),
      },
    });
    setCloseVisible(false);
  }

  async function discontinueAlert() {
    await dispatch({
      type: 'alertCenter/discontinue',
      payload: {
        alertIds: selectedRows.map(item => item.alertId),
      },
    });
    setCloseVisible(false);
  }

  function handleExport() {}

  // filter methods
  async function handleCommit(tableColumn, updatedConditions = []) {
    setConditions(updatedConditions);
    dispatch({
      type: 'alertCenter/fetch',
      payload: {
        currentColumn: tableColumn,
        conditions,
      },
    });
  }
  async function handleSort(tableColumn, sort) {
    dispatch({
      type: 'alertCenter/fetch',
      payload: {
        currentColumn: tableColumn,
        conditions,
        sort,
      },
    });
  }

  return (
    <div className={styles['list-container']}>
      <div className={styles.list}>
        <AlertListBtns
          isAuth={isAuth}
          isBatchAction={isBatchAction}
          loading={loading['alertCenter/claim']}
          disabled={!selectedRows.length}
          claimAlerts={() => claimAlerts()}
          closeAlerts={() => showCloseModal()}
          onDiscontinue={() => {
            setDiscontinue(true);
            showCloseModal();
          }}
        />
        <ClaimModal
          visible={claimVisible}
          content={claimContent}
          onCancel={handleCancelClaim}
          onOk={handleReClaim}
          loading={loading['alertCenter/reClaim']}
        />
        <CloseModal
          visible={closeVisible}
          onCancel={() => setCloseVisible(false)}
          onOk={isDiscontinue ? discontinueAlert : closeAlert}
          content={closeContent}
          loading={loading[`alertCenter/${isDiscontinue ? 'discontinue' : 'close'}`]}
        />
        <ExportModal
          visible={exportVisible}
          onCancel={() => setExportVisible(false)}
          onOk={handleExport}
        />
        <Table
          dataSource={alerts}
          rowKey="alertId"
          loading={loading['alertCenter/fetch']}
          rowClassName={record => (alert && record.alertId === alert.alertId ? 'table-active' : '')}
          rowSelection={{
            getCheckboxProps: record => ({
              disabled: +record.alertStatus === 1,
            }),
            onChange(selectedRowKeys, sRows) {
              setSelectedRows(sRows);
            },
          }}
          pagination={{
            total,
            showSizeChanger: true,
            showTotal(count) {
              return `Total ${count} items`;
            },
            onChange: (page, pageSize) => handlePageChange(page, pageSize),
            onShowSizeChange: (page, pageSize) => handlePageChange(page, pageSize),
          }}
          onRow={record => ({
            onClick() {
              setAlert(record);
            },
          })}
        >
          <Column
            align="center"
            dataIndex="alertNo"
            className="word-break"
            title={
              <ColumnTitle
                isNum={false}
                curColumn="alertNo"
                conditions={conditions}
                onSort={handleSort}
                onCommit={handleCommit}
              >
                <FormattedMessage id="alert-center.alert-id" />
              </ColumnTitle>
            }
          />
          <Column
            ellipsis
            dataIndex="alertName"
            title={
              <ColumnTitle
                isNum={false}
                curColumn="alertName"
                conditions={conditions}
                onSort={handleSort}
                onCommit={handleCommit}
              >
                <FormattedMessage id="alert-center.alert-name" />
              </ColumnTitle>
            }
          />
          <Column
            align="center"
            dataIndex="tradeDate"
            title={
              <ColumnTitle
                isNum={false}
                curColumn="tradeDate"
                conditions={conditions}
                onSort={handleSort}
                onCommit={handleCommit}
              >
                <FormattedMessage id="alert-center.trade-date" />
              </ColumnTitle>
            }
            render={text => moment(text).format(dateFormat)}
          />
          <Column
            align="center"
            dataIndex="alertTime"
            title={<FormattedMessage id="alert-center.alert-timestamp" />}
            render={text => moment(text, timestampFormat).format(timestampFormat)}
          />
          <Column
            align="center"
            dataIndex="itemsTotal"
            title={<FormattedMessage id="alert-center.items-total" />}
            render={text => +text}
          />
          <Column
            dataIndex="userName"
            title={<FormattedMessage id="alert-center.owner" />}
            render={text => {
              if (text) {
                const users = text.split(',');
                return users.length > 1 ? <span title={text}>Multiple</span> : text;
              }
              return text;
            }}
          />
          <Column
            dataIndex="alertStatusDesc"
            title={<FormattedMessage id="alert-center.status" />}
            render={text => {
              if (text) {
                const users = text.split(',');
                return users.length > 1 ? <span title={text}>Multiple</span> : text;
              }
              return text;
            }}
          />
          <Column
            dataIndex="action"
            title={<FormattedMessage id="alert-center.actions" />}
            render={(text, record) => (
              <Row
                type="flex"
                justify="space-around"
                align="middle"
                className={styles['icon-btns']}
              >
                {alert &&
                alert.alertId === record.alertId &&
                !isBatchAction &&
                loading['alertCenter/claim'] ? (
                  <Icon type="loading" />
                ) : (
                  <button
                    type="button"
                    disabled={+record.alertStatus === 1}
                    title={formatMessage({ id: 'alert-center.claim' })}
                    onClick={() => claimAlert(record)}
                  >
                    <IconFont type="iconqizhi" className={styles.icon} />
                  </button>
                )}
                {/* never can close by manual */}
                {+record.isClosedManually === 1 && (
                  <button
                    type="button"
                    disabled={+record.alertStatus === 1}
                    title={formatMessage({ id: 'alert-center.close' })}
                    onClick={() => showCloseModal(record)}
                  >
                    <IconFont type="iconclose" className={styles.icon} />
                  </button>
                )}
              </Row>
            )}
          />
        </Table>
      </div>
      {alert && <AlertDetail alert={alert} />}
    </div>
  );
}

const mapStateToProps = ({ loading, alertCenter: { alerts, alertItems = [], alertTotal } }) => ({
  alerts,
  alertItems,
  total: alertTotal,
  loading: loading.effects,
});
export default connect(mapStateToProps)(AlertList);
