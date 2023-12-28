## 组件结构
### VendorCardRevison组件
### 退改签信息：NewVendorInfoTagsRevision组件
src/ota/otaPage/views/vendorItem/vendorCardRevision/index.tsx：renderChangesAndRefundsLabels()方法：返回NewVendorInfoTagsRevision组件。
### 退改签浮层：TgqLayer组件
src/ota/otaPage/views/otaPage中的renderNewTgqLayer()返回TgqLayer组件。<br />src/ota/otaPage/views/tgqLayer/tgqLayerBox.tsx：调用GestureFloat组件(在q-design库中)
### 截屏分享功能
#### 获取截屏所需数据
进入ota页时，调用`getScreenShotInfo()`方法，在`getScreenShotInfo()`方法中会调用getScreenShareInfo()方法请求`f_screenshot_action_info`接口获取截屏所需数据，将截屏数据存放到`screenshotShareData`变量中。获取数据后会调用screenShotShare()方法。（上述方法都是在otaStore(src/ota/otaPage/store/index.ts)中的）


## 各流程总结
### 返回
最终调用的是src/ota/otaPage/store/index.ts中的onBackPressed()方法。
#### 左上角导航栏返回

