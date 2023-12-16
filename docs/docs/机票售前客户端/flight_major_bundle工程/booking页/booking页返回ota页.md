## 返回拦截逻辑
booking页返回ota页做了拦截操作，可拦截adr和ios的点击返回按钮返回、adr左滑返回，但是拦截不了ios左滑返回(谁都拦不了)。返回操作实际是通过执行`Ext.close()`方法实现的，所以拦截返回的逻辑是在执行Ext.close()前做些条件判断是否执行Ext.close()进行返回操作，不执行就是拦截了呗。
### 返回时实际调用的方法
#### 返回按钮（adr、ios都一样）：NavigationBar中的onBackPress()方法，然后调用OrderFillStore中的onBackPressed()方法。
#### adr左滑：OrderFillView中的onBackPressed()方法，然后调用OrderFillStore中的onBackPressed()方法。
QView默认支持了安卓物理键返回的监听，这个onBackPressed()方法使用时类似生命周期函数，只要声明了，在执行到对应操作时就会默认调用。
#### 总结：上述的返回方式，最后调用的都是RollbackModel中的requestRollback()方法，用于判断是否真正阻断用户返回。
### 定义拦截逻辑的方法RollbackModel中的requestRollback()
在这个方法中定义了拦截的一些逻辑。执行返回操作就会调用这个方法，判断是否需要进行拦截。
#### 首先判断是否请求`f_flight_roll_back_new`接口获取弹窗数据
请求接口的前置条件
```tsx
!isLogin ||		// 已登陆
!bookingInValidTime ||		// 还在booking有效期内，过期需要刷新booking页
ArrayUtils.isEmpty(addedPassengers) ||		// 勾选了乘机人
!rollBackSwitch ||		// 
tp <= rollBackWaitTime ||		// 在booking页停留了指定时间
notBuyInsAndX ||
showRePushQuote ||
this.viaRollbackToExtraCarPageThenBack
```
#### 其次判断`f_flight_roll_back_new`弹窗接口是否返回了弹窗数据
返回时会通过RollbackCmp（这个Cmp是定义在module_search库中的）中的fetchRollback()方法请求：`f_flight_roll_back_new`接口，返回了弹窗信息则拦截，否则不拦截。
### 校验当天内是否展示过弹窗（在OrderFillStore中定义的方法和属性）
通过`todayIsShowDetainCouponAlert`属性做判断，为`true`表示展示过了。通过`getLastShowDetainCouponTime()`方法判断今天是否展示过弹窗，从而改变`todayIsShowDetainCouponAlert`属性的值。在初始化OrderFillStore时去调用`getLastShowDetainCouponTime()`方法。

