### fetch使用
> 参考：
> 阮一峰的写的贼好：[https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

`**fetch()**` 方法用于发起获取资源的请求。它返回一个 Promise对象（所以fetch方法的返回值也有.then()方法），这个promise对象会在请求响应后被 resolve，并传回 `[Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)` 对象：[Response对象API](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)。
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);	// fetchPromise是一个Promise对象，

console.log(fetchPromise);	// Promise { <state>: "pending" }，pending状态表示请求操作仍在进行。

fetchPromise.then((response) => {
  console.log(`已收到响应：${response.status}`);
});
fetchPromise.catch((err)=>{
  console.log('err:',err)
})

console.log("已发送请求……");
```

### Response对象
`fetch()`请求成功以后，得到的是一个 [Response 对象](https://developer.mozilla.org/en-US/docs/Web/API/Response)。它对应服务器的 HTTP 回应
#### 判断fetch请求是否成功
`fetch()`发出请求以后，只有网络错误，或者无法连接时，`fetch()`才会报错，其他情况都不会报错，而是认为请求成功。这就是说，即使服务器返回的状态码是 4xx 或 5xx，`fetch()`也不会报错（即 Promise 不会变为 `rejected`状态）。只有通过 `Response.status`属性，得到 HTTP 回应的真实状态码，或者判断 `response.ok`是否为 `true`，才能判断请求是否成功。<br />举例：<br />方法一：
```javascript
async function fetchText() {
  let response = await fetch('/readme.txt');
  if (response.status >= 200 && response.status < 300) {
    return await response.text();
  } else {
    throw new Error(response.statusText);
  }
}
```
方法二：
```javascript
if (response.ok) {
  // 请求成功
} else {
  // 请求失败
}
```
#### 读取返回的数据
`Response`对象根据服务器返回的不同类型的数据，提供了不同的读取方法。

- `response.text()`：得到文本字符串。
- `response.json()`：得到 JSON 对象。
- `response.blob()`：得到二进制 Blob 对象。
- `response.formData()`：得到 FormData 表单对象。
- `response.arrayBuffer()`：得到二进制 ArrayBuffer 对象。

上面5个读取方法都是异步的，返回的都是 Promise 对象。必须等到异步操作结束，才能得到服务器返回的完整数据。
### fetct的第二个参数：定制 HTTP 请求
`fetch()`的第一个参数是 URL，还可以接受第二个参数，作为配置对象，定制发出的 HTTP 请求：`fetch(url, optionObj)`
```javascript
url = ''
const response = await fetch(url, {
  method: 'POST',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: 'foo=bar&lorem=ipsum',
});

const json = await response.json();
```
### fetch配置对象的完整API
```javascript
const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors", 
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined
});
```
