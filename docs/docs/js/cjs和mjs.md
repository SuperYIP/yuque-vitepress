### Node.js 里可分为  CommonJS 模块和 ECMAScript 模块（ESM）两种不同的模块系统。
CommonJS 模块是 Node.js 最初支持的模块系统，它使用 `require()` 函数来导入模块，使用`module.exports`或 `exports`对象来导出模块。这种模块系统通常只能在 Node.js 环境下使用，并且不允许在浏览器环境中使用。<br />ECMAScript 模块是 JavaScript 的标准模块系统`(.mjs后缀)`，它使用` import` 和` export`关键字来导入和导出模块。它可以在 Node.js 环境下和现代浏览器环境中使用，具有更好的跨平台兼容性和可移植性。

Node.js 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"use strict"，如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module。
```
{
   "type": "module"
}
```
但是一旦在package.json中进行了设置后，该项目目录里面的 JS 脚本，就被解释为ES6 模块。
```
# 解释成 ES6 模块
$ node my-app.js
```
如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成.cjs。<br />如果package.json中没有type字段，或者type字段为commonjs，则.js脚本会被解释成 CommonJS 模块。
### 总结
.mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。<br />注意，ES6 模块与 CommonJS 模块尽量不要混用。require命令不能加载.mjs文件，会报错，只有import命令才可以加载.mjs文件。反过来，.mjs文件里面也不能使用require命令，必须使用import。
