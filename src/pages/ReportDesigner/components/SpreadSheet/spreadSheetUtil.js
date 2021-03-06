import { stringToNum } from '@/utils/utils';
import { INITHEIGHT, INITWIDTH, getCellStringByIndex } from '../../utils';

/**
 * @description: 导入返回的xml
 * @param {object} xmlObject xml相关的json串
 * @return {object} spreadSheet类型所需要的JSON Object
 * @Author: mus
 * @Date: 2020-01-10 15:16:31
 */
export function convertXml(xmlObject) {
  const { cells: xmlCell, columns: xmlColumns, rows: xmlRows } = xmlObject;
  const resultObject = {
    name: 'sheet1',
    rows: {},
    cols: {},
    freeze: 'A1',
    styles: [],
    merges: [],
    validations: [],
    autofilter: [],
  };
  // 合并单元格相关
  const merges = [];
  // 进行rows与cols的遍历
  for (let i = 0; i < xmlRows.length; i += 1) {
    resultObject.rows[i] = {
      cells: {},
    };
    for (let j = 0; j < xmlColumns.length; j += 1) {
      resultObject.rows[i].cells[j] = {};
    }
  }
  const nowSpanObj = {
    nowRow: -1,
    nowColSpan: -1,
    nowCol: -1,
    nowRowSpan: -1,
  };
  xmlCell.forEach(cellValue => {
    const {
      rowNumber = 0,
      columnNumber = 0,
      value: { type = 'simple', value = '' },
      cellStyle,
      colSpan = 0,
      rowSpan = 0,
    } = cellValue;
    const typeMap = {
      simple: 'text',
    };
    // 样式相关的结构
    const {
      align = 'left',
      bold = false,
      fontSize = 10, // 是否设置字体
      forecolor = '0,0,0',
      italic = false,
      underline = false,
      valign = 'middle',
      bgcolor = '255,255,255',
      bottomBorder,
      leftBorder,
      topBorder,
      rightBorder,
    } = cellStyle;
    // 存放单元格的相关属性
    resultObject.rows[rowNumber - 1].cells[columnNumber - 1] = {
      text: value, // 数值
      cellProps: {
        cellType: typeMap[type], // 单元格类型
      },
      isEdit: true, // 是否可编辑
      style: {
        font: {
          bold, // 加醋
          italic, // 斜体
          size: fontSize, // 字体大小
        },
        underline, // 下划线
        bgcolor: `rgb(${bgcolor})`, // 背景颜色
        color: `rgb(${forecolor})`, // 字体颜色
        valign, // 垂直位置
        align, // 水平位置
      },
    };
    // 处理单元格的问题
    if (rightBorder || bottomBorder || topBorder || leftBorder) {
      const border = {};
      // if (!(columnNumber === nowSpanObj.nowCol && rowNumber <= nowSpanObj.nowRowSpan)) {
      if (leftBorder) {
        border.left = ['thin', `rgb(${leftBorder.color})`];
      }
      // }
      // if (!(columnNumber === nowSpanObj.nowCol && rowNumber <= nowSpanObj.nowRowSpan)) {
      if (rightBorder) {
        border.right = ['thin', `rgb(${rightBorder.color})`];
      }
      // }
      // if (!(rowNumber === nowSpanObj.nowRow && columnNumber <= nowSpanObj.nowColSpan)) {
      if (topBorder) {
        border.top = ['thin', `rgb(${topBorder.color})`];
      }
      // }
      // if (!(rowNumber === nowSpanObj.nowRow && columnNumber <= nowSpanObj.nowColSpan)) {
      if (bottomBorder) {
        border.bottom = ['thin', `rgb(${bottomBorder.color})`];
      }
      // }
      resultObject.rows[rowNumber - 1].cells[columnNumber - 1].style.border = border;
    }
    // // 如果是rowSpan大于1，则在内的左右边框不显示
    // if (rowSpan > 1) {
    //   nowSpanObj.nowRowSpan = rowSpan;
    //   nowSpanObj.nowCol = columnNumber;
    // }
    // // 如果是colSpan，则在内的上下边框不显示
    // if (colSpan > 1) {
    //   nowSpanObj.nowColSpan = colSpan;
    //   nowSpanObj.nowRow = rowNumber;
    // }
    // 处理行单元格合并的问题
    if (colSpan > 1 || rowSpan > 1) {
      const finalColSpan = colSpan ? colSpan - 1 : 0;
      const finalRowSpan = rowSpan ? rowSpan - 1 : 0;
      resultObject.rows[rowNumber - 1].cells[columnNumber - 1].merge = [finalRowSpan, finalColSpan];
      const merge = `${getCellStringByIndex(
        rowNumber - 1,
        columnNumber - 1,
      )}:${getCellStringByIndex(rowNumber - 1 + finalRowSpan, columnNumber - 1 + finalColSpan)}`;
      merges.push(merge);
    }
    // 处理行相关属性
    xmlRows.forEach(xmlRowsValue => {
      const { height, rowNumber: rowNumberInside } = xmlRowsValue;
      resultObject.rows[rowNumberInside - 1].height = parseInt(height * 1.5, 10);
    });
    // 处理列相关属性
    xmlColumns.forEach(xmlColumnsValue => {
      const { width, columnNumber: columnNumberInside } = xmlColumnsValue;
      resultObject.cols[columnNumberInside - 1] = resultObject.cols[columnNumberInside - 1] || {};
      resultObject.cols[columnNumberInside - 1].width = parseInt(width * 1.3, 10);
    });
    // 给rows、cols 添加len
    resultObject.rows.len = xmlRows.length;
    resultObject.cols.len = xmlColumns.length;
    resultObject.merges = merges;
  });
  return resultObject;
}

