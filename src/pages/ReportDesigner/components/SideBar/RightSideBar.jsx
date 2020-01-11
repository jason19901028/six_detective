import React, { PureComponent, useState } from 'react';
import { connect } from 'dva';
import { Layout, Form, Tree, Icon } from 'antd';
import classNames from 'classnames';
import { FormattedMessage } from 'umi/locale';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';
import { getColIndexRowIndex, setCellTypeAndValue } from '../../utils';
import IconFont from '@/components/IconFont';
import WidgetControl from './WidgetControl';
import CellProperty from './CellProperty';
import styles from './index.less';

const { Sider } = Layout;
const { TreeNode } = Tree;
let resetControl = false;

@connect(({ reportDesigner, formArea }) => ({
  cellPosition: reportDesigner.cellPosition,
  dataSetPrivateList: reportDesigner.dataSetPrivateList,
  spreadsheetOtherProps: reportDesigner.spreadsheetOtherProps,
  teamplateAreaObj: reportDesigner.teamplateAreaObj,
  customSearchData: formArea.customSearchData,
  dataSetPublicList: reportDesigner.dataSetPublicList,
  defaultValueDatasetType: formArea.defaultValueDatasetType,
}))
@Form.create({
  onFieldsChange(props, changedFields, allFields) {
    if (resetControl) {
      resetControl = false;
      return;
    }
    const { dispatch } = props;
    // 便利得到result
    const result = {};
    Object.entries(allFields).forEach(([key, value]) => {
      if (value.value !== undefined) {
        result[key] = value.value;
      }
    });
    // 若单元格设置区域，则进行以下操作
    if (allFields.cell) {
      // TODO：异步问题
      if (props.cellPosition !== allFields.cell.value) {
        return;
      }
      // 若修改form，则即使更新fields
      const { dataSetPrivateList, cellPosition } = props;
      const { dataSet, dataColumn, ...otherProps } = result;
      otherProps.dataSet = {
        datasetId: dataSet,
        datasetName: dataSetPrivateList.find(value => value.dataset_id === dataSet)
          ? dataSetPrivateList.find(value => value.dataset_id === dataSet).dataset_name
          : undefined,
        fieldDataName: dataColumn,
      };
      // 若此单元格为数据集类型，且数据集与数据集字段都有，则为此单元格设置元素
      if (
        otherProps.dataSet.datasetName &&
        otherProps.dataSet.fieldDataName &&
        otherProps.elementType
      ) {
        setCellTypeAndValue({
          type: 'dataSet',
          value: `${otherProps.dataSet.datasetName}.${otherProps.dataSet.fieldDataName}`,
          cellPosition,
        });
      }
      dispatch({
        type: 'reportDesigner/modifyTemplateArea',
        payload: otherProps,
      });
    }
    const { customSearchData } = props;
    if (allFields.widgetType && customSearchData.length > 0) {
      const currentCustomSearchData = customSearchData.find(value => value.active);
      // 若为控件设置的操作，则进行以下操作
      dispatch({
        type: 'formArea/changeCustomSearchData',
        payload: {
          index: currentCustomSearchData.i,
          props: { ...currentCustomSearchData, ...result },
        },
      });
    }
  },
  // 若是控件设置区域，则进行下面的操作
})
export default class RightSideBar extends PureComponent {
  state = {
    siderBarType: 'cell',
  };

  // 根据查询条件的数据结构，生成树状结构
  generateTree = () => {
    const { customSearchData, dispatch } = this.props;
    return (
      <TreeNode key="parent" title="Widgets">
        {customSearchData.map((value, index) => (
          <TreeNode
            key={value.i}
            title={
              <Title
                index={index}
                title={value.widgetName}
                isLeaf
                copyData={() => {
                  dispatch({
                    type: 'formArea/copyCustomeSearchData',
                    payload: index,
                  });
                }}
                deleteData={() => {
                  dispatch({
                    type: 'formArea/deleteCustomeSearchData',
                    payload: index,
                  });
                }}
              />
            }
          />
        ))}
      </TreeNode>
    );
  };

  // 增添数据集的自定义类型
  addCustomerType = () => {
    // 新增自定义类型
    const { customSearchData, dispatch } = this.props;
    const current = customSearchData.find(value => value.active) || {};
    const currentCustom = current.customList || [];
    currentCustom.push({
      value: '',
      key: uuidv1(),
    });
    dispatch({
      type: 'formArea/changeCustomSearchData',
      payload: {
        index: customSearchData.find(value => value.active).i,
        props: {
          customList: currentCustom,
        },
      },
    });
  };

  /**
   * @description: 删除或编辑数据集的自定义类型
   * @param {string} index 需要修改自定义列表的index
   * @param {string} type 类型为： modify / delete
   * @param {string} inputValue 修改的值
   * @return:
   * @Author: mus
   * @Date: 2020-01-08 21:04:32
   */
  deleteOrModifyCustomerType = (index, type, inputValue) => {
    // 删除自定义类型
    const { customSearchData, dispatch } = this.props;
    const current = customSearchData.find(value => value.active) || {};
    const currentCustom = [...current.customList] || [];
    if (type === 'modify') {
      currentCustom[index].value = inputValue;
    }
    if (type === 'delete') {
      currentCustom.splice(index, 1);
    }
    dispatch({
      type: 'formArea/changeCustomSearchData',
      payload: {
        index: customSearchData.find(value => value.active).i,
        props: {
          customList: currentCustom,
        },
      },
    });
  };

