### mobx使用
安装mobx：`npm i mobx`，及mobx-react： `npm i mobx-react`

1.  声明Store类 
2.  项目index.js中引入Provider和store，用Provider包裹APP组件 
```javascript
import { Provider } from 'mobx-react'
import store from './10-mobx/04-router/mobx/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>

);
```

3.  在需要使用store数据的组件中引入inject和observer，在这个类组件里就可以通过：`this.props.store.isTabbarShow`访问store里定义的 `isTabbarShow`属性。 
```javascript
import { inject, observer } from 'mobx-react'

@inject('store')    // inject里的名字：store，需要与根目录index.js里<Provider store={store}>的store名字一致。
class App extends Component {
```
<br />**mobx6中，可以不使用装饰器语法了，更加方便：** 
```javascript
import { observer, inject } from 'mobx-react'
class CollectsList extends React.Component {

}
export default inject('store')(observer(CollectsList))		// mobx6注入store的语法
```
#### 设置支持装饰器语法(@开头)

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
 
### @observable.ref和@observable的区别
使用@observable.ref观察的对象只会跟踪对对象的引用更改，这意味着需要更改整个对象（引用本身被更改）（我的理解是将一个对象重新赋值给了@observable.ref观察的变量），才会触发通知。<br />使用@observable观察的对象，MobX会深度观察属性及其子属性，这意味着当属性的任何部分更改时，观察者都会被通知。
