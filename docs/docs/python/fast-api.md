### 启动服务
#### 启动服务：--reload表示热加载，修改代码后不需要重启服务，保存代码即可生效
```objectivec
uvicorn main:app --reload
```
#### 启动服务：指定ip和端口，端口默认是8000：
mac电脑ip获取方式：`ifconfig | grep "inet" | grep "100"`
```python
uvicorn main:app --host 100.80.16.54 --port 8000 --reload
```
