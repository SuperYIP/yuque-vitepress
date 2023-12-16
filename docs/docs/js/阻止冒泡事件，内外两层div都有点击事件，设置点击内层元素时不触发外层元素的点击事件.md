### 阻止冒泡事件，内外两层div都有点击事件，设置点击内层元素时不触发外层元素的点击事件
```javascript
// 内层点击事件，设置点击内层元素时不触发外层元素的点击事件
handleRewardClick(e) {
e.stopPropagation(); // 阻止事件冒泡
e.preventDefault(); // 阻止默认行为
// 下面可以写内层点击事件的具体内容
}
<View className="job-item" onClick={() => this.jumpToJob(item)}> // 外层点击事件
<View className="reward-contain" onClick={(e) => this.handleRewardClick(e)}></View> // 内层点击事件
</View>
```
