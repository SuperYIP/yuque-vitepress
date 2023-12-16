### 旧版本设置组件为中文
旧版本Antd组件库的部分组件提示信息为英文，比如`RangePicker`组件：<br />![image.png](../../images/ef0ccce3c2278505be9cf0240defc10f.png)<br />想要让组件的提示信息变成中文，可以引入`antd/lib/date-picker/locale/zh_CN`库，并在组件中增加`locale`属性：
```javascript
import locale from 'antd/lib/date-picker/locale/zh_CN';     // 局部设置组件显示为中文
<RangePicker format="HH" locale={locale} />
```
增加后，组件提示信息变成中文：<br />![image.png](../../images/016e393d2348e82392c8b6f4d1b7085d.png)
### 新版(5.12)设置组件为中文
全局设置：使用`<ConfigProvider locale={zh_CN}>`包裹全部组件，通常所有组件都在App.ts中。
```typescript

import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';		// 引入中文翻译
import Container from './components/container';
// 设置antd组件所有内容为中文，这块如果不写，日历中年份是中文月份仍然是英文。
import dayjs from 'dayjs';
import zh_cn from 'dayjs/locale/zh-cn';
dayjs.locale(zh_cn);

function App() {

  return (
    <ConfigProvider locale={zh_CN}>
      <Container/> 
    </ConfigProvider>
  )
}

export default App

```
可能需要额外引入三行代码，这块如果不写，日历中年份是中文月份仍然是英文：
```typescript
import dayjs from 'dayjs';
import zh_cn from 'dayjs/locale/zh-cn';
dayjs.locale(zh_cn);
```
### 清空输入状态

1. 定义引用(res)：`this.formRef`
2. 将创建的引用(this.formRef)与`Form`组件关联（此时this.formRef就可以调用其关联的组件的方法了）
3. 在需要时调用Form组件的`resetFields()`方法清空输入状态。
```javascript
this.formRef = React.createRef();

<Form
    onFinish={this.onFinish}
    onFinishFailed={this.onFinishFailed}
    autoComplete="off"
    ref={this.formRef} // 将表单关联到 ref
>
      
// 清空modal中form表单的输入状态
clearInputStatus = () => {
    this.formRef.current.resetFields();
}
```
