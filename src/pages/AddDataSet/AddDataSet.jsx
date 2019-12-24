/*
 * @Description: 新建数据集
 * @Author: lan
 * @Date: 2019-12-07 14:24:54
 * @LastEditTime : 2019-12-23 14:21:23
 * @LastEditors  : lan
 */
import React, { PureComponent } from 'react';
import { Icon, Input, Select, Button, Layout, Table, Row, Col, Checkbox, InputNumber } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import _ from 'lodash';
import classNames from 'classnames';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import IconFont from '@/components/IconFont';
import styles from './AddDataSet.less';
import ConnList from './components/ConnList';
import CodeMirrorComponent from './components/CodeMirror';
import ParamSetting from './components/drawers/ParamSetting';
import Save from './components/drawers/Save';
import ResizeableTitle from './components/ResizeableTitle';

const { Sider, Content, Header } = Layout;
const { Option } = Select;

@connect(({ sqlDataSource, getClassifyTree, sqlKeydown }) => ({
  sql: sqlKeydown.sql, // sql查询语句
  classifyTree: getClassifyTree.classifyTree, // 分类树
  dataSourceList: sqlDataSource.dataSourceList, // 数据源选择框
  totalCount: sqlDataSource.totalCount, // 数据源下表的总数
  metaDataTableList: sqlDataSource.metaDataTableList, // 数据源下的表
  tableData: sqlDataSource.tableData, // 数据预览的表数据
  column: sqlDataSource.column, // 数据预览表头
  sqlDataSetName: sqlDataSource.sqlDataSetName, // 数据集名称
  defaultPageSize: sqlDataSource.defaultPageSize, // 默认一页行数
  columnData: sqlDataSource.columnData, // 列数据
  dataSet: sqlDataSource.dataSet, // 数据集详情
}))
class AddDataSet extends PureComponent {
  // 可拖动的表格
  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  pageNumber = 1; // 左侧数据源表滚动加载相关

