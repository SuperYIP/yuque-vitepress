import{_ as s,c as a,o as n,U as p}from"./chunks/framework.fNqm3e01.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/机票售前客户端/TarsLib工程/给手机安装app.md","filePath":"docs/机票售前客户端/TarsLib工程/给手机安装app.md","lastUpdated":1704357645000}'),e={name:"docs/机票售前客户端/TarsLib工程/给手机安装app.md"},l=p(`<h3 id="主服务" tabindex="-1">主服务 <a class="header-anchor" href="#主服务" aria-label="Permalink to &quot;主服务&quot;">​</a></h3><p>主服务中common/utils/config.json中将apk_url改为最新的安卓url即可：<br>主服务配置后会在每次跑case时自动在手机中安装这个apk_url中的包。（只会在真机上这样做，云手机不这样做，因为太卡了）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;apk_url&quot;: &quot;http://cmyum.corp.qunar.com/mobile_app/android/adr_llama_finn_app/tags/60001576-rc.major.4344_debug/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk&quot;,</span></span>
<span class="line"><span>    &quot;install_qp_retry_count&quot;: 14,</span></span>
<span class="line"><span>    &quot;install_qp_timeout&quot;: 15,</span></span>
<span class="line"><span>    &quot;run_case_time_sleep&quot;: 1,</span></span>
<span class="line"><span>    &quot;project_case_run_on_cloud_phone&quot;: true,</span></span>
<span class="line"><span>    &quot;not_run_on_cloud_phone&quot;: &quot;3&quot;,</span></span>
<span class="line"><span>    &quot;project_not_run_on_cloud_phone&quot;: &quot;1,3,7&quot;,</span></span>
<span class="line"><span>    &quot;reserve_device&quot;: false,</span></span>
<span class="line"><span>    &quot;reserve_device_all_task&quot;: false</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="从服务" tabindex="-1">从服务 <a class="header-anchor" href="#从服务" aria-label="Permalink to &quot;从服务&quot;">​</a></h3><p>通过脚本将从服务控制的手机统一安装指定的app包。3台从服务器上都需要执行一次。需要先将app包下载到本地：<code>/Users/qitnac000392/Desktop/Tars/download/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import os, time</span></span>
<span class="line"><span>count = 20</span></span>
<span class="line"><span>index = 0</span></span>
<span class="line"><span>while index &lt; count:</span></span>
<span class="line"><span>    localport = 10002 + index * 5</span></span>
<span class="line"><span>    ip = 2 + index</span></span>
<span class="line"><span>    ssh_cmd = f&#39;sudo ssh -L {localport}:10.237.0.{ip}:5555 0d360d3f0580f30b2fc6c005ba984ac9@123.249.99.210 -i /Users/qitnac000392/Desktop/KeyPair-dfc5.pem -o ServerAliveInterval=30 -Nf&#39;</span></span>
<span class="line"><span>    connect_cmd = f&#39;adb connect 127.0.0.1:{localport}&#39;</span></span>
<span class="line"><span>    # os.system(ssh_cmd)</span></span>
<span class="line"><span>    # time.sleep(1)</span></span>
<span class="line"><span>    # os.system(connect_cmd)</span></span>
<span class="line"><span>    # time.sleep(1)</span></span>
<span class="line"><span>    # reboot_cmd = f&#39;adb -s 127.0.0.1:{localport} reboot&#39;</span></span>
<span class="line"><span>    # os.system(reboot_cmd)</span></span>
<span class="line"><span>    # time.sleep(1)</span></span>
<span class="line"><span>    # disconnect = f&#39;adb disconnect 127.0.0.1:{localport}&#39;</span></span>
<span class="line"><span>    # os.system(disconnect)</span></span>
<span class="line"><span>    # time.sleep(1)</span></span>
<span class="line"><span>    install = f&#39;adb -s 127.0.0.1:{localport} install -r -d -g /Users/qitnac000392/Desktop/Tars/download/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk&#39;</span></span>
<span class="line"><span>    os.system(install)</span></span>
<span class="line"><span>    time.sleep(1)</span></span>
<span class="line"><span>    index = index + 1</span></span></code></pre></div>`,6),t=[l];function o(c,i,_,r,d,u){return n(),a("div",null,t)}const q=s(e,[["render",o]]);export{h as __pageData,q as default};
