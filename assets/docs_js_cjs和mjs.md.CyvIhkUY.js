import{_ as s,o as e,c as o,R as a}from"./chunks/framework.3LEfkZv-.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/js/cjs和mjs.md","filePath":"docs/js/cjs和mjs.md","lastUpdated":1702732998000}'),t={name:"docs/js/cjs和mjs.md"},p=a(`<h3 id="node-js-里可分为-commonjs-模块和-ecmascript-模块-esm-两种不同的模块系统。" tabindex="-1">Node.js 里可分为 CommonJS 模块和 ECMAScript 模块（ESM）两种不同的模块系统。 <a class="header-anchor" href="#node-js-里可分为-commonjs-模块和-ecmascript-模块-esm-两种不同的模块系统。" aria-label="Permalink to &quot;Node.js 里可分为  CommonJS 模块和 ECMAScript 模块（ESM）两种不同的模块系统。&quot;">​</a></h3><p>CommonJS 模块是 Node.js 最初支持的模块系统，它使用 <code>require()</code> 函数来导入模块，使用<code>module.exports</code>或 <code>exports</code>对象来导出模块。这种模块系统通常只能在 Node.js 环境下使用，并且不允许在浏览器环境中使用。<br>ECMAScript 模块是 JavaScript 的标准模块系统<code>(.mjs后缀)</code>，它使用<code> import</code> 和<code> export</code>关键字来导入和导出模块。它可以在 Node.js 环境下和现代浏览器环境中使用，具有更好的跨平台兼容性和可移植性。</p><p>Node.js 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定&quot;use strict&quot;，如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>   &quot;type&quot;: &quot;module&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但是一旦在package.json中进行了设置后，该项目目录里面的 JS 脚本，就被解释为ES6 模块。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 解释成 ES6 模块</span></span>
<span class="line"><span>$ node my-app.js</span></span></code></pre></div><p>如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成.cjs。<br>如果package.json中没有type字段，或者type字段为commonjs，则.js脚本会被解释成 CommonJS 模块。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>.mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。<br>注意，ES6 模块与 CommonJS 模块尽量不要混用。require命令不能加载.mjs文件，会报错，只有import命令才可以加载.mjs文件。反过来，.mjs文件里面也不能使用require命令，必须使用import。</p>`,9),n=[p];function c(d,i,m,r,l,j){return e(),o("div",null,n)}const _=s(t,[["render",c]]);export{h as __pageData,_ as default};
