# LayoutAnimation动画使用
LayoutAnimation 是在布局发生变化时触发动画的接口，这意味着需要通过修改布局（比如修改了组件的style、插入新组件）来触发动画。<br />一个常用的调用此API的办法是调用 LayoutAnimation.configureNext，然后调用setState。
> 参考：
> 别人博客：[https://www.jianshu.com/p/c7151be8d87f](https://www.jianshu.com/p/c7151be8d87f)
> 官方文档：[https://reactnative.cn/docs/layoutanimation](https://reactnative.cn/docs/layoutanimation)

