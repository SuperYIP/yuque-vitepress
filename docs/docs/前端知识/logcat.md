Android 中的 LogCat 是一个用于查看系统日志的工具，它可以帮助开发者调试和分析应用程序的运行时信息。LogCat 中包含了系统的各种日志消息，包括应用程序的调试输出、错误信息、系统事件等。
### 常用命令
#### 查看所有日志
```javascript
adb logcat
```
### 命令行显示logcat
#### 过滤包含 "qapm" 标签的日志，然后使用 grep 来进一步筛选出包含 "new" 关键字的日志并添加颜色标记：
```javascript
adb shell
logcat -s qapm | grep --color new
```
