> 参考：
> [https://create-react-app.dev/docs/proxying-api-requests-in-development](https://create-react-app.dev/docs/proxying-api-requests-in-development)

### 安装`http-proxy-middleware`库
```javascript
npm install --save-dev http-proxy-middleware
```
### 在src目录下新建setupProxy.js文件
```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',     // 发送到/api的请求，会转发到target后的域名上
        createProxyMiddleware({
            target: 'https://i.maoyan.com', // get请求后的接口不需要加域名了，把域名放在这里
            changeOrigin: true,
        })
    );
};
```
### 实际请求的接口去掉协议和域名
```javascript
useEffect(() => {
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then((res) => {
        console.log(res);
    })
}, [])
```

