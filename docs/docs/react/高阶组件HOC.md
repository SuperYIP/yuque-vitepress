# 高阶组件HOC
> 参考：
> 官方：[https://www.bookstack.cn/read/react-17.0-zh/4e47d27b4598bc09.md](https://www.bookstack.cn/read/react-17.0-zh/4e47d27b4598bc09.md)
> 掘金：[https://juejin.cn/post/6844904050236850184](https://juejin.cn/post/6844904050236850184)

### 使用高阶组件封装权限控制逻辑
通过下面的高阶组件withAuthorization，就可以实现对任意页面使用此高阶组件包装后进行权限控制。
```javascript
import React, { Component } from 'react';

// 高阶组件：权限控制
const withAuthorization = (WrappedComponent, allowedRoles) => {
  return class WithAuthorization extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userRole: 'admin', // 这里是模拟用户的角色，可以根据实际情况从登录信息或其他地方获取
      };
    }

    render() {
      const { userRole } = this.state;

      // 检查用户角色是否允许访问
      if (allowedRoles.includes(userRole)) {
        // 如果允许访问，渲染原始组件
        return <WrappedComponent {...this.props} />;
      } else {
        // 如果不允许访问，显示无权限消息或其他处理
        return <div>您无权访问此页面。</div>;
      }
    }
  };
};

// 一个普通组件
const Dashboard = (props) => {
  return (
    <div>
      <h1>用户仪表盘</h1>
      {/* 其他仪表盘内容 */}
    </div>
  );
};

// 使用高阶组件包装 Dashboard 组件，限制只有第二个参数数组中的角色可以访问此组件页面
const AuthorizedDashboard = withAuthorization(Dashboard, ['admin', 'haidi.yi']);

// 应用中的使用示例
const App = () => {
  return (
    <div>
      <h1>我的应用</h1>
      {/* 渲染经过权限控制的 Dashboard 组件 */}
      <AuthorizedDashboard />
    </div>
  );
};

export default App;
```

### 页面呼吸高阶组件：QPlaceholder
> 页面呼吸本质上是个动画，页面的布局就是灰色的方块，让灰色方块有渐隐渐显效果（通过opacity属性控制透明度）

#### 封装多种呼吸场景（目前遇到的都是QPlaceholder.Line）
```javascript
import connect from './placeholderContainer';
import Line from './line/line';
import searchItem from "./searchItem/searchItem";
import otaItem from "./otaItem/otaItem";
import LoaddingDot from "./LoaddingDot";
import roundMixItem from "./searchItem/roundMixItem";
import roundMixHeader from "./searchItem/roundMixHeader";
import packagePopLayer from './packagePopLayer';
import hotelCommentItem from './HotelCommentLayer';

export default QPlaceholder{
    Line: connect(Line),
    searchItem: connect(searchItem),
    roundMixItem: connect(roundMixItem),
    roundMixHeader: connect(roundMixHeader),
    otaItem: connect(otaItem),
    LoaddingDot: connect(LoaddingDot),
    PackagePopLayer: connect(packagePopLayer),
    hotelCommentItem: connect(hotelCommentItem),
    connect
};

```
#### 定义高阶组件connect
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import Animations from './animation/animations';

const renderAnimation = (Animation, Component, props) => {
    if (!Animation) {
        throw new Error(`${Animation.name} doesnt exist in the current project`);
    }
    return (
        <Animation>
            <Component {...props} />
        </Animation>
    );
};

/**
 * Higher order component that factors animation and state ready
 * @param PlaceholderComponent
 */
const connect = (PlaceholderComponent) => {
    function placeHolder(props) {
        const { onReady, animate, children, customAnimate } = props;

        if (onReady) {
            return children;
        }

        if (customAnimate) {
            return renderAnimation(customAnimate, PlaceholderComponent, props);
        }

        if (animate) {
            return renderAnimation(Animations[animate], PlaceholderComponent, props);
        }
        return <PlaceholderComponent {...props} />;
    }

    placeHolder.propTypes = {
        onReady: PropTypes.bool,
        children: PropTypes.element,
        animate: PropTypes.string,
        customAnimate: PropTypes.func
    };

    placeHolder.defaultProps = {
        onReady: false,
        animate: null,
        children: null,
        customAnimate: null
    };

    return placeHolder;
};

export default connect;
```

#### 要呼吸的页面的样式（就是方块的颜色、宽、高等）
```javascript
import React from 'react';
import { View } from 'react-native';
import computeStyle from './line.style';

/**
 * Create a single Line on screen based on computed styles
 */
export default function (props) {
    return <View style={computeStyle(props)} />;
}

/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 * @param marginTop The line marginTop
 * @param borderRadius The line borderRadius
 * @param alignSelf alignSelf
 * @param marginBottom The line marginBottom
 */
export default ({textSize = 12, color = '#efefef', width = '100%',marginLeft = 0 ,marginTop = 0, borderRadius = 2, alignSelf = 'stretch', marginBottom=0,marginRight=0}) => ({
    height: textSize,
    width,
    alignSelf,
    backgroundColor: color,
    borderRadius,
    marginTop,
    marginBottom ,
    marginLeft,
    marginRight
});
```
#### 呼吸的动画效果（主要用的就是FadeAnimation，通过opacity属性控制方块透明度达到呼吸效果）
```javascript
import FadeAnimation from './fade';
import ShineAnimation from './shine';

/**
* Animation factory
* Get an animation by its name
*/
export default {
  fade: FadeAnimation,
  shine: ShineAnimation
};

import React,{Component} from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

const START_VALUE = 0.2;
const END_VALUE = 1;
const PHASE_ONE_DURATION = 700;
const PHASE_TWO_DURATION = 300;
const useNativeDriver = true;

/**
* Create a repetitive fadein / fadeout animation
*/

export default class FadeAnimation extends Component {
  static propTypes = {
    children: PropTypes.shape({})
  };

  static defaultProps= {
    children: null
  };

  constructor(props){
    super(props);
    this.animation = new Animated.Value(END_VALUE);
    this.state = {
      refreshCount:0
    }
  }

  componentDidMount(){
    this.start();
    //此属性不能删除，为了保证在start动画后，能够触发render
    this.setState({
      refreshCount: this.state.refreshCount + 1
    })
  }

  componentWillUnmount(){
    //卸载组件的时候，需要停止动画，否则会造成一直循环调用动画
    if (this.fadeAnimation){
      this.fadeAnimation.stop();
    }
  }

  render(){
    let {children} = this.props;
    const style = { opacity: this.animation };
    return <Animated.View style={style}>{children}</Animated.View>;
  }

  start() {
    this.fadeAnimation = Animated.sequence([
      Animated.timing(this.animation, {
        toValue: START_VALUE,
        duration: PHASE_ONE_DURATION,
        useNativeDriver
      }),
      Animated.delay(PHASE_TWO_DURATION),
      Animated.timing(this.animation, {
        toValue: END_VALUE,
        duration: PHASE_ONE_DURATION,
        useNativeDriver
      }),
      Animated.delay(PHASE_TWO_DURATION)
    ]);
    this.fadeAnimation.start((e) => {
      if (e.finished) {
        this.start();
      }
    });
  }

}


import React,{Component} from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const START_VALUE = 0;
const END_VALUE = 100;
const DURATION = 750;

/**
* Create a repetitive Shine animation
*/

export default class ShineAnimation extends Component {

  static propTypes = {
    children: PropTypes.shape({})
  };

  static defaultProps= {
    children: null
  };

  constructor(props){
    super(props);
    this.animation = new Animated.Value(0);
  }

  componentDidMount(){
    this.start();
  }

  componentWillUnmount(){
    //卸载组件的时候，需要停止动画，否则会造成一直循环调用动画
    this.shineAnimation.stop();
  }

  render(){
    const marginLeft = animation.interpolate({
      inputRange: [START_VALUE, END_VALUE],
      outputRange: ['0%', '100%']
    });

    return (
      <View>
    {children}
      <Animated.View style={[styles.shine, { marginLeft }]} />
      </View>
    );
  }

  start() {
    this.animation.setValue(START_VALUE);
    this.shineAnimation = Animated.sequence([
      Animated.timing(this.animation, {
        toValue: END_VALUE,
        duration: DURATION
      })
    ]);
    this.shineAnimation.start(e => e.finished && this.start());
  }
}

const styles = StyleSheet.create({
  shine: {
    width: 30,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#ffffff',
    opacity: 0.4
  }
});
```
```javascript
<QPlaceholder.Line
    textSize={20}
    width={100}
    marginTop={16}
    borderRadius={4}
    animate="fade" />
```
