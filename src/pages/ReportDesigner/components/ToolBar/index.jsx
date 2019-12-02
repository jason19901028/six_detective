import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import classNames from 'classnames';
import { Tabs, Button, Select, Menu, Icon, Dropdown, Popover, Upload } from 'antd';
import { previewMenu, borderMenu, rowsAndColsMenu } from './menu';
import { fontSizeSelect, fontFamilySelect } from './select';
import CustomizeIcon from '../CustomizeIcon';
import styles from './index.less';
import IconFont from '@/components/IconFont';

const { TabPane } = Tabs;
const { Option } = Select;
const ButtonGroup = Button.Group;
// const RadioGroup = Radio.Group;
const { SubMenu, ItemGroup } = Menu;

export default class ToolBar extends Component {
  state = {
    // rowHeightVisible: false, // 显示行高弹框
    // rowHeight: '', // 行高
    // colWidthVisible: false, // 显示列宽弹框
    // colWidth: '', // 列宽
    // insertCellVisible: false, // 显示插入单元格弹框
    // deleteCellVisible: false, // 显示删除单元格弹框/
    // radioValue: 1, // 单元格操作默认选择第一个
    // selectedRow: '', // 选中的行数
    // selectedCol: '', // 选中的列数
    // showAndHideVisible: false, // 显示和隐藏弹框
    // 默认无边框
    borderParams: {
      icon: 'noBorder',
      param: '{"border":""}',
    },
    // 默认白色背景
    backgroundColor: '#fff',
    // 默认黑色字体
    fontColor: '#000',
    // 默认样式
    btnActiveStatus: {
      autoLineBreak: false, // 是否自动换行
      textAlign: 'left', // 水平方向对齐
      // textAlignLast: 'inherit', // 最后一行两端对齐
      verticalAlign: 'middle', // 垂直方向对齐
      fontWeight: 'normal', // 字体加粗
      fontStyle: 'normal', // 斜体
      textDecoration: 'none', // 下划线
      fontSize: '10', // 默认字号
      fontFamily: 'Arial', // 默认字体
      isMerge: false, // 单元格是否合并
      freeze: false, // 单元格是否冻结
    },
    // 单元格的数据类型
    cellType: {},
  };

  cellType = [
    {
      label: '日期(yyyy-MM-dd)',
      key: 'dateyyyy-MM-dd',
      value: 'dateyyyy-MM-dd',
    },
    {
      label: '日期时间',
      key: 'datetimeyyyy-MM-dd hh:mm:ss',
      value: 'datetimeyyyy-MM-dd hh:mm:ss',
    },
    {
      label: '时间',
      key: 'timehh:mm:ss',
      value: 'timehh:mm:ss',
    },
    {
      label: '文本',
      key: 'text',
      value: 'text',
    },
    {
      label: '货币($)',
      key: 'currency$',
      value: 'currency$',
    },
    {
      label: '货币(￥)',
      key: 'currency￥',
      value: 'currency￥',
    },
    {
      label: '千分比',
      key: 'permillage',
      value: 'permillage',
    },
    {
      label: '百分比',
      key: 'percentage',
      value: 'percentage',
    },
    {
      label: '勾选框',
      key: 'checkbox',
      value: 'checkbox',
    },
  ];

  cellTypeMap = {
    'dateyyyy-MM-dd': {
      cellType: 'date',
      format: 'yyyy-MM-dd',
      type: 'date',
    },
    'datetimeyyyy-MM-dd hh:mm:ss': {
      cellType: 'datetime',
      format: 'yyyy-MM-dd hh:mm:ss',
      type: 'datetime',
    },
    'timehh:mm:ss': {
      cellType: 'time',
      format: 'hh:mm:ss',
      type: 'time',
    },
    text: {
      cellType: 'text',
    },
    currency$: {
      cellType: 'numeric',
      format: '$0,0.00',
      scale: '2',
      type: 'currency',
    },
    'currency￥': {
      cellType: 'numeric',
      format: '￥0,0.00',
      scale: '2',
      type: 'currency',
    },
    permillage: {
      cellType: 'numeric',
      format: '0.00%',
      scale: '2',
      type: 'permillage',
    },
    percentage: {
      cellType: 'numeric',
      format: '0.00%',
      scale: '2',
      type: 'percentage',
    },
    checkbox: {
      cellType: 'checkbox',
    },
  };

