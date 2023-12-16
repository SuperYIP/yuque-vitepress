### 设置支持装饰器语法(@开头)
1.  安装依赖：`npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env` 
2.  在项目根目录下创建 `.babelrc`和 `config-overrides.js`两个文件。 
   1.  `.babelrc`文件内容如下： 
```javascript
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ]
    ]
}
```

   2.  `config-overrides.js`文件内容如下： 
```javascript
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    if (env === 'production') {
        config.externals = {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }

    return config
};


module.exports = override(addDecoratorsLegacy(), customize())
```

3.  安装依赖：`npm i customize-cra react-app-rewired` 
4.  配置package.json文件： 
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```
 
