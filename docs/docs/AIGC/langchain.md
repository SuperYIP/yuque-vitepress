知乎博主，文章不错：[https://www.zhihu.com/people/fireshort](https://www.zhihu.com/people/fireshort)

### 谷歌搜索的apikey
> 参考：[https://blog.csdn.net/wenxingchen/article/details/130474611](https://blog.csdn.net/wenxingchen/article/details/130474611)
> 官网：[https://serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)

## prompt

- **通常情况下，prompt越长越好**。prompt中的描述越多，模型越能获得清晰的指令描述和上下文信息。所以可以在构建prompt时做尽可能详细的描述（在token无压力的情况下）。

### prompt设计原则一：编写清晰、具体的指令
#### 策略1：使用合理的分隔符，更清晰地区分输入的不同部分。
常用的分隔符有：````内容````，`"""内容"""`，`<内容>`
```python
prompt = """
    把用三个反引号扩起来的文本总结出一句话。
    ```需要被总结的文本```
"""
```
#### 策略2：给模型指示，要求结构化地输出内容。
可以通过prompt中的描述直接指定模型的输出格式如，json、数组等。
```python
prompt = """
    请生成包括书名、作者和类别的三本中文虚拟书籍清单。
    输出格式需要遵循json格式，包含以下键：book_id，title，author，description。
"""
```
#### 策略3：要求模型检查输入是否满足某些条件。
在prompt在增加一些描述，比如：`如果不包括指令，则输出：未识别出有效指令。`这句描述就是让模型检查是否满足包括指令这个条件，从而返回格式化输出或返回指定的没识别出有效指令时要返回的内容。<br />例：
```python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from config import get_glm

prompt_template = """
  你将获得一段文本，是三个反引号(```)括起来的文本内容。\
  如果它包含一些列的指令，则按照下面的格式重写这些指令。\
  第一步：
  第二步：
  第三步：
  ……
  第N步：
  如果不包括指令，则输出：未识别出有效指令。	// 注释：加这句描述表示要求模型检查是否满足条件，没加这句话表示没要求模型。
  ```{input_text}```
  """
prompt = PromptTemplate.from_template(prompt_template)
llm = get_glm(0.01)

# 创建链并绑定响应格式
llm_chain = LLMChain(
    llm=llm,
    prompt=prompt
)

# 不包括指令的例子
input_text = """今天阳光明媚，鸟儿在歌唱。\
    这是一个去公园散步的美好日子。\
    鲜花盛开，树枝在微风中轻轻摇曳。\
    人们外出享受着这美好的天气，有些人在野餐，有些人在玩游戏或者在草地上放松。\
    这是一个完美的日子，可以在户外度过并欣赏大自然的美景。"""

# 包括指令的例子
input_text = """
  泡一杯茶很容易。首先需要把水烧开。在等待期间，拿一个杯子并把茶叶放进去。\
  等到水烧开了，就把开始倒在茶叶上。然后，等待几分钟，让茶叶充分浸泡。\
  几分钟之后，可以取出茶包，然后就可以喝茶了。\
  如果有需要，可以加入牛奶或糖。\
  就这样，你就可以享受一杯美味的茶了。
  """


# 现在使用链生成结果，注意这里没有使用点操作符来调用链
res = llm_chain.run(input_text=input_text)

# 打印结果
print("--res--", res)
```
```python
*** 要求模型检查是否满足条件 ***
--res-- 未识别出有效指令。

*** 未要求模型检查是否满足条件 ***
--res-- 在提供的文本中，并没有明确的指令或步骤。这段文本是一段描写性的文字，讲述了在一个阳光明媚的日子里人们在公园的愉快活动。如果要将这段内容转换成步骤格式，我们可以假设它是在描述一系列推荐的户外活动，以下是按照您要求的格式重写的例子：
```
第一步：感受阳光和聆听鸟鸣。
第二步：计划去公园散步。
第三步：欣赏盛开的鲜花和微风中摇曳的树枝。
第四步：享受户外活动，比如野餐、玩游戏或是在草地上放松。
第五步：沉浸在大自然的美景中，度过一个完美的日子。
```
请注意，这些步骤是依据文本内容创造的，实际上原文并没有列出具体的步骤或指令。
```
#### 策略4：给模型提供少量示例，模型会参考示例进行回答。（`langchain中的FewShotPromptTemplate方法实现了few-shot思想`）
原理是在prompt中给模型提供一些输入输出案例，让AI按照案例的样式去回答问题。
```python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from config import get_glm

prompt_template = """
    你的任务是以一致的风格来回答问题。
    <学生>：教我耐心。\
    <老师>：挖出最深峡谷的河流源于一处不起眼的泉眼；最宏伟的交响乐从单一的音符开始；最复杂的挂毯以一根孤独的线开始编织。\
    <学生>：```{input_text}```
    """
prompt = PromptTemplate.from_template(prompt_template)
llm_chain = LLMChain(llm=get_glm(0.01), prompt=prompt)
input_text = """教我坚毅"""
res = llm_chain.run(input_text=input_text)
print("--res--", res)
```
### prompt设计原则二：给模型可以思考的时间
#### 策略5：给模型指定完成任务所需的步骤。
下面的例子没有明显看出执行步骤和不指定步骤的区别，不指定步骤时，翻译的英文中有中文，不知道是不是因为没指定步骤导致的。总之，在prompt中描述的清晰、详细肯定是有效的。
```python
*** 未指定步骤的prompt ***
prompt_template = """
    请用英语概括下面用```扩起来的文本，列出英语概述中的每个名称，输出的格式是json格式，包括english summary和names两个key。
    ```
    在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水。\
    他们一边唱着欢乐的歌，一边往上爬，\
    然而不幸降临——杰克绊了一块石头，从山上滚了下来，吉尔紧随其后。\
    虽然略有些摔伤，但他们还是回到了温馨的家中。\
    尽管出了这样的意外，他们的冒险精神依然没有减弱，继续充满愉悦地探索。
    ```
    """

*** 输出 ***
```json
{
  "english summary": "In a charming village, siblings Jack and Gill set out to fetch water from a well on a mountain top. While singing joyful songs, they climbed up, but不幸ly, Jack tripped over a stone and rolled down the mountain, followed by Gill. Although slightly injured, they managed to return to their cozy home. Despite the accident, their spirit of adventure remains undiminished, as they continue to explore with delight.",
  "names": ["Jack", "Gill"]
}
```
```
```python
*** 指定步骤的prompt ***
prompt_template = """
    执行以下操作：
    1、用一句话概括下面用```括起来的文本。
    2、将摘要翻译成英语。
    3、在英语摘要中列出每个人名。
    4、输出一个 JSON 对象，其中包含以下键：English_summary，names。
     请使用以下格式：
     文本：<要总结的文本>
     摘要：<摘要>
     翻译：<摘要的翻译>
     名称：<英语摘要中的名称列表>
     输出：<带有 English_summary 和 names 的 JSON>
    ```
    在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水。\
    他们一边唱着欢乐的歌，一边往上爬，\
    然而不幸降临——杰克绊了一块石头，从山上滚了下来，吉尔紧随其后。\
    虽然略有些摔伤，但他们还是回到了温馨的家中。\
    尽管出了这样的意外，他们的冒险精神依然没有减弱，继续充满愉悦地探索。
    ```
"""

*** 输出 ***
文本：在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水。他们一边唱着欢乐的歌，一边往上爬，然而不幸降临——杰克绊了一块石头，从山上滚了下来，吉尔紧随其后。虽然略有些摔伤，但他们还是回到了温馨的家中。尽管出了这样的意外，他们的冒险精神依然没有减弱，继续充满愉悦地探索。
摘要：杰克和吉尔在去山顶井打水时不幸摔伤，但他们的冒险精神并未受挫，依然愉快地探索。
翻译：Jack and Jill went to fetch water from a hilltop well, had an accident, but their spirit of adventure remains undiminished as they continue to explore joyfully.
名称：Jack, Jill
输出：{
         "English_summary": "Jack and Jill went to fetch water from a hilltop well, had an accident, but their spirit of adventure remains undiminished as they continue to explore joyfully.",
         "names": ["Jack", "Jill"]
     }
```
#### 策略6：引导模型在下结论之前找出一个自己的解法。
在提问模型我们的答案是否正确时，让模型先自己思考一遍问题得出答案，然后与我们输入的答案进行对比，而不是直接询问模型我们的答案是否正确。<br />我自己用glm-4的api-key跑了两种提问方式，AI都能准确找出答案中的问题，但是吴恩达课程中，直接问模型答案对不对的prompt，AI的回答是：`该学生的解决方案是正确的`。没办法，glm-4这么强么。
```python
*** 直接问模型答案对不对的prompt ***

prompt_template = """
     请判断学生的解决方案是否正确
     问题:
     我正在建造一个太阳能发电站，需要帮助计算财务。
     土地费用：每平方英尺100美元
     太阳能电池板：每平方英尺250美元
     维护费用：每年需要支付固定的100000美元，并额外支付每平方英尺10美元
     作为平方英尺数的函数，首年运营的总费用是多少。

     学生的解决方案：
     设x为发电站的大小，单位为平方英尺。
     费用：
     土地费用：100*x
     太阳能电池板费用：250*x
     维护费用：100000+100*x
     总费用：100*x+250*x+100000+100*x=450*x+100000
    """
*** 输出 ***
学生的解决方案基本正确，但有一个小错误。在计算维护费用时，学生错误地将土地费用的每平方英尺费用用在了维护费用中。根据问题描述，维护费用包括每年固定的100000美元，以及每平方英尺10美元的费用。因此，正确的维护费用应该是：

维护费用：100000（固定费用）+ 10*x（每平方英尺的费用）

现在，我们可以重新计算总费用：

土地费用：100*x
太阳能电池板费用：250*x
维护费用：100000 + 10*x

总费用：100*x + 250*x + 100000 + 10*x
总费用：360*x + 100000

所以，正确的首年运营总费用公式是 360*x + 100000 美元，其中 x 是发电站的大小（以平方英尺为单位）。
```
```python
*** 让模型自己解答一次的prompt ***

prompt_template = """
     请判断学生的解决方案是否正确，请通过如下步骤解决这个问题：
     步骤：
     首先，自己解决问题。
     然后将你的解决方案与学生的解决方案进行比较，并评估学生的解决方案是否正确。
     在自己完成问题之前，请勿决定学生的解决方案是否正确。
     使用以下格式：
     问题：问题文本
     学生的解决方案：学生的解决方案文本
     实际解决方案和步骤：实际解决方案和步骤文本
     学生的解决方案和实际解决方案是否相同：是或否
     学生的成绩：正确或不正确

     问题:
     我正在建造一个太阳能发电站，需要帮助计算财务。
     土地费用：每平方英尺100美元
     太阳能电池板：每平方英尺250美元
     维护费用：每年需要支付固定的100000美元，并额外支付每平方英尺10美元
     作为平方英尺数的函数，首年运营的总费用是多少。

     学生的解决方案：
     设x为发电站的大小，单位为平方英尺。
     费用：
     土地费用：100*x
     太阳能电池板费用：250*x
     维护费用：100000+100*x
     总费用：100*x+250*x+100000+100*x=450*x+100000
    """

*** 输出 ***
实际解决方案和步骤：
设x为发电站的大小，单位为平方英尺。
费用：
土地费用：100美元/平方英尺 * x平方英尺 = 100x美元
太阳能电池板费用：250美元/平方英尺 * x平方英尺 = 250x美元
维护费用：固定费用100000美元 + 每平方英尺10美元 * x平方英尺 = 100000 + 10x美元
总费用：土地费用 + 电池板费用 + 维护费用
总费用 = 100x + 250x + (100000 + 10x)美元
总费用 = 360x + 100000美元

学生的解决方案和实际解决方案是否相同：否
学生的成绩：不正确

学生的解决方案中错误地将维护费用的每平方英尺费用计算为100美元，而实际上应该是10美元。因此，学生的总费用计算中多出了90x美元的维护费用。正确的总费用公式应为360x + 100000美元。
```
### prompt模版：langchain提供
langchain提供了一些定义好的prompt模版。
```python
from langchain import hub
prompt = hub.pull("hwchase17/structured-chat-agent")
```
### 实际使用prompt的一些总结
发现语言模型不能理解“依次”的含义，用“循环”替换。
## Agent
agent的最强大的能力是让语言模型可以使用工具，在判断需要使用用户定义的工具解答问题时，就会调用工具解决用户问题而不是依靠自己的能力。（判断是否需要使用工具这一能力，其实是语言模型的function calling功能提供的）

agent可以做到：将输入任务拆分为子任务，按顺序给每个子任务选择一个合适的工具，每个子任务会返回一个结果，agent判断所有子任务都完成后，任务输入任务已完成，输出Finished chain结束任务。<br />所以，当使用了agent后，可以大大简化我们写的代码逻辑，因为上述agent实际上做的事情是：一个LLMChain将输入任务拆分为子任务，循环给每个子任务构造LLMChain，每个LLMChain返回结果后，自己组装答案。
### 有记忆的agent
> [https://python.langchain.com.cn/docs/modules/agents/how_to/custom_llm_agent](https://python.langchain.com.cn/docs/modules/agents/how_to/custom_llm_agent)

## 数据连接
> 参考：
> b站视频：[https://www.bilibili.com/video/BV1jN4y117qJ/?spm_id_from=pageDriver&vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8](https://www.bilibili.com/video/BV1jN4y117qJ/?spm_id_from=pageDriver&vd_source=d2ee6de80aecd10f87a2ffa4e6eea5b8)

数据连接各部分demo整合如下：
```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import JinaEmbeddings
from langchain.vectorstores import Chroma
# 加载pdf文档
loader = PyPDFLoader("/Users/qitmac001378/Desktop/AI/gpt.pdf")
documents = loader.load()
print("documents", '\t', len(documents))

# 定义文本分割器
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20,
    length_function=len,
)
# 使用文本分割器并返回分割后的pdf文档
pages = loader.load_and_split(text_splitter=text_splitter)
print("pages", '\t', len(pages))

# 文本词嵌入
embeddings_model = JinaEmbeddings(jina_api_key="jina_9439a3f4b180455bbfd8be06c35705e0ykQg2qZ77v4SWcYy0zm5MktkMTAf")
embeddings = embeddings_model.embed_documents([pages[0].page_content])
print("embeddings", len(embeddings), '\t', len(embeddings[0]), '\t', embeddings[0])

# 向量存储
db = Chroma.from_documents(pages, embeddings_model)
# 相似性搜索
docs = db.similarity_search("LLM")
print("docs", len(docs), '\t', docs[0].page_content)
```
### 文本词嵌入
没有openAPI的话，可以有其他的模型做文本词嵌入：[https://python.langchain.com.cn/docs/modules/data_connection/text_embedding/integrations/jina](https://python.langchain.com.cn/docs/modules/data_connection/text_embedding/integrations/jina)
#### jina做词嵌入
比如可以使用jina做，jina的api_key不需要注册就可以免费使用1百万token：<br />jina：[https://jina.ai/embeddings/#apiform](https://jina.ai/embeddings/#apiform)
```objectivec
from langchain.embeddings import JinaEmbeddings
embeddings_model = JinaEmbeddings(jina_api_key="jina_9439a3f4b180455bbfd8be06c35705e0ykQg2qZ77v4SWcYy0zm5MktkMTAf")
embeddings = embeddings_model.embed_documents([pages[0].page_content])
```
#### gml-4做词嵌入
gml-4也可以做词嵌入：[https://open.bigmodel.cn/dev/api#text_embedding](https://open.bigmodel.cn/dev/api#text_embedding)
#### ModelScopeEmbeddings
> 对中文适配较好

需要安装库：`modelscope`和pytorch<br />安装pytorch：去pytorch官网：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)，可以找到推荐的安装命令：`pip3 install torch torchvision torchaudio`
## langchain总结
### agent_executor的run()和invoke()方法的区别
agent_executor.run()方法的输入是字符串类型，返回值为output的内容：
```python
res = agent_executor.run("首页-->选择舱位-->点击展开选择浮层-->选择舱位点击【确定】-->list页-->代金券")
输出res：
仓位选择按钮, 仓位选择浮层, 仓位选择确定按钮, 营销条。
```
agent_executor.invoke()方法的输入是字典类型，返回值为input和output内容构成的字典：
```python
res = agent_executor.invoke({"input": "首页-->选择舱位-->点击展开选择浮层-->选择舱位点击【确定】-->点击搜索进list页筛选对应舱等的报价"})
输出res：
{'input': '首页-->选择舱位-->点击展开选择浮层-->选择舱位点击【确定】-->点击搜索进list页筛选对应舱等的报价', 'output': '"仓位选择按钮, 仓位选择浮层, 仓位选择确定按钮, 营销条"。这些是用户在首页和机票列表页中执行操作的最接近元素。'}
```