  componentDidMount() {
    const { setCellCallback } = this.props;
    const { btnActiveStatus } = this.state;
    setCellCallback(data => {
      const cellStyle = data.getSelectedCellStyle();
      const cell = data.getSelectedCell();
      const cellType = cell ? cell.cellProps || {} : {};
      let isMerge = false;
      let freeze = false;
      if (cell && cell.merge) {
        isMerge = true;
      }
      if (
        data.freeze[0] !== 0 &&
        data.freeze[1] !== 0 &&
        data.freeze[0] === data.selector.ri &&
        data.freeze[1] === data.selector.ci
      ) {
        freeze = true;
      }
      this.setState({
        backgroundColor: cellStyle.bgcolor,
        fontColor: cellStyle.color,
        btnActiveStatus: {
          // 回显按钮样式
          ...btnActiveStatus,
          autoLineBreak: cellStyle.textwrap,
          textAlign: cellStyle.align,
          verticalAlign: cellStyle.valign,
          fontWeight: cellStyle.font.bold ? 'bold' : 'normal',
          fontStyle: cellStyle.font.italic ? 'italic' : 'normal',
          fontSize: cellStyle.font.size,
          fontFamily: cellStyle.font.name,
          textDecoration: cellStyle.underline ? 'underline' : 'none',
          isMerge,
          freeze,
        },
        cellType,
      });
    });
  }

  // 取消设置行高
  // cancelRowHeight = () => {
  //   this.setState({
  //     rowHeightVisible: false,
  //   });
  // };

  // 取消设置单元格
  // cancelInsertCell = () => {
  //   this.setState({
  //     insertCellVisible: false,
  //   });
  // };

