## 工具、库等
### form-serialize：快速收集目标表单范围内表单元素的值
> \form-serialize官网：[https://www.npmjs.com/package/form-serialize](https://www.npmjs.com/package/form-serialize)

### axios：用于请求数据
### 设置支持装饰器语法(@开头)

1.  安装依赖：`npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env` 
2.  在项目根目录下创建 `.babelrc`和 `config-overrides.js`两个文件。 
   1.  `.babelrc`文件内容如下： 
```javascript
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ]
    ]
}
```

   2.  `config-overrides.js`文件内容如下： 
```javascript
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    if (env === 'production') {
        config.externals = {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }

    return config
};


module.exports = override(addDecoratorsLegacy(), customize())
```

3.  安装依赖：`npm i customize-cra react-app-rewired` 
4.  配置package.json文件： 
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```
### nodemon：修改服务器代码后，自动更新服务器，不需要手动重启了。
全局安装：`npm i nodemon -g`<br />安装后使用nodemon启动服务器：`nodemon test.js(服务器文件名)`，即可在更改服务器代码后自动重启服务器。注：浏览器页面仍然需要手动刷新，才能看到更改后的结果。
### fs.readFile异步读取数据：const res = await fs.promises.readFile('./test.txt', 'utf-8')
### koa：基于nodejs的web开发框架
#### koa-logger：处理控制台日志
#### koa-onerror：错误处理中间件
#### koa-router：路由中间件
安装：`npm install @koa/router，`使用时导入命令：`const Router = require('@koa/router')`

1. 创建router文件夹存储创建的路由器，比如router文件夹下创建 `home.js`文件作为home页面的路由，`home.js`内容如下：
```javascript
const Router = require('@koa/router')

const router = new Router()

router.prefix('/home')  // 路径，这写/home，则实际通过http://127.0.0.1:3000/home访问此页面，不写router.prefix('/home')的话就是通过http://127.0.0.1:3000访问此页面
router.get('/', (ctx, next) => {
    ctx.body = '你好'
})


// 导出路由器对象
module.exports = router
```

2. 导入路由器对象：在想要使用路由器的位置新建js文件，导入路由器并使用。
```javascript
const Koa = require('koa')
const home = require('./router/home')

const app = new Koa()
// 注册路由
app.use(home.routes())
home.allowedMethods()


app.listen(3000, () => {
    console.log('server is running on port 3000');
})
```
#### koa-log4：将日志保存到硬盘
需要创建logger文件夹，在logger文件夹下创建logs文件夹和index.js文件，index.js文件内容如下：
```javascript
const path = require('path')
const log4js = require('koa-log4')

log4js.configure({
    appenders: {
        //   访问级别
        access: {
            type: 'dateFile',
            // 生成文件的规则
            pattern: '-yyyy-MM-dd.log',
            // 文件名始终以日期区分
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            // 生成文件路径和文件名
            filename: path.join(__dirname, 'logs', 'access')
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            filename: path.join(__dirname, 'logs', 'application')
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' },
        application: { appenders: ['application'], level: 'WARN' }
    }
})

// // 记录所有访问级别的日志
// exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access'))
// // 记录所有应用级别的日志
// exports.logger = log4js.getLogger('application')

module.exports = {
    // 记录所有访问级别的日志
    accessLogger: () => log4js.koaLogger(log4js.getLogger('access')),
    // 记录所有应用级别的日志
    logger: log4js.getLogger('application')
}
```
### jsdoc：用于 JavaScript 的API文档生成器
安装：`npm install jsdoc`<br />js文件内需要写有规整的注释，vscode内输入 `/**`会自动触发语法提示。<br />生成文档：`npx jsdoc .\test.js(被生成文档的文件名)`
### package.json中配置项目启动命令
```json
"scripts": {
        "start": "node index.js"	// 冒号前面是自己起的名字，后面是实际执行的代码
    }
```
配置好后，在项目根目录打开终端输入：`npm run start`即可启动项目。(名字叫start时可以用npm start启动，但是叫其他名字时，如dev，必须用npm run dev才能启动项目)
### ESLint：代码检查工具

1. 安装eslint，终端执行：
```latex
npm install eslint --save-dev
```

2.  （如果已经有package.json则跳过此步骤）初始化package.json：`npm init -y` 
3.  初始化ESLint：`st --init` 此时命令行会出现一些配置选项，比如是否使用了ts语言等，按实际情况选择即可。 
4.  此时项目目录下会出现.eslintrc.js文件，在此文件中配置eslint的代码检查规则。 
```javascript
"rules": {
// 不使用分号
'semi': ['error', 'never'],
// 字符串始终用单引号
'quotes': [2, 'single'],
'no-use-before-define': 0,
   }
```

5.  vscode settings.json文件设置保存时自动启用eslint格式化代码。 
```json
"editor.codeActionsOnSave": {
"source.organizeImports": true,
"source.fixAll.eslint": true// eslint保存时自动格式化代码
   },
```
#### 设置ESLint的不进行检查的文件
在项目根目录创建一个 .eslintignore 文件忽略特定的文件和目录，.eslintignore是纯文本文件，每一行都表明哪些路径应该被忽略检测。
```
// 忽略某个文件夹
folderName/

// 忽略某个文件
fileName.js
```
#### ESLint的常用规则
```javascript
"rules": {
// 不使用分号
'semi': ['error', 'never'],
// 字符串始终用单引号
'quotes': [2, 'single'],
'no-use-before-define': 0,
}
```
### mock数据：mockjs
安装：`npm install mockjs --save`
> 官方文档：[https://github.com/nuysoft/Mock/wiki/Syntax-Specification](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

使用Mock.mock()生成数据，数据的样式参照官网写即可。
```javascript
import Mock from 'mockjs'
// 生成mock数据
let list = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'title|+1': 'sfd',
    }]
})
```

## 语法等
### 数值相关api使用
```javascript
Math.min(1,2,3,4)  // 结果是1，取最小值，如果是数组要结构：Math.min(...arr)
Math.floor(1.3)		 // 结果是1，向下取整
Math.ceil(1.3)		 // 结果是2，向上取整
Math.round(1.3)		 // 结果是1，四舍五入取整。
parseInt('30', 10) // 结果是数值30，将字符串转换为数字，后面的10标识转换的进制，加上好，安全。
parseInt(30.1, 10) // 结果是数值30，舍弃小数点后数值，取整。

```
### 根据屏幕宽度计算根元素font-size的函数
```javascript
	(function () {
            const computed = () => {
                let html = document.documentElement,
                    deviceW = html.clientWidth,
                    designW = 375
                // if (deviceW >= designW) {
                //   html.style.fontSize = "100px";
                //   return;
                // }
                let ratio = (deviceW * 100) / designW
                html.style.fontSize = ratio + 'px'
            }
            computed()
            window.addEventListener('resize', computed)
        })()
```
### 获取URL中的查询参数window.location.search
`window.location` 是 JavaScript 中的一个对象，用于获取和操作当前页面的 URL 信息，`window.location.search`：获取当前页面 URL 中的查询参数部分（即问号后面的部分）。<br />但是获取到的参数中的部分字符可能是被转译后的，所以可以用 `decodeURIComponent`方法对获取到的参数进行解码<br />注：解码后的参数仍然可能包含我们不需要的字符，可以用正则去掉。
### 获取url中的查询字符串参数：
```javascript
const queryParams = decodeURIComponent(window.location.search)  // 解码，数据类型为字符串
	.slice(1)   // 去掉问号
	.split("&") // 切分出每个参数，保存为数组
	.map((item) => {	// 	切分出参数的key，value，结构为：[[key1,value1],[key2,value2]]
		item = item.split("=");
		return item;	
	});
const params = Object.fromEntries(queryParams); // 转换成对象
```
红宝书给的示例代码：
```javascript
let getQueryStringArgs = function () {
    // 取得没有开头问号的查询字符串
    let qs = location.search.length > 0 ? location.search.substring(1) : "";
    // 保存数据的对象
    let args = {};
    // 把每个参数添加到 args 对象
    for (let item of qs.split("&").map(kv => kv.split("="))) {
        const name = decodeURIComponent(item[0]);
        const value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}
const params = getQueryStringArgs()
```
### 使用fromCharCode()函数获得26个英文字母
```javascript
const codeArr = []
for (let i = 65; i < 91; i++) {
  codeArr[i] = String.fromCharCode(i)
}
console.log(codeArr) // A，B，C ... X，Y，Z
```
### 获取year-month-day形式的字符串
```javascript
// 获取year-month-day形式的字符串
getFormatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的，所以需要加1
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}
const today = new Date();
const formattedDate = getFormatDate(today);
```
### 阻止冒泡事件，内外两层div都有点击事件，设置点击内层元素时不触发外层元素的点击事件
```javascript
// 内层点击事件，设置点击内层元素时不触发外层元素的点击事件
handleRewardClick(e) {
    e.stopPropagation(); // 阻止事件冒泡
    e.preventDefault(); // 阻止默认行为
    // 下面可以写内层点击事件的具体内容
}
<View className="job-item" onClick={() => this.jumpToJob(item)}>	// 外层点击事件
    <View className="reward-contain" onClick={(e) => this.handleRewardClick(e)}></View>	  // 内层点击事件
</View>
```
### JSON.stringify()和JSON.parse()
JSON.stringify()：将js对象转换为JSON字符串
```javascript
const person = {
    name: 'yi'
};
console.log(person);    // { name: 'yi' }
const personJson = JSON.stringify(person);
console.log(personJson);    // '{"name":"yi"}'
```
JSON.parse()：将JSON字符串转换为js对象
```javascript
const person = {
    name: 'yi'
};
console.log(person);    // { name: 'yi' }
const personJson = JSON.stringify(person);
console.log(personJson);    // '{"name":"yi"}'
const personParse = JSON.parse(personJson)
console.log(personParse);   // { name: 'yi' }
```
### 创建多维数组
```javascript
const arr = Array.from({ length: 3 }, () => new Array(4).fill(1))
```
Array.from() 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
### 多维数组深拷贝
> 参考：
> [https://juejin.cn/post/6844903791322464264](https://juejin.cn/post/6844903791322464264)

```javascript
const newArr = JSON.parse(JSON.stringify(arr1))	// 注：arr1中如果存在undefined，则undefined会被删除
```
### 唯一索引：map等遍历数组时添加的唯一索引
```javascript
keyExtractor={(item, index) => item.id || index}  // 添加唯一索引，（item.id不存在的话则用index）
```
### 清空表单信息：reset()
```javascript
const info = document.querySelector('.info')  // 获取表达元素
info.reset())		// 重置表单内信息为默认状态
```
### 强制转换为数值类型
变量前加上加号(+)
```javascript
let a = '1'
console.log(+a)	// 1(数字1)
let b = 'hello'
console.log(+b)  // NaN，但+b类型也是number
```
### 创建二维全0数组
```javascript
let arr = new Array(5).fill(0).map(() =>new Array(5).fill(0))    // 二维数组
```
### 三元运算符
条件 ？ 条件成立执行 ： 条件不成立执行
### 空值合并运算符：??
当左侧的操作数为 `[null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/null)` 或者 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)` 时，返回其右侧操作数，否则返回左侧操作数。
```javascript
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```
### 可选链运算符：?.
> 参考：[https://juejin.cn/post/7083691597874855966](https://juejin.cn/post/7083691597874855966)

当?左侧属性不存在(`[null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/null)` 或者 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`) 的情况下不会引起错误，而是返回 `undefined`
```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined
```
### 箭头函数

- 箭头函数只有一个形参时可以省略圆括号 `()`
- 箭头函数函数体只有一行代码时可以省略花括号 `{}`
- 只有一行代码的时候，可以省略{}，且会将此行代码执行结果自动 `return`
- `return`后有多行代码时，需要使用 `()`括起来，即 `return(多行代码)`
```javascript
	// 2. 只有一个形参的时候，可以省略小括号
        const fn2 = x => {
            console.log(x)
        }
        fn2(1)
        // // 3. 只有一行代码的时候，我们可以省略大括号{}
        const fn3 = x => console.log(x)
        fn3(1)
        // 4. 只有一行代码的时候，可以省略{}，且会将此行代码执行结果自动return
        const fn4 = x => x + x
        console.log(fn4(1))
```
### this指向问题：call，apply，bind
```javascript
let obj1 = {
    name: 'obj1',
    getName() {
        console.log(this.name);
    }
}
let obj2 = {
    name: 'obj2',
    getName() {
        console.log(this.name);
    }
}
obj1.getName()  // obj1
obj1.getName.call(obj2)     // obj2
obj1.getName.apply(obj2)    // obj2
obj1.getName.bind(obj2)()   // obj2
```
call：改变this执行，并自动执行函数<br />apply：改变this执行，并自动执行函数<br />bind：改变this执行，需手动加小括号执行函数
### canvas画线部分线条变粗问题
要绘制路径，必须首先调用 `beginPath()` 方法以表示要开始绘制新路径，否则前面画过的线可能会被重新画一遍
```javascript
        for (let i = 1; i < this.lines; i++) {
            // 画横线
            this.ctx.beginPath()    // 开始一条路径，这行代码一定要加，不然会出现部分线被反复绘制变粗的问题
            this.ctx.moveTo(this.boardSize, this.boardSize * i)    // 画笔移动到x轴最左端
            this.ctx.lineTo(this.checkerboardSize - this.boardSize, this.boardSize * i)  // 画笔向x轴最右端画线
            this.ctx.stroke()   // 进行绘制
            // 画竖线
            this.ctx.beginPath()
            this.ctx.moveTo(this.boardSize * i, this.boardSize)
            this.ctx.lineTo(this.boardSize * i, this.checkerboardSize - this.boardSize)
            this.ctx.stroke()
        }
```
### 监听窗口变化：window.addEventListener('resize',)
### 短路效应：&&和||
JavaScript 中的逻辑与、逻辑或具有短路性。

-  `&&` 的短路性：前一个值为假，则整体为假，就不去计算后一个值了，直接返回前一个值。<br />另外，当前一个值为真时，真假由后一个决定，因此返回后一个值。 
-  `||` 的短路性：前一个值为真，则整体为真，就不去计算后一个值了，直接返回前一个值。<br />另外，当前一个值为假时，真假由后一个决定，因此返回后一个值； 

例：<br />下面代码从goInfo对象中结构出newTrafficInfo等值，如果goInfo为undefined的话，对undefined进行解构会报错，所以通过`goInfo || {}`进行兜底，当goInfo为假时，对{}进行解构，此时newTrafficInfo对{}结构结果为undefined，但是不会报错。
> 注：貌似使用??是更好的方式

```javascript
const { newTrafficInfo, arrCity = '', depCity = '', transCity = '' } = goInfo || {};
```
### 空值合并运算符（??）
空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
> 与[逻辑或运算符（||）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)不同，逻辑或运算符会在左侧操作数为[假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时

### 使用void 0代替undefined
> [https://juejin.cn/post/7029835437329874957](https://juejin.cn/post/7029835437329874957)
> [https://blog.csdn.net/weixin_45709829/article/details/123795909](https://blog.csdn.net/weixin_45709829/article/details/123795909)

原因是在局部作用域中，undefined是可以被重写的：
```javascript
const func = () => {
  let undefined = 10;
  console.log(undefined);
}
func()	// 10
```
### 窗口适配移动端和web端
使用rem+媒体查询。实现使用媒体查询前后丝滑过度，需要设定媒体查询的css样式和达到媒体查询临界值时的样式一致。
### 和=相关的判断问题
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

如果对象内没有重写toString()方法，则对象调用toString()方法后会返回'[object Object]'字符串。<br />字符串内如果不是全部是数字，则转数字的结果为NaN。<br />例子：
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
### jsonp跨域原理及实现
同源：两个页面的协议，域名和端口都相同，则表示两个页面具有相同的源。<br />同源策略：浏览器提供的一个安全功能。同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。通俗的理解：浏览器规定，A 网站的JavaScript不允许和非同源的网站C之间进行资源的交互，例如：

- 无法读取非同源网页的 `Cookie`、`LocalStorage` 和 `IndexedDB`
- 无法接触非同源网页的 `DOM`
- 无法向非同源地址发送 `AJAX` 请求

跨域：不是同源的请求就是跨域，浏览器的同源策略不允许非同源的URL之间进行资源的交互。<br />jsonp跨域原理：script脚本没有跨域限制，script标签没有同源策略的限制且动态插入到 `DOM` 中的 `script` 脚本可以立即得到执行，所以可以通过script发送请求实现跨域。<br />代码实现：<br />前端：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="jsonp"> </div>
    <script>
        // 定义回调函数hello
        function hello(res) {
            alert('你好:' + res.data)
        }
        //  定义jsonp跨域请求函数
        function jsonp(req) {
            const script = document.createElement('script') // 创建script标签
            script.src = req.url + '?callback=' + req.callback   // 构造请求url并赋值给script标签的src属性
            document.querySelector('.jsonp').appendChild(script)    // 把构造的script标签插入到html中
        }
        // 调用jsonp函数
        jsonp({
            url: 'http://127.0.0.1/',
            callback: 'hello'
        })
    </script>
</body>

</html>
```
后端：
```javascript
// 1. 导入模块
const express = require('express')

// 2. 创建web服务器
const app = express()

app.get('/', function (req, res) {
    const sql = { 'data': 'yi' }    // 定义数据
    const param = req.query.callback    // 获取回调函数名称：hello
    const func_str = param + '(' + JSON.stringify(sql) + ')'     // 构造完整回调函数：hello({"data":"yi"})。类型其实是string。
    res.send(func_str)
})

// 3. 启动web服务器
app.listen(80, () => {
    console.log('express服务器启动, 运行在 http://127.0.0.1')
})
```
