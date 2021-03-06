import React, { PureComponent } from 'react';
import { Drawer, Row, Col, Input, Select, Icon, Button } from 'antd';
import _ from 'lodash';
import styles from '../../AddDataSet.less';

const { Option } = Select;

export default class ParamSetting extends PureComponent {
  state = {};

  render() {
    const { visible, toggleModal, variableList, getVariableList, saveDatasetParams } = this.props;
    const datasetParams = _.cloneDeep(variableList);
    return (
      <Drawer
        visible={visible}
        title="Params Setting"
        onClose={() => {
          toggleModal('paramSetting');
        }}
        width={800}
        className={styles.paramsDrawer}
      >
        <Button
          type="primary"
          onClick={() => {
            getVariableList();
          }}
        >
          <Icon type="download" />
          Extraction
        </Button>
        <ul style={{ padding: 0, marginTop: 10 }}>
          <li>
            <Row style={{ lineHeigh: '50px' }}>
              <Col span={8}>Variable Name</Col>
              <Col span={8}>Variable Type</Col>
              <Col span={8}>Variable Default Value</Col>
            </Row>
          </li>
          {datasetParams.map((item, index) => (
            <li>
              <Row style={{ lineHeigh: '50px' }}>
                <Col span={8}>
                  <Input disabled style={{ width: '90%' }} value={item.parameter_name} />
                </Col>
                <Col span={8}>
                  <Select
                    defaultValue={item.parameter_type}
                    style={{ width: '90%' }}
                    onSelect={e => {
                      datasetParams.forEach((v, i) => {
                        if (i === index) {
                          v.parameter_type = e;
                        }
                      });
                    }}
                  >
                    <Option value="STRING">STRING</Option>
                    <Option value="NUMBER">NUMBER</Option>
                    <Option value="DATE(YYYYMMDD)">DATE(YYYYMMDD)</Option>
                    <Option value="DATE(YYYYMM)">DATE(YYYYMM)</Option>
                    <Option value="DATE(YYYY)">DATE(YYYY)</Option>
                  </Select>
                </Col>
                <Col span={8}>
                  <Input
                    style={{ width: '90%' }}
                    defaultValue={item.parameter_default_value}
                    onChange={e => {
                      datasetParams.forEach((v, i) => {
                        if (i === index) {
                          v.parameter_default_value = e.target.value;
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
            </li>
          ))}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              // borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => {
                toggleModal('paramSetting');
              }}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                saveDatasetParams([...datasetParams]);
              }}
              type="primary"
            >
              Save
            </Button>
          </div>
        </ul>
      </Drawer>
    );
  }
}