  // 按钮下拉菜单
  creatMenu = (menu, type) => {
    const { setCellStyle, editRowColumn } = this.props;
    if (type === 'border') {
      return (
        <Menu
          onClick={() => {
            // this.handleMenuClick(type, e);
          }}
        >
          {menu.map(({ icon, name, params }) => (
            <Menu.Item
              params={params}
              icon={icon}
              key={name}
              onClick={() => {
                setCellStyle(type, {
                  mode: params,
                });
              }}
            >
              {icon && <Icon component={() => <CustomizeIcon type={icon} />} />}
              {name}
            </Menu.Item>
          ))}
        </Menu>
      );
    }
    if (type === 'rowAndCol') {
      return (
        <Menu>
          {menu.map(({ icon, name, operatype, value }) => (
            <Menu.Item
              key={name}
              onClick={() => {
                editRowColumn(operatype, value);
              }}
            >
              {icon && <Icon component={() => <CustomizeIcon type={icon} />} />}
              {name}
            </Menu.Item>
          ))}
        </Menu>
      );
    }
    return (
      <Menu
        onClick={() => {
          // this.handleMenuClick(type, e);
        }}
      >
        {menu.map(({ icon, name, params }) => (
          <Menu.Item params={params} icon={icon} key={name}>
            {icon && <Icon component={() => <CustomizeIcon type={icon} />} />}
            {name}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  render() {
    const { setCellStyle, setCellType } = this.props;
    const { btnActiveStatus, backgroundColor, fontColor, cellType } = this.state;
    const popoverProps = {
      placement: 'bottom',
      mouseEnterDelay: 0.2,
      mouseLeaveDelay: 0,
    };
    const tabPanelStyle = {
      padding: '7px 0px',
      height: '66px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };
    return (
      <div className={classNames(styles.tabs, 'card-container')}>
        <div className={styles.fileBox}>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu style={{ width: 256 }} mode="vertical">
                <Menu.Item key="1">
                  <IconFont type="icon-xinjian" /> 新建报表
                </Menu.Item>
                <SubMenu
                  key="2"
                  title={
                    <span>
                      <IconFont type="icon-dakai" style={{ marginRight: '12px' }} />
                      <span>打开</span>
                    </span>
                  }
                >
                  <ItemGroup
                    title={
                      <span>
                        最近使用
                        <IconFont type="icon-shuaxin" title="清空" style={{ cursor: 'pointer' }} />
                      </span>
                    }
                  >
                    <Menu.Item key="21">
                      <IconFont type="icon-Excel" style={{ marginRight: '6px' }} />
                      haha1.xls
                    </Menu.Item>
                    <Menu.Item key="22">
                      <IconFont type="icon-Excel" style={{ marginRight: '6px' }} />
                      haha2.xls
                    </Menu.Item>
                  </ItemGroup>
                </SubMenu>
                <Menu.Item key="3">
                  <IconFont type="icon-baocun" /> 保存
                </Menu.Item>
                <SubMenu
                  key="4"
                  title={
                    <span>
                      <IconFont type="icon-lingcunwei" style={{ marginRight: '12px' }} />
                      <span>另存为</span>
                    </span>
                  }
                >
                  <ItemGroup title="保存文档副本">
                    <Menu.Item key="41">
                      <IconFont type="icon-Excel" style={{ marginRight: '6px' }} />
                      excel 97-2003 模板文件（*.xls）
                    </Menu.Item>
                    <Menu.Item key="42">
                      <IconFont type="icon-Excel" style={{ marginRight: '6px' }} />
                      excel 文件（*.xlsx）
                    </Menu.Item>
                  </ItemGroup>
                </SubMenu>
                <Menu.Item key="5">
                  <IconFont type="icon-fenxiang-copy" /> 分享文档
                </Menu.Item>
                <Menu.Item key="6">
                  <IconFont type="icon-icon" /> 帮助
                </Menu.Item>
                <Menu.Item key="7">
                  <IconFont type="icon-tuichu" /> 退出
                </Menu.Item>
              </Menu>
            }
          >
            <Button style={{ marginLeft: 8 }} className={styles.fileBoxBtn}>
              文件 <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <Tabs type="card" defaultActiveKey="2">
          <TabPane tab="开始" key="2" style={tabPanelStyle}>
            <div className={styles.group}>
              <Popover content="预览" {...popoverProps}>
                <div className="btn-group-dropmenu">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="preview" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown
                      overlay={this.creatMenu(previewMenu)}
                      trigger={['click']}
                      placement="bottomLeft"
                    >
                      <Button className="btn">
                        预览
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="保存" {...popoverProps}>
                <Button
                  className="btn btn-lg mr6"
                  onClick={() => {
                    // 保存contentJson
                    const { dispatch } = this.props;
                    dispatch({
                      type: 'reportDesigner/saveTaskGridContent',
                    });
                  }}
                >
                  <Icon component={() => <CustomizeIcon type="condition" size="lg" />} />
                  <p>保存</p>
                </Button>
              </Popover>
              <div className="mr6" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <p className="mb4">
                  <Popover content="复制" {...popoverProps}>
                    <Button className="btn" onClick={() => {}}>
                      <Icon component={() => <CustomizeIcon type="copy" />} />
                      复制
                    </Button>
                  </Popover>
                </p>
                <Popover content="剪切" {...popoverProps}>
                  <Button className="btn" onClick={() => {}}>
                    <Icon component={() => <CustomizeIcon type="cut" />} />
                    剪切
                  </Button>
                </Popover>
              </div>
              <Popover content="格式刷" {...popoverProps}>
                <Button
                  className={classNames(
                    'btn',
                    'mr6',
                    'btn-lg',
                    this.props.formatPainter && 'active',
                  )}
                  onClick={() => {
                    setCellStyle('paintformat', true);
                  }}
                >
                  <Icon component={() => <CustomizeIcon type="formatBrush" size="lg" />} />
                  <p>格式刷</p>
                </Button>
              </Popover>
            </div>
            <div className={styles.group}>
              <div className="mb4">
                <Popover content="字体" {...popoverProps}>
                  <Select
                    className="select mr6"
                    style={{ width: '140px' }}
                    defaultValue="3"
                    value={btnActiveStatus.fontFamily}
                    size="small"
                    onChange={value => {
                      this.setState({
                        btnActiveStatus: {
                          ...btnActiveStatus,
                          fontFamily: value,
                        },
                      });
                      setCellStyle('font-name', value);
                    }}
                  >
                    {fontFamilySelect.map(item => (
                      <Option value={item.value}>{item.key}</Option>
                    ))}
                  </Select>
                </Popover>
                <Popover content="字号" {...popoverProps}>
                  <Select
                    className="select mr6"
                    style={{ width: '66px' }}
                    defaultValue="6"
                    value={btnActiveStatus.fontSize}
                    size="small"
                    onChange={value => {
                      this.setState({
                        btnActiveStatus: {
                          ...btnActiveStatus,
                          fontSize: value,
                        },
                      });
                      setCellStyle('font-size', value);
                    }}
                  >
                    {fontSizeSelect.map(item => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                </Popover>
                <Popover
                  content="增大字号"
                  {...popoverProps}
                  onClick={() => {
                    let index = fontSizeSelect.findIndex(item => item === btnActiveStatus.fontSize);
                    if (index === 16) {
                      index = 0;
                    } else {
                      index += 1;
                    }
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        fontSize: fontSizeSelect[index],
                      },
                    });
                    setCellStyle('font-size', fontSizeSelect[index]);
                  }}
                >
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="increaseFont" />} />
                  </Button>
                </Popover>
                <Popover
                  content="减小字号"
                  {...popoverProps}
                  onClick={() => {
                    let index = fontSizeSelect.findIndex(item => item === btnActiveStatus.fontSize);
                    if (index === 0) {
                      index = 16;
                    } else {
                      index -= 1;
                    }
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        fontSize: fontSizeSelect[index],
                      },
                    });
                    setCellStyle('font-size', fontSizeSelect[index]);
                  }}
                >
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="decreaseFont" />} />
                  </Button>
                </Popover>
              </div>
              <div>
                <Popover
                  content="加粗(ctrl+B)"
                  {...popoverProps}
                  onClick={() => {
                    this.setState(() => ({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        fontWeight: btnActiveStatus.fontWeight === 'normal' ? 'bold' : 'normal',
                      },
                    }));
                    setCellStyle('font-bold', true);
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.fontWeight === 'bold' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="boldFont" />} />
                  </Button>
                </Popover>
                <Popover
                  content="斜体(ctrl+I)"
                  {...popoverProps}
                  onClick={() => {
                    this.setState(() => ({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        fontStyle: btnActiveStatus.fontStyle === 'normal' ? 'italic' : 'normal',
                      },
                    }));
                    setCellStyle('font-italic', true);
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.fontStyle === 'italic' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="italicFont" />} />
                  </Button>
                </Popover>
                <Popover
                  content="下划线(ctrl+U)"
                  {...popoverProps}
                  onClick={() => {
                    this.setState(() => ({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        textDecoration:
                          btnActiveStatus.textDecoration === 'none' ? 'underline' : 'none',
                      },
                    }));
                    setCellStyle('underline', true);
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textDecoration === 'underline' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="underlineFont" />} />
                  </Button>
                </Popover>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="边框" {...popoverProps}>
                    <Button className="btn" onClick={() => {}}>
                      <Icon
                        component={() => <CustomizeIcon type={this.state.borderParams.icon} />}
                      />
                    </Button>
                  </Popover>
                  <Dropdown
                    overlay={this.creatMenu(borderMenu, 'border')}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                {/* <ButtonGroup className="btn-group mr6">
                  <Popover content="绘图边框" {...popoverProps}>
                    <Button className="btn" onClick={this.handleButtonClick}>
                      <Icon component={() => <CustomizeIcon type="drawingBorder" />} />
                    </Button>
                  </Popover>
                  <Dropdown
                    overlay={this.creatMenu(drawingBorderMenu)}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup> */}
                <ButtonGroup className="btn-group mr6">
                  <Popover content="填充颜色" {...popoverProps}>
                    <Button
                      className="btn"
                      onClick={() => {
                        setCellStyle('bgcolor', backgroundColor);
                      }}
                    >
                      <Icon component={() => <CustomizeIcon type="filling" />} />
                    </Button>
                  </Popover>
                  <Dropdown
                    overlay={
                      <SketchPicker
                        color={backgroundColor}
                        onChange={value => {
                          this.setState({
                            backgroundColor: value.hex,
                          });
                          setCellStyle('bgcolor', value.hex);
                        }}
                      />
                    }
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="字体颜色" {...popoverProps}>
                    <Button
                      className="btn"
                      onClick={() => {
                        setCellStyle('color', fontColor);
                      }}
                    >
                      <Icon component={() => <CustomizeIcon type="coloring" />} />
                    </Button>
                  </Popover>
                  <Dropdown
                    overlay={
                      <SketchPicker
                        color={fontColor}
                        onChange={value => {
                          this.setState({
                            fontColor: value.hex,
                          });
                          setCellStyle('color', value.hex);
                        }}
                      />
                    }
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>

                {/* <ButtonGroup className="btn-group"> */}
                <Popover content="清除格式" {...popoverProps}>
                  <Button
                    className="btn"
                    onClick={() => {
                      setCellStyle('clearformat');
                    }}
                  >
                    <Icon component={() => <CustomizeIcon type="clear" />} />
                  </Button>
                </Popover>
                {/* <Dropdown
                    overlay={this.creatMenu(clearMenu, 'clear')}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup> */}
              </div>
            </div>
            <div className={styles.group}>
              <div className="mb4">
                <Popover
                  content="顶端对齐"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        verticalAlign: btnActiveStatus.verticalAlign === 'top' ? 'middle' : 'top',
                      },
                    });
                    setCellStyle('valign', 'top');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.verticalAlign === 'top' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignTop" />} />
                  </Button>
                </Popover>
                <Popover
                  content="垂直居中"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        verticalAlign: 'middle',
                      },
                    });
                    setCellStyle('valign', 'middle');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.verticalAlign === 'middle' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignMiddle" />} />
                  </Button>
                </Popover>
                <Popover
                  content="底端对齐"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        verticalAlign:
                          btnActiveStatus.verticalAlign === 'bottom' ? 'middle' : 'bottom',
                      },
                    });
                    setCellStyle('valign', 'bottom');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.verticalAlign === 'bottom' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignBottom" />} />
                  </Button>
                </Popover>
                {/* <Popover content="减少缩进量" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="decreaseIndent" />} />
                  </Button>
                </Popover>
                <Popover content="增加缩进量" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="increaseIndent" />} />
                  </Button>
                </Popover> */}
                <Popover content="合并居中" {...popoverProps}>
                  <Button
                    className={classNames('btn', btnActiveStatus.isMerge && 'active')}
                    onClick={() => {
                      this.setState({
                        btnActiveStatus: {
                          ...btnActiveStatus,
                          isMerge: !btnActiveStatus.isMerge,
                        },
                      });
                      setCellStyle('merge', true);
                    }}
                  >
                    <Icon component={() => <CustomizeIcon type="mergeAndCentered" size="lg" />} />
                    合并居中
                  </Button>
                </Popover>
              </div>
              <div>
                <Popover
                  content="左对齐"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        textAlign: 'left',
                      },
                    });
                    setCellStyle('align', 'left');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textAlign === 'left' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignLeft" />} />
                  </Button>
                </Popover>
                <Popover
                  content="水平居中"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        textAlign: btnActiveStatus.textAlign === 'center' ? 'left' : 'center',
                      },
                    });
                    setCellStyle('align', 'center');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textAlign === 'center' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignCenter" />} />
                  </Button>
                </Popover>
                <Popover
                  content="右对齐"
                  {...popoverProps}
                  onClick={() => {
                    this.setState({
                      btnActiveStatus: {
                        ...btnActiveStatus,
                        textAlign: btnActiveStatus.textAlign === 'right' ? 'left' : 'right',
                      },
                    });
                    setCellStyle('align', 'right');
                  }}
                >
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textAlign === 'right' && 'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignRight" />} />
                  </Button>
                </Popover>
                {/* <Popover content="两端对齐" {...popoverProps} onClick={() => {}}>
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textAlign === 'justify' &&
                        btnActiveStatus.textAlignLast !== 'justify' &&
                        'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignNormal" />} />
                  </Button>
                </Popover>
                <Popover content="分散对齐" {...popoverProps} onClick={() => {}}>
                  <Button
                    className={classNames(
                      'btn',
                      'mr6',
                      btnActiveStatus.textAlign === 'justify' &&
                        btnActiveStatus.textAlignLast === 'justify' &&
                        'active',
                    )}
                  >
                    <Icon component={() => <CustomizeIcon type="alignBoth" />} />
                  </Button>
                </Popover> */}
                <Popover content="自动换行" {...popoverProps}>
                  <Button
                    className={classNames('btn', btnActiveStatus.autoLineBreak && 'active')}
                    onClick={() => {
                      this.setState({
                        btnActiveStatus: {
                          ...btnActiveStatus,
                          autoLineBreak: !btnActiveStatus.autoLineBreak,
                        },
                      });
                      setCellStyle('textwrap', true);
                    }}
                  >
                    <Icon component={() => <CustomizeIcon type="autoLineBreak" size="lg" />} />
                    自动换行
                  </Button>
                </Popover>
              </div>
            </div>
            <div className={styles.group}>
              <div className="mb4">
                <Popover content="数字格式" {...popoverProps}>
                  <Select
                    className="select"
                    style={{ width: '139px' }}
                    defaultValue="1"
                    value={cellType.format ? cellType.format : undefined}
                    size="small"
                    onChange={value => {
                      this.setState({
                        cellType: {
                          format: value,
                        },
                      });
                      setCellType('cellType', this.cellTypeMap[value]);
                    }}
                  >
                    {this.cellType.map(item => (
                      <Option key={item.key} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Popover>
              </div>
              <div>
                <Popover content="中文货币符号" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="currency" />} />
                  </Button>
                </Popover>
                <Popover content="百分比样式" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="percentage" />} />
                  </Button>
                </Popover>
                <Popover content="千分位分隔样式" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="formatMoney" />} />
                  </Button>
                </Popover>
                <Popover content="增加小数位数" {...popoverProps} onClick={() => {}}>
                  <Button className="btn mr6">
                    <Icon component={() => <CustomizeIcon type="increaseDecimal" />} />
                  </Button>
                </Popover>
                <Popover content="减少小数位数" {...popoverProps} onClick={() => {}}>
                  <Button className="btn">
                    <Icon component={() => <CustomizeIcon type="decreaseDecimal" />} />
                  </Button>
                </Popover>
              </div>
            </div>
            <div className={styles.group}>
              <div style={{ display: 'inline-block' }}>
                <div className="mb4">
                  <Popover content="自动筛选" {...popoverProps}>
                    <Button className="btn mr6" onClick={() => {}}>
                      <Icon component={() => <CustomizeIcon type="autoFilter" />} />
                    </Button>
                  </Popover>
                  <Popover content="取消筛选" {...popoverProps}>
                    <Button className="btn mr6" onClick={() => {}}>
                      <Icon component={() => <CustomizeIcon type="clearFilter" />} />
                    </Button>
                  </Popover>
                </div>
                <div>
                  <Popover content="升序排序" {...popoverProps}>
                    <Button className="btn mr6" onClick={() => {}}>
                      <Icon component={() => <CustomizeIcon type="sortUp" />} />
                    </Button>
                  </Popover>
                  <Popover content="降序排序" {...popoverProps}>
                    <Button className="btn mr6" onClick={() => {}}>
                      <Icon component={() => <CustomizeIcon type="sortDown" />} />
                    </Button>
                  </Popover>
                </div>
              </div>
              <div className="btn-group-dropmenu">
                <Popover content="套用表格样式" {...popoverProps}>
                  <Button className="btn">
                    <Icon component={() => <CustomizeIcon type="formatCell" size="lg" />} />
                  </Button>
                </Popover>
                <ButtonGroup className="btn-group">
                  <Dropdown
                    overlay={<div />}
                    // overlay={<TableFormat />}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn">
                      表格样式
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
              </div>
            </div>
            <div className={styles.group}>
              <div className="btn-group-dropmenu mr6">
                <Popover content="行和列" {...popoverProps}>
                  <Button
                    className="btn"
                    //  onClick={this.handleButtonClick}
                  >
                    <Icon component={() => <CustomizeIcon type="rowsAndCols" size="lg" />} />
                  </Button>
                </Popover>
                <ButtonGroup className="btn-group">
                  <Dropdown
                    overlay={this.creatMenu(rowsAndColsMenu, 'rowAndCol')}
                    trigger={['click']}
                    placement="bottomLeft"
                  >
                    <Button className="btn">
                      行和列
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
              </div>
              <div className="mr6" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <div className="mb4">
                  <Popover content="添加超链接" {...popoverProps}>
                    <Button
                      className="btn"
                      onClick={() => {
                        // let params ={
                        //   "type": "a",
                        //   typeOptions: {
                        //       a: [{
                        //           // path: this.state.imageUrl,
                        //           href:"https://www.baidu.com",
                        //       }]
                        //   }
                        // }
                        // hotTool.type(this.state.instance,params)
                      }}
                    >
                      <Icon component={() => <CustomizeIcon type="hyperlink" />} />
                      超链接
                    </Button>
                  </Popover>
                </div>
                <div>
                  {/* <ButtonGroup className="btn-group"> */}
                  <Popover content="冻结窗格" {...popoverProps}>
                    <Button
                      className={classNames('btn', btnActiveStatus.freeze && 'active')}
                      onClick={() => {
                        this.setState({
                          btnActiveStatus: {
                            ...btnActiveStatus,
                            freeze: !btnActiveStatus.freeze,
                          },
                        });
                        setCellStyle('freeze', true);
                      }}
                    >
                      <Icon component={() => <CustomizeIcon type="freeze" />} />
                      {btnActiveStatus.freeze ? '取消冻结' : '冻结'}
                    </Button>
                  </Popover>
                  {/* <Dropdown
                      overlay={this.creatMenu(freezeMenu, 'freeze')}
                      trigger={['click']}
                      placement="bottomLeft"
                    >
                      <Button className="btn with-icon">
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup> */}
                </div>
              </div>
              <div className="mr6" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <Popover content="添加图片" {...popoverProps}>
                  <Upload
                    name="picture"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                    // action = "//jsonplaceholder.typicode.com/posts/"
                    action="action"
                    onChange={this.handlePicChange}
                  >
                    <Button className="btn btn-lg mr6">
                      <Icon component={() => <CustomizeIcon type="images" size="lg" />} />
                      <p>图片</p>
                    </Button>
                  </Upload>
                </Popover>
              </div>
              <Popover content="添加图表" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.toggleModal}>
                  <Icon component={() => <CustomizeIcon type="charts" size="lg" />} />
                  <p>图表</p>
                </Button>
              </Popover>
              <Popover content="数据集" {...popoverProps}>
                <Button
                  className="btn btn-lg mr6"
                  // onClick={this.handleButtonClick}
                  onClick={() => {}}
                >
                  <Icon component={() => <CustomizeIcon type="dataSet" size="lg" />} />
                  <p>数据集</p>
                </Button>
              </Popover>
              <Popover content="数据连接" {...popoverProps}>
                <Button
                  className="btn btn-lg mr6"
                  // onClick={this.handleButtonClick}
                  onClick={() => {}}
                >
                  <Icon component={() => <CustomizeIcon type="dataConn" size="lg" />} />
                  <p>数据连接</p>
                </Button>
              </Popover>
            </div>
          </TabPane>
          <TabPane tab="模板" key="3" style={tabPanelStyle}>
            <p>Content of Tab Pane 3</p>
          </TabPane>
          <TabPane tab="插入" key="4" style={tabPanelStyle}>
            <div className={styles.group}>
              <Popover content="常用函数" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="commoFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        常用函数
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="全部" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="allFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        全部
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="财务" {...popoverProps}>
                <div className="btn-group-dropmenu mr6 mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="financeFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        财务
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="逻辑" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="logicFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        逻辑
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="文本" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="textFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        文本
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="日期与时间" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="dateAndDateFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        日期与时间
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="查找与引用" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="findAndReferFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        查找与引用
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="数学与三角" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="mathAndTriFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        数学与三角
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
              <Popover content="其他函数" {...popoverProps}>
                <div className="btn-group-dropmenu mr6">
                  <Button className="btn" onClick={this.handleButtonClick}>
                    <Icon component={() => <CustomizeIcon type="otherFunc" size="lg" />} />
                  </Button>
                  <ButtonGroup className="btn-group">
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn">
                        其他函数
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Popover>
            </div>
            <div className={styles.group}>
              <Popover content="添加图片" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="images" size="lg" />} />
                  <p>图片</p>
                </Button>
              </Popover>
              <Popover content="添加图表" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.toggleModal}>
                  <Icon component={() => <CustomizeIcon type="charts" size="lg" />} />
                  <p>图表</p>
                </Button>
              </Popover>
              <div className="mb4" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="柱形图" {...popoverProps}>
                    <Button className="btn">
                      <Icon component={() => <CustomizeIcon type="chart1" />} />
                    </Button>
                  </Popover>
                  <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="柱形图" {...popoverProps}>
                    <Button className="btn">
                      <Icon component={() => <CustomizeIcon type="chart2" />} />
                    </Button>
                  </Popover>
                  <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="柱形图" {...popoverProps}>
                    <Button className="btn">
                      <Icon component={() => <CustomizeIcon type="chart3" />} />
                    </Button>
                  </Popover>
                  <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="btn-group mr6">
                  <Popover content="柱形图" {...popoverProps}>
                    <Button className="btn">
                      <Icon component={() => <CustomizeIcon type="chart4" />} />
                    </Button>
                  </Popover>
                  <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                    <Button className="btn with-icon">
                      <Icon type="down" style={{}} />
                    </Button>
                  </Dropdown>
                </ButtonGroup>
                <p>
                  <ButtonGroup className="btn-group mr6">
                    <Popover content="柱形图" {...popoverProps}>
                      <Button className="btn">
                        <Icon component={() => <CustomizeIcon type="chart5" />} />
                      </Button>
                    </Popover>
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn with-icon">
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="btn-group mr6">
                    <Popover content="柱形图" {...popoverProps}>
                      <Button className="btn">
                        <Icon component={() => <CustomizeIcon type="chart6" />} />
                      </Button>
                    </Popover>
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn with-icon">
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="btn-group mr6">
                    <Popover content="柱形图" {...popoverProps}>
                      <Button className="btn">
                        <Icon component={() => <CustomizeIcon type="chart7" />} />
                      </Button>
                    </Popover>
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn with-icon">
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="btn-group mr6">
                    <Popover content="柱形图" {...popoverProps}>
                      <Button className="btn">
                        <Icon component={() => <CustomizeIcon type="chart8" />} />
                      </Button>
                    </Popover>
                    <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                      <Button className="btn with-icon">
                        <Icon type="down" style={{}} />
                      </Button>
                    </Dropdown>
                  </ButtonGroup>
                </p>
              </div>
              <div className={styles.group}>
                <Popover content="文本框" {...popoverProps}>
                  <div className="btn-group-dropmenu">
                    <Button className="btn">
                      <Icon component={() => <CustomizeIcon type="texterea" size="lg" />} />
                    </Button>
                    <ButtonGroup className="btn-group">
                      <Dropdown overlay={<div />} trigger={['click']} placement="bottomLeft">
                        <Button className="btn">
                          文本框
                          <Icon type="down" style={{}} />
                        </Button>
                      </Dropdown>
                    </ButtonGroup>
                  </div>
                </Popover>
                <Popover content="公式" {...popoverProps}>
                  <Button className={classNames('btn', 'mr6', 'btn-lg')}>
                    <Icon component={() => <CustomizeIcon type="formula" size="lg" />} />
                    <p>公式</p>
                  </Button>
                </Popover>
                <div className="mr6" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                  <p className="mb4">
                    <Popover content="对象" {...popoverProps}>
                      <Button className="btn">
                        <Icon component={() => <CustomizeIcon type="object" />} />
                        对象
                      </Button>
                    </Popover>
                  </p>
                  <Popover content="附件" {...popoverProps}>
                    <Button className="btn" onClick={this.handleButtonClick}>
                      <Icon component={() => <CustomizeIcon type="annex" />} />
                      附件
                    </Button>
                  </Popover>
                </div>
              </div>
              <div className={styles.group}>
                <Popover content="超链接" {...popoverProps}>
                  <Button className="btn btn-lg mr6">
                    <Icon component={() => <CustomizeIcon type="hyperlinkLg" size="lg" />} />
                    <p>超链接</p>
                  </Button>
                </Popover>
              </div>
            </div>
          </TabPane>
          <TabPane tab="单元格" key="5" style={tabPanelStyle}>
            <div className={styles.group}>
              <Popover content="样式" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="formatCell" size="lg" />} />
                  <p>样式</p>
                </Button>
              </Popover>
              <Popover content="单元格类型" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="cellType" size="lg" />} />
                  <p>单元格类型</p>
                </Button>
              </Popover>
              <Popover content="单元格属性" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="cellProps" size="lg" />} />
                  <p>样式</p>
                </Button>
              </Popover>
              <Popover content="条件格式" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="conditionFormat" size="lg" />} />
                  <p>条件格式</p>
                </Button>
              </Popover>
              <Popover content="自定义属性" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="customAttr" size="lg" />} />
                  <p>自定义属性</p>
                </Button>
              </Popover>
              <Popover content="超链接" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="hyperlinkLg" size="lg" />} />
                  <p>超链接</p>
                </Button>
              </Popover>
            </div>
          </TabPane>
          <TabPane tab="数据" key="6" style={tabPanelStyle}>
            <div className={styles.group}>
              <div style={{ display: 'inline-block' }}>
                <div className="mb4">
                  <Popover content="自动筛选" {...popoverProps}>
                    <Button className="btn mr6">
                      <Icon component={() => <CustomizeIcon type="autoFilter" />} />
                    </Button>
                  </Popover>
                  <Popover content="取消筛选" {...popoverProps}>
                    <Button className="btn mr6">
                      <Icon component={() => <CustomizeIcon type="clearFilter" />} />
                    </Button>
                  </Popover>
                </div>
                <div>
                  <Popover content="升序排序" {...popoverProps}>
                    <Button className="btn mr6">
                      <Icon component={() => <CustomizeIcon type="sortUp" />} />
                    </Button>
                  </Popover>
                  <Popover content="降序排序" {...popoverProps}>
                    <Button className="btn mr6">
                      <Icon component={() => <CustomizeIcon type="sortDown" />} />
                    </Button>
                  </Popover>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <Popover content="分类汇总" {...popoverProps}>
                <Button className="btn btn-lg mr6" onClick={this.handleButtonClick}>
                  <Icon component={() => <CustomizeIcon type="subtotals" size="lg" />} />
                  <p>分类汇总</p>
                </Button>
              </Popover>
            </div>
          </TabPane>
        </Tabs>
        {/* 行高modal */}
        {/* <Modal
          title="设置行高"
          visible={this.state.rowHeightVisible}
          onOk={this.cancelRowHeight}
          onCancel={this.cancelRowHeight}
          okText="确定"
          cancelText="取消"
          width={300}
          wrapClassName="modal"
        >
          <span>行高</span>
          <Input
            style={{ width: 200, marginLeft: 20 }}
            value={this.state.rowHeight}
            onChange={e => {
              this.setState({
                rowHeight: e.target.value,
              });
            }}
          />
        </Modal> */}

        {/* 列宽modal */}
        {/* <Modal
          title="设置列宽"
          visible={this.state.colWidthVisible}
          onOk={this.handleColWidth}
          onCancel={this.cancelColWidth}
          okText="确定"
          cancelText="取消"
          width={300}
          wrapClassName="modal"
        >
          <span>列宽</span>
          <Input
            style={{ width: 200, marginLeft: 20 }}
            value={this.state.colWidth}
            onChange={e => {
              this.setState({
                colWidth: e.target.value,
              });
            }}
          />
        </Modal> */}

        {/* 插入单元格modal */}
        {/* <Modal
          title="插入"
          visible={this.state.insertCellVisible}
          onOk={this.handleInsertCell}
          onCancel={this.cancelInsertCell}
          okText="确定"
          cancelText="取消"
          width={400}
          wrapClassName="modal"
        >
          <RadioGroup
            onChange={e => {
              this.setState({
                radioValue: e.target.value,
              });
            }}
            value={this.state.radioValue}
          >
            <Radio className={styles.radioStyle} value={1}>
              活动单元格右移
            </Radio>
            <Radio className={styles.radioStyle} value={2}>
              活动单元格下移
            </Radio>
            <Radio className={styles.radioStyle} value={3}>
              整行<span style={{ marginLeft: 10 }}>行数:</span>
              <Input
                style={{ width: 200, marginLeft: 20 }}
                value={this.state.selectedRow}
                onChange={e => {
                  if (this.state.radioValue === 3) {
                    this.setState({
                      selectedRow: e.target.value,
                    });
                  }
                }}
              />
            </Radio>
            <Radio className={styles.radioStyle} value={4}>
              整列<span style={{ marginLeft: 10 }}>列数:</span>
              <Input
                style={{ width: 200, marginLeft: 20 }}
                value={this.state.selectedCol}
                onChange={e => {
                  if (this.state.radioValue === 4) {
                    this.setState({
                      selectedCol: e.target.value,
                    });
                  }
                }}
              />
            </Radio>
          </RadioGroup>
        </Modal> */}

        {/* 删除单元格modal */}
        {/* <Modal
          title="删除"
          visible={this.state.deleteCellVisible}
          onOk={this.handleDeleteCell}
          onCancel={this.cancelDeleteCell}
          okText="确定"
          cancelText="取消"
          width={400}
          wrapClassName="modal"
        >
          <RadioGroup onChange={() => {}} value={this.state.radioValue}>
            <Radio className={styles.radioStyle} value={1}>
              活动单元格左移
            </Radio>
            <Radio className={styles.radioStyle} value={2}>
              活动单元格上移
            </Radio>
            <Radio className={styles.radioStyle} value={3}>
              整行
            </Radio>
            <Radio className={styles.radioStyle} value={4}>
              整列
            </Radio>
          </RadioGroup>
        </Modal> */}

        {/* 显示与隐藏modal */}
        {/* <Modal
          title="显示与隐藏"
          visible={this.state.showAndHideVisible}
          onOk={this.handleShowAndHide}
          onCancel={this.cancelShowAndHide}
          okText="确定"
          cancelText="取消"
          width={400}
          wrapClassName="modal"
        >
          <RadioGroup
            onChange={e => {
              this.setState({
                radioValue: e.target.value,
              });
            }}
            value={this.state.radioValue}
          >
            <Radio className={styles.radioStyle} value={1}>
              隐藏行
            </Radio>
            <Radio className={styles.radioStyle} value={2}>
              隐藏列
            </Radio>
            <Radio className={styles.radioStyle} value={3}>
              显示隐藏行
            </Radio>
            <Radio className={styles.radioStyle} value={4}>
              显示隐藏列
            </Radio>
          </RadioGroup>
        </Modal> */}
      </div>
    );
  }
}
