import{_ as a,o as e,c as r,R as t}from"./chunks/framework.3LEfkZv-.js";const o="/assets/f2caf3c9f754fd569d1d8fa7378d4211.y327HTp1.png",s="/assets/297bcf554e14e46a168f68a80266ec64.wts8XwPe.png",p="/assets/a15634c89225ec07e0a8e726b4f3c55f.A_NPEgvT.png",n="/assets/51ad63823a9f80162aa2af2b5d3da2c5.NnWLE4O6.png",d="/assets/7c1556126de79e56176b6a2137a45af9.ucpdu9DU.jpeg",c="/assets/4fe66851d17002ec3d0bac699050a06f.MuKPSUNp.jpeg",i="/assets/6ae1e9a22d2cd5d9d03cec6abf4132d6.YkHEu2VW.png",l="/assets/a371432c8a28b761b218586bfe808152.lHOCJVc9.png",h="/assets/f5e0bdf1624c3e8ad2bf6d6135ad872a.BoRDrwQG.png",m="/assets/3b9168cf6e52f3c3232f71ab788bc6c0.h4odKT89.png",u="/assets/3cb954848eaa3bf0375f7e7fd07a5c61.Xmd0SgQb.png",b="/assets/bbd8406f9e2a3da698c894c734064b5c.zXzjVrfN.png",g="/assets/7881e935bf2057822e9eff4ef44b33ca.2N2nIJA-.png",q="/assets/a94858b88efc4f386a45782232bac804.EFsCazih.png",_="/assets/c8570513050489f577d93ae985a6f1c7.0vGTsvYS.png",f="/assets/d37a2c5b421f899c64b71384c40b73ad.qX3-hcHi.png",k="/assets/82487bd9c06194b17303805906b9ab7d.3DzvDu4A.png",P="/assets/4d48d3c6dca1c3dfad37bac67b3da558.h1wVjsoK.png",O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Qunar环境使用/MD平台打包及手机debug包验证.md","filePath":"docs/Qunar环境使用/MD平台打包及手机debug包验证.md","lastUpdated":1702732998000}'),x={name:"docs/Qunar环境使用/MD平台打包及手机debug包验证.md"},D=t('<h2 id="md平台打包" tabindex="-1">MD平台打包 <a class="header-anchor" href="#md平台打包" aria-label="Permalink to &quot;MD平台打包&quot;">​</a></h2><blockquote><p>MD平台地址：<a href="https://md.corp.qunar.com/home" target="_blank" rel="noreferrer">https://md.corp.qunar.com/home</a></p></blockquote><p>打包<code>flight_major_bundle</code>库：在MD平台中，此库的名字叫<code>f_major_bundle_rn</code></p><h3 id="打开md平台-点击热发组件" tabindex="-1">打开MD平台，点击热发组件 <a class="header-anchor" href="#打开md平台-点击热发组件" aria-label="Permalink to &quot;打开MD平台，点击热发组件&quot;">​</a></h3><h3 id="全部项目中搜索到f-major-bundle-rn库" tabindex="-1">全部项目中搜索到f_major_bundle_rn库 <a class="header-anchor" href="#全部项目中搜索到f-major-bundle-rn库" aria-label="Permalink to &quot;全部项目中搜索到f_major_bundle_rn库&quot;">​</a></h3><p><img src="'+o+'" alt="image.png"></p><h3 id="点击查看-进入后点击打包" tabindex="-1">点击查看，进入后点击打包 <a class="header-anchor" href="#点击查看-进入后点击打包" aria-label="Permalink to &quot;点击查看，进入后点击打包&quot;">​</a></h3><p><img src="'+s+'" alt="image.png"></p><h3 id="将pmo号填入源码分支位置-点击一下iso版本或adr版本区域-点击开始打包即可" tabindex="-1">将PMO号填入源码分支位置，点击一下ISO版本或Adr版本区域，点击开始打包即可 <a class="header-anchor" href="#将pmo号填入源码分支位置-点击一下iso版本或adr版本区域-点击开始打包即可" aria-label="Permalink to &quot;将PMO号填入源码分支位置，点击一下ISO版本或Adr版本区域，点击开始打包即可&quot;">​</a></h3><p><img src="'+p+'" alt="image.png"></p><h3 id="打包完成后-可以看到打包的信息和qp包的二维码" tabindex="-1">打包完成后，可以看到打包的信息和QP包的二维码 <a class="header-anchor" href="#打包完成后-可以看到打包的信息和qp包的二维码" aria-label="Permalink to &quot;打包完成后，可以看到打包的信息和QP包的二维码&quot;">​</a></h3><p><img src="'+n+'" alt="image.png"></p><h2 id="手机debug包验证" tabindex="-1">手机debug包验证 <a class="header-anchor" href="#手机debug包验证" aria-label="Permalink to &quot;手机debug包验证&quot;">​</a></h2><h3 id="debugsetting-qp调试-扫描替换qp包" tabindex="-1">DebugSetting -&gt; QP调试 -&gt; 扫描替换qp包 <a class="header-anchor" href="#debugsetting-qp调试-扫描替换qp包" aria-label="Permalink to &quot;DebugSetting -&gt; QP调试 -&gt; 扫描替换qp包&quot;">​</a></h3><p>扫描MD平台打包之后生成的二维码，即可将手机上的debug包替换为MD平台打包后的包(MD平台的包，除了基础功能外，只具有当前PMO的新功能)<br><img src="'+d+'" alt="Screenshot_20231012_203317.jpg"></p><h3 id="点击rntools-查看设备信息-qp包信息-查看版本号信息与刚刚打包的是否一样" tabindex="-1">点击RNTools -&gt; 查看设备信息 -&gt; QP包信息，查看版本号信息与刚刚打包的是否一样 <a class="header-anchor" href="#点击rntools-查看设备信息-qp包信息-查看版本号信息与刚刚打包的是否一样" aria-label="Permalink to &quot;点击RNTools -&gt; 查看设备信息 -&gt; QP包信息，查看版本号信息与刚刚打包的是否一样&quot;">​</a></h3><p>版本号信息与刚刚打包的如果一样，说明QP包替换成功了，否则就得再执行一次扫描替换qp包步骤。</p><blockquote><p>我这个图里的版本号是随便截的。</p></blockquote><p><img src="'+c+'" alt="Screenshot_20231012_203558.jpg"></p><h3 id="手机debug包qrn调试界面-选择release" tabindex="-1">手机debug包QRN调试界面，选择Release <a class="header-anchor" href="#手机debug包qrn调试界面-选择release" aria-label="Permalink to &quot;手机debug包QRN调试界面，选择Release&quot;">​</a></h3><p>此时已经把包发布了，不需要连接电脑上的代码了，所以选择release可以运行更快些。</p><h3 id="配置软路由-如果后端把代码发布到了软路由环境的话" tabindex="-1">配置软路由（如果后端把代码发布到了软路由环境的话） <a class="header-anchor" href="#配置软路由-如果后端把代码发布到了软路由环境的话" aria-label="Permalink to &quot;配置软路由（如果后端把代码发布到了软路由环境的话）&quot;">​</a></h3><h3 id="功能测试完后-可以点击qp调试界面右上角的清空本地qp包-把刚才扫描替换的qp包清除。" tabindex="-1">功能测试完后，可以点击QP调试界面右上角的清空本地qp包，把刚才扫描替换的qp包清除。 <a class="header-anchor" href="#功能测试完后-可以点击qp调试界面右上角的清空本地qp包-把刚才扫描替换的qp包清除。" aria-label="Permalink to &quot;功能测试完后，可以点击QP调试界面右上角的清空本地qp包，把刚才扫描替换的qp包清除。&quot;">​</a></h3><h3 id="注-和并master分支后-如果qrn-lock存在冲突-则直接把qrn-lock文件删除-重新qrn-install。" tabindex="-1">注：和并master分支后，如果qrn.lock存在冲突，则直接把qrn.lock文件删除，重新qrn install。 <a class="header-anchor" href="#注-和并master分支后-如果qrn-lock存在冲突-则直接把qrn-lock文件删除-重新qrn-install。" aria-label="Permalink to &quot;注：和并master分支后，如果qrn.lock存在冲突，则直接把qrn.lock文件删除，重新qrn install。&quot;">​</a></h3><h2 id="发灰度" tabindex="-1">发灰度 <a class="header-anchor" href="#发灰度" aria-label="Permalink to &quot;发灰度&quot;">​</a></h2><h3 id="发灰度0-选择打好的bete包-点击发灰度-将灰度的手机uid填写好-uid间用英文逗号分隔" tabindex="-1">发灰度0%：选择打好的bete包，点击发灰度，将灰度的手机uid填写好(uid间用英文逗号分隔) <a class="header-anchor" href="#发灰度0-选择打好的bete包-点击发灰度-将灰度的手机uid填写好-uid间用英文逗号分隔" aria-label="Permalink to &quot;发灰度0%：选择打好的bete包，点击发灰度，将灰度的手机uid填写好(uid间用英文逗号分隔)&quot;">​</a></h3><p><img src="'+i+'" alt="image.png"></p><h4 id="查看设备uid-方法一-推荐" tabindex="-1">查看设备uid(方法一，推荐) <a class="header-anchor" href="#查看设备uid-方法一-推荐" aria-label="Permalink to &quot;查看设备uid(方法一，推荐)&quot;">​</a></h4><blockquote><p>大前端统一平台(开发工具中有apphelper平台链接)：<a href="https://ued.corp.qunar.com/web" target="_blank" rel="noreferrer">https://ued.corp.qunar.com/web</a> apphelper平台：<a href="https://ued.corp.qunar.com/apphelper/#infos-app" target="_blank" rel="noreferrer">https://ued.corp.qunar.com/apphelper/#infos-app</a></p></blockquote><h5 id="信息查询界面划到底部点击开始查询" tabindex="-1">信息查询界面划到底部点击开始查询 <a class="header-anchor" href="#信息查询界面划到底部点击开始查询" aria-label="Permalink to &quot;信息查询界面划到底部点击开始查询&quot;">​</a></h5><p><img src="'+l+'" alt="image.png"></p><h5 id="在弹出的选择框中点击生成数字码" tabindex="-1">在弹出的选择框中点击生成数字码 <a class="header-anchor" href="#在弹出的选择框中点击生成数字码" aria-label="Permalink to &quot;在弹出的选择框中点击生成数字码&quot;">​</a></h5><p><img src="'+h+'" alt="image.png"></p><h5 id="用手机任意去哪app我的界面的扫一扫功能扫描此二维码-即可获得手机设备的一些信息-uid就在其中。" tabindex="-1">用手机任意去哪app我的界面的扫一扫功能扫描此二维码，即可获得手机设备的一些信息，uid就在其中。 <a class="header-anchor" href="#用手机任意去哪app我的界面的扫一扫功能扫描此二维码-即可获得手机设备的一些信息-uid就在其中。" aria-label="Permalink to &quot;用手机任意去哪app我的界面的扫一扫功能扫描此二维码，即可获得手机设备的一些信息，uid就在其中。&quot;">​</a></h5><p><img src="'+m+'" alt="image.png"></p><h4 id="查看设备uid-方法二" tabindex="-1">查看设备uid(方法二) <a class="header-anchor" href="#查看设备uid-方法二" aria-label="Permalink to &quot;查看设备uid(方法二)&quot;">​</a></h4><p>去哪app中点击<code>RNTools</code>功能球，点击查看设备信息选项，即可看到uid信息<br><img src="'+u+'" alt="image.png"></p><h3 id="发灰度时可能会要求进行自动化测试" tabindex="-1">发灰度时可能会要求进行自动化测试 <a class="header-anchor" href="#发灰度时可能会要求进行自动化测试" aria-label="Permalink to &quot;发灰度时可能会要求进行自动化测试&quot;">​</a></h3><h4 id="在pmo中点击tars自动化进入tars平台" tabindex="-1">在PMO中点击TARS自动化进入Tars平台 <a class="header-anchor" href="#在pmo中点击tars自动化进入tars平台" aria-label="Permalink to &quot;在PMO中点击TARS自动化进入Tars平台&quot;">​</a></h4><p><img src="'+b+'" alt="image.png"></p><h4 id="在pmo进入直接就到了下图界面-选好项目分支即可点击开始打包-等case执行完毕且成功了90-以上时-就可以发灰度了。" tabindex="-1">在PMO进入直接就到了下图界面，选好项目分支即可点击开始打包，等case执行完毕且成功了90%以上时，就可以发灰度了。 <a class="header-anchor" href="#在pmo进入直接就到了下图界面-选好项目分支即可点击开始打包-等case执行完毕且成功了90-以上时-就可以发灰度了。" aria-label="Permalink to &quot;在PMO进入直接就到了下图界面，选好项目分支即可点击开始打包，等case执行完毕且成功了90%以上时，就可以发灰度了。&quot;">​</a></h4><p><img src="'+g+'" alt="image.png"></p><h3 id="灰度0-之后-产品和自己验证都没问题-可以发灰度10-此时需要看监控了" tabindex="-1">灰度0%之后，产品和自己验证都没问题，可以发灰度10%（此时需要看监控了） <a class="header-anchor" href="#灰度0-之后-产品和自己验证都没问题-可以发灰度10-此时需要看监控了" aria-label="Permalink to &quot;灰度0%之后，产品和自己验证都没问题，可以发灰度10%（此时需要看监控了）&quot;">​</a></h3><h4 id="点击重新打包-把灰度百分比调整为10即可。" tabindex="-1">点击重新打包，把灰度百分比调整为10即可。 <a class="header-anchor" href="#点击重新打包-把灰度百分比调整为10即可。" aria-label="Permalink to &quot;点击重新打包，把灰度百分比调整为10即可。&quot;">​</a></h4><p><img src="'+q+'" alt="image.png"></p><h4 id="看监控" tabindex="-1">看监控 <a class="header-anchor" href="#看监控" aria-label="Permalink to &quot;看监控&quot;">​</a></h4><blockquote><p>监控链接： <a href="https://watcher.corp.qunar.com/dashboard/team/?path=qunar.team.flight.userproduct.core_monitor_P1.ANR_crash_RN&amp;from=now-2d&amp;to=now" target="_blank" rel="noreferrer">https://watcher.corp.qunar.com/dashboard/team/?path=qunar.team.flight.userproduct.core_monitor_P1.ANR_crash_RN&amp;from=now-2d&amp;to=now</a><a href="https://watcher.corp.qunar.com/dashboard/team/?path=qunar.team.fe.performance.flight&amp;from=now-2d&amp;to=now" target="_blank" rel="noreferrer">https://watcher.corp.qunar.com/dashboard/team/?path=qunar.team.fe.performance.flight&amp;from=now-2d&amp;to=now</a></p></blockquote><p>上面链接对应下图中的两个监控，界面右上角可以调节横坐标间隔，以及页面自动刷新事件（默认不自动刷新，调整成30s吧）<br><img src="'+_+'" alt="image.png"><br><img src="'+f+'" alt="image.png"></p><h4 id="看apm移动监控平台" tabindex="-1">看apm移动监控平台 <a class="header-anchor" href="#看apm移动监控平台" aria-label="Permalink to &quot;看apm移动监控平台&quot;">​</a></h4><blockquote><p>地址： <a href="http://apm.corp.qunar.com/crash/advanced-search?pid=10010-adr&amp;logType=prod&amp;tabs-type=aggBug&amp;biz=2&amp;appCode=f_major_bundle_rn&amp;pageNum=1" target="_blank" rel="noreferrer">http://apm.corp.qunar.com/crash/advanced-search?pid=10010-adr&amp;logType=prod&amp;tabs-type=aggBug&amp;biz=2&amp;appCode=f_major_bundle_rn&amp;pageNum=1</a></p></blockquote><p>进入apm平台后，点击高级搜索，在红框中输入工程名，然后点击搜索，下方将出现崩溃情况，可以看到在自己发布后是否有崩溃。<br><img src="'+k+'" alt="image.png"></p><h3 id="灰度10-后-半小时内-如果没有发生啥异常-且设备更新数-adr-ios-到了4000以上-可以发全量-如果半小时内设备更新数没到4000-则可以将灰度往大了调些-比如调整到50-。" tabindex="-1">灰度10%后，半小时内，如果没有发生啥异常，且设备更新数(Adr+IOS)到了4000以上，可以发全量，如果半小时内设备更新数没到4000，则可以将灰度往大了调些(比如调整到50%)。 <a class="header-anchor" href="#灰度10-后-半小时内-如果没有发生啥异常-且设备更新数-adr-ios-到了4000以上-可以发全量-如果半小时内设备更新数没到4000-则可以将灰度往大了调些-比如调整到50-。" aria-label="Permalink to &quot;灰度10%后，半小时内，如果没有发生啥异常，且设备更新数(Adr+IOS)到了4000以上，可以发全量，如果半小时内设备更新数没到4000，则可以将灰度往大了调些(比如调整到50%)。&quot;">​</a></h3><p><img src="'+P+'" alt="image.png"></p>',53),M=[D];function N(T,w,S,Q,R,j){return e(),r("div",null,M)}const v=a(x,[["render",N]]);export{O as __pageData,v as default};
