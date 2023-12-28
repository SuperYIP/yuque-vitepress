import{_ as s,a as i}from"./chunks/0d0221cf939842544f9c5b6c8dae0109.CVJlQOSm.js";import{_ as a,o as n,c as t,R as h}from"./chunks/framework.GJkdtUiz.js";const e="/assets/c848eb7ed661e852ea1089d5358d2736.67IGG6ZZ.png",p="/assets/b6ec7cd622e39388c8a18314279631e2.tgx3EOHi.png",l="/assets/137014c4d986935d5c44f69c167eff18.WWf-npXt.png",k="/assets/12249a190a1f0d24875447f65fba4a6f.NJvYgQQV.png",o="/assets/3e4713bd267d850564b02d90dc15adf8.jhRXJ37f.png",r="/assets/0d9e6dce533cc986b9525a59b02b0332.2UGdhRns.png",d="/assets/74d6d7fd2720141b5db3ee7403a9d7d9.-8vxNJYJ.png",q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/python/环境、依赖问题.md","filePath":"docs/python/环境、依赖问题.md","lastUpdated":1703729369000}'),c={name:"docs/python/环境、依赖问题.md"},y=h(`<h3 id="mac中有多个python3版本-指定使用哪个版本运行python文件" tabindex="-1">mac中有多个python3版本，指定使用哪个版本运行python文件 <a class="header-anchor" href="#mac中有多个python3版本-指定使用哪个版本运行python文件" aria-label="Permalink to &quot;mac中有多个python3版本，指定使用哪个版本运行python文件&quot;">​</a></h3><h4 id="通过在终端指定python3版本区分" tabindex="-1">通过在终端指定python3版本区分 <a class="header-anchor" href="#通过在终端指定python3版本区分" aria-label="Permalink to &quot;通过在终端指定python3版本区分&quot;">​</a></h4><p>比如有python3.9和python3.11两个版本的python。<br><code>python3.9 文件名.py</code>则使用3.9版本运行；<code>python3.11 文件名.py</code>则使用3.11版本运行。</p><blockquote><p>不直接卸载其中一个版本python的原因是有其他裤对其有依赖关系，卸载时提示：Refusing to uninstall /opt/homebrew/Cellar/python@3.11/3.11.5 because it is required by watchman</p></blockquote><h4 id="通过配置环境变量区分-修改-bash-profile文件-文件所在路径-bash-profile" tabindex="-1">通过配置环境变量区分：修改.bash_profile文件，文件所在路径：~/.bash_profile <a class="header-anchor" href="#通过配置环境变量区分-修改-bash-profile文件-文件所在路径-bash-profile" aria-label="Permalink to &quot;通过配置环境变量区分：修改.bash_profile文件，文件所在路径：~/.bash_profile&quot;">​</a></h4><p>打开.bash_profile文件：<code>open ~/.bash_profile</code>，在文件最下方增加<code>alias python3=&#39;/opt/homebrew/bin/python3.9&#39;</code>。<br>alias：这个命令告诉操作系统你要创建一个别名。<br>python3：别名的名称。<br>&#39;/opt/homebrew/bin/python3.9&#39;：给别名python3指定的值，当输入python3时系统应该执行的命令路径。<br>我把python和python3命令都指向了python3.9。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/homebrew/opt/nvm/nvm.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SDKMAN_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman/bin/sdkman-init.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman/bin/sdkman-init.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JAVA8_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JAVA11_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#快速在命令行切换jdk版本命令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jdk8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;export JAVA_HOME=$JAVA8_HOME&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jdk11</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;export JAVA_HOME=$JAVA11_HOME&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#default java11</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JAVA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$JAVA11_HOME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置Android相关环境变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANDROID_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/android-sdks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANDROID_HOME_TOOLS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/platform-tools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANDROID_TOOLS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/tools:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/build-tools/33.0.0:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/cmdline-tools/latest/bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANDROID_NDK_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/ndk-bundle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置Gradle相关环境变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GRADLE_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/.sdkman/candidates/gradle/current/bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${PATH}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_HOME_TOOLS}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_TOOLS}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${GRADLE_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${ANDROID_NDK_HOME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/toolchains/aarch64-linux-android-4.9/prebuilt/darwin-x86_64/bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置默认的python版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> python3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/opt/homebrew/bin/python3.9&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> python</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/opt/homebrew/bin/python3.9&#39;</span></span></code></pre></div><p>修改.bash_profile文件后，在终端执行<code>source ~/.bash_profile</code>命令使修改生效，但是此时生效只是在当前终端生效，脱离此终端配置是没有生效的。想要让<code>.bash_profile</code>文件的配置全局生效，可以打开<code>.zshrc</code>文件：<code>open ~/.zshrc</code>，在文件末尾添加命令：<code>source ~/.bash_profile</code>，添加后.zshrc文件如下：（这样每次打开终端都会执行一次source ~/.bash_profile命令）</p><blockquote><p>参考： <a href="https://blog.csdn.net/lanlangaogao/article/details/118928478" target="_blank" rel="noreferrer">https://blog.csdn.net/lanlangaogao/article/details/118928478</a></p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.nvm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm bash_completion</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SDKMAN_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman/bin/sdkman-init.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.sdkman/bin/sdkman-init.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使.bash_profile全局生效</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bash_profile</span></span></code></pre></div><h3 id="安装tkinter库-brew-install-python-tk-3-9" tabindex="-1">安装tkinter库：brew install python-tk@3.9 <a class="header-anchor" href="#安装tkinter库-brew-install-python-tk-3-9" aria-label="Permalink to &quot;安装tkinter库：brew install python-tk@3.9&quot;">​</a></h3><blockquote><p>安装这个库的原因是启动项目的过程中报错：If this fails your Python may not be configured for Tk<br>ImportError: No <a href="https://so.csdn.net/so/search?q=module&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">module</a> named _tkinter 参考：<a href="https://blog.csdn.net/blueheart20/article/details/78763208" target="_blank" rel="noreferrer">https://blog.csdn.net/blueheart20/article/details/78763208</a></p></blockquote><p>终端执行：<code>brew install python-tk@3.9</code></p><h3 id="mac查看python的安装路径命令-which-python3" tabindex="-1">mac查看python的安装路径命令：which python3 <a class="header-anchor" href="#mac查看python的安装路径命令-which-python3" aria-label="Permalink to &quot;mac查看python的安装路径命令：which python3&quot;">​</a></h3><p><img src="`+s+'" alt="image.png"><br>但是此命令查看的是当前指定的默认python3版本的安装路径，如果电脑中存在多个python3版本(如同时存在python3.9和python3.11两个版本)，此命令依然只能展示默认使用的python3版本的安装路径。</p><h3 id="mac通过homebrew查看电脑中存在的所有python版本-brew-list命令" tabindex="-1">mac通过homebrew查看电脑中存在的所有python版本：<code>brew list</code>命令 <a class="header-anchor" href="#mac通过homebrew查看电脑中存在的所有python版本-brew-list命令" aria-label="Permalink to &quot;mac通过homebrew查看电脑中存在的所有python版本：`brew list`命令&quot;">​</a></h3><p><code>brew list</code>命令可以查看mac安装的所有第三方库，其中就包括了python。<br><img src="'+i+'" alt="image.png"></p><h3 id="pyenv-python虚拟环境管理工具" tabindex="-1">pyenv：python虚拟环境管理工具 <a class="header-anchor" href="#pyenv-python虚拟环境管理工具" aria-label="Permalink to &quot;pyenv：python虚拟环境管理工具&quot;">​</a></h3><blockquote><p>参考 官方文档：<a href="https://github.com/pyenv/pyenv#installation" target="_blank" rel="noreferrer">https://github.com/pyenv/pyenv#installation</a> 安装及使用：<a href="https://juejin.cn/post/6844903782636060686" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903782636060686</a></p></blockquote><h4 id="安装pyenv及pyenv-virtualenv" tabindex="-1">安装pyenv及pyenv-virtualenv <a class="header-anchor" href="#安装pyenv及pyenv-virtualenv" aria-label="Permalink to &quot;安装pyenv及pyenv-virtualenv&quot;">​</a></h4><p>终端执行：<code>brew install pyenv</code><br>终端执行：<code>brew install pyenv-virtualenv</code><br>执行pyenv出现下述输出表示安装成功：<br><img src="'+e+`" alt="image.png"></p><h5 id="在-bash-profile中配置环境变量" tabindex="-1">在 .bash_profile中配置环境变量 <a class="header-anchor" href="#在-bash-profile中配置环境变量" aria-label="Permalink to &quot;在 .bash_profile中配置环境变量&quot;">​</a></h5><p>在终端执行：<code>open ~/.bash_profile</code>打开此文件，在文本末尾追加下述内容，添加后，打开新终端时此配置会生效。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PYENV_ROOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${HOME}/.pyenv&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${PYENV_ROOT}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${PYENV_ROOT}/bin:\${PATH}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eval </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$(pyenv init -)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fi</span></span></code></pre></div><h4 id="查看所有可安装的python版本" tabindex="-1">查看所有可安装的python版本 <a class="header-anchor" href="#查看所有可安装的python版本" aria-label="Permalink to &quot;查看所有可安装的python版本&quot;">​</a></h4><p>终端执行：<code>pyenv install --list</code></p><h4 id="查看已安装的python版本" tabindex="-1">查看已安装的python版本 <a class="header-anchor" href="#查看已安装的python版本" aria-label="Permalink to &quot;查看已安装的python版本&quot;">​</a></h4><p>终端执行：<code>pyenv versions</code>，下图中一个是系统版本，一个是3.10.13版本的python<br><img src="`+p+'" alt="image.png"></p><h4 id="v安装执行版本python" tabindex="-1">v安装执行版本python <a class="header-anchor" href="#v安装执行版本python" aria-label="Permalink to &quot;v安装执行版本python&quot;">​</a></h4><p>终端执行：<code>pyenv install -v 3.5.1</code><br>执行上述命令时可能会卡住（下载速度太慢了），可执行下述命令尝试：<br><code>v</code>后面跟的是想要安装的python版本，这种方式v后必须指定明确的版本号3.6.0，不能是3.6这种。<br><code>v=3.6.0; wget [https://npm.taobao.org/mirrors/python//$v/Python-$v.tar.xz](https://npm.taobao.org/mirrors/python//$v/Python-$v.tar.xz) -P ~/.pyenv/cache/; pyenv install $v </code></p><blockquote><p>参考： <a href="https://blog.csdn.net/qq_43213352/article/details/104343365" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_43213352/article/details/104343365</a> 将python下载到本地再安装：<a href="https://juejin.cn/post/7167731442418941983" target="_blank" rel="noreferrer">https://juejin.cn/post/7167731442418941983</a></p></blockquote><p>如果报<code>zsh: command not found: wget</code>，则先通过brew安装wget：<code>brew install wget</code>。</p><h4 id="设置全局python版本" tabindex="-1">设置全局python版本 <a class="header-anchor" href="#设置全局python版本" aria-label="Permalink to &quot;设置全局python版本&quot;">​</a></h4><p><code>pyenv global 3.9.18</code><br>之所以会用到这个命令是因为在虚拟环境中使用sudo命令安装依赖时，会提示找不到pip。就只能用这个命令指定全局python版本和虚拟环境中一致了（可以这样直接指定到具体虚拟环境上：<code>pyenv global TARS</code>）。（一定要注意在一个终端设置pyenv global之后，再起个终端看生效了没）。</p><h4 id="卸载执行版本python" tabindex="-1">卸载执行版本python <a class="header-anchor" href="#卸载执行版本python" aria-label="Permalink to &quot;卸载执行版本python&quot;">​</a></h4><p>终端执行：<code>pyenv uninstall 3.5.1</code></p><h4 id="列出当前的虚拟环境" tabindex="-1">列出当前的虚拟环境 <a class="header-anchor" href="#列出当前的虚拟环境" aria-label="Permalink to &quot;列出当前的虚拟环境&quot;">​</a></h4><p>终端执行：<code>pyenv virtualenvs</code><br><img src="'+l+'" alt="image.png"></p><h4 id="创建虚拟环境" tabindex="-1">创建虚拟环境 <a class="header-anchor" href="#创建虚拟环境" aria-label="Permalink to &quot;创建虚拟环境&quot;">​</a></h4><p>终端执行：<code>pyenv virtualenv 3.9.18 TARS</code><br>成功了也没任何提示。</p><h4 id="激活虚拟环境" tabindex="-1">激活虚拟环境 <a class="header-anchor" href="#激活虚拟环境" aria-label="Permalink to &quot;激活虚拟环境&quot;">​</a></h4><p><code>pyenv activate ChatGPT</code><br>执行后终端会显示当前虚拟环境名字：<br><img src="'+k+'" alt="image.png"></p><h4 id="退出虚拟环境" tabindex="-1">退出虚拟环境 <a class="header-anchor" href="#退出虚拟环境" aria-label="Permalink to &quot;退出虚拟环境&quot;">​</a></h4><p><code>pyenv deactivate</code><br>执行后虚拟环境名字消失：<br><img src="'+o+'" alt="image.png"></p><h4 id="删除虚拟环境" tabindex="-1">删除虚拟环境 <a class="header-anchor" href="#删除虚拟环境" aria-label="Permalink to &quot;删除虚拟环境&quot;">​</a></h4><p><code>pyenv uninstall test</code><br>执行时需要确定删除：<br><img src="'+r+'" alt="image.png"></p><h4 id="vscode中使用虚拟环境" tabindex="-1">vscode中使用虚拟环境 <a class="header-anchor" href="#vscode中使用虚拟环境" aria-label="Permalink to &quot;vscode中使用虚拟环境&quot;">​</a></h4><p>首先在终端中切换到TARS虚拟环境，执行<code>pip install -r requirements.txt</code>安装所需依赖，在通过vscode的运行和调试功能启动项目时，需要在vscode右下角选择使用的环境，同样适用TARS虚拟环境即可。<br><img src="'+d+'" alt="image.png"></p><h3 id="python安装依赖-第三方库" tabindex="-1">python安装依赖（第三方库） <a class="header-anchor" href="#python安装依赖-第三方库" aria-label="Permalink to &quot;python安装依赖（第三方库）&quot;">​</a></h3><p>安装指定库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pip install 库名</span></span></code></pre></div><p>安装<code>requirements.txt</code>文件中的所有库，增加<code>-r</code>参数，-r表示指定的是一个文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pip install -r requirements.txt</span></span></code></pre></div><p>加入<code>-i </code>参数，指定安装的源，下方命令指定的是清华源：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre></div>',55),E=[y];function g(b,F,u,m,v,_){return n(),t("div",null,E)}const f=a(c,[["render",g]]);export{q as __pageData,f as default};