/**
 * @description: 处理合并单元格相关
 * @param {array}  merges 合并单元格的原始数据
 * @return {array} 合并单元格的数组
 * @Author: mus
 * @Date: 2019-12-23 20:29:27
 */
export function mergeCell(merges) {
  const mergeMap = {};
  merges.forEach(merge => {
    const [start, end] = merge.split(':');
    const startCol = stringToNum(start.match(/([A-Z]+)([0-9]+)/)[1]) - 1;
    const startRow = start.match(/([A-Z]+)([0-9]+)/)[2] - 1;
    const endCol = stringToNum(end.match(/([A-Z]+)([0-9]+)/)[1]) - 1;
    const endRow = end.match(/([A-Z]+)([0-9]+)/)[2] - 1;
    mergeMap[startRow.toString() + startCol.toString()] = {
      currentCol: startCol,
      currentRow: startRow,
      colSpan: endCol - startCol + 1,
      rowSpan: endRow - startRow + 1,
    };
  });
  return mergeMap;
}

/**
 * @description: spreadSheetJSON转换
 * @param {object} spreadSheetData spreadsheet的原数据
 * @return {object} 转换后的sheet数据
 * @Author: mus
 * @Date: 2019-12-23 20:24:27
 */
export function generateJson(spreadSheetData) {
  // rows: 所有行,
  const { rows, cols, merges } = spreadSheetData;
  const rowLength = rows.len;
  const colLength = cols.len;

  // 获取处理后的合并单元格数据
  const processedMerges = mergeCell(merges);

  // 生成JSON所需的单元格数据
  const data = new Array(rowLength).fill([]).map(() => new Array(colLength).fill(''));

  // 生成JSON所需的cellAttrs，即单元格中的数据类型、style相关
  const cellAttrs = new Array(rowLength).fill([]).map(() =>
    new Array(colLength).fill({}).map(() => ({
      F: '1',
      cellDesc: '',
      cellType: 'TEXT',
      style: {},
      sy: '0',
    })),
  );

  // 行高初始数据
  const rowArray = new Array(rowLength).fill(INITHEIGHT);
  // 列宽初始数据
  const columnArray = new Array(colLength).fill(INITWIDTH);
  // 设置列的相关数据
  Object.keys(cols).forEach(colsIndex => {
    if (cols[colsIndex].width) {
      columnArray[colsIndex] = cols[colsIndex].width;
    }
  });

  Object.keys(rows).forEach(rowIndex => {
    if (rowIndex === 'len') {
      return;
    }
    // 若存在行高，则设置行高
    if (rows[rowIndex].height) {
      rowArray[rowIndex] = rows[rowIndex].height;
    }
    Object.keys(rows[rowIndex].cells).forEach(cellIndex => {
      // spreadSheet单元格的数据及属性
      const cellContent = rows[rowIndex].cells[cellIndex];
      // 把spreadShett单元格的数据赋值给后台表格的单元格中
      data[rowIndex][cellIndex] = cellContent.text || '';

      // TODO：设置宽度、高度

      // 后台表格单元格属性
      const currentCellProps = cellAttrs[rowIndex][cellIndex];

      // 设置colSpan、rowSpan
      const processedMerge = processedMerges[rowIndex.toString() + cellIndex.toString()];

      // 若改单元格不存在合并，则rowSpan为1，同理colSpan为1
      currentCellProps.rowSpan = processedMerge ? processedMerge.rowSpan : '1';
      currentCellProps.colSpan = processedMerge ? processedMerge.colSpan : '1';

      // 对cellType进行处理
      if (!cellContent.cellProps) {
        currentCellProps.cellType = 'TEXT';
      } else if (cellContent.cellProps.cellType === 'dataSet') {
        currentCellProps.cellType = 'DATASET';
      } else if (cellContent.cellProps.cellType === 'text') {
        currentCellProps.cellType = 'TEXT';
      } else if (cellContent.cellProps.cellType === 'formula') {
        currentCellProps.cellType = 'FORMULA';
      } else if (cellContent.cellProps.cellType === 'hyperlink') {
        currentCellProps.cellType = 'LINK';
      }

      // 对样式进行处理
      if (cellContent.style) {
        Object.entries(cellContent.style).forEach(([singleStyle, singleStyleValue]) => {
          if (singleStyle === 'bgcolor') {
            // 背景颜色
            // eslint-disable-next-line prefer-destructuring
            currentCellProps.style.bgcolor = singleStyleValue.match(/rgb\((.*)\)/)[1];
          }
          if (singleStyle === 'color') {
            // 字体颜色
            // eslint-disable-next-line prefer-destructuring
            currentCellProps.style.forecolor = singleStyleValue.match(/rgb\((.*)\)/)[1];
          }
          if (singleStyle === 'underline' && singleStyleValue) {
            // 下划线
            currentCellProps.style.underline = true;
          }
          if (singleStyle === 'align') {
            // 水平对齐方式
            currentCellProps.style.align = singleStyleValue;
          }
          if (singleStyle === 'valign') {
            // 垂直对齐方式
            currentCellProps.style.valign = singleStyleValue;
          }
          if (singleStyle === 'font') {
            // 字体相关
            Object.entries(cellContent.style[singleStyle]).forEach(
              ([fontStyle, fontStyleValue]) => {
                if (fontStyle === 'name') {
                  // 字体 font-family
                  currentCellProps.style.fontFamily = fontStyleValue;
                }
                if (fontStyle === 'size') {
                  // 字体 font-size
                  currentCellProps.style.fontSize = fontStyleValue;
                }
                if (fontStyle === 'italic' && fontStyleValue) {
                  // 字体 斜体
                  currentCellProps.style.italic = true;
                }
                if (fontStyle === 'bold' && fontStyleValue) {
                  // 字体 加粗
                  currentCellProps.style.bold = true;
                }
              },
            );
          }
          if (singleStyle === 'border') {
            // 边框相关样式
            Object.entries(cellContent.style[singleStyle]).forEach(
              ([borderStyle, borderStyleValue]) => {
                // const [color = 'rgb(0,0,0)'] = borderStyleValue;
                const color = 'rgb(0,0,0)';
                if (borderStyle === 'bottom') {
                  // 下边框
                  // eslint-disable-next-line prefer-destructuring
                  currentCellProps.style.borderBottomColor = color.match(/rgb\((.*)\)/)[1];
                  currentCellProps.style.borderBottomType = 'solid';
                  currentCellProps.style.borderBottomWidth = '1';
                  currentCellProps.style.borderBottom = true;
                }
                if (borderStyle === 'top') {
                  // 上边框
                  // eslint-disable-next-line prefer-destructuring
                  currentCellProps.style.borderTopColor = color.match(/rgb\((.*)\)/)[1];
                  currentCellProps.style.borderTopType = 'solid';
                  currentCellProps.style.borderTopWidth = '1';
                  currentCellProps.style.borderTop = true;
                }
                if (borderStyle === 'left') {
                  // 左边框
                  // eslint-disable-next-line prefer-destructuring
                  currentCellProps.style.borderLeftColor = color.match(/rgb\((.*)\)/)[1];
                  currentCellProps.style.borderLeftType = 'solid';
                  currentCellProps.style.borderLeftWidth = '1';
                  currentCellProps.style.borderLeft = true;
                }
                if (borderStyle === 'right') {
                  // 有边框
                  // eslint-disable-next-line prefer-destructuring
                  currentCellProps.style.borderRightColor = color.match(/rgb\((.*)\)/)[1];
                  currentCellProps.style.borderRightType = 'solid';
                  currentCellProps.style.borderRightWidth = '1';
                  currentCellProps.style.borderRight = true;
                }
              },
            );
          }
        });
      }
    });
  });
  const sheet = [];
  sheet.push({
    data,
    cellAttrs,
    rowArray,
    columnArray,
  });
  return sheet;
}
