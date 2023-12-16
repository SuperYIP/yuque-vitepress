> 参考：[https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=372251113](https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=372251113)

在`～/`目录下新建`.pip`文件夹，在`.pip`文件夹中新建`pip.conf`文件，在`pip.conf`文件中写入内容：
```
[global]
trusted-host=devpi.corp.qunar.com
index-url=http://devpi.corp.qunar.com/qunar/dev/+simple/
```
写入后执行pip3 install qunar_oss_sdk即可安装qunar_oss_sdk库。
