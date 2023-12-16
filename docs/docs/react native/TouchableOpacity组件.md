RN中的点击事件组件，想要某个组件可以添加点击事件，需要将那个组件被TouchableOpacity组件包裹，TouchableOpacity中可正常设置样式。

```javascript
<TouchableOpacity
    activeOpacity={1}
    onPress={() => this.openLabelLayer(listLabel)}
    hitSlop={{ top: 15, left: 5, right: 5, bottom: 15 }}
>
```
### TouchableOpacity中有一些常用的属性
#### onPress：点击事件函数在这块声明。
#### activeOpacity：点击时组件的透明度变化，默认值为0.2，设置为1时，点击时组件的透明度不变。
#### hitSlop：扩大该组件的实际可点击区域，可在上下左右4个方向扩大；该属性不会影响组件的实际大小。

