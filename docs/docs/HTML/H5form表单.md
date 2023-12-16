```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>

<body>
    <!-- 
        属性：
        placeholder：默认提示
     -->
    <!-- 需要上传文件时，要将form表单的enctype属性修改为：enctype="multipart/form-data" -->
    <form action="" method="get" name="myForm" enctype="multipart/form-data">
        用户名： <input type="text" name="userName" value="你好">
        <br>
        密码：<input type="password" name="password">
        <br>
        <!-- 多个单选按钮设置相同的name值，则这多个按钮只能同时选中一个。 -->
        性别：
        <!-- label标签：使点击文字具有和点击单选框同样的效果，通过for属性和input中的id属性绑定。也可以直接用label标签包裹input -->
        <input type="radio" name="sex" id="man"> <label for="man">男</label>
        <label> <input type="radio" name="sex"> 女</label>
        <br>
        <p>爱好：<input type="checkbox"> 篮球 <input type="checkbox"> 乒乓球</p>

        <!-- 提交按钮 -->
        <p> <input type="submit" value="登陆"> <input type="reset"></p> <!-- submit的value默认为提交 -->
        <p><input type="image" src="" alt="图片"></p> <!-- 图片提交按钮：点击图片即可提交 -->

        城市：
        <select name="city">
            <option value="0">北京</option>
            <option value="1">上海</option>
        </select>

        <p>
            自我介绍：
            <textarea name="myself" cols="10" rows="2"></textarea>
        </p>

        <p>
            上传文件：<input type="file">
        </p>
        <!-- 隐藏域：用户看不到，但是其携带的信息可以正常提交 -->
        <input type="hidden">
        <!-- H5新增属性 -->
        <p> 邮箱：<input type="email"></p> <!-- 邮箱 -->
        <p> 网址：<input type="url"></p> <!-- 网址 -->
        <p> 搜索：<input type="search" placeholder="热点"></p> <!-- 搜索 -->
        <p> 颜色：<input type="color"></p> <!-- 颜色 -->
        <p> 电话：<input type="tel"></p> <!-- 电话 -->
        <p> 数字：<input type="number" min="0" max="100" step="5"></p> <!-- 数字 -->
        <p> 滑块：<input type="range" min="0" max="100" step="1" value="0"></p> <!-- 滑块 -->
        <p> 日期：<input type="date"> </p> <!-- 日期，type值可以改为month：月、week：周 -->
    </form>
</body>

</html>
```
