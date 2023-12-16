> koa源码-github：[https://github.com/michaelliao/learn-javascript/blob/master/samples/node/web/koa/hello-koa/app.js](https://github.com/michaelliao/learn-javascript/blob/master/samples/node/web/koa/hello-koa/app.js)
> koa官网：[https://koa.bootcss.com/](https://koa.bootcss.com/)
> koa视频-b站：[https://www.bilibili.com/video/BV1Vt4y1P7CZ?p=15&spm_id_from=pageDriver&vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8](https://www.bilibili.com/video/BV1Vt4y1P7CZ?p=15&spm_id_from=pageDriver&vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8)

#### 基本使用
```javascript
const Koa = require('koa')
const app = new Koa()
/**
 * ctx - 上下文
 * next - 
 */
app.use(async (ctx, next) => {
    // 给前端响应一个字符串：'你好'
    console.log(1);
    await next()    // 调用下一个中间件，如果不调用await next()则下一个中间件不会被执行。
    console.log(2);
})
app.use(async (ctx, next) => {
    // 给前端响应一个字符串：'你好'
    console.log(3);
    await next()
    console.log(4);
})
console.log(5);

app.listen(3000, () => {
    console.log('start koa');
})
```
执行到await next()后会暂停当前代码执行，去执行下一个中间件的代码，下一个中间件代码执行结束后再返回当前位置继续执行。<br />这段代码的输出为：5 1 3 4 2。然后每次刷新网页会输出1 3 4 2，不会再输出5。
#### koa-logger：处理控制台日志
```javascript
const Koa = require('koa')
const logger = require('koa-logger')

const app = new Koa()

// 在控制台输出日志
app.use(logger())

app.use(async (ctx, next) => {
    ctx.body = 'hi'
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
```
#### koa-onerror：错误处理中间件
```javascript
const Koa = require('koa')
const logger = require('koa-logger')
const onerror = require('koa-onerror')

const app = new Koa()

// 在控制台输出日志
app.use(logger())
// 用来处理错误
onerror(app)
app.use(async (ctx, next) => {
    let err = new Error()
    err.status = 401
    throw err
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
```
#### koa-router：路由中间件
安装：`npm install @koa/router`<br />使用时导入命令：`const Router = require('@koa/router')`

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
使用：
```javascript
const Koa = require('koa')
const onerror = require('koa-onerror')
const { accessLogger, logger } = require('./logger/index')

const app = new Koa()

// 错误处理中间件
onerror(app)
// 持久化日志
app.use(accessLogger())

app.use(async (ctx, next) => {
    ctx.throw(401, '未授权', {
        data: '错误数据'
    })
})

app.on('error', (err) => {
    // 利用logger.error将日志持久化到硬盘
    logger.error(err)
})
app.listen(3000, () => {
    console.log('server is running on port 3000');
})
```
