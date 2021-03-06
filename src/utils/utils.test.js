import { isUrl, formatTree, formatTimeString, msFormat } from './utils';

describe('isUrl tests', () => {
  it('should return false for invalid and corner case inputs', () => {
    expect(isUrl([])).toBeFalsy();
    expect(isUrl({})).toBeFalsy();
    expect(isUrl(false)).toBeFalsy();
    expect(isUrl(true)).toBeFalsy();
    expect(isUrl(NaN)).toBeFalsy();
    expect(isUrl(null)).toBeFalsy();
    expect(isUrl(undefined)).toBeFalsy();
    expect(isUrl('')).toBeFalsy();
  });
  it('should return false for invalid URLs', () => {
    expect(isUrl('foo')).toBeFalsy();
    expect(isUrl('bar')).toBeFalsy();
    expect(isUrl('bar/test')).toBeFalsy();
    expect(isUrl('http:/example.com/')).toBeFalsy();
    expect(isUrl('ttp://example.com/')).toBeFalsy();
  });
  it('should return true for valid URLs', () => {
    expect(isUrl('http://example.com/')).toBeTruthy();
    expect(isUrl('https://example.com/')).toBeTruthy();
    expect(isUrl('http://example.com/test/123')).toBeTruthy();
    expect(isUrl('https://example.com/test/123')).toBeTruthy();
    expect(isUrl('http://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('http://www.example.com/')).toBeTruthy();
    expect(isUrl('https://www.example.com/')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123?foo=bar')).toBeTruthy();
  });
});

describe('formatTree test', () => {
  const input = [
    {
      departmentId: 'ZQ001',
      departmentName: '申万宏源有限责任公司',
      parentDepartmentId: '-1',
    },
    {
      departmentId: '10101000100',
      departmentName: '证券-公司',
      parentDepartmentId: 'ZQ001',
    },
    {
      departmentId: '199000001',
      departmentName: '申万宏源集团股份有限公司本部',
      parentDepartmentId: 'ZQ001',
    },
    {
      departmentId: '189000001',
      departmentName: '证券-公司1',
      parentDepartmentId: '10101000100',
    },
    {
      departmentId: '189000002',
      departmentName: '证券-公司2',
      parentDepartmentId: '10101000100',
    },
  ];

  const output = [
    {
      departmentId: 'ZQ001',
      departmentName: '申万宏源有限责任公司',
      parentDepartmentId: '-1',
      children: [
        {
          departmentId: '10101000100',
          departmentName: '证券-公司',
          parentDepartmentId: 'ZQ001',
          children: [
            {
              departmentId: '189000001',
              departmentName: '证券-公司1',
              parentDepartmentId: '10101000100',
            },
            {
              departmentId: '189000002',
              departmentName: '证券-公司2',
              parentDepartmentId: '10101000100',
            },
          ],
        },
        {
          departmentId: '199000001',
          departmentName: '申万宏源集团股份有限公司本部',
          parentDepartmentId: 'ZQ001',
        },
      ],
    },
  ];

  it('should input will generate output', () => {
    expect(formatTree(input)).toEqual(output);
  });
});

describe('formatTimeString test', () => {
  it('should void string', () => {
    expect(formatTimeString('')).toEqual('');
    expect(formatTimeString(NaN)).toEqual('');
    expect(formatTimeString(undefined)).toEqual('');
  });

  it('should return  date and time format', () => {
    expect(formatTimeString(2019112610)).toEqual('2019-11-26 10:00:00');
    expect(formatTimeString(20191126103312)).toEqual('2019-11-26 10:33:12');
    expect(formatTimeString(20191126103312789)).toEqual('2019-11-26 10:33:12');
    expect(formatTimeString('20191126103312789')).toEqual('2019-11-26 10:33:12');
  });
});

describe('msFormat test', () => {
  it('should return time format', () => {
    expect(msFormat(92964)).toEqual('00:01:32');
    expect(msFormat('92964')).toEqual('00:01:32');
  });
});
