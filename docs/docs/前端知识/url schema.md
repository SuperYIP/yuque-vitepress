> 参考：[https://juejin.cn/post/7219304050667634743](https://juejin.cn/post/7219304050667634743)
> [https://sspai.com/post/31500#!](https://sspai.com/post/31500#!)
> [https://zhuanlan.zhihu.com/p/418940774](https://zhuanlan.zhihu.com/p/418940774)

URL Scheme 是一种在移动设备上通过链接或按钮调用应用程序的机制。它允许开发者在应用程序内部注册特殊的 URL，当用户点击带有该 URL 的链接或按钮时，系统会自动打开相应的应用程序，并执行相应的操作。<br />URL Scheme 可以用于打开应用程序、执行操作、激活特定页面等。
## 通过schema打开一个页面
通过schema打开页面是native侧提供的能力，通过在schema中指定参数，在native侧解析，即可实现打开hy页面、rn页面或是native页面，同时可以在打开页面时通过schema带过去参数，也就是在list跳转ota时可以把航班信息带过去，ota接口数据还没回来时，ota页面已经可以先渲染出list页带过来的航班信息了。
> QRN打开schema的api：[https://ued.qunar.com/qrn/ext/router/router-bridge-api.html](https://ued.qunar.com/qrn/ext/router/router-bridge-api.html)

### native页面schema：qunarphone://flight/
```javascript
// home_rn页面打开日历组件的schema，可以有回调方法，也就是关闭日历组件时调用，可以传回来一些数据。
Ext.Router.Bridge.sendScheme(schemeParam, (res: Result) => {
    if (res && res.data && res.data.date) {
        console.log('haidi res', res)
        that.updateCustomDate(res.data.date);
    }
});
```
### rn页面schema：qunarphone://react/open?
> 参考：[https://ued.qunar.com/qrn/ext/router/router-rn-scheme.html](https://ued.qunar.com/qrn/ext/router/router-rn-scheme.html)

打开rn页面的方法，改到Ext.open()中了，执行要打开的页面名即可，本质上也是schema。<br />在flight_major_bundle工程的根组件中通过Ext.registerView()方法注册各schema对应的页面。注册好之后，当通过schema访问该页面时就会去加载此页面：比如日历组件、ota页面等，就像打开一个url是一样的，当访问到对应url时，去加载url对应的页面。
```javascript
// 在代码中通过Ext.registerView()方法进行注册，当收到要打开OTAView页面的指令时，加载路径./views/ota中的组件
Ext.registerView('OTAView', () => require('./views/ota'));
```
```javascript
// list页点击航班后跳转到ota页面的方法，通过Ext.open()方法打开指定页面
/**
 * 跳转到ota页，线上ios使用的是native scheme跳转，现换成Ext，注意测试
 * @param args
 */
export function openOTAPage(args: { otaReqParam: any; tid?: string; context?: SingleSearchStore; useCache?: boolean }) {
		const { otaReqParam, tid, context, useCache } = args;
    const { flightKey, control } = otaReqParam || {};
    const param = {
        reqParam: {
            ...otaReqParam,
            // 1、单程列表,adr特有
            localFromSource: 1,
            tid
        },
        beginTime: Date.now().toString(),
        otaRefactorAbtest: context?.singleAbtestMap?.domestic_ota_ts,
        control,
        useCache
    };

    // @ts-ignore
    if (DeviceInfo.isWeb) {
        // @ts-ignore
        GodEye && GodEye.log({ r: 'list_oneway_line', flight_num: flightKey });
    }
    // @ts-ignore
    if (!DeviceInfo.isNotRn) {
        Ext.open('OTAView:new', {
            param
        });
    }
}
```
### hy页面schema：qunarphone:://hy?
举例：`qunariphone://hy?url=http%3A%2F%2Fwyy.qunar.com%2Fqreact-test-hy%2Findex.html&loadview=auto`<br />打开hy页面的常用方法被封装到了openURL函数中，通过Ext.Router.Bridge.sendScheme打开url：
```javascript
export function openURL(url: string, option?: Option) {
    let { type = '', loadingRatio = '', animate = '',refresh = false, returnCode = '', data, callback, navigation, showLoading } = option || {};
    let _url = '';

    if (!url) {
        console.warn('url为空，不能打开');
        return;
    }

    if (url.match(/^(http|https):\/\//)) {
        _url =
            DeviceInfo.scheme +
            '://hy?' +
            (type ? 'type=' + type + '&' : '') +
            (loadingRatio ? 'loadingRatio=' + loadingRatio + '&' : '') +
            (animate ? 'animate=' + animate + '&' : '') +
            (showLoading ? 'showLoading=' + showLoading + '&' : '') +
            'url=' +
            encodeURIComponent(url) +
            (navigation ? '&navigation=' + encodeURI(JSON.stringify(navigation)) : '');
    } else if (url.match(/^\w+:\/\//)) {
        // scheme
        _url = url;
    } else {
        _url = DeviceInfo.scheme + '://' + url;
    }

    console.log('open scheme url::', _url, data);

    if (_url) {
        QAV.log('flight_major_bundle', 'InopenURL:' + _url);
    }
  	// 打开schema
    Ext.Router.Bridge.sendScheme(
        {
            url: _url,
            data
        },
        (res) => {
            // 发送后的回调
            console.info('scheme callback', {
                // 是否成功
                ret: true,
                // 数据
                data: res
            });

            typeof callback === 'function' && callback(res);
        }
    );
}
```
### native中是如何嵌入rn、hy页面的
native中的一个页面是一个VCController，这个VCController中想要加载native页面、rn页面、hy页面都可以。<br />rn中一个页面是一个QView：QView相对于其他component的区别就是QView中有一些额外的生命周期函数，比如：onPageActived（页面活跃）、onPageDeactived（页面不活跃）等。<br />hy页面通常放到webView中。<br />所以打开一个新的rn页面，可以是一个VCController中放一个QView；打开一个新的hy页面可以是一个VCController中放一个webView。
### 关闭一个页面时向打开它的页面传递数据
例：由list页进入ota页后，从ota返回list时，向list页传递数据。在list页打开一个webView，关闭webView时向list页传递数据。<br />可以实现传递数据的方式有三种：

1. 发消息：
```javascript
export function noticeWithData(param, successCallback, delay = 600) {
    QSendNotification.sendNotification({
        name: KFCalendarCloseNotification,
        data: {
            param: Object.assign({}, param)
        }
    });
}
```

2. 传一个回调函数到打开的那个页面，回调函数中会对list页中的某个数据赋值，打开的页面关闭后执行回调函数，list页中的对应数据会变为赋值后的数据。
### 安卓机跳转链接为pdf不是预览而是下载问题解决
当通过schema跳转的链接为pdf时，比如：[http://f-poseidon-microcp.qunarzz.com/f_poseidon_micro_0030/2024000002.pdf](http://f-poseidon-microcp.qunarzz.com/f_poseidon_micro_0030/2024000002.pdf)，ios手机打开没有问题，是直接跳到预览界面，但是安卓手机打开会跳转到下载页面，而不是预览。解决方法是将pdf文件转成html文件，网上找个工具（[https://xodo.com/convert-pdf-to-html](https://xodo.com/convert-pdf-to-html)）（[https://convertio.co/zh/download/523e0471e70ea0e02a9385d1ab6c5293d65aec/](https://convertio.co/zh/download/523e0471e70ea0e02a9385d1ab6c5293d65aec/)）就可以一键转换，然后由cms把这个网页发布（[https://m.flight.qunar.com/hd/active/static_page?cid=25480](https://m.flight.qunar.com/hd/active/static_page?cid=25480)），跳转链接换成cms发布的即可。<br />或者也可以把pdf转成图片，由cms做一个h5页面，把图片引入。<br />尝试过由cms做一个h5页面，通过iframe标签引入pdf文件，但是安卓机点击仍然是下载而不是预览。
