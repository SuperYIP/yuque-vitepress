```javascript
<Text
    numberOfLines={1}
>
    {text}
</Text>
```
## Text组件中的一些常用属性
### numberOfLines：指定文本显示的最大行数，超过指定行数的部分会被截断，并以省略号（...）表示。

## Text组件技巧
### 符号、数字、文字在同一行对不齐的问题？
![image.png](../../images/30e5ec44636a35c8457132eb8d8b9a88.png)<br />像上图中的价格部分，有符号、数字和文字，如果只是给外层的view设置`alignItems: 'flex-end'`的话，是不能完全对齐的，可以对齐的方式是目前有两种。
> 宇哥wiki：
> [https://wiki.corp.qunar.com/pages/viewpage.action?pageId=288692459](https://wiki.corp.qunar.com/pages/viewpage.action?pageId=288692459)

#### <br />
给外层的view设置`alignItems: 'flex-start'`，然后给View里的每个Text都设置`lineHeight`属性，`lineHeight`的值就设置为这几个`Text`中`fontSize`最大的值。比如这个例子中`fontSize`最大的是中间的数字，值为28，那么就给所有Text设置`lineHeight:28`属性。
```typescript
<View style={styles.priceContainer}>
    <Text style={[styles.priceText, {fontSize:20}]}>{'¥'}</Text>
    <Text style={styles.priceText}>{price.slice(1)}</Text>
    <Text style={{fontFamily:'PingFangSC-Regular', fontSize:18, color:'rgba(255,102,0,0.98)', fontWeight:'400', lineHeight:28}}>{'起'}</Text>
</View>

priceContainer: {
    width: innerWidth,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 14,
    marginRight: 15,
},
priceText: {
    fontFamily: 'hotel_rn_num',
    fontSize: 28,
    color: 'rgba(255,102,0,0.98)',
    fontWeight: '700',
    lineHeight:28
},
```
#### <br />
给外层的view设置`alignItems: 'flex-end'`，然后通过给内层的Text组件设置相对布局和top值微调元素位置。也可以通过给Text组件设置高度微调元素位置，Text组件是可以设置高度的，并且文字在Text组件内是顶部对齐的，也就是说通过设置Text高度可以把文字向上提。
```objectivec
<View style={styles.priceContainer}>
    <Text style={[styles.priceText, { fontSize: scale(20) }]}>{'¥'}</Text>
    <Text style={[styles.priceText, { position: 'relative', top: isIOS ? scale(1) : scale(3)}]}>{priceText}</Text>
    <Text style={{
        height: scale(26), fontFamily: 'PingFangSC-Regular', fontSize: scale(18), color: 'rgba(255,102,0,0.98)', fontWeight: '400',  marginRight: scale(17)
    }}>{'起'}</Text>
</View> : null}
priceContainer: {
    width: innerWidth,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: isIOS ? scale(12) : scale(10),
},
priceText: {
    fontFamily: 'hotel_rn_num',
    fontSize: scale(28),
    color: 'rgba(255,102,0,0.98)',
    fontWeight: '700',
},
```
