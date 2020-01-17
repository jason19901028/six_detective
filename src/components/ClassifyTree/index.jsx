/*
 * @Description: This is a classify tree public module.
 * @Author: dailinbo
 * @Date: 2019-11-11 13:20:11
 * @LastEditors  : dailinbo
 * @LastEditTime : 2020-01-17 17:53:42
 * @Attributes:
 *  参数                    说明                                   类型                           默认值
 *  treeData                treeNodes数据                          Array
 *  treeKey                 包含当前节点id、名称和父节点id,          Object{currentKey:string,
 *                          用于处理数据                            currentName:string,parentKey:string}
 *  all                     添加全选                               Boolean                        false
 *  checkable               节点前添加 Checkbox 复选框              Boolean                        false
 *  add                     是否展示单个节点下添加图标               Boolean                        false
 *  modify                  是否展示单个节点下编辑图标               Boolean                        false
 *  move                    是否展示单个节点下编辑图标               Boolean                        false
 * @Events:
 *  事件名                  说明                  参数
 *  handleAddTree           添加tree节点          function(nodeTree) nodeTree的当前节点及子节点数据
 *  handleModifyTree        修改当前tree          function(nodeTree)
 *  handleDeleteTree        删除当前tree          function(nodeTree)
 *  onSelect                点击树节点触发         function(key) key为当前树节点对应id
 */
import React, { Component, Fragment } from 'react';
import { Tree, Input, Icon, Checkbox } from 'antd';
import IconFont from '@/components/IconFont';

import styles from './index.less';
import { formatTree, flatteningTree } from '@/utils/utils';

const { TreeNode } = Tree;
const { Search } = Input;

const dataList = [];
let searchValue = '';

const getParentKey = (currentKey, tree, treeKey) => {
  let parentKey;
  for (let i = 0; i < tree.length; i += 1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item[`${treeKey.currentKey}`] === currentKey)) {
        parentKey = node[`${treeKey.currentKey}`];
      } else if (getParentKey(currentKey, node.children, treeKey)) {
        parentKey = getParentKey(currentKey, node.children, treeKey);
      }
    }
  }
  return parentKey;
};

class HoverText extends Component {
  state = {};

  addTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleAddTree(true, treeNode);
  };

  modifyTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleModifyTree(true, treeNode);
  };

  deleteTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleDeleteTree(true, treeNode);
  };

  render() {
    const { nodeKeys, operate } = this.props;
    return (
      <Fragment>
        <span className={styles.hoverText}>
          {operate.add && <Icon type="plus-circle" onClick={e => this.addTree(e, nodeKeys)} />}
          {operate.modify && <Icon type="edit" onClick={e => this.modifyTree(e, nodeKeys)} />}
          {operate.move && <Icon type="minus-circle" onClick={e => this.deleteTree(e, nodeKeys)} />}
        </span>
      </Fragment>
    );
  }
}

class TitleMessage extends Component {
  state = {
    operaterTree: false,
  };

  onMouseEnter = () => {
    this.setState({
      operaterTree: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      operaterTree: false,
    });
  };

