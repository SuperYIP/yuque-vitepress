# js常用技巧
### 防止重复点击：重复点击按钮只生效一次
```javascript
const DEBOUNCE_CLICK_DURATION = 1000;  // 1000毫米内的点击只生效第一次。
onPressHandler() {
  // 若是1秒内重复点击，则不生效点击事件
  if (this.lastClickTime && Date.now() - this.lastClickTime <= DEBOUNCE_CLICK_DURATION) {
      return;
  }
  this.lastClickTime = Date.now();
  // 后面写点击事件的其他逻辑
}
```
## 数组相关
### 判断数组是否为空
```javascript
import * as mobx from 'mobx';
export function isEmpty(array?: any): boolean {
    // 检查参数是否为空：0 false '' undefined null
    if (!array) {
        return true;
    }
  	// 将mobx观察的数组通过浅拷贝转换为普通数组（因为mobx观察的数组下面的判断条件不生效） 
    let realArray = array;
    if (mobx.isObservableArray(realArray)) {
        realArray = array.slice();
    }
    // 检查是否为数组
    if (!Array.isArray(realArray)) {
        return true;
    }
    // 检查数组长度是否为0
    if (realArray.length === 0) {
        return true;
    }
    return false;
}
```
### 判断数组是否不为空
```javascript
export function isNotEmpty(array?: any): boolean {
    return !isEmpty(array);
}
```
## 对象相关
### 判断对象是否为空
```javascript
export function isEmpty(obj: any): boolean {
    // 检查参数是否为空：0 false '' undefined null
    if (!obj) {
        return true;
    }
    // 检查对象长度是否为0
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}
```
### 判断对象是否不为空
```javascript
export function isNotEmpty(obj: any): boolean{
    return !this.isEmpty(obj);
}
```
## 日期相关
### 格式化时间
## 字符串相关
### 判断字符串是否为空
```javascript
export function isEmpty(text: any): boolean{
    if(!text){
        return true;
    }
    if(text.length=== 0){
        return true;
    }
    return false;
},
```
### 判断字符串是否不为空
```javascript
export function isNotEmpty(text: any): boolean{
    return !this.isEmpty(text);
},
```
### 替换字符串中的所有子串
> 字符串本身有replaceAll方法，但是在某些node版本下不支持这个方法，会报错。

```javascript
replaceAll(str, oldstr, newstr){
    if(typeof(str) !== 'string'){
       return str;
    }
    if(typeof(oldstr) !== 'string'){
        return str.replace(new RegExp(oldstr), newstr);	// 只匹配字符串的第一个子串
    } else {
        return str.replace(new RegExp(oldstr, 'g'), newstr);	// 匹配字符串的所有子串
    }
},
```
### 规定字符串长度，超过指定长度的部分用...替换
```javascript
export function maxCharacter(text: string, maxLength: number) {
    return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
}
```
