### 主服务
主服务中common/utils/config.json中将apk_url改为最新的安卓url即可：<br />主服务配置后会在每次跑case时自动在手机中安装这个apk_url中的包。（只会在真机上这样做，云手机不这样做，因为太卡了）
```
{
    "apk_url": "http://cmyum.corp.qunar.com/mobile_app/android/adr_llama_finn_app/tags/60001576-rc.major.4344_debug/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk",
    "install_qp_retry_count": 14,
    "install_qp_timeout": 15,
    "run_case_time_sleep": 1,
    "project_case_run_on_cloud_phone": true,
    "not_run_on_cloud_phone": "3",
    "project_not_run_on_cloud_phone": "1,3,7",
    "reserve_device": false,
    "reserve_device_all_task": false
}
```
### 从服务
通过脚本将从服务控制的手机统一安装指定的app包。3台从服务器上都需要执行一次。需要先将app包下载到本地：`/Users/qitnac000392/Desktop/Tars/download/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk`
```
import os, time
count = 20
index = 0
while index < count:
    localport = 10002 + index * 5
    ip = 2 + index
    ssh_cmd = f'sudo ssh -L {localport}:10.237.0.{ip}:5555 0d360d3f0580f30b2fc6c005ba984ac9@123.249.99.210 -i /Users/qitnac000392/Desktop/KeyPair-dfc5.pem -o ServerAliveInterval=30 -Nf'
    connect_cmd = f'adb connect 127.0.0.1:{localport}'
    # os.system(ssh_cmd)
    # time.sleep(1)
    # os.system(connect_cmd)
    # time.sleep(1)
    # reboot_cmd = f'adb -s 127.0.0.1:{localport} reboot'
    # os.system(reboot_cmd)
    # time.sleep(1)
    # disconnect = f'adb disconnect 127.0.0.1:{localport}'
    # os.system(disconnect)
    # time.sleep(1)
    install = f'adb -s 127.0.0.1:{localport} install -r -d -g /Users/qitnac000392/Desktop/Tars/download/Qunar_Llama_C9999_10.2.10_60001576_major_arm64_v8a_beta_20240102_1429.apk'
    os.system(install)
    time.sleep(1)
    index = index + 1
```
