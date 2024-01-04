import{_ as a,c as s,o as n,U as p}from"./chunks/framework.fNqm3e01.js";const t="/assets/4c16537bd8da3800093a1c0e7175ea9c.cRGYjNnj.png",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/机票售前客户端/TARS_QA工程/本地启动服务运行case.md","filePath":"docs/机票售前客户端/TARS_QA工程/本地启动服务运行case.md","lastUpdated":1704357645000}'),o={name:"docs/机票售前客户端/TARS_QA工程/本地启动服务运行case.md"},e=p('<p>启动<code>AndroidPlayBack</code>服务，把<code>&quot;[http://100.80.192.124:8081/static/autocase/au20230724171101/casedata.txt&quot;,](http://100.80.192.124:8081/static/autocase/au20230724171101/casedata.txt&quot;,)</code>中的case路径：au20230724171101替换为想要跑的case的路径。<br>case路径可以在TARS平台查看：<br><img src="'+t+`" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;Python: AndroidPlayBack&quot;,</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;python&quot;,</span></span>
<span class="line"><span>    &quot;request&quot;: &quot;launch&quot;,</span></span>
<span class="line"><span>    &quot;program&quot;: &quot;\${cwd}/../TarsLib/Tars/tars/cli/custom_launcher.py&quot;,</span></span>
<span class="line"><span>    &quot;console&quot;: &quot;integratedTerminal&quot;,</span></span>
<span class="line"><span>    &quot;args&quot;: [</span></span>
<span class="line"><span>        &quot;\${cwd}/playLookBackUpon/lookBackUponBusiness/auto_case.air&quot;,</span></span>
<span class="line"><span>        &quot;--device&quot;,</span></span>
<span class="line"><span>        &quot;Android:///&quot;,</span></span>
<span class="line"><span>        &quot;--log&quot;,</span></span>
<span class="line"><span>        &quot;\${cwd}/mock&quot;,</span></span>
<span class="line"><span>        &quot;--playbackpath&quot;,</span></span>
<span class="line"><span>        &quot;\${cwd}/mock&quot;,</span></span>
<span class="line"><span>        &quot;--playbacksource&quot;,</span></span>
<span class="line"><span>        &quot;app&quot;,</span></span>
<span class="line"><span>        &quot;--playbackbusiz&quot;,</span></span>
<span class="line"><span>        &quot;flight&quot;,</span></span>
<span class="line"><span>        &quot;--playbacktype&quot;,</span></span>
<span class="line"><span>        &quot;4&quot;,</span></span>
<span class="line"><span>        &quot;--playbackkey&quot;,</span></span>
<span class="line"><span>        &quot;&quot;,</span></span>
<span class="line"><span>        &quot;--playbackurl&quot;,</span></span>
<span class="line"><span>        &quot;http://100.80.192.124:8081/static/autocase/au20230724171101/casedata.txt&quot;,</span></span>
<span class="line"><span>        &quot;--assertion&quot;,</span></span>
<span class="line"><span>        &quot;待支付&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,2),c=[e];function l(u,i,q,d,r,_){return n(),s("div",null,c)}const m=a(o,[["render",l]]);export{k as __pageData,m as default};
