import{_ as s,o as a,c as i,R as n}from"./chunks/framework.GJkdtUiz.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/react/虚拟DOM和diff算法.md","filePath":"docs/react/虚拟DOM和diff算法.md","lastUpdated":1703729369000}'),l={name:"docs/react/虚拟DOM和diff算法.md"},p=n(`<blockquote><p>参考： <a href="https://www.bilibili.com/video/BV1bS4y1b7NV?p=20&amp;vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1bS4y1b7NV?p=20&amp;vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8</a></p></blockquote><h3 id="react中dom渲染逻辑-在没有指定key时" tabindex="-1">react中DOM渲染逻辑（<strong>在没有指定key时</strong>） <a class="header-anchor" href="#react中dom渲染逻辑-在没有指定key时" aria-label="Permalink to &quot;react中DOM渲染逻辑（**在没有指定key时**）&quot;">​</a></h3><p>比较两次数据时，React会先比较父元素，父元素如果不同，直接所有元素全部替换。父元素一致，在去逐个比较子元素，直到找到所有发生变化的元素为止。</p><ul><li>下例中，新旧两组数据完全一致，所以没有任何DOM对象被修改。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*  新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><ul><li>下例中，只有第一个li发生变化，所以只有第一个li被修改，其他元素不变。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*  新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;tom</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><ul><li>下例中，在列表的最后添加了一个新元素，并没有改变其他的元素的顺序，只有新添加的元素会被渲染，所以这种操作不会带来性能问题。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><ul><li>下例中，在列表的最前边插入了一个新元素，其他元素内容并没有发生变化，但是由于新元素插入到了开始位置，其余元素的位置全都发生变化，而React默认是根据位置比较元素，所以此时，所有元素都会被修改，这种操作就会带来性能问题。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><h3 id="react中dom渲染逻辑-指定key后" tabindex="-1">react中DOM渲染逻辑（<strong>指定key后</strong>） <a class="header-anchor" href="#react中dom渲染逻辑-指定key后" aria-label="Permalink to &quot;react中DOM渲染逻辑（**指定key后**）&quot;">​</a></h3><p>**为什么要给列表中的每个元素指定key：**为了解决上述问题，React为列表设计了一个key属性，当设置key以后，再比较元素时，就会比较相同key的元素，而不是按照顺序进行比较。</p><ul><li>下例中，给列表中的每个元素指定了key，会比较相同key的元素，而不是按照顺序进行比较，所以此时只有新添加的元素会被渲染，不再会带来性能问题。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=孙悟空)&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=猪八戒)&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=沙和尚)&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=唐僧)&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=孙悟空)&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=猪八戒)&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=沙和尚)&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><h3 id="为什么不要使用索引作为key" tabindex="-1">为什么不要使用索引作为key <a class="header-anchor" href="#为什么不要使用索引作为key" aria-label="Permalink to &quot;为什么不要使用索引作为key&quot;">​</a></h3><p>索引会跟着元素顺序的改变而改变，所以使用索引做key跟没有key是一样的，会带来性能问题，唯一的不同就是，控制台的警告没了。只有当元素的顺序不会发生变化时，用索引做key才没有什么问题。</p><ul><li>下例中，使用索引做key，当在列表头部加入数据时，新旧数据对应元素的key都不同，所有元素都会被重新渲染，会带来性能问题。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   旧数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=0)&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=1)&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=2)&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   新数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       ul</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=0)&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=1)&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=2)&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*           li(key=3)&gt;沙和尚</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div>`,19),e=[p];function t(h,k,c,d,r,D){return a(),i("div",null,e)}const y=s(l,[["render",t]]);export{A as __pageData,y as default};
