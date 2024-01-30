home_rn中到如下方法时就是调用qd-flight-calendar工程了。
```javascript
Ext.Router.Bridge.sendScheme(schemeParam, (res: Result) => {
            console.log('haidi 返回');
            if (res && res.data && res.data.date) {
                console.log('haidi res', res)
                that.updateCustomDate(res.data.date);
            }
        });
```
## 工程结构分析
### 根文件(index.js)
在根文件(index.js)中其实是不需要写逻辑代码的，只需要把向外部提供的组件和方法在这里导出：
```javascript
import FlightCalendar from './Calendar';
export { FlightCalendar };
export { processAdrParam, getCalendarModeByType } from './computations/paramCmp';
```
### getCalendarModeByType方法()：获取日历类型
在这个方法中就是根据传入的type获取要展示的日历的类型。
```javascript
/**
 * 获取日历类型
 * @param type
 * @param calendarClassType
 */
export function getCalendarModeByType(type, calendarClassType) {
    const calendarType = getCalendarType(type, calendarClassType);
    return {
        type: convertCalendarMode(calendarType),
        numberType: calendarType
    };
}

/**
 * 计算calendar type
 */
export function getCalendarType(type, calendarClassType) {
    // 低价机票自定义日期没传type
    let resType = type || 0;
    if (calendarClassType === 'FGoBackPriceDateVC') {
        resType = CALENDER_TYPES.eFDateVCTypeFSearchDouble;
    }
    return resType;
}

/**
 * 获取日历渲染类型
 * @param calendarType
 * return <'single'|'range'|'multi'>
 *        <'单选'｜'双选'｜'多选'>
 */
const rangeType = [
    eFDateVCTypeFLowerPrice,
    eFDateVCTypeFSearchDouble,
    eFDateVCTypeFLowerPriceRemind,
    eFDateVCTypeFSearchMultiRange
];
const multiType = [
    eFDateVCTypeFSearchMultiPath,
    eFDateVCTypeFSearchMutliPathFirstDepart,
    eFDateVCTypeFSearchMutliPathSecondDepart,
    eFDateVCTypeFSearchMutliPathThirdDepart
];
export function convertCalendarMode(calendarType) {
    let defaultMode = 'single';
    // 是否是范围选择
    if (rangeType.includes(calendarType)) {
        defaultMode = 'range';
    }
    if (multiType.includes(calendarType)) {
        defaultMode = 'multi';
    }
    return defaultMode;
}
```
### processAdrParam()方法：IOS和Adr调用schema时的入参不一致，通过这个方法将Adr入参转换成与IOS入参一致。
```javascript
/**
 *
 * @param data android native 端透传过来的param数据 JSON string
 * @returns {} 处理适配之后的 param 对象
 */
export function processAdrParam(data) {
    try {
        const param = JSON.parse(data);
        const { urlData, paramType } = param;
        let { arrCity, depCity, cType, //安卓传过来的是 native 的String cType
        startDate, //单程中 为 当前日期， 往返中为出发日期
        // isShowFuzzyView,
        selectedDay, //默认选中日期日期
        trendParam, //对象
        isRequestTrendPrice, //是否显示日历价格，同 showPrice
        // 往返
        endDate, firstSubTitle, secondSubTitle, fSameSSubTitle, 
        // 多程
        selectedDates, 
        //透传字段
        commonParam } = urlData;
        const newStartDate = dateUtil.dateFormat(startDate);
        const newEndDate = dateUtil.dateFormat(endDate);
        const newCType = typeMapAdr2Ios(cType);
        if (newCType === 0 && commonParam) {
            try {
                const otherParam = JSON.parse(commonParam);
                if (otherParam.newtype) {
                    return {
                        urlData: Object.assign(Object.assign({}, otherParam), { cType: '0', commonParam })
                    };
                }
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.warn('parse commonParam failed', e);
                return null;
            }
        }
        if ((!arrCity || !depCity) && trendParam) {
            depCity = trendParam.dep;
            arrCity = trendParam.arr;
        }
        //单选日历
        if (paramType === 1) {
            const selectedDate = commonUtil.isValidArray(selectedDay) &&
                selectedDay.length === 1
                ? dateUtil.dateFormat(selectedDay[0])
                : selectedDay;
            return {
                urlData: Object.assign(Object.assign({}, urlData), { minValidDate: newStartDate, selDate: selectedDate, departCity: depCity, arrCity: arrCity, showPrice: isRequestTrendPrice, type: newCType })
            };
        }
        //双选日历
        if (paramType === 2) {
            return {
                urlData: Object.assign(Object.assign({}, urlData), { selDate: newStartDate, maxSelDate: newEndDate, departCity: depCity, arrCity: arrCity, type: newCType, firstSubTitle,
                    secondSubTitle,
                    fSameSSubTitle,
                    commonParam })
            };
        }
        //多程
        if (paramType === 3) {
            if (commonUtil.isValidArray(selectedDates)) {
                selectedDates = selectedDates.map((value) => dateUtil.dateFormat(value));
            }
            return {
                urlData: Object.assign(Object.assign({}, urlData), { depDatesArr: selectedDates, type: newCType })
            };
        }
        else {
            // eslint-disable-next-line no-console
            console.warn(' wrong paramType ' + paramType);
            return null;
        }
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.warn('calendar', 'param error' + JSON.stringify(e));
        return null;
    }
}
```
### 组件渲染
日历组件整体是放到QGestureFloat组件中的，所以需要构造pageViewList形式的数据。
#### 高阶组件：ShellComponentHOC
ShellComponentHOC高阶组件的作用就是把footerData对象中的component属性抽取出来，把其他属性传递到component组件中去。<br />`__rest()`函数的作用是排除掉data中的component属性并返回一个新对象。也可以使用结构赋值的方法获取剩余属性：`const { excludedProp, ...otherProps } = data;`
```javascript
/* 组件定义 */
import { __rest } from "tslib";
import React from 'react';
const ShellComponentHOC = (props) => {
    const { data } = props;
    // js中支持一行给多个变量赋值
    const { component: ShellContainer } = data, otherProps = __rest(data, ["component"]);
    return <ShellContainer {...otherProps}/>;
};
export default ShellComponentHOC;

/* 组件使用 */
<ShellComponentHOC data={footerData}/>

/* footerData数据格式 */
const footerData = {
    mode,
    selectedPayload,
    otherInfo,
    adaptFooter: this.useNativeGestureFloat || this.useRNGestureFloat,
    userSelectedDate,
    onClickBottomButton: () => this.printStayLog(),
    buttons: commonUtil.isValidArray(buttons)
        ? buttons
        : [{ type: 'default', text: '确定' }],
    component: CalendarBottomModule		// 是一个组件名
};
```

qd-flight-calendar工程中<br />computedState函数：接收home_rn中传递过来的参数。并构造最初选中的日期和单程、往返等样式。
```javascript
export function computedState(props, defaultState) {
    const { data } = props, otherProps = __rest(props, ["data"]);
    // 如果计算的data数据为空，则不在计算，直接返回前一个state
    if (defaultState !== undefined && !commonUtil.isValidObject(data)) {
        // eslint-disable-next-line no-console
        console.warn('[computedState]: data数据为空，不在计算state，直接返回默认值');
        return defaultState || {};
    }
    /* 初始化 props 数据 start */
    const { minValidDate = new Date(), maxValidDate, type, calendarClassType, departCity, arrCity, isInter, showPrice, showName, firstSubTitle, secondSubTitle, cType, startTime, endTime } = data || {};
    const initDateSelected = initDateSelect(data);
    const paramCalendarType = getCalendarType(type, calendarClassType);
```
