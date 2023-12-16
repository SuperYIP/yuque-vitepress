> 参考：
> 知乎：[https://zhuanlan.zhihu.com/p/32596406](https://zhuanlan.zhihu.com/p/32596406)
> 官方：[https://reactnative.cn/docs/animations#animated-api](https://reactnative.cn/docs/animations#animated-api)

完整例子：
```javascript
import React, { Component } from 'react';
import {
  View,
  Button,
  Animated,
} from 'react-native';

export default class AnimatedDemo extends Component {
  state = {
    left: new Animated.Value(0),
    fade: new Animated.Value(0),
  };

  startAnimate = () => {
    this.state.left.setValue(0);
    // 只有单个动画
    // Animated.timing(
    //     this.state.left,
    //     {
    //         toValue: 300,
    //         duration: 1000,
    //     },
    // ).start();
    // 多个动画同时执行
    Animated.parallel([
      Animated.timing(this.state.left, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
  // 点击此按钮 执行动画
  <Button
  title="平移"
  onPress={() => {
    this.startAnimate();
  }}
  />
  <Animated.View
  style={{
    width: 50,
    height: 100,
    backgroundColor: 'blue',
    left: this.state.left.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    }),
    opacity: this.state.fade,
  }}></Animated.View>
  </View>
);
}
}
```
### 初始化Animated.Value
例子中在state里初始化了两个动画，Value(0)中的0表示的是动画的起始值，将这个动画用作透明度变化那么0就表示完全透明，将这个动画用作位置移动那么0就表示位置为0。
```javascript
state = {
    left: new Animated.Value(0),
    fade: new Animated.Value(0),
  };
```
### 声明动画执行的时机
例子中是将动画执行的时机写在了一个函数里，当调用这个函数的时候，动画执行。如果想要点击按钮执行动画，就把这个函数绑定到按钮的点击事件上，如果想要在组件挂在后自动执行动画，就把此函数写到`componentDidMount()`函数里。
```javascript
startAnimate = () => {
    // 重置动画初始值
    this.state.left.setValue(0);
    // 只有单个动画
    // Animated.timing(
    //     this.state.left,
    //     {
    //         toValue: 300,
    //         duration: 1000,
    //     },
    // ).start();
    // 多个动画同时执行
    Animated.parallel([
      Animated.timing(this.state.left, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  };
```
### 把动画绑定到元素属性上
需要执行动画的样式属性要写到<Animated.View>(或其他动画组件)组件中，例子中元素距离左侧的距离`left`极为要执行动画的属性，动画执行时，left的值根据动画的执行而改变，所以会出现平移的效果。
```javascript
<Animated.View
style={{
  width: 50,
  height: 100,
  backgroundColor: 'blue',
  left: this.state.left.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  }),
  opacity: this.state.fade,
}}></Animated.View>
</View>
```
### interpolate()：插值方法
插值方法就是对值做转换，动画的初始值通常声明为0:`new Animated.Value(0)`，动画的结束值通常设置为1:`Animated.timing(this.state.left, {toValue: 1, duration: 1000})`（多个动画同时执行时就设置toValue为1，具体的不同动画结束值就用interpolate方法去调），但是很多属性的结束值并不是1（比如位置，通常需要移动像100这个的距离），所以需要用插值方法对值做转换。`inputRange: [0, 1]`表示原本动画的起始和结束值，`outputRange: [0, 300]`表示使用差值方法转换后的动画起始和结束值。
```javascript
<Animated.View
style={{
  width: 50,
  height: 100,
  backgroundColor: 'blue',
  left: this.state.left.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  }),
  opacity: this.state.fade,
}}></Animated.View>
</View>
```
