### 父组件中设置opacity样式属性后，会使得其子组件的opacity值和父组件一致，即使子组件并没有设置opacity属性。
这是因为 CSS 中 opacity 属性应用于元素及其内容，会影响整个元素的可见度。当设置 TouchableOpacity 的透明度为 0.6 时，它会使容器的背景色和容器内的 Icon 都变得半透明，即它们的可见度都会降低。
```python
<TouchableOpacity style={{opacity: 0.4}} onPress={this.closeView}>
    <Icon name={'otaClose'} color={'#FFFFFF'} style={{ fontSize: 11, opacity: 0.6 }} />
</TouchableOpacity>
```
如果需要让 TouchableOpacity 的背景色半透明而保持 Icon 的不透明度，可以使用 rgba 格式的颜色值或者4位的16进制格式，rgba会设置父组件的背景色的透明度而不会影响其中的子组件。<br />`rgba(28, 32, 63, 0.95)`和`#1c203ff2`（4位16进制格式，最后1位是透明度，将透明度从0到1映射到00到ff）是等价的。
```python
<TouchableOpacity style={{opacity: 'rgba(0, 0, 0, 0.4)'}} onPress={this.closeView}>
    <Icon name={'otaClose'} color={'#FFFFFF'} style={{ fontSize: 11, opacity: 0.6 }} />
</TouchableOpacity>
```

### 遍历数组时，key的设置:`key={'outBoardTitel' + index}`,自己取个名字加上索引。
```javascript
flightAdditionInfos.map((item: any, index: number) => {
  return (
      <View
          key={'outBoardTitel' + index}
      >
    	</View>
)}
```