  isSaveOther = false; // 是否另存为

  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // 数据集名称
  }

  state = {
    visible: {
      paramSetting: false, // 控制参数设置抽屉
      save: false, // 控制保存数据集抽屉
    },
    AlterDataSetName: true, // 操作数据集名称
    tableView: 'data', // 切换预览数据或查看列数据
    pageNumber: '1', // 表格分页
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const {
      location: {
        query: { connectionId, connectionName, datasetId },
      },
    } = this.props;
    this.connection_id = connectionId;
    this.connection_name = connectionName;
    this.datasetId = datasetId;
    dispatch({
      type: 'sqlDataSource/getDataSourceList',
      payload: { connectionId },
    });
    dispatch({
      type: 'getClassifyTree/getClassifyTree',
    });
    if (datasetId) {
      dispatch({
        type: 'sqlDataSource/getDataSetDetail',
        payload: {
          datasetId,
        },
        callback: items => {
          dispatch({
            type: 'sqlKeydown/changeSql',
            payload: items.commandText,
          });
          dispatch({
            type: 'sqlDataSource/changeDataSetName',
            payload: items.datasetName,
          });
          this.setState({
            AlterDataSetName: false,
          });
        },
      });
    }
    // dispatch({
    //   type: 'addSqlDataSet/getMetadataList',
    //   payload: {
    //     connection_id: connectionId,
    //     pageNumber: '1',
    //     pageSize: '10',
    //   },
    // });
    // dispatch({
    //   type: 'sqlDataSource/saveConnectionId',
    //   payload: {
    //     connectionId,
    //   },
    // });
  }

  componentDidUpdate() {
    // isTableScroll
    // if(document.getElementsByClassName('ant-table').length > 0
    // && document.getElementsByClassName('ant-table')[0].clientHeight < window.innerHeight - 381 ){
    //   document.getElementsByClassName('ant-table-header')[0].style.marginRight = '0px'
    // } else {
    //   document.getElementsByClassName('ant-table-header')[0].style.marginRight = '12px'
    // }
  }

  // 刷新列表
  loadMore = () => {
    const { dispatch, totalCount } = this.props;
    // eslint-disable-next-line no-plusplus
    if (this.pageNumber++ >= totalCount / 30) {
      return false;
    }
    dispatch({
      type: 'sqlDataSource/getMetadataList',
      payload: {
        connection_id: this.connection_id,
        pageNumber: this.pageNumber.toString(),
        pageSize: '30',
      },
    });
    return true;
  };

  // 多选框选择改变数据表列表
  checkBoxChange = checkedValues => {
    const { dispatch, dataSourceList } = this.props;
    if (checkedValues.length === 2) {
      dispatch({
        type: 'sqlDataSource/clear',
        payload: [],
      });
      dispatch({
        type: 'sqlDataSource/getMetadataList',
        payload: {
          connection_id:
            this.connection_id || (dataSourceList[0] && dataSourceList[0].connectionId),
          pageNumber: this.pageNumber.toString(),
          pageSize: '30',
        },
      });
    } else if (checkedValues.length === 1) {
      let mdTypeOri = '';
      if (checkedValues[0] === '0') {
        mdTypeOri = 'T';
      } else {
        mdTypeOri = 'V';
      }
      dispatch({
        type: 'sqlDataSource/clear',
        payload: [],
      });
      dispatch({
        type: 'sqlDataSource/getMetadataList',
        payload: {
          connection_id:
            this.connection_id || (dataSourceList[0] && dataSourceList[0].connectionId),
          pageNumber: this.pageNumber.toString(),
          pageSize: '30',
          mdTypeOri,
        },
      });
    } else {
      dispatch({
        type: 'sqlDataSource/clear',
        payload: [],
      });
    }
  };

  perfectColumn = () => {
    const { column } = this.props;
    return (
      column &&
      column.map((valueV, index) => {
        const { value, width, type } = valueV;
        return {
          title: (
            <div className={styles.titleHasIcon}>
              <IconFont
                type={type === 'dimension' ? 'icon-icon-str' : 'icon-NO2'}
                style={{
                  color: type === 'dimension' ? '#396dfe' : '#17c4bb',
                }}
              />
              {value}
            </div>
          ),
          dataIndex: value,
          key: value,
          align: type === 'dimension' ? 'left' : 'right',
          render: text => {
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(Number(text))) {
              return <span>{text && text.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')}</span>;
            }
            return <span>{text}</span>;
          },
          width,
          onHeaderCell: columns => ({
            width: columns.width,
            onResize: this.handleResize(index),
          }),
        };
      })
    );
  };

  handleResize = index => (e, { size }) => {
    if (size.width < 70) {
      return false;
    }
    const { dispatch, column } = this.props;
    column[index].width = size.width;
    _.debounce(
      () =>
        dispatch({
          type: 'sqlDataSource/changeColumn',
          payload: [...column],
        }),
      10,
    )();
    return true;
  };

  toggleModal = key => {
    const { visible } = this.state;
    this.setState({
      visible: {
        ...visible,
        [key]: !visible[key],
      },
    });
  };

  saveSql = fieldsValue => {
    const { dispatch, sql } = this.props;
    dispatch({
      type: 'sqlDataSource/addDataSet',
      payload: {
        // update,del,
        datasourceId: this.connection_id,
        datasourceName: this.connection_name,
        commandText: sql,
        datasetParams: JSON.stringify([]),
        datasetFields: JSON.stringify([]),
        datasetType: 'SQL',
        // sqlStatementPram,
        datasetIsDict: 'N',
        datasetName: fieldsValue.sqlDataSetName,
        folderId: fieldsValue.folder,
        // tableId: this.isSaveOther ? '' : this.tableId,
        // connection_id: this.connection_id,
        // setType: 'viewSet',
        // viewSql: sql,
        // viewName: fieldsValue.sqlDataSetName,
      },
    });
  };

  // 表格分页
  pageChange = pageNumber => {
    this.setState({
      pageNumber,
    });
  };

  render() {
    const {
      dataSourceList,
      metaDataTableList,
      dispatch,
      tableData,
      classifyTree,
      defaultPageSize,
      sqlDataSetName,
      columnData,
      // tableData2,
      // targetObj,
      // column2,
    } = this.props;
    const column = [
      {
        title: 'Column Name',
        dataIndex: 'field_data_name',
        key: 'field_data_name',
      },
      {
        title: 'Column Count',
        dataIndex: 'column_no',
        key: 'column_no',
      },
      {
        title: 'Column Type',
        dataIndex: 'field_data_type',
        key: 'field_data_type',
      },
    ];
    const { AlterDataSetName, pageNumber } = this.state;
    const renderColumn = this.perfectColumn();
    return (
      <DndProvider backend={HTML5Backend}>
        <Layout className={styles.addDataSet}>
          <Header className={styles.header}>
            <Row>
              <Col span={12}>
                <Button
                  onClick={() => {
                    router.goBack();
                  }}
                  className={styles.backBtn}
                >
                  <Icon type="left" style={{ color: '#fff' }} />
                </Button>
                {AlterDataSetName && (
                  <IconFont
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      color: '#fff',
                    }}
                    type="icon-SQLDataSet"
                  />
                )}
                {AlterDataSetName && (
                  <span
                    onClick={() => {
                      this.setState({
                        AlterDataSetName: false,
                      });
                      setTimeout(() => {
                        this.inputRef.current.focus();
                      }, 50);
                    }}
                    style={{ color: '#fff' }}
                  >
                    {sqlDataSetName || 'DataSet Name'}
                  </span>
                )}
                {!AlterDataSetName && (
                  <Input
                    ref={this.inputRef}
                    type="text"
                    value={sqlDataSetName}
                    onBlur={e => {
                      dispatch({
                        type: 'sqlDataSource/changeDataSetName',
                        payload: e.target.value,
                      });
                      this.setState({
                        AlterDataSetName: true,
                      });
                    }}
                    onChange={e => {
                      dispatch({
                        type: 'sqlDataSource/changeDataSetName',
                        payload: e.target.value,
                      });
                    }}
                    onKeyDown={e => {
                      if (e.keyCode === '13') {
                        e.currentTarget.blur();
                      }
                    }}
                  />
                )}
              </Col>
              <Col span={12} style={{ paddingTop: 6, paddingRight: 22 }}>
                <Button
                  style={{ float: 'right' }}
                  className={styles.searchBoxButton}
                  type="primary"
                  onClick={() => {
                    this.isSaveOther = false;
                    this.toggleModal('save');
                  }}
                >
                  Save
                </Button>
                <Button
                  style={{ float: 'right' }}
                  // ghost
                  className={styles.searchBoxButton}
                  type="primary"
                  onClick={() => {
                    this.isSaveOther = true;
                    this.toggleModal('save');
                  }}
                >
                  Save As
                </Button>
              </Col>
            </Row>
          </Header>
          <Content className={styles.layoutContent}>
            {/* <Spin
              tip={<span className={styles.spanTips}>加载中...</span>}
              spinning={this.state.loading}
            > */}
            <Layout>
              <Sider width={230} style={{ background: '#fff' }}>
                <div className={styles.title}>
                  <span>数据连接</span>
                  <IconFont type="icon-DataSource" />
                </div>
                <div className={styles.toolsBox}>
                  {dataSourceList && dataSourceList[0] && (
                    <Select
                      size="small"
                      className={styles.noBorerComponent}
                      defaultValue={
                        this.props.location.query.connectionId || dataSourceList[0].connectionId
                      }
                      onChange={(val, a) => {
                        this.pageNumber = 1;
                        this.connection_id = val;
                        this.connection_name = a.props.children;
                        dispatch({
                          type: 'sqlDataSource/clear',
                          payload: [],
                        });
                        dispatch({
                          type: 'sqlDataSource/getMetadataList',
                          payload: {
                            connection_id: val,
                            pageNumber: this.pageNumber.toString(),
                            pageSize: '30',
                          },
                        });
                        dispatch({
                          type: 'sqlDataSource/saveConnectionId',
                          payload: {
                            connectionId: val,
                          },
                        });
                      }}
                    >
                      {dataSourceList.map(value => (
                        <Option key={value.connectionId} value={value.connectionId}>
                          {value.connectionName}
                        </Option>
                      ))}
                    </Select>
                  )}
                </div>
                <ConnList
                  loadMore={this.loadMore}
                  data={metaDataTableList}
                  connection_id={
                    this.connection_id ||
                    (dataSourceList && dataSourceList[0] && dataSourceList[0].connectionId)
                  }
                />
                <div className={styles.buttonActions}>
                  <Checkbox.Group
                    style={{ width: '100%', padding: '6px 12px 0' }}
                    defaultValue={['0', '1']}
                    onChange={this.checkBoxChange}
                  >
                    <Row>
                      <Col span={12}>
                        <Checkbox value="0">table</Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="1">view</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                  <Input className="noBorerComponent" placeholder="inputTableOrView" />
                </div>
              </Sider>
              <Layout className={styles.layoutTable}>
                <div className={styles.tableWrapper}>
                  <div className={styles.flowContent}>
                    <div style={{ position: 'absolute', top: 20, right: 25, zIndex: 1000 }}>
                      <Button
                        type="primary"
                        style={{ marginRight: 10 }}
                        onClick={() => {
                          if (this.props.sql) {
                            dispatch({
                              type: 'sqlDataSource/getMetadataTablePerform',
                              payload: {
                                datasourceId: this.connection_id,
                                commandText: this.props.sql,
                                previewNum: 20,
                              },
                            });
                            dispatch({
                              type: 'sqlDataSource/getColumn',
                              payload: {
                                datasourceId: this.connection_id,
                                commandText: this.props.sql,
                                previewNum: 20,
                              },
                            });
                          }
                        }}
                      >
                        Execute
                      </Button>
                      <Button
                        type="primary"
                        style={{ marginRight: 10 }}
                        onClick={() => {
                          this.toggleModal('paramSetting');
                        }}
                      >
                        Variable Setting
                      </Button>
                      <Button type="primary" style={{ marginRight: 10 }} onClick={() => {}}>
                        SQL Beautifier
                      </Button>
                    </div>
                    <CodeMirrorComponent />
                  </div>
                  <div className={styles.searchBox}>
                    <Button
                      onClick={() => {
                        this.setState({
                          tableView: 'data',
                        });
                      }}
                      className={classNames(
                        styles.icon,
                        this.state.tableView === 'data' ? styles.tableActive : '',
                      )}
                      title="表数据"
                    >
                      <IconFont type="iconbianjiqi_charubiaoge" />
                    </Button>
                    <Button
                      onClick={() => {
                        this.setState({
                          tableView: 'attr',
                        });
                      }}
                      className={classNames(
                        styles.icon,
                        this.state.tableView === 'attr' ? styles.tableActive : '',
                      )}
                      title="表属性"
                    >
                      <IconFont type="iconorderedlist" />
                    </Button>
                    {/* <span
                      onClick={() => {
                        if (this.props.sql) {
                          dispatch({
                            type: 'addSqlDataSet/getSqlParserInfo',
                            payload: {
                              connection_id: this.connection_id,
                              sqlStatement: this.props.sql,
                            },
                          });
                          dispatch({
                            type: 'addSqlDataSet/getMetadataTablePerform',
                            payload: {
                              connection_id: this.connection_id,
                              querySql: this.props.sql,
                            },
                          });
                        }
                      }}
                      style={{ marginLeft: 5, cursor: 'pointer' }}
                    >
                      刷新
                    </span> */}
                    <div style={{ float: 'right', marginRight: 10 }}>
                      {/* <Checkbox>显示隐藏字段</Checkbox>
                      <Checkbox>显示别名</Checkbox> */}
                      <span style={{ fontSize: 12 }}>
                        <InputNumber
                          onChange={value => {
                            dispatch({
                              type: 'sqlDataSource/changeDefaultPageSize',
                              payload: value,
                            });
                          }}
                          className={styles.inputNumber}
                          min={1}
                          max={100}
                          defaultValue={5}
                        />
                        行
                      </span>
                    </div>
                  </div>
                  {this.state.tableView === 'data' && (
                    <Table
                      scroll={{ x: 'max-content' }}
                      // className={styles.editDataSetTable}
                      components={this.components}
                      bordered
                      columns={renderColumn}
                      dataSource={tableData}
                      pagination={{
                        pageSize: tableData[0] && defaultPageSize,
                        showTotal:
                          tableData[0] &&
                          (() =>
                            `Page ${pageNumber.toString()} of ${Math.ceil(
                              tableData.length / defaultPageSize,
                            ).toString()}`),

                        current: tableData[0] && pageNumber,
                        total: tableData[0] && tableData.length,
                        onChange: tableData[0] && this.pageChange,
                        size: 'small',
                      }}
                      // pagination={{ pageSize: 5 }}
                    />
                  )}
                  {this.state.tableView === 'attr' && (
                    <Table
                      // className={styles.editDataSetTable}
                      dataSource={columnData}
                      columns={column}
                      pagination={{
                        pageSize: columnData[0] && defaultPageSize,
                        showTotal:
                          columnData[0] &&
                          (() =>
                            `Page ${pageNumber.toString()} of ${Math.ceil(
                              columnData.length / defaultPageSize,
                            ).toString()}`),

                        current: columnData[0] && pageNumber,
                        total: columnData[0] && columnData.length,
                        onChange: columnData[0] && this.pageChange,
                        size: 'small',
                      }}
                    />
                  )}
                </div>
              </Layout>
            </Layout>
            {/* </Spin> */}
          </Content>
          <ParamSetting visible={this.state.visible.paramSetting} toggleModal={this.toggleModal} />
          <Save
            saveSql={this.saveSql}
            sqlDataSetName={sqlDataSetName}
            isSaveOther={this.isSaveOther}
            visible={this.state.visible.save}
            toggleModal={this.toggleModal}
            classifyTree={classifyTree}
          />
        </Layout>
      </DndProvider>
    );
  }
}

export default AddDataSet;
