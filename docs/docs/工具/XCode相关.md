## 一. 模拟器相关
### 打开手机模拟器
#### 通过Xcode打开
![image.png](../../images/560e7404aefe5d21554629df485cd91c.png)
#### 通过终端命令打开
```python
open -a Simulator
```
### 打开不同型号的手机模拟器
#### 方式1: 按下图操作。首先执行步骤1打开手机模拟器，然后按下图选择要打开的手机模拟器。
![image.png](../../images/934d012d24538b22599de16c4d75e276.png)
#### 方式2: 在扩展坞中右键Simulator，切换模拟器。
![image.png](../../images/d0cb2ab75c8d9dd3838747e2d6075d69.png)
### 新建新的手机型号
#### 新建：填写手机名称、选择手机型号和操作系统版本即可
![image.png](../../images/2d8551b629b3d49d229afb0d9fa2a552.png)
#### 注意：在新建模拟器时，有可能已有的IOS系统版本不支持较老的手机型号(比如此时只有IOS17，但是iphoneX及以前的手机最大只能使用IOS16系统)，此时需要再安装一个老版本的IOS系统。
此时，需要打开Xcode，Window -> Devices and Simulators<br />![image.png](../../images/3771506722318822fdc7f42ad4714d39.png)<br />点击左小角 加号 （新建模拟器的步骤），在OS Version中选择 下载更多模拟器运行环境。<br />![image.png](../../images/4d0b1df0b4858cac8e9cf5e0040c53c8.png)<br />在弹出的界面点击左下角 加号，我们要安装手机的系统，则选择IOS<br />![image.png](../../images/5d83e6e26f876a40ff87e475f515f7c8.png)<br />选择要安装的系统，安装即可。安装完成后，新建手机模拟器时就可以选择使用此版本的系统了。<br />![image.png](../../images/3d5691641d8b707931a943204430bf3a.png)
### 删除手机模拟器（需要打开XCode）
打开XCode，Window -> Devices and Simulators<br />![image.png](../../images/3771506722318822fdc7f42ad4714d39.png)<br />在弹出的操作界面，选择你要操作的模拟器，右键即可操作。<br />![image.png](../../images/d4acc5e149948e0e24fb69480464462d.png)