  render() {
    const {
      title,
      nodeKeys,
      handleAddTree,
      handleModifyTree,
      handleDeleteTree,
      operate,
    } = this.props;
    const { operaterTree } = this.state;
    return (
      <Fragment>
        <div
          className={styles.titleWraper}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <span className={styles.mainText}>{title}</span>
          {operaterTree && (
            <HoverText
              nodeKeys={nodeKeys}
              handleAddTree={handleAddTree}
              handleModifyTree={handleModifyTree}
              handleDeleteTree={handleDeleteTree}
              operate={operate}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

class ClassifyTree extends Component {
  static defaultPorps = {
    all: false,
  };

  state = {
    menuList: [],
    initData: [],
    expandedKeys: [],
    defaultCheckedKeys: [],
    checkedKeys: [],
    // tempCheckedKeys: [],
    halfCheckedKeys: [],
    customeBtnIds: [],
    allBtns: [],
    autoExpandParent: true,
    allChecked: false,
    btnAllChecked: false,
    indeterminate: false,
  };

  static getDerivedStateFromProps(props) {
    let items = props.treeData;
    const child = items.some(element => {
      element.hasOwnProperty('children');
      return false;
    });
    items = items && !child && formatTree(items, props.treeKey.currentKey, props.treeKey.parentKey);
    const defaultCheckedKeys = [];
    if (items.length > 0) {
      defaultCheckedKeys.push(items[0][props.treeKey.currentKey]);
    }
    return {
      initData: items,
      menuList: items,
      defaultCheckedKeys: items.length > 0 && !props.all ? defaultCheckedKeys : [],
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    const { checkedKeys, all, btnIds } = this.props;
    const { menuList } = this.state;
    this.setState({
      checkedKeys,
      customeBtnIds: btnIds,
      // tempCheckedKeys: checkedKeys,
    });
    this.props.onSelect(menuList[0] && menuList[0][this.props.treeKey.currentKey]);
    if (all) {
      this.setState(
        {
          checkedKeys: this.formatCheckedKeys(menuList, checkedKeys),
          allBtns: flatteningTree(this.props.treeData).filter(element =>
            element.menuid.includes('btn'),
          ),
        },
        () => {
          this.compareAllChecked();
        },
      );
    }
    // }, 500);
  }

  formatCheckedKeys = (menuList, checkedKeys) => {
    const newCheckedKeys = checkedKeys.map(element => element.substring(0, 3));
    let checkedKeysArray = Object.assign([], checkedKeys);
    newCheckedKeys.forEach(element => checkedKeysArray.push(element));
    checkedKeysArray = [...new Set(checkedKeysArray)];
    menuList.forEach(element => {
      if (checkedKeysArray.includes(element.menuid)) {
        if (
          element.children &&
          element.children.some(item => checkedKeysArray.includes(item.menuid))
        ) {
          const idx = checkedKeysArray.indexOf(element.menuid);
          if (idx > -1) {
            checkedKeysArray.splice(idx, 1);
          }
        }
      }
    });
    return checkedKeysArray;
  };

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  compareMenuChecked = () => {
    const { checkedKeys } = this.props;
    const { menuList } = this.state;
    menuList.forEach(element => {
      if (checkedKeys.includes(element.menuid)) {
        const children = element.children.map(item => item.menuid);
        this.arrayEquals(children);
      }
    });
  };

  compareAllChecked = () => {
    const { checkedKeys } = this.props;
    const { customeBtnIds } = this.state;
    const { menuList, allBtns } = this.state;
    const selectedKeys = this.setGridDataFromTree([], menuList);
    const newCheckedKeys = selectedKeys.map(element => element.menuid);
    for (let i = 0; i < newCheckedKeys.length; i += 1) {
      if (newCheckedKeys[i].includes('btn')) {
        newCheckedKeys.splice(i, 1);
        i -= 1;
      }
    }
    this.setState({
      allChecked: checkedKeys.length === newCheckedKeys.length,
      indeterminate: checkedKeys.length && checkedKeys.length < newCheckedKeys.length,
      btnIndeterminate: customeBtnIds.length && customeBtnIds.length < allBtns.length,
      btnAllChecked: customeBtnIds.length === allBtns.length,
    });
    // if (this.arrayEquals(newCheckedKeys, checkedKeys)) {
    //   this.setState({
    //     allChecked: true,
    //   });
    // } else {
    //   this.setState({
    //     allChecked: false,
    //   });
    // }
  };

  generateList = (data, treeKey) => {
    for (let i = 0; i < data.length; i += 1) {
      const node = data[i];
      const currentKey = node[`${treeKey.currentKey}`];
      const currentName = node[`${treeKey.currentName}`];
      const parentKey = node[`${treeKey.parentKey}`];
      const obj = {};
      obj[`${treeKey.currentKey}`] = currentKey;
      obj[`${treeKey.currentName}`] = currentName;
      obj[`${treeKey.parentKey}`] = parentKey;
      dataList.push(obj);
      if (node.children) {
        this.generateList(node.children, treeKey);
      }
    }
  };

  onSearch = (value, treeKey) => {
    searchValue = value;
    const { initData } = this.state;
    if (!value) {
      this.setState({
        autoExpandParent: false,
      });
      return;
    }
    const expandedKeys = dataList.map(item => {
      if (item[`${treeKey.currentName}`].indexOf(value) > -1) {
        return getParentKey(item[`${treeKey.currentKey}`], initData, treeKey);
      }
      return null;
    });

    this.setState({
      expandedKeys,
      autoExpandParent: true,
    });
  };

  onSelect = selectedKeys => {
    const key = selectedKeys[0];
    this.props.onSelect(key);
  };

  onCheck = (selectedKeys, info) => {
    const { btnArray } = this.props;
    const { menuList, customeBtnIds, allBtns } = this.state;
    const newCustomeBtnIds = [];
    btnArray.forEach(element => {
      if (selectedKeys.some(item => item === element.parentmenuid)) {
        if (customeBtnIds.indexOf(element.menuid) > -1) {
          newCustomeBtnIds.push(element.menuid);
        }
      }
    });
    console.log('newCustomeBtnIds==', newCustomeBtnIds);
    console.log('allBtns========', allBtns);
    const checkedKeys = this.setGridDataFromTree([], menuList);
    const newCheckedKeys = checkedKeys.map(element => element.menuid);
    this.props.onCheck(selectedKeys, info, newCustomeBtnIds);
    this.setState({
      checkedKeys: selectedKeys,
      // tempCheckedKeys: selectedKeys.concat(info.halfCheckedKeys),
      halfCheckedKeys: info.halfCheckedKeys,
    });
    for (let i = 0; i < newCheckedKeys.length; i += 1) {
      if (newCheckedKeys[i].includes('btn')) {
        newCheckedKeys.splice(i, 1);
        i -= 1;
      }
    }
    this.setState({
      allChecked: selectedKeys.length === newCheckedKeys.length,
      indeterminate: selectedKeys.length && selectedKeys.length < newCheckedKeys.length,
      btnIndeterminate: newCustomeBtnIds.length && newCustomeBtnIds.length < allBtns.length,
      btnAllChecked: newCustomeBtnIds.length === allBtns.length,
    });
    // if (this.arrayEquals(newCheckedKeys, selectedKeys)) {
    // this.setState({
    //   allChecked: true,
    // });
    // } else {
    //   this.setState({
    //     allChecked: false,
    //   });
    // }
  };

  arrayEquals = (a1, a2) => {
    const array1 = Object.assign([], a1);
    const array2 = Object.assign([], a2);
    return array1.length === array2.length && array1.every(v => array2.includes(v));
  };

  setGridDataFromTree = (list = [], dataSource) => {
    const arrayList = list;
    dataSource.forEach(father => {
      arrayList.push(father);
      if (father.hasOwnProperty('children')) {
        this.setGridDataFromTree(arrayList, father.children);
        delete father.children;
      }
    });
    return arrayList;
  };

  onChange = e => {
    const { btnArray } = this.props;
    const { menuList } = this.state;
    const checkedKeys = this.setGridDataFromTree([], menuList);
    const newCheckedKeys = checkedKeys.map(element => element.menuid);
    if (e.target.checked) {
      this.setState({
        checkedKeys: newCheckedKeys,
        allChecked: e.target.checked,
        customeBtnIds: btnArray.map(element => element.menuid),
        indeterminate: false,
      });
      this.props.onAllChecked(newCheckedKeys);
    } else {
      this.setState({
        checkedKeys: [],
        allChecked: e.target.checked,
        customeBtnIds: [],
        indeterminate: false,
      });
      this.props.onAllChecked([]);
    }
  };

  onChangeBtn = e => {
    const { btnArray } = this.props;
    this.setState({
      btnAllChecked: e.target.checked,
      btnIndeterminate: false,
    });
    if (e.target.checked) {
      this.setState({
        customeBtnIds: btnArray.map(element => element.menuid),
      });
    } else {
      this.setState({
        customeBtnIds: [],
      });
    }
  };

  loop = (orgsTree, treeKey, handleAddTree, handleModifyTree, handleDeleteTree, operate) => {
    const { customeBtnIds, checkedKeys } = this.state;
    return (
      orgsTree &&
      orgsTree.map(item => {
        const { children } = item;
        const currentKey = item[`${treeKey.currentKey}`];
        const currentName = item[`${treeKey.currentName}`];
        const parentKey = item[`${treeKey.parentKey}`];
        let index = -1;
        if (searchValue) {
          index = currentName.indexOf(searchValue);
        }
        let lineTitle = '';
        lineTitle = `<span>${currentName.replace(
          searchValue,
          `<span style='color:#f00'>${searchValue}</span>`,
        )}</span>`;

        if (lineTitle) {
          // eslint-disable-next-line react/no-danger
          lineTitle = <div dangerouslySetInnerHTML={{ __html: lineTitle }} />;
        }
        const showTitle = index > -1 ? lineTitle : currentName;
        if (children && showTitle) {
          return (
            <TreeNode
              key={currentKey}
              title={
                <TitleMessage
                  title={showTitle}
                  nodeKeys={item}
                  handleAddTree={handleAddTree}
                  handleModifyTree={handleModifyTree}
                  handleDeleteTree={handleDeleteTree}
                  operate={operate}
                />
              }
              parentId={parentKey}
            >
              {this.loop(
                children,
                treeKey,
                handleAddTree,
                handleModifyTree,
                handleDeleteTree,
                operate,
              )}
            </TreeNode>
          );
        }
        return (
          // <Fragment>
          <TreeNode
            checkable={!currentKey.includes('btn')}
            selectable={!currentKey.includes('btn')}
            className={currentKey.includes('btn') ? styles.btnClass : ''}
            key={currentKey}
            title={
              <Fragment>
                {!currentKey.includes('btn') && (
                  <TitleMessage
                    title={currentName}
                    nodeKeys={item}
                    handleAddTree={handleAddTree}
                    handleModifyTree={handleModifyTree}
                    handleDeleteTree={handleDeleteTree}
                    operate={operate}
                  />
                )}
                {currentKey.includes('btn') && (
                  <Checkbox
                    value={currentKey}
                    checked={
                      customeBtnIds.includes(currentKey) && checkedKeys.includes(item.parentmenuid)
                    }
                    disabled={!checkedKeys.includes(item.parentmenuid)}
                    onChange={this.onChangeChecked}
                  >
                    <IconFont type="icon-auth-button" className={styles.btnIcon} />
                    <span>{currentName}</span>
                  </Checkbox>
                )}
              </Fragment>
            }
            parentId={parentKey}
          />
          // </Fragment>
        );
      })
    );
  };

  onChangeChecked = value => {
    const { customeBtnIds, checkedKeys, allBtns, halfCheckedKeys } = this.state;
    const btnIds = Object.assign([], customeBtnIds);
    if (value.target.checked) {
      btnIds.push(value.target.value);
    } else {
      const index = btnIds.indexOf(value.target.value);
      btnIds.splice(index, 1);
    }
    console.log('btnIds========', btnIds);
    this.setState(
      {
        customeBtnIds: btnIds,
        btnIndeterminate: btnIds.length && btnIds.length < allBtns.length,
        btnAllChecked: btnIds.length === allBtns.length,
      },
      () => {
        this.props.onCheck(checkedKeys, { halfCheckedKeys }, btnIds);
      },
    );
  };

  render() {
    const {
      expandedKeys,
      autoExpandParent,
      menuList,
      defaultCheckedKeys,
      checkedKeys,
      allChecked,
      btnAllChecked,
      indeterminate,
      btnIndeterminate,
    } = this.state;
    const {
      checkable,
      handleAddTree,
      handleModifyTree,
      handleDeleteTree,
      treeKey,
      showSearch,
      all,
      add,
      modify,
      move,
    } = this.props;
    if (menuList) {
      this.generateList(menuList, treeKey);
    }
    return (
      <div className={styles.classifyTree}>
        {showSearch && (
          <Search
            style={{ marginBottom: 8 }}
            placeholder="Search"
            onSearch={value => this.onSearch(value, treeKey)}
          />
        )}
        {all && (
          <>
            <Checkbox
              onChange={this.onChange}
              style={{ marginLeft: '26px' }}
              checked={allChecked}
              indeterminate={indeterminate}
            >
              Menu All
            </Checkbox>
            <Checkbox
              onChange={this.onChangeBtn}
              style={{ marginLeft: '26px' }}
              checked={btnAllChecked}
              disabled={!allChecked}
              indeterminate={btnIndeterminate}
            >
              Button All
            </Checkbox>
          </>
        )}
        <Tree
          // showLine
          // checkStrictly
          checkable={checkable}
          onExpand={this.onExpand}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          checkedKeys={checkedKeys}
          expandedKeys={expandedKeys}
          defaultSelectedKeys={defaultCheckedKeys}
          autoExpandParent={autoExpandParent}
          defaultExpandAll
        >
          {this.loop(menuList, treeKey, handleAddTree, handleModifyTree, handleDeleteTree, {
            add,
            modify,
            move,
          })}
        </Tree>
      </div>
    );
  }
}

export default ClassifyTree;
