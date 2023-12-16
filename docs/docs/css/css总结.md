## 一. 工具、库等
### 使用`reset-css`库清除浏览器默认样式
作用是消除不同浏览器之间对HTML元素的默认样式差异，以确保在不同浏览器上获得一致的外观和行为。<br />通常将reset-css库全局引入（react是放在最根上的那个index.js文件中）
```javascript
// 初始化样式一般放在最前面，然后是UI框架的样式，然后是组件的样式
import 'reset-css'
```
### 使用scss语法
安装sass库(安装在开发环境：--save-dev)
```javascript
npm i --save-dev sass
```
### 常用初始样式
首先是要使用`reset-css`库清除默认样式。<br />然后可以定义一个`global.css`用于指定全局样式。
```css
body {
  // 禁用文字选中
  user-select: none;
}

img {
  // 禁止拖动图片
  -webkit-user-drag: none;
}
```

## 二. 语法等
