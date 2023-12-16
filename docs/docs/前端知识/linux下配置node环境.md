### 安装node
> 参考：[https://blog.csdn.net/u011262253/article/details/104903255](https://blog.csdn.net/u011262253/article/details/104903255)

### 解决报错：./node: /lib64/libc.so.6: version `GLIBC_2.16' not found (required by ./node)
> 参考：[https://blog.csdn.net/hh3167253066/article/details/120535789](https://blog.csdn.net/hh3167253066/article/details/120535789)

### 解决报错：ERROR: cannot verify ftp.gnu.org’s certificate, issued by “/C=US/O=Let's Encrypt/CN=R3”:   Issued certificate has expired.
> 参考：[https://www.jianshu.com/p/e0e0cab09e40](https://www.jianshu.com/p/e0e0cab09e40)

在下载不安全的https 域名下的内容时会有上述提示，原因是目标网站证书过期了，解决方法就在报错中，在命令最后加上  --no-check-certificate  即可。
