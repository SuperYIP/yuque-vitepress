> 网页端Chat：[https://open.bigmodel.cn/trialcenter](https://open.bigmodel.cn/trialcenter)
> 接口文档：[https://open.bigmodel.cn/dev/api#glm-4](https://open.bigmodel.cn/dev/api#glm-4)



### langchain调用zhipuAPI1
#### 方式1: 按下述方式定义，通过`sse`调用，在ChatOpenAI()方法中传入参数即可：
> 参考：[https://zhuanlan.zhihu.com/p/679421001](https://zhuanlan.zhihu.com/p/679421001)

```objectivec
import time
import jwt

API_KEY = '0af93d789eb884ad8769ba184762f3c9.B43EcCoVBtNGaVFa'


def generate_token(apikey: str, exp_seconds: int):
    try:
        id, secret = apikey.split(".")
    except Exception as e:
        raise Exception("invalid apikey", e)

    payload = {
        "api_key": id,
        "exp": int(round(time.time() * 1000)) + exp_seconds * 1000,
        "timestamp": int(round(time.time() * 1000)),
    }

    return jwt.encode(
        payload,
        secret,
        algorithm="HS256",
        headers={"alg": "HS256", "sign_type": "SIGN"},
    )

```
```objectivec
chat_model = ChatOpenAI(
    model_name="glm-4",
    openai_api_base="https://open.bigmodel.cn/api/paas/v4",
    openai_api_key=generate_token(API_KEY, 3600),
    streaming=False,
)
```
#### 方式2: 改源码，在langchain_community.chat_models中增加ChatZhipuA类
> [https://juejin.cn/post/7329194915683565606](https://juejin.cn/post/7329194915683565606)
> 大佬提交的代码：[https://github.com/langchain-ai/langchain/pull/16459/commits/eb62d480f8c0dde3cbfe07e1c2ee231e4c99db34#diff-cdc87e18ef976c1fc0f17bfbbfd19ffbe106a955c4a74cbe4881ca2ddd3eeaae](https://github.com/langchain-ai/langchain/pull/16459/commits/eb62d480f8c0dde3cbfe07e1c2ee231e4c99db34#diff-cdc87e18ef976c1fc0f17bfbbfd19ffbe106a955c4a74cbe4881ca2ddd3eeaae)


