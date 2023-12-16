基础用法
```jsx
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render:(text,record,index) => {
      
    }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```
dataSource为表格中填充的数据，其中key通常用于标识该行数据的唯一性，name、age、address就是数据中的字段。<br />columns为表格的每一列的标题，其中title字段表示这一列的名字，dataIndex字段表示这一列填充dataSource里的哪个字段的数据，示例代码中姓名列填充的是name字段的数据，key通常用于标识该行数据的唯一性，后面跟的基本都是和dataIndex字段一样的。render方法用于定义单元格的渲染内容，render基础写法如下：
```jsx
render: (text, record, index) => {
  // 自定义渲染逻辑，通常返回组件
}
```
text参数表示当前单元格的值，也就是dataIndex指定的字段的值，<br />record参数表示当前行的数据对象，record中的内容是dataSource数组中的一项，例如第一行的record为{key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'}<br />index参数表示当前行的索引，从0开始。
