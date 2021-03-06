/*
 * @Description: This is for userMaintenance page.
 * @Author: dailinbo
 * @Date: 2019-11-12 19:03:58
 * @LastEditors  : dailinbo
 * @LastEditTime : 2020-01-14 10:55:56
 */

import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Modal, Table, Button, Drawer, message, Pagination } from 'antd';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';
import styles from './UserMaintenance.less';
import { timeFormat, lockedFormat } from '@/utils/filter';
import IconFont from '@/components/IconFont';

import SearchForm from './components/SearchForm';
import ModifyUser from './components/ModifyUser';

const NewSearchForm = Form.create({})(SearchForm);

@connect(({ userMaintenance, loading }) => ({
  loading: loading.effects,
  userMaintenanceData: userMaintenance.data,
  modifyUserData: userMaintenance.updateData,
}))
class UserMaintenance extends Component {
  state = {
    visible: false,
    userTitle: 'New User',
    NewFlag: true,
    deleteVisible: false,
    searchUserId: undefined,
    searchUserName: undefined,
    userInfo: {
      userId: '',
      userName: '',
    },
    columns: [
      {
        title: formatMessage({ id: 'app.common.number' }),
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        minWidth: 60,
        render: (res, recode, index) => (
          <span>{(this.state.page.pageNumber - 1) * this.state.page.pageSize + index + 1}</span>
        ),
      },
      // {
      //   title: formatMessage({ id: 'app.common.userId' }),
      //   dataIndex: 'userId',
      //   key: 'userId',
      // },
      {
        title: formatMessage({ id: 'app.common.username' }),
        dataIndex: 'userName',
        key: 'userName',
        align: 'left',
      },
      {
        title: formatMessage({ id: 'systemManagement.userMaintenance.disabled' }),
        dataIndex: 'accountLock',
        key: 'accountLock',
        align: 'center',
        render: (res, obj) => (
          <div>
            <span>{lockedFormat(obj.accountLock)}</span>
          </div>
        ),
      },
      {
        title: formatMessage({ id: 'systemManagement.userMaintenance.LastUpdateTime' }),
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        render: (res, obj) => <span>{obj.updateTime && timeFormat(obj.updateTime)}</span>,
      },
      {
        title: formatMessage({ id: 'systemManagement.userMaintenance.LastUpdateUser' }),
        dataIndex: 'updateBy',
        key: 'updateBy',
        align: 'left',
      },
      {
        title: formatMessage({ id: 'app.common.operation' }),
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        render: (res, obj) => (
          <span className={styles.operation}>
            <a href="#" onClick={() => this.updateUser(res, obj)}>
              <IconFont type="icon-edit" className="operation-icon" />
            </a>
            <a href="#" onClick={() => this.deleteUser(res, obj)}>
              <IconFont type="icon-delete" className="operation-icon" />
            </a>
          </span>
        ),
      },
    ],
    page: {
      pageNumber: 1,
      pageSize: 10,
    },
  };

  newDepartmentId = '';

  searchForm = React.createRef();

  formRef = React.createRef();

  updateFormRef = React.createRef();

  passwordFormRef = React.createRef();

  resetPasswordFormRef = React.createRef();

  componentDidMount() {
    this.queryUserList();
  }

  /**
   * @description: This is for query user list function.
   * @param {type} null
   * @return: undefined
   */
  queryUserList = () => {
    const { dispatch } = this.props;
    const { searchUserId, searchUserName } = this.state;
    const params = {
      userId: searchUserId,
      userName: searchUserName,
      operType: 'queryAllList',
      pageNumber: this.state.page.pageNumber.toString(),
      pageSize: this.state.page.pageSize.toString(),
    };
    dispatch({
      type: 'userMaintenance/userManagemetDatas',
      payload: params,
    });
  };

  /**
   * @description: This is function for add User.
   * @param {type} null
   * @return: undefined
   */
  newUser = () => {
    this.setState({
      visible: true,
      userTitle: 'New User',
      NewFlag: true,
      userInfo: {},
    });
  };

  addConfrim = () => {
    this.setState({
      visible: false,
      searchUserId: undefined,
      searchUserName: undefined,
    });
    this.searchForm.current.resetFields();
    const { pageSize } = this.state.page;
    const page = {
      pageNumber: 1,
      pageSize,
    };
    this.setState(
      {
        page,
      },
      () => {
        this.queryUserList();
      },
    );
  };

