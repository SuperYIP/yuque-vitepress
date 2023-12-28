

## ScrollView组件的一些常用方法
通过ref引用到ScrollView组件，从而调用ScrollView组件中的方法。
### 移动到指定位置
#### scrollTo()：scrollTo({ x: 0, y: 0, animated: true })
这里的x和y是ScrollView组件左边和上边距离屏幕左边和上边的距离。比如y：100表示ScrollView组件向上移动了100像素。
#### **scrollToEnd()：滑动到页面底部。**
#### 举例
```javascript
import React, { useRef } from 'react';
import { ScrollView, Button, View, Text, StyleSheet } from 'react-native';

const ScrollVerificationComponent = () => {
  const scrollViewRef = useRef(null);

  const scrollTo = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 100, animated: true });
  };

  const scrollToDown = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: -100, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        <View style={styles.content}>
          <Text>顶部</Text>
          <View style={{width:100, height: 600, backgroundColor:'red'}}></View>
          <View style={{width:100, height: 200, backgroundColor:'green'}}></View>
          <Text>底部</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Scroll to" onPress={scrollTo} />
        <Button title="Scroll to" onPress={scrollToDown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  content: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ScrollVerificationComponent;
```
