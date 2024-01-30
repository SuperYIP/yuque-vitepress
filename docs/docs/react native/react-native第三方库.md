> 掘金：[https://juejin.cn/post/7046016631788535816](https://juejin.cn/post/7046016631788535816)
> github：[https://github.com/jondot/awesome-react-native](https://github.com/jondot/awesome-react-native)

### 渲染服务端下发的html

- react-native-htmlview：[https://www.npmjs.com/package/react-native-htmlview?activeTab=code](https://www.npmjs.com/package/react-native-htmlview?activeTab=code)
- react-native-render-html：[https://github.com/meliorence/react-native-render-html](https://github.com/meliorence/react-native-render-html)

可以设置字体大小，字体颜色等：
```javascript
import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `<p style="font-size: 1.2rem; padding: 0 10px;">
  Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. 
</p>
<p style="color: purple; padding: 0 10px;">
  Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.
</p>`
};

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
      enableExperimentalMarginCollapsing={true}
    />
  );
}
```
