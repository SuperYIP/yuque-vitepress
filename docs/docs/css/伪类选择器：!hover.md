### 伪类选择器：`:hover`鼠标悬停
鼠标悬停在a标签上时，改变其颜色：
```css
a {
  color: red;
}

a:hover {
  color: green;
}
```

鼠标悬停在 `.reward-text`元素时，给其子标签 `.reward-text-tip`设置属性
> 注：想要通过:hover伪类选择器实现鼠标悬停在A标签时给B标签设置数据，B标签必须是A标签的**子元素**

```css
.reward-text:hover .reward-text-tip {
                display: block;
            }
```

使用上述方式，可以实现鼠标悬停与离开 `.reward-text`元素时，其子标签 `.reward-text-tip`显示或隐藏，示例代码如下：
```javascript
<View className="reward-text">奖
    <View className="reward-text-tip">分享转发带 “奖”标识的岗位，被分享人点开岗位后<br />分享人可获得积分奖励。奖励随机，惊喜多多。</View>
</View>
```
```css
// .reward-text和.reward-text-tip的基础样式（reward-text-tip是个气泡框），scss样式
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
// 伪类选择器:hover控制鼠标悬停与离开时的样式
.reward-text:hover .reward-text-tip {
                display: block;
}

.reward-text-tip {
                display: none;
}
```
