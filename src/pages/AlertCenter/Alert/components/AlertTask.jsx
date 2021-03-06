import React, { useState, useEffect } from 'react';
import { FormattedMessage, formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { connect } from 'dva';
import { Icon, Table } from 'antd';
import IconFont from '@/components/IconFont';
import { pageSizeOptions } from '@/pages/DataImportLog/constants';
import styles from '@/pages/AlertCenter/index.less';
import AlertTaskModal from './AlertTaskModal';

const btnName = formatMessage({ id: 'alert-center.enter-approval' });

export const TaskBtn = ({ task }) => {
  const localUserName = localStorage.getItem('loginName');
  const isDisabled = !task.USER_NAME || localUserName !== task.USER_NAME;
  const route = ['A', 'T'].includes(task.TASK_STATUS) ? 'history' : 'my';

  // fixed ie disable invalid
  if (isDisabled) {
    return <span style={{ color: '#d0d0d0' }}>{btnName}</span>;
  }

  return (
    <Link
      to={`/homepage/Approval-Process-Center/${route}?taskCode=${task.TASK_ID}`}
      title={btnName}
    >
      {btnName}
    </Link>
  );
};

function AlertTask({ dispatch, loading, alertItems, users, taskColumns, onTaskRow, alert }) {
  const [visible, setVisible] = useState(false);
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);

  useEffect(() => {
    const { alertTypeId, alertId, itemsTotal } = alert;
    // no items
    if (+itemsTotal !== 0) {
      dispatch({
        type: 'alertCenter/fetchAlertItems',
        payload: {
          alertTypeId,
          alertId,
        },
      });
    }
  }, [alert]);

  // default selected that just one task
  useEffect(() => {
    if (alertItems && alertItems.length === 1) {
      setSelectedTaskIds(alertItems.map(item => item.TASK_ID));
    }
  }, [alertItems]);

  async function showUsers() {
    await dispatch({
      type: 'alertCenter/fetchAssignUsers',
      payload: {
        taskIds: selectedTaskIds,
      },
    });
    setVisible(true);
  }

  async function handleAssignUser(userId) {
    await dispatch({
      type: 'alertCenter/assignTask',
      payload: {
        userId,
        taskIds: selectedTaskIds,
        alertTypeId: alert.alertTypeId,
        alertId: alert.alertId,
      },
    });
    setVisible(false);
  }
  return (
    <div className={styles['task-container']}>
      <AlertTaskModal
        loading={loading}
        visible={visible}
        users={users}
        handleCancel={() => setVisible(false)}
        assignUser={handleAssignUser}
      />
      <div className={styles.btns}>
        <button type="button" disabled={!selectedTaskIds.length} onClick={showUsers}>
          {loading['alertCenter/fetchAssignUsers'] ? (
            <Icon type="loading" className={styles['btn-icon']} />
          ) : (
            <IconFont type="iconicon_assign-copy" className={styles['btn-icon']} />
          )}
          <FormattedMessage id="alert-center.assign" />
        </button>
      </div>
      <Table
        border
        dataSource={alertItems}
        rowKey="TASK_ID"
        scroll={{ y: 320 }}
        loading={loading['alertCenter/fetchAlertItems']}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions,
          showTotal(count) {
            return `Total ${count} items`;
          },
        }}
        rowSelection={{
          columnWidth: 50,
          selectedRowKeys: selectedTaskIds,
          onChange: selectedRowKeys => {
            setSelectedTaskIds(selectedRowKeys);
          },
        }}
        onRow={record => ({
          onClick() {
            onTaskRow(record);
          },
        })}
        columns={[
          {
            width: 80,
            align: 'center',
            dataIndex: 'MARKET',
            title: formatMessage({ id: 'alert-center.market' }),
          },
          ...taskColumns,
          {
            dataIndex: 'USER_NAME',
            title: formatMessage({ id: 'alert-center.owner' }),
          },
          {
            width: 110,
            dataIndex: 'TASK_STATUS_DESC',
            title: formatMessage({ id: 'alert-center.status' }),
          },
          {
            width: 108,
            align: 'center',
            dataIndex: 'action',
            title: <FormattedMessage id="alert-center.actions" />,
            render: (text, record) => <TaskBtn task={record} />,
          },
        ]}
      />
    </div>
  );
}

export default connect(({ loading, alertCenter: { users, alertItems } }) => ({
  users,
  alertItems,
  loading: loading.effects,
}))(AlertTask);
