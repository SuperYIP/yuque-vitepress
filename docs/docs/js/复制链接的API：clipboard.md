使用方式如下：
```javascript
import Clipboard from "clipboard";  // 复制链接的API

const copy = new Clipboard(".copy-url-btn");
copy.on("success", (e) => {
  showToast("复制成功"); // 不需要提示 可注释
});
copy.on("error", function (e) {
  showToast("复制失败" + JSON.stringify(e)); // 不需要提示 可注释
});

<>
  <Input
    className="recommend-url "
    type="url"
    value={this.props.recommendUrl}
  >
  </Input>
  <View
		className="copy-url-btn"
		data-clipboard-target=".recommend-url"
  >
  复制
  </View>
</>
```
