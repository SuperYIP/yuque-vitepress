### Promise基本概念
> 参考：[https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
> [https://juejin.cn/post/7011755708496478215](https://juejin.cn/post/7011755708496478215)

通俗地讲，Promise 就像一个容器，里面存放着未来才会结束，返回结果的容器，返回的结果只需要在出口处接收就好了(使用.then()方法获取返回的结果)。<br />异步方法不会立即返回最终值，而是返回一个  _promise_ ，以便在将来的某个时间点提供该值。
#### 新建Promise对象时，需要传入一个回调函数：`const promise = newPromise((resolve,reject)=>{})`

- 这个回调函数会被立刻执行，并传入两个回调参数 `resolve`、`reject`
- 当调用 `resolve`回调函数时，会执行 Promise 对象的 `.then`方法传入的回调函数
- 当调用 `reject`回调函数时，会执行 Promise 对象的 `.catch`方法传入的回调函数

一个 `Promise` 必然处于以下几种状态之一：

- _待定（pending）_ ：初始状态，既没有被兑现，也没有被拒绝。执行了回调函数后的，即处于该状态。pending状态表示请求操作仍在进行，。
- _已兑现（fulfilled）_ ：意味着操作成功完成。调用 `resolve()`后，Promise 的状态更改为 fullfilled，且无法再次更改。
- _已拒绝（rejected）_ ：意味着操作失败。调用 `reject()`后，Promise 的状态更改为 rejected，且无法再次更改。

常用方式：
```javascript
const p = new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve('123')	// resolve表示请求成功会执行的函数，这里是手动设置的，通常用fetch做数据请求时，请求成功即默认调用了resolve函数
 },1000)
})
```
### Promise对象的两个方法： `.then()`和 `.catch()`
Promise对象有两个方法 `.then()`和 `.catch()`。请求操作成功，即执行了 `resolve()`方法时，会执行 `.then()`方法；请求操作失败，即执行了 `reject()`方法时，会执行 `.catch()`方法。
#### promise.then()方法
`.then()`方法接收的参数是一个函数，函数中携带一个参数，该参数是请求操作成功，即执行 `resolve(res)` 返回的数据，`.then()`方法的返回值同样是一个 `Promise`对象。<br />常用方式：
```javascript
.then(res => {操作res的代码，有return的话，return的是Promise对象})	// res就是请求到的数据对象
```
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise	// Promise对象
  .then((response) => {		// Promise对象调用.then()方法
    return response.json();	// .then()方法返回的也是Promise对象
  })
  .then((json) => {		// 第一个.then()方法返回的Promise对象再次调用.then()方法，参数json传进来的就是第一个.then()方法的返回值
    console.log(json[0].name);
  });
```
上述的链式调用方法与下面的调用方式是一样的：
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const a = fetchPromise.then((response) => {	// .then()方法返回的也是Promise对象，赋值给a变量
    return response.json();
})
a.then((json) => {		// 第一个.then()方法返回的Promise对象再次调用.then()方法，参数json传进来的就是第一个.then()方法的返回值
    console.log(json[0].name);
});
```
#### promise.catch()方法
`.catch()`方法接收的参数是一个函数，函数中携带一个参数，该参数为请求操作失败，即执行 `reject(err)` 返回的数据。<br />常用方式：
```javascript
.catch(err => {操作err的代码，通常是console.log()将错误信息输出})	// err就是请求失败时返回的对象
```
### async和await
上述fetch方法返回的一直是 `Promise`对象，想要看到 `fetch`的返回结果只能在 `.then()`函数中使用 `console.log()`进行打印，而不能将 `fetch`得到的结果保存在变量中，在其他位置继续使用。<br />为了解决上述问题，可以使用async和await关键字。将fetch()方法包裹进一个函数内，使用async关键字声明函数，然后在函数内部使用await关键字声明fetch函数(异步函数，返回Promise的函数)，就可以编写出像同步代码的异步函数。
```javascript
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);	// 手动抛出异常
    }
    // 在这一行之后，我们的函数将等待 `response.json()` 的调用完成
    // `response.json()` 调用将返回 JSON 对象或抛出一个错误
    const json = await response.json();
    console.log(json[0].name)
    return json[0].name
  } catch (error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

const res = await fetchProducts()	// res里保存的是fetch返回的值了，而不再是Promise对象
```
