需要安装：`ts-node`依赖：`npm install -g ts-node`和`typescript`：`npm install typescript@latest`<br />需要增加launch.json文件，launch.json文件内容如下：
```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "调试当前ts文件",
            "type": "node",
            "request": "launch",
            "args": [
                "${file}"	// 调试当前文件
            ],
            "runtimeArgs": [
                "--nolazy",
                "-r",
                "ts-node/register"
            ],
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "protocol": "inspector",
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }        
    ]
}
```
