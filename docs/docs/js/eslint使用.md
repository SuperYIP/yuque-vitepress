### ESLint：代码检查工具
1. 安装eslint，终端执行：
```latex
npm install eslint --save-dev
```

2.  （如果已经有package.json则跳过此步骤）初始化package.json：`npm init -y` 
3.  初始化ESLint：`npx eslint --init` 此时命令行会出现一些配置选项，比如是否使用了ts语言等，按实际情况选择即可。 
4.  此时项目目录下会出现.eslintrc.js文件，在此文件中配置eslint的代码检查规则。 
```javascript
    "rules": {
        // 不使用分号
        'semi': ['error', 'never'],
        // 字符串始终用单引号
        'quotes': [2, 'single'],
        'no-use-before-define': 0,
    }
```

5.  vscode settings.json文件设置保存时自动启用eslint格式化代码。
```json
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll.eslint": true  // eslint保存时自动格式化代码
    },
```
#### 设置ESLint的不进行检查的文件
在项目根目录创建一个 .eslintignore 文件忽略特定的文件和目录，.eslintignore是纯文本文件，每一行都表明哪些路径应该被忽略检测。
```
// 忽略某个文件夹
folderName/
// 忽略某个文件
fileName.js
```
#### ESLint的常用规则
```javascript
"rules": {
    // 不使用分号
    'semi': ['error', 'never'],
    // 字符串始终用单引号
    'quotes': [2, 'single'],
    'no-use-before-define': 0,
}
```
