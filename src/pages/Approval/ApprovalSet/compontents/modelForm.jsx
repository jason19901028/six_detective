// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import DeployedModel from './deployedModel';
import TransferModal from './transferModal';
// import { async } from 'q';
// import classNames from 'classnames';
// import styles from './ApprovalSet.less';
const { Search } = Input;
@connect(({ approvalSet, loading }) => ({
  loading: loading.effects['approvalSet/approvalConfigDatas'],
  approvalConfigList: approvalSet.data,
  deployedModelDatas: approvalSet.deployedModelDatas,
  processDefinitionId: approvalSet.processDefinitionId,
  processName: approvalSet.processName,
  auditorData: approvalSet.auditorData,
}))
class ModelForm extends PureComponent {
  state = {
    deployedModelVisible: false,
    isShowTransferModal: false,
    taskIds: '',
    targetKeys: [],
    allChooseObj: {},
  };

  componentDidMount() {
    window.showAudit = (processDefinitionIds, taskIds) => {
      this.showTransferModal(taskIds);
    };
  }

  handleTransferOk = () => {
    const { targetKeys, allChooseObj, taskIds } = this.state;
    allChooseObj[taskIds] = targetKeys;

    // auditInfo.concat(nodeAuditInfo);
    // console.log('auditInfo------>', auditInfo, allChooseObj, targetKeys);
    this.closeTransferModal();
  };

  onTransferChange = targetKeys => {
    console.log('Target Keys:', targetKeys);
    this.setState({ targetKeys });
  };

  // 修改设置提交
  handleSubmit = e => {
    const { formValue } = this.props;
    const { allChooseObj } = this.state;
    const nodeAuditInfo = [];
    for (const key in allChooseObj) {
      if (allChooseObj.hasOwnProperty(key)) {
        for (let i = 0; i < allChooseObj[key].length; i += 1) {
          nodeAuditInfo.push({
            stepId: key,
            auditIds: allChooseObj[key][i],
            auditType: '0',
          });
        }
      }
    }
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.handleCancel();
        const param = {
          configId: formValue.configId,
          processUuid: this.props.processDefinitionId,
          remark: values.remark,
          processName: this.props.processName,
          auditInfo: JSON.stringify(nodeAuditInfo),
        };
        this.saveConfig(param);
      }
    });
  };

  // 修改设置表格
  saveConfig = param => {
    const { dispatch } = this.props;
    dispatch({
      type: 'approvalSet/saveConfigDatas',
      payload: param,
      callback: obj => this.props.configData(obj),
    });
  };

  // 打开流程列表弹窗
  showDeployedModel = () => {
    this.setState({
      deployedModelVisible: true,
    });
  };

  // 关闭流程列表弹窗
  closeDeployedModel = () => {
    this.setState({
      deployedModelVisible: false,
    });
  };

  // 查询审核人列表
  getAuditorData = async (configId, stepId) => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'approvalSet/getAuditorlistDatas',
      payload: {
        configId,
        stepId,
      },
    });
  };

  // 打开审核人设置弹窗
  showTransferModal = async taskId => {
    const { formValue } = this.props;
    await this.getAuditorData(formValue.configId, taskId);
    const { allChooseObj, taskIds } = this.state;
    let targetKeysCurrent = [];
    if (taskIds !== taskId && this.props.auditorData.length) {
      for (let i = 0; i < this.props.auditorData.length; i += 1) {
        targetKeysCurrent.push(this.props.auditorData[i].relateNo);
      }
    } else if (allChooseObj.hasOwnProperty(taskIds)) {
      targetKeysCurrent = allChooseObj[taskIds];
    }
    this.setState({
      isShowTransferModal: true,
      targetKeys: targetKeysCurrent,
      taskIds: taskId,
    });
  };

  setDefaultTargetKeys = auditorData => {
    const targetKeysCurrent = [];
    for (let i = 0; i < auditorData.length; i += 1) {
      targetKeysCurrent.push(auditorData.relateNo);
    }
    // this.setState({
    //   targetKeys: targetKeysCurrent,
    // });
  };

  // 关闭审核人设置弹窗
  closeTransferModal = () => {
    this.setState({
      isShowTransferModal: false,
    });
  };

  // 设置form表单值显示内容
  setFormValueType = () => {
    const { processName } = this.props;
    console.log('processName--->', processName);
    this.props.form.setFieldsValue({
      processName,
    });
  };

  render() {
    const {
      handleCancel,
      visible,
      formValue,
      getProcessResource,
      processDefinitionId,
    } = this.props;
    const diagramUrl = `/process/diagram-viewer/index.html?isClick=1&processDefinitionId=${processDefinitionId}`;
    const { getFieldDecorator } = this.props.form;
    const { deployedModelVisible, isShowTransferModal, taskIds, targetKeys } = this.state;
    return (
      <div>
        <Modal
          title="审批设置修改"
          visible={visible}
          closable={false}
          footer={false}
          width={1000}
          height={1000}
          cancelText={formatMessage({ id: 'app.common.cancel' })}
          okText={formatMessage({ id: 'app.common.save' })}
        >
          <iframe title="diagram" width="100%" height="300px" src={diagramUrl}></iframe>
          <Form onSubmit={this.handleSubmit} className="ant-advanced-search-form">
            <Row gutter={{ xs: 24, sm: 48, md: 144, lg: 48, xl: 96 }} style={{ marginTop: '20px' }}>
              <Col xs={12} sm={12} lg={8}>
                <Form.Item
                  label={formatMessage({ id: 'systemManagement.flowConfig.flowChart' })}
                  colon={false}
                >
                  {getFieldDecorator('processName', {
                    rules: [{ required: true, message: 'Please input your processName!' }],
                    initialValue: formValue.processName,
                  })(<Search onClick={this.showDeployedModel} />)}
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} lg={8}>
                <Form.Item label="说明" colon={false}>
                  {getFieldDecorator('remark', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                    initialValue: formValue.remark,
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <div className="btnArea">
              <Button type="primary" htmlType="submit">
                确定
              </Button>
              <Button
                type="primary"
                onClick={handleCancel}
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#d9d9d9',
                  marginRight: '20px',
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                取消
              </Button>
            </div>
          </Form>

          <TransferModal
            closeTransferModal={this.closeTransferModal}
            visible={isShowTransferModal}
            taskIds={taskIds}
            targetKeys={targetKeys}
            onTransferChange={this.onTransferChange}
            handleTransferOk={this.handleTransferOk}
          />
        </Modal>
        <DeployedModel
          closeDeployedModel={this.closeDeployedModel}
          getProcessResource={getProcessResource}
          setFormValueType={this.setFormValueType}
          visible={deployedModelVisible}
        />
      </div>
    );
  }
}
export default Form.create()(ModelForm);