  // 切换rightSiderBar
  changeSiderBarType = siderBarType => {
    this.setState({
      siderBarType,
    });
  };

  // 去判断属否是重新渲染组建（这样做有风险，后期优化）
  resetFields = () => {
    const {
      form: { resetFields },
      customSearchData,
    } = this.props;
    const { siderBarType } = this.state;
    const customSearchDataIndex = customSearchData.find(value => value.active)
      ? customSearchData.find(value => value.active).i
      : undefined;
    if (
      this.cellPosition !== this.props.cellPosition &&
      this.cellPosition &&
      siderBarType === 'cell'
    ) {
      resetFields();
    }
    if (customSearchDataIndex !== this.customSearchDataIndex && siderBarType === 'query') {
      resetControl = true;
      resetFields();
    }
    this.cellPosition = this.props.cellPosition;
    this.customSearchDataIndex = customSearchDataIndex;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      cellPosition, // 单元格位置
      rightSideCollapse, // 右边的面板
      changeRightSideBar, // 隐藏或显示右边的面板
      dataSetPrivateList, // 私有数据集列表
      dispatch,
      spreadsheetOtherProps, // spreadSheet的otherProps的集合（包含：数据集的一些属性等等）
      teamplateAreaObj, // 报表模板数据
      customSearchData, // 查询条件相关数据
      dataSetPublicList, // 公共数据集列表
      defaultValueDatasetType, // 查询条件select类型->数据来源于数据集类->数据集某个字段的所有项
    } = this.props;
    this.resetFields();
    const { siderBarType } = this.state;
    const formattedMessageMap = {
      cell: 'cellproperty',
      query: 'widgetcontrol',
    };
    const [rowIndex, colIndex] = getColIndexRowIndex(cellPosition);
    // 单元格的props
    const cellProps = {
      cellPosition, // 单元格位置
      dataSetPrivateList, // 私有数据集
      otherProps: spreadsheetOtherProps.length > 0 ? spreadsheetOtherProps[rowIndex][colIndex] : {},
      text: teamplateAreaObj.length > 0 ? teamplateAreaObj[0].data[rowIndex][colIndex] : '',
    };
    // 控件的props
    const widgetProps = {
      currentWidge: customSearchData.find(value => value.active) || {},
      dataSetPrivateList, // 私有数据集，用于展示field
      addCustomerType: this.addCustomerType,
      deleteOrModifyCustomerType: this.deleteOrModifyCustomerType,
      dataSetPublicList,
      dispatch,
      defaultValueDatasetType,
    };
    // 表单的props
    const formProps = {
      getFieldDecorator,
      dispatch,
    };
    return (
      <Layout className={classNames(styles.layout, styles.sideBar)}>
        <div className={styles.header}>
          {rightSideCollapse && (
            <div className={styles.title}>
              {<FormattedMessage id={`report-designer.${formattedMessageMap[siderBarType]}`} />}
            </div>
          )}
          <IconFont
            type={rightSideCollapse ? 'iconright' : 'iconleft'}
            onClick={() => {
              changeRightSideBar(!rightSideCollapse);
            }}
          />
        </div>
        {rightSideCollapse && (
          <>
            <div className={styles.tree} style={{ marginBottom: 20 }}>
              <Tree>{this.generateTree()}</Tree>
            </div>
            <Layout>
              {siderBarType === 'cell' && <CellProperty {...formProps} {...cellProps} />}
              {siderBarType === 'query' && <WidgetControl {...formProps} {...widgetProps} />}
              {siderBarType === 'global' && <CellProperty {...formProps} />}
              <Sider width={30} className={styles.sider}>
                <IconFont
                  type="iconbiaoge2"
                  className={siderBarType === 'cell' && 'active'}
                  onClick={() => {
                    this.changeSiderBarType('cell');
                  }}
                />
                <IconFont
                  type="iconshitujuzhen"
                  className={siderBarType === 'query' && 'active'}
                  onClick={() => {
                    this.changeSiderBarType('query');
                  }}
                />
                <IconFont
                  type="icon-data"
                  className={siderBarType === 'global' && 'active'}
                  onClick={() => {
                    this.changeSiderBarType('global');
                  }}
                />
              </Sider>
            </Layout>
          </>
        )}
      </Layout>
    );
  }
}

function Title({ title, isLeaf, copyData, deleteData }) {
  const [hoverState, hoverAction] = useState(false);
  return (
    <div
      className={styles.treeTitle}
      onMouseEnter={e => {
        e.stopPropagation();
        hoverAction(true);
      }}
      onMouseLeave={e => {
        e.stopPropagation();
        hoverAction(false);
      }}
    >
      <div className={styles.hoverArea} />
      {hoverState && <div className={styles.hoverBlock} />}
      <span className={styles.title}>
        <span style={{ marginLeft: '3.5px' }}>{title}</span>
      </span>
      {hoverState && (
        <div className={styles.operationArea}>
          {isLeaf && (
            <>
              <IconFont
                type="iconcopy"
                onClick={() => {
                  copyData();
                }}
              />
              <IconFont
                type="icon-delete"
                onClick={() => {
                  deleteData();
                }}
                style={{ marginLeft: 3 }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
