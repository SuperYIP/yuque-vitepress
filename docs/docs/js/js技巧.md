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
### 等待一段时间再向下执行
```javascript
// 首先可以尝试setTimeout是否生效，用setTimeout把要延迟执行的部分包起来

// 如果是在异步函数中setTimeout没有生效，则可以像下面这样写个Promise
await new Promise(resolve => setTimeout(resolve, 100000));
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
```typescript
/**
 * 格式化时间，支持的格式:
 *       yyyy ==> 完整的年份，如：2015
 *       yy   ==> 简短的年份，如：15
 *       MM   ==> 月份，填充0，如：05
 *       M    ==> 月份，不填充0，如：5
 *       Mm   ==> 月份，如: 1月
 *       dd   ==> 日期，填充0，如：08
 *       d    ==> 日期，不填充0，如：8
 *       Dd   ==> 日期，如: 21日
 *       hh   ==> 小时，填充0，如：09
 *       h    ==> 小时，不填充0，如：9
 *       mm   ==> 分钟，填充0，如：08
 *       m    ==> 分钟，不填充0，如：8
 *       ss   ==> 秒，填充0，如：08
 *       s    ==> 秒，不填充0，如：8
 *       tt   ==> 星期，如：星期二
 *       t    ==> 星期，如：周二
 * @param {String|Date} date 要格式化的日期／日期字符串
 * @param {String} [pattern='yyyy-MM-dd']   目标格式，比如："yyyy-MM-dd"
 * @param {String} [lang='cn'] 语言，默认中文，可选值: 'cn', 'en'
 * @example
 *      dateFormat('2018-08-08', 'yy-M-d');
 *      dateFormat('2018-08-08 03:33:10', 'yy-Mm-d');
 *      dateFormat(new Date(), 'yyyy-MM-dd tt')
 * @returns
 */
function dateFormat(date: string | Date, pattern: string, lang ?: string): string {
    if (!date) {
        return '';
    }
    // 将传入的要格式化的日期转换为Date类型
    if (typeof date === 'string') {
        date = new Date(date.replace(/-/g, '/'));   // 如果传入的日期是2018-08-08形式的，需要将-替换掉，转换为2018/08/08，这样才能转为Date类型。
    }
    // 获取年月日等信息
    const year = date.getFullYear(),
        month = date.getMonth(),
        d = date.getDate(),     // 日
        day = date.getDay(),    // 周几
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    // 定义日期数据（把周几等数据直接定义为数组更好）
    const languageMap: { [index: string]: { tt: string[]; ttt: string[]; MM: string[]; M: string[] } } = {
        cn: {
            tt: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            ttt: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            MM: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            M: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        en: {
            tt: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ttt: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            MM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            M: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };
    // 选择中文还是英文
    const mapping = languageMap[lang || 'cn'];
    // 替换日期格式为具体时间
    return (pattern || 'yyyy-MM-dd')
        .replace(/\byyyy\b/g, String(year))
        .replace(/\bMM\b/g, mapping.MM[month])
        .replace(/\bM\b/g, mapping.M[month])
        .replace(/Mm/g, mapping.M[month] + '月')
        .replace(/\bdd\b/g, String(d).padStart(2, '0'))
        .replace(/Dd/g, String(d).padStart(2, '0') + '日')
        .replace(/\bd\b/g, String(d))
        .replace(/\btt\b/g, mapping.tt[day])
        .replace(/\bttt\b/g, mapping.ttt[day])
        .replace(/\bhh\b/g, String(hours).padStart(2, '0'))
        .replace(/\bh\b/g, String(hours))
        .replace(/\bmm\b/g, String(minutes).padStart(2, '0'))
        .replace(/\bm\b/g, String(minutes))
        .replace(/\bss\b/g, String(seconds).padStart(2, '0'))
        .replace(/\bs\b/g, String(seconds));
}

console.log(dateFormat(new Date(), 'yyyy-MM-dd tt hh:mm:ss'));
console.log(dateFormat('2018-08-08 20:30', 'yyyy-MM-dd ttt hh:mm:ss'));
```
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
