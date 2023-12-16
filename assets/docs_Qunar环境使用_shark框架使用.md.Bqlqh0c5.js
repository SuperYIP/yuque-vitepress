import{_ as a}from"./chunks/f0ac782f13610580beac3ea6ffdd757a.Gck7ku5y.js";import{_ as e,o as t,c as p,R as r}from"./chunks/framework.3LEfkZv-.js";const s="/assets/e2d21e12e2d57f10d8cbc1b3af880c8e.Z6bCfWT4.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Qunar环境使用/shark框架使用.md","filePath":"docs/Qunar环境使用/shark框架使用.md","lastUpdated":1702732998000}'),o={name:"docs/Qunar环境使用/shark框架使用.md"},n=r(`<blockquote><p>参考： <a href="https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=543927700" target="_blank" rel="noreferrer">https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=543927700</a></p></blockquote><p>安装脚手架：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install @qnpm/shark-cli -g</span></span></code></pre></div><h3 id="启动shark项目" tabindex="-1">启动shark项目 <a class="header-anchor" href="#启动shark项目" aria-label="Permalink to &quot;启动shark项目&quot;">​</a></h3><p>进入shark项目的上级目录，执行：<code>shark dev</code>启动项目</p><h3 id="启动本地项目" tabindex="-1">启动本地项目 <a class="header-anchor" href="#启动本地项目" aria-label="Permalink to &quot;启动本地项目&quot;">​</a></h3><blockquote><p>所需依赖： node版本：v14.20.1 hiproxy</p></blockquote><p>安装依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install hiproxy -g</span></span>
<span class="line"><span>npm install -g @qnpm/ykit3-cli@1.0.9 --registry http://npmrepo.corp.qunar.com</span></span>
<span class="line"><span>npm install -g @qnpm/shark-cli@2.1.23 --registry http://npmrepo.corp.qunar.com</span></span></code></pre></div><p>依赖安装好后，进入shark项目的上级目录，执行：<code>shark dev</code>启动项目，此时终端显示要选择的信息，选择相应模式，其中页面id是<a href="https://flightfe.corp.qunar.com/pageconfig/newEditor?type=shark_public_product&amp;id=13649" target="_blank" rel="noreferrer">https://flightfe.corp.qunar.com/pageconfig/newEditor?type=shark_public_product&amp;id=13649</a>网址最后的id数字。<br><img src="`+s+'" alt="image.png"><br>此时项目启动起来，<code>hiproxy</code>会弹出一个浏览器，此时在终端可能没有输出打开页面的链接，可以去<a href="https://flightfe.corp.qunar.com/pageconfig/newEditor?type=shark_public_product&amp;id=13649" target="_blank" rel="noreferrer">https://flightfe.corp.qunar.com/pageconfig/newEditor?type=shark_public_product&amp;id=13649</a>平台，点击复制链接。将复制到的链接粘贴到<code>hiproxy</code>弹出的浏览器。链接复制到<code>hiproxy</code>弹出的浏览器后，页面可能为空(没有渲染出来)，需要打开控制台：Network-&gt;双击打开红框处链接，打开这个链接后回来此页面刷新，页面内容就可以显示。<br><img src="'+a+'" alt="image.png"></p>',10),c=[n];function i(l,d,h,g,_,m){return t(),p("div",null,c)}const b=e(o,[["render",i]]);export{f as __pageData,b as default};
