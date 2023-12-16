> 参考：
> [https://juejin.cn/post/7021426688634388487](https://juejin.cn/post/7021426688634388487)

气泡框上的三角形，就是一个三角形，使用绝对定位`right:100%`定位到气泡框的最左侧
```jsx
<View className="reward-text">奖
  <View className="reward-text-tip">分享转发带 “奖”标识的岗位，被分享人点开岗位后<br />分享人可获得积分奖励。奖励随机，惊喜多多。</View>
</View>
```
```css
.reward-text {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  font-size: 0.1rem;
  height: 0.17rem;
  width: 0.17rem;
  border: 0.01rem solid #d9d9d9;
  border-radius: 0.1rem;
  margin-right: 0.05rem;
  position: relative;

  // 点击“奖”字后的提示气泡框
  .reward-text-tip {
    position: absolute;
    left: 0.22rem;
    top: -0.2rem;
    background-color: #ffcc00; // 气泡背景色
    color: #ffffff; // 文字颜色
    border-radius: 0.04rem;
    box-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.2);
    white-space: nowrap;
  }

  // 气泡框的小箭头
  .reward-text-tip::before {
    content: " ";
    position: absolute;
    right: 100%;	
    top: 40%;
    border: 0.07rem solid transparent;
    border-right-color: #ffcc00;
  }
}
```
