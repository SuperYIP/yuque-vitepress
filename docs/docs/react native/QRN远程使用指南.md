QRN 是公司内部基于 React Native 深度定制的移动平台框架，在使用的过程中需要连接公司内网，远程操作的方式比较繁琐，本文针对 QRN 远程使用的一些方法进行了总结，涉及公司机密的部分均上传至本地图库，不存在泄密风险。
## 前期准备
由于 QRN 的使用需要连接内网，所以在远程使用的情况下需先确认电脑连接了 VPN
## 模拟器
QRN 运行后的效果可以通过模拟器来查看，由于模拟器运行在 localhost 下，因此可以直接在本地进行开发，具体步骤如下：<br />1、Xcode 在安装时内部集成了 ios 模拟器，在控制台内输入 `open -a Simulator` 即可运行<br />2、运行完成后将下载的 ios 大客户端包拖进模拟器，5.1.2 版本的下载地址为 [http://cmyum.corp.qunar.com/mobile_app/ios/m_qunar_iphone_5.0/tags/5.1.2-beta.release.812/](http://cmyum.corp.qunar.com/mobile_app/ios/m_qunar_iphone_5.0/tags/5.1.2-beta.release.812/)<br />3、运行模拟器上的客户端，正常配置信息即可（由于模拟器运行在本地，所以在 host 中直接输入 localhost 也可以正常使用）
## 真机
在 Mac 连接网线时可以通过热点的方式使 Mac 和手机处于同一网络环境下，但 Mac 在连接 VPN 时无法开启热点，这时需在手机上也开启 VPN 服务，为电脑和手机创造同样的网络环境。手机安装及配置VPN教程：[Qunar手机端配置VPN](http://qunar.it/#/it/show/7713)

手机端配置好VPN后，手机与电脑已处于同一网络环境（公司内网）下，但是由于 QRN 在连接 VPN 后 host 会发生改变，在手机端的调试包中配置信息时需要修改 host 的值，首先在电脑的控制台上输入下方指令：

| ifconfig -a &#124; grep inet &#124; grep -v 127.0.0.1 &#124; grep -v inet6 &#124; awk '{print $2}' &#124; tr -d "addr:"  |
| --- |

输入完成后会看到如图所示的效果，打印出的两个 ip 地址分别是本地 host 和连接 VPN 后生成的网络 host<br />![image.png](../../images/52b5eafa8af497b70f5dce6464dda763.png)
```
Last login: Wed Aug  9 11:35:06 on ttys005
qitmac001378@QITMAC001378deMacBook-Pro ~ % ifconfig -a | grep inet | grep -v 127.0.0.1 | grep -v inet6 | awk '{print $2}' | tr -d "addr:"

100.80.38.132			// 本地host
100.80.128.232		// 连接VPN后生成的网络host
```
在配置时将QRN调试页面的host 配置成下面的 ip 地址（即连接 VPN 后生成的网络 host）即可