  addCancel = () => {
    this.setState({ visible: false });
  };

  /**
   * @description: This is for update user function.
   * @param {type} null
   * @return: undefined
   */
  updateUser = (res, obj) => {
    const userInfo = {
      userName: obj.userName,
      userId: obj.userId,
      accountLock: obj.accountLock,
    };
    this.setState({
      visible: true,
      userTitle: 'Modify User',
      NewFlag: false,
      userInfo,
    });
  };

  /**
   * @description: This is function for delete User.
   * @param {type} null
   * @return: undefined
   */
  deleteUser = (res, obj) => {
    const userInfo = {
      userName: obj.userName,
      userId: obj.userId,
      accountLock: obj.accountLock,
    };
    this.setState({
      deleteVisible: true,
      userInfo,
    });
  };

  deleteConfirm = () => {
    const { dispatch } = this.props;
    const params = {
      operType: 'deleteUserById',
      userId: this.state.userInfo.userId,
    };
    dispatch({
      type: 'userMaintenance/updateUserModelDatas',
      payload: params,
      callback: () => {
        message.success({
          content: 'delete success',
          duration: 2,
        });
        this.queryUserList();
        this.setState({
          deleteVisible: false,
        });
      },
    });
  };

  deleteCancel = () => {
    this.setState({
      deleteVisible: false,
    });
  };

  /**
   * @description: This is function for search userinfo.
   * @param {type} null
   * @return: undefined
   */
  queryLog = () => {
    const { page } = this.state;
    const newPage = {
      pageNumber: 1,
      pageSize: page.pageSize,
    };
    this.setState({
      page: newPage,
    });
    this.searchForm.current.validateFields((err, values) => {
      this.setState(
        {
          searchUserId: values.userId,
          searchUserName: values.userName,
        },
        () => {
          this.queryUserList();
        },
      );
    });
  };

  /**
   * @description: This is for paging function.
   * @param {type} null
   * @return: undefined
   */
  pageChange = (pageNumber, pageSize) => {
    const page = {
      pageNumber,
      pageSize,
    };

    this.setState(
      {
        page,
      },
      () => {
        this.queryUserList();
      },
    );
  };

  onShowSizeChange = (current, pageSize) => {
    const page = {
      pageNumber: current,
      pageSize,
    };
    this.setState(
      {
        page,
      },
      () => {
        this.queryUserList();
      },
    );
  };

  render() {
    const { loading, userMaintenanceData } = this.props;
    const { userInfo, page, userTitle, NewFlag } = this.state;
    return (
      <PageHeaderWrapper>
        <div>
          <div>
            <NewSearchForm
              search={this.queryLog}
              newUser={this.newUser}
              ref={this.searchForm}
            ></NewSearchForm>
          </div>
          <div>
            <Drawer
              closable={false}
              title={userTitle}
              width={700}
              onClose={this.addCancel}
              visible={this.state.visible}
            >
              {this.state.visible && (
                <ModifyUser
                  onCancel={this.addCancel}
                  onSave={this.addConfrim}
                  NewFlag={NewFlag}
                  userInfo={userInfo}
                ></ModifyUser>
              )}
            </Drawer>
            <Modal
              title={formatMessage({ id: 'app.common.confirm' })}
              visible={this.state.deleteVisible}
              onOk={this.deleteConfirm}
              onCancel={this.deleteCancel}
              cancelText={formatMessage({ id: 'app.common.cancel' })}
              okText={formatMessage({ id: 'app.common.confirm' })}
            >
              <span>Please confirm that you want to delete this record?</span>
            </Modal>
          </div>
          <div className={styles.content}>
            <div className={styles.tableTop}>
              <Button onClick={this.newUser} type="primary" className="btn-usual">
                + New User
              </Button>
            </div>
            <Table
              loading={loading['userMaintenance/userManagemetDatas']}
              rowKey={row => row.userId.toString()}
              dataSource={userMaintenanceData.items}
              columns={this.state.columns}
              pagination={false}
            ></Table>
            {userMaintenanceData.items && userMaintenanceData.items.length > 0 && (
              <Pagination
                current={page.pageNumber}
                showSizeChanger
                showTotal={() => `Total ${userMaintenanceData.totalCount} items`}
                onShowSizeChange={this.onShowSizeChange}
                onChange={this.pageChange}
                total={userMaintenanceData.totalCount}
                pageSize={page.pageSize}
              />
            )}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default UserMaintenance;
