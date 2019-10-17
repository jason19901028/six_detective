import React, { PureComponent, Fragment, Component } from 'react';
import { Select, Icon } from 'antd';
import classNames from 'classnames';
import styles from './RulesEngine.less';

const { Option } = Select;
const opMap = {
  '>=': '大于或等于',
  '>': '大于',
  '=': '等于',
  '<': '小于',
  '<=': '小于或等于',
};

export default class DataSource extends PureComponent {
  state = {
    ruleData: {
      actionType: 'set',
      op: 'and',
      children: [
        {
          actionType: 'atom',
          op: '>=',
          keyEntity: 'memberEntity',
          keyEntityName: '会员',
          keyField: 'age',
          keyFiledName: '年龄',
          keyType: 'integer',
          valueType: 'input',
          value: 35,
        },
        {
          actionType: 'atom',
          op: '=',
          keyEntity: 'memberEntity',
          keyEntityName: '会员',
          keyField: 'sex',
          keyFiledName: '性别',
          keyType: 'string',
          valueType: 'select',
          valueEnum: ['男', '女'],
          value: '男',
        },
        {
          actionType: 'atom',
          op: '=',
          keyEntity: 'memberEntity',
          keyEntityName: '会员',
          keyField: 'sex',
          keyFiledName: '性别',
          keyType: 'string',
          valueType: 'select',
          valueEnum: ['男', '女'],
          value: '男',
        },
        {
          actionType: 'atom',
          op: '=',
          keyEntity: 'memberEntity',
          keyEntityName: '会员',
          keyField: 'sex',
          keyFiledName: '性别',
          keyType: 'string',
          valueType: 'select',
          valueEnum: ['男', '女'],
          value: '男',
        },
        {
          actionType: 'set',
          op: 'or',
          children: [
            {
              actionType: 'atom',
              op: '=',
              keyEntity: 'memberEntity',
              keyEntityName: '会员',
              keyField: 'car',
              keyFiledName: '是否有车',
              keyType: 'string',
              valueType: 'input',
              value: '是',
            },
            {
              actionType: 'atom',
              op: '=',
              keyEntity: 'memberEntity',
              keyEntityName: '会员',
              keyField: 'married',
              keyFiledName: '婚否',
              keyType: 'string',
              valueType: 'input',
              value: '是',
            },
          ],
        },
        {
          actionType: 'atom',
          op: '=',
          keyEntity: 'memberEntity',
          keyEntityName: '会员',
          keyField: 'sex',
          keyFiledName: '性别',
          keyType: 'string',
          valueType: 'select',
          valueEnum: ['男', '女'],
          value: '男',
        },
      ],
    },
  };

  componentDidMount() {}

  modifyData = children => {
    const { ruleData } = this.state;
    children.push({
      actionType: 'atom',
      op: '=',
      keyEntity: 'memberEntity',
      keyEntityName: '会员',
      keyField: 'car',
      keyFiledName: '是否有房',
      keyType: 'string',
      valueType: 'input',
      value: '是',
    });
    this.setState({
      ruleData: { ...ruleData },
    });
  };

  render() {
    const { ruleData } = this.state;
    return (
      <Fragment>
        <Node data={ruleData} modifyData={this.modifyData} />
      </Fragment>
    );
  }
}

class Node extends Component {
  render() {
    const { data, modifyData, index: indexProps, length } = this.props;
    const { op, children } = data;
    return (
      <div className={styles.rulesEngine}>
        {indexProps && <JoinLine index={indexProps} length={length} />}
        <Select ref={this.selectRef} defaultValue={op} className={styles.conditionSelect}>
          <Option value="and">并且</Option>
          <Option value="or">或者</Option>
        </Select>
        {/* <div className={styles.lineCollection}>
          {children.map((value, index) => (
            <JoinLine index={index} length={children.length} childrenData={children} />
          ))}
          <Icon
            className={styles.icon}
            type="plus-circle"
            onClick={() => {
              modifyData(children);
            }}
          />
        </div> */}
        <div className={styles.contentCollection}>
          {children.map((child, index) => {
            if (child.actionType === 'set') {
              return (
                <Node data={child} modifyData={modifyData} index={index} length={children.length} />
              );
            }
            const left = `${child.keyEntityName}.${child.keyFiledName}`;
            const { op: childOp, value } = child;
            return (
              <Content
                left={left}
                op={childOp}
                right={value}
                index={index}
                length={children.length}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function Content({ left, op, right, index, length }) {
  return (
    <div className={styles.content}>
      <JoinLine index={index} length={length} />
      <span className={styles.item}>{left}</span>
      <span className={styles.item}>{opMap[op]}</span>
      <span className={styles.item}>{right}</span>
    </div>
  );
}

// 计算线的高度
// const calHeight = (childrenData, index) => {
//   const heigth =
//   const preChildrenData = childrenData.splice(0, index);
// }

function JoinLine(props) {
  const { index, length } = props;
  const first = index === 0;
  const last = index === length - 1;
  const height = first ? '1px' : `${index * 30}px`;
  return (
    <Fragment>
      <div
        className={classNames(
          first ? styles.noRadius : styles.radius,
          styles.line,
          // last ? styles.last :
        )}
        // style={{ height }}
      />
    </Fragment>
  );
}