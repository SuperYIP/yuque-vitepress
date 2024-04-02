
### 定义print()输出的文字颜色：colorama库
```python
from colorama import Fore
print(Fore.RED, '此print输出的内容就都是红色的了')
```
### 将字符串转换为其中包含的数据类型，如："字典"，"列表"字符串转换为字典、列表类型
```python
import ast
res_str = "[1,2,3]"
res_list = ast.literal_eval(res_str)
```
