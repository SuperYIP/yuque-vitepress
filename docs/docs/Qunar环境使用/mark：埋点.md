埋点分为三种：基础架构那边的自动埋点和我们业务线的自动埋点，以及开发自己写的的业务埋点。<br />自动埋点中目前看到两种格式：<br />一种是基础架构的：
```python
1709093538129*rn_press**f_major_bundle_rn@SearchListView:SearchListView.0.0.0.0.0.0.1.0.0.0.0.0.1.0.0.0.0.0.1.0.0.0.0.0.1.0.0*:一键分享航班
```
另一种是埋点中有`auto_qmark`字样的，是我们机票自己的，跑TARS用的。
```python
1709093538129*set*FLIGHT_START####{"appcode"："f_major_bundle_rn_android","bizType"："flight","common"：{"traceId"："1709093367600569320","traceIndex"："984"},"ext"：{"elementType"："label","module"："","moduleType"："label","operTime"：1709093538119,"operateElement"："f_major_bundle_rn｜ScreenshotLayer｜Touchable#md5=356497aaf6f77e36","scrollDirection"：""},"id"："auto_qmark_Touchable","key"："flight/ScreenshotLayer/Touchable#md5=356497aaf6f77e36#line=143/click/auto_qmark_+AE2375","module"："Touchable#md5=356497aaf6f77e36#line=143","operTime"："1709093538942","operType"："click","page"："ScreenshotLayer","qpVer"："2010"}####FLIGHT_END
```


