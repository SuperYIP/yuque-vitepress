import{_ as s,o as i,c as a,R as n}from"./chunks/framework.3LEfkZv-.js";const t="/assets/6bb6aa2b98d06824580685a33abe3ab3.Dop2pQ5D.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/react native/Qunar框架知识点.md","filePath":"docs/react native/Qunar框架知识点.md","lastUpdated":1702732998000}'),h={name:"docs/react native/Qunar框架知识点.md"},p=n(`<h3 id="ext-registerview" tabindex="-1">Ext.registerView <a class="header-anchor" href="#ext-registerview" aria-label="Permalink to &quot;Ext.registerView&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./views/search&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Ext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;OTAView&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./views/ota&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p>上述import和Ext.registerView两种引入页面的方式，通过import引入页面是将资源直接加载到内存，通过Ext.registerView()的方式是懒加载，先将此页面注册，然后在需要用到此页面时才将资源加载到内存，可以节省内存资源。</p><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><p>先执行constructor()，再执行render()，然后执行componentDidMount()。<br><img src="`+t+`" alt="image.png"></p><h3 id="nativenavigator-getpagestacks-方法-获取页面的压栈顺序" tabindex="-1">NativeNavigator.getPageStacks()方法：获取页面的压栈顺序 <a class="header-anchor" href="#nativenavigator-getpagestacks-方法-获取页面的压栈顺序" aria-label="Permalink to &quot;NativeNavigator.getPageStacks()方法：获取页面的压栈顺序&quot;">​</a></h3><p>vsStacks数组中保存着页面的压栈顺序，栈顶元素即为当前活跃页面。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (NativeNavigator) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    NativeNavigator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPageStacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vcStacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ArrayUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vcStacks)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vsStacks);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="qsendnotification-addnotification-方法-接收广播通知" tabindex="-1">QSendNotification.addNotification()方法：接收广播通知 <a class="header-anchor" href="#qsendnotification-addnotification-方法-接收广播通知" aria-label="Permalink to &quot;QSendNotification.addNotification()方法：接收广播通知&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//监听截屏广播</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QSendNotification.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addNotification</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pp-share-screenshot&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听的广播名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    subscriptionCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">subscription</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.screenshotSubscription </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subscription;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 广播的标识            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 成功监听的回调</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dataCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (NativeNavigator) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            NativeNavigator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPageStacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vcStacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ArrayUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNotEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vcStacks)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vcStacks[vcStacks.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].moduleName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;OTAView&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkIsShowScreenshotLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 失败的回调</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    errorCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,10),k=[p];function l(e,E,r,d,g,c){return i(),a("div",null,k)}const F=s(h,[["render",l]]);export{y as __pageData,F as default};
