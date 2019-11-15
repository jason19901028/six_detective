import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { connect } from 'dva';
import LeftClassifyTree from '../../components/LeftClassifyTree/LeftClassifyTree';
import styles from './TaskSwitch.less';

@connect(({ taskSwitch, loading }) => ({
  loading: loading.effects['taskSwitch/getFolderMenuList'],
  getFolderMenuListData: taskSwitch.data,
}))
class TaskSwitch extends Component {
  state = {};

  componentDidMount() {
    this.getFolderMenuList();
  }

  getFolderMenuList = () => {
    const { dispatch } = this.props;
    const params = {
      fileType: '1',
    };
    dispatch({
      type: 'taskSwitch/getFolderMenuList',
      payload: params,
    });
  };

  render() {
    const { getFolderMenuListData } = this.props;

    return (
      <PageHeaderWrapper>
        <div className={styles.taskSwitchWraper}>
          <div className={styles.sidebar}>
            <LeftClassifyTree getFolderMenuListData={getFolderMenuListData}></LeftClassifyTree>
          </div>
          <div className={styles.main}>task</div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default TaskSwitch;