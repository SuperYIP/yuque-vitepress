### View组件的一些常用属性
#### style中的属性flexWrap: 'wrap'：子元素在父容器不够宽时自动换行。
下例中box在container宽度不足以容纳其时会换行。
```javascript
<View style={styles.container}>
  <View style={styles.box} />
  <View style={styles.box} />
  <View style={styles.box} />
</View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 默认是水平布局，可以根据需要更改为 'column' 进行垂直布局
    flexWrap: 'wrap',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    margin: 5,
  },
  });
```
