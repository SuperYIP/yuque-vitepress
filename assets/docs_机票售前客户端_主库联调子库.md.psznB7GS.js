import{_ as s,c as i,o as a,U as n}from"./chunks/framework.fNqm3e01.js";const l="/assets/831f1f6e229bb20f66f74b1f7164bc9a.rqHASqfD.png",t="/assets/17cae9471c896f6db0f9eae0afa9c21b.hU9mILLK.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/机票售前客户端/主库联调子库.md","filePath":"docs/机票售前客户端/主库联调子库.md","lastUpdated":1704357645000}'),e={name:"docs/机票售前客户端/主库联调子库.md"},p=n(`<h2 id="flight-major-bundle主库联调flight-module-search子库" tabindex="-1">flight_major_bundle主库联调flight_module_search子库 <a class="header-anchor" href="#flight-major-bundle主库联调flight-module-search子库" aria-label="Permalink to &quot;flight_major_bundle主库联调flight_module_search子库&quot;">​</a></h2><h3 id="方法一-修改metro-config-js文件-解开module-exports中的部分代码。-提交flight-major-bundle库的代码时-要再注释上-打包major-bundle时-需要先发布module-search子库-把子库版本号写到major-bundle的package-json中再打包major-bundle" tabindex="-1">方法一：修改metro.config.js文件，解开module.exports中的部分代码。（提交flight_major_bundle库的代码时，要再注释上）（打包major_bundle时，需要先发布module_search子库，把子库版本号写到major_bundle的package.json中再打包major_bundle） <a class="header-anchor" href="#方法一-修改metro-config-js文件-解开module-exports中的部分代码。-提交flight-major-bundle库的代码时-要再注释上-打包major-bundle时-需要先发布module-search子库-把子库版本号写到major-bundle的package-json中再打包major-bundle" aria-label="Permalink to &quot;方法一：修改metro.config.js文件，解开module.exports中的部分代码。（提交flight_major_bundle库的代码时，要再注释上）（打包major_bundle时，需要先发布module_search子库，把子库版本号写到major_bundle的package.json中再打包major_bundle）&quot;">​</a></h3><p>原本module.exports里的代码都注释着呢，解开后如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 这个属性不要放开，跟公共的es6优化冲突，会导致项目红屏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // transformer: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     getTransformOptions: async () =&gt; ({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         transform: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             experimentalImportSupport: false,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             inlineRequires: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resolver: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        extraNodeModules: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`node_modules/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watchFolders: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWatchFolders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="确保flight-major-bundle和flight-module-search库在同一文件夹下" tabindex="-1">确保flight_major_bundle和flight_module_search库在同一文件夹下 <a class="header-anchor" href="#确保flight-major-bundle和flight-module-search库在同一文件夹下" aria-label="Permalink to &quot;确保flight_major_bundle和flight_module_search库在同一文件夹下&quot;">​</a></h3><p><img src="`+l+'" alt="image.png"></p><h3 id="方法二-修改flight-major-bundle库的package-json文件-打包时-直接打major-bundle包就行-会自动找到module-search对应pmo的代码" tabindex="-1">方法二：修改flight_major_bundle库的package.json文件（打包时，直接打major_bundle包就行，会自动找到module_search对应pmo的代码） <a class="header-anchor" href="#方法二-修改flight-major-bundle库的package-json文件-打包时-直接打major-bundle包就行-会自动找到module-search对应pmo的代码" aria-label="Permalink to &quot;方法二：修改flight_major_bundle库的package.json文件（打包时，直接打major_bundle包就行，会自动找到module_search对应pmo的代码）&quot;">​</a></h3><p>找到&quot;@qnpm/flight-module-search&quot;库，将其版本号修改为PMO号（FD-200664）对应的flight-module-search库的gitlab分支链接。<br><strong>git+ssh://git@gitlab.corp.qunar.com:flight_rn/flight_module_search.git#FD-200664 （这个链接不是直接复制来的，是要自己拼接PMO号搞出来的）</strong><br><img src="'+t+`" alt="image.png"></p><h3 id="在flight-major-bundle根目录下执行qrn-install后执行qrn-run启动项目" tabindex="-1">在flight_major_bundle根目录下执行<code>qrn install</code>后执行<code>qrn run</code>启动项目 <a class="header-anchor" href="#在flight-major-bundle根目录下执行qrn-install后执行qrn-run启动项目" aria-label="Permalink to &quot;在flight_major_bundle根目录下执行\`qrn install\`后执行\`qrn run\`启动项目&quot;">​</a></h3><p>此时在flight_module_search库中编写代码保存后在手机debug包中应该可以看到修改后的内容了</p><h2 id="flight-major-bundle主库联调q-design子库" tabindex="-1">flight_major_bundle主库联调q-design子库 <a class="header-anchor" href="#flight-major-bundle主库联调q-design子库" aria-label="Permalink to &quot;flight_major_bundle主库联调q-design子库&quot;">​</a></h2><h3 id="修改metro-config-js文件-解开module-exports中的部分代码。-提交flight-major-bundle库的代码时-要再注释上" tabindex="-1">修改metro.config.js文件，解开module.exports中的部分代码。（提交flight_major_bundle库的代码时，要再注释上） <a class="header-anchor" href="#修改metro-config-js文件-解开module-exports中的部分代码。-提交flight-major-bundle库的代码时-要再注释上" aria-label="Permalink to &quot;修改metro.config.js文件，解开module.exports中的部分代码。（提交flight_major_bundle库的代码时，要再注释上）&quot;">​</a></h3><h4 id="在watchqdfolders中把要调试的q-design库中的子包名字加入。" tabindex="-1">在watchQdFolders中把要调试的q-design库中的子包名字加入。 <a class="header-anchor" href="#在watchqdfolders中把要调试的q-design库中的子包名字加入。" aria-label="Permalink to &quot;在watchQdFolders中把要调试的q-design库中的子包名字加入。&quot;">​</a></h4><h4 id="在getwatchfolders-函数中把q-design库的注释解开" tabindex="-1">在getWatchFolders()函数中把q-design库的注释解开 <a class="header-anchor" href="#在getwatchfolders-函数中把q-design库的注释解开" aria-label="Permalink to &quot;在getWatchFolders()函数中把q-design库的注释解开&quot;">​</a></h4><p>解开这行代码的注释：<code>folders.push(...watchQdFolders.map(packageName =&gt; getModuleQdPath(packageName)));</code></p><h4 id="确保getmoduleqdpath-函数中q-design库的路径正确" tabindex="-1">确保getModuleQdPath()函数中q-design库的路径正确 <a class="header-anchor" href="#确保getmoduleqdpath-函数中q-design库的路径正确" aria-label="Permalink to &quot;确保getModuleQdPath()函数中q-design库的路径正确&quot;">​</a></h4><h4 id="package-json文件总体如下" tabindex="-1">package.json文件总体如下： <a class="header-anchor" href="#package-json文件总体如下" aria-label="Permalink to &quot;package.json文件总体如下：&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const watchFolders = [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-utils&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-serviceLayer&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-intercept&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-flightHotel&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-merge-pay-reminder&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;qunar-business-choose-buy-layer&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//需要link的子库名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const watchFoldersPkgs = [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-change-city-panel&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-cool-modal-float&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-html-view&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-performance&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-pull-refresh-listView&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-q-flatList&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-qunar-image&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-scroll-tab-view&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-slugger&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-custom-alert&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-html-view&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-din-text&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-native-cool-modal-float&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-utils&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-r-modal&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-mobx-infrastructure&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-patch-qrn&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-pinvoke-assembly&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-rn-request&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-pkgs-statistics&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const watchQdFolders = [</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  &#39;q-gesture-float&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-design-card&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;q-shadow&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 获取本地库目录</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* @param name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* @returns {string}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getComponentPath(name) {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> path.resolve(__dirname,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> \`../qunar-mobility-business/packages/\${name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}/\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//需要link的子库目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getComponentPathPkgs(name) {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> path.resolve(__dirname,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> \`../qunar-mobility-pkgs/packages/\${name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}/\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//module search的目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getModuleSearchPath() {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> path.resolve(__dirname,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> \`../flight_module_search/\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getModuleQdPath(name) {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> path.resolve(__dirname,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> \`../q-design/packages/\${name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}/\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getWatchFolders() {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  let</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> folders</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> [];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // folders.push(...watchFolders.map(packageName =&gt; getComponentPath(packageName)));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // folders.push(...watchFoldersPkgs.map(packageName =&gt; getComponentPathPkgs(packageName)));</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  folders.push(...watchQdFolders.map(packageName</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> =&gt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> getModuleQdPath(packageName)));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // folders.push(getModuleSearchPath());</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> folders;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module.exports = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 这个属性不要放开，跟公共的es6优化冲突，会导致项目红屏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // transformer: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //     getTransformOptions: async () =&gt; ({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //         transform: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //             experimentalImportSupport: false,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //             inlineRequires: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //         }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">resolver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  extraNodeModules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">new</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> Proxy(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {},</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">(target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">name)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> =&gt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  return</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> path.join(__dirname,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> \`node_modules/\${name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watchFolders: getWatchFolders()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="修改q-design库里面的子包q-gesture-float-举例-调试哪个子包就去哪个子包下改-中的package-json文件" tabindex="-1">修改q-design库里面的子包q-gesture-float(举例，调试哪个子包就去哪个子包下改)中的package.json文件 <a class="header-anchor" href="#修改q-design库里面的子包q-gesture-float-举例-调试哪个子包就去哪个子包下改-中的package-json文件" aria-label="Permalink to &quot;修改q-design库里面的子包q-gesture-float(举例，调试哪个子包就去哪个子包下改)中的package.json文件&quot;">​</a></h3><p>把<code>main</code>字段改了，调试时：<code>&quot;src/index.ts&quot;</code>，线上时：<code>&quot;dist/index.js&quot;</code>。这样改的原因是线上找的是编译后的js文件，而我们调试时想改的是编译前的ts代码。如果不这样改的话，需要在每次修改代码后，在<code>q-design</code>库的根目录执行：<code>npm run build</code>编译代码，不然主库与子库联调会失败。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;@qnpm/q-gesture-float&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;4.0.7&quot;,</span></span>
<span class="line"><span>    &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;main&quot;: &quot;src/index.ts&quot;,			# 调试时：&quot;src/index.ts&quot;，线上时：&quot;dist/index.js&quot;,</span></span>
<span class="line"><span>    &quot;scripts&quot;: {</span></span>
<span class="line"><span>        &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;files&quot;: [</span></span>
<span class="line"><span>        &quot;dist&quot;,</span></span>
<span class="line"><span>        &quot;src&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>    &quot;dependencies&quot;: {</span></span>
<span class="line"><span>        &quot;@qnpm/q-design-utils&quot;: &quot;^4.0.7&quot;,</span></span>
<span class="line"><span>        &quot;@qnpm/q-popup-layer&quot;: &quot;^4.0.7&quot;,</span></span>
<span class="line"><span>        &quot;@qnpm/q-theme&quot;: &quot;^4.0.7&quot;,</span></span>
<span class="line"><span>        &quot;@qnpm/qportal&quot;: &quot;^0.0.1&quot;,</span></span>
<span class="line"><span>        &quot;@qnpm/qrn-hooks&quot;: &quot;^1.0.7&quot;,</span></span>
<span class="line"><span>        &quot;tslib&quot;: &quot;^2.0.1&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="注-如果前面都执行好了后子库与主库没有联动起来-可以在主库执行命令清下缓存" tabindex="-1">注：如果前面都执行好了后子库与主库没有联动起来，可以在主库执行命令清下缓存 <a class="header-anchor" href="#注-如果前面都执行好了后子库与主库没有联动起来-可以在主库执行命令清下缓存" aria-label="Permalink to &quot;注：如果前面都执行好了后子库与主库没有联动起来，可以在主库执行命令清下缓存&quot;">​</a></h3><p>在<code>flight_major_bundle</code>库根目录下执行：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.rncache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf qrn.lock</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sudo rm $TMPDIR</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">sudo rm -rf $TMPDIR/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">watchman watch-del-all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">rm -rf node_modules/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">qrn install</span></span></code></pre></div>`,24),h=[p];function k(r,o,d,c,g,E){return a(),i("div",null,h)}const m=s(e,[["render",k]]);export{y as __pageData,m as default};
