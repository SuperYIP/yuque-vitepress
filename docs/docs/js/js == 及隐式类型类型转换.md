#### ===：严格相等
- 不进行类型转换。
- 类型相同，值也相同时===结果为true。
- 引用类型必须是同一地址，===结果为true。
- NaN与任何值===结果都是false。
#### ==：宽松相等
进行隐式类型转换，等式两侧都有可能被转换，转换类型后使用===判断。
##### 宽松相等转换规则
> [https://blog.csdn.net/magic_xiang/article/details/83686224](https://blog.csdn.net/magic_xiang/article/details/83686224)
> [https://mp.weixin.qq.com/s/dEn26VLM9HLq7kZYiz0zJg](https://mp.weixin.qq.com/s/dEn26VLM9HLq7kZYiz0zJg)

1. 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值。
2. 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值。
3. 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法(若对象没有valueOf方法或调用valueOf后返回的仍不是原始值，则调用toString方法)，用得到的基本类型值按照前面的规则进行比较。
- 如果对象内没有重写toString()方法，则对象调用toString()方法后会返回'[object Object]'字符串。
- 字符串内如果不是全部是数字，则转数字的结果为NaN。

例子：
```javascript
问：a在什么情况下，会使得程序输出1。
let a = ?
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
解：
let a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
```
