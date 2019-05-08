#微信小程序

##1.基础

###1.1 微信小程序介绍

###1.2 下载，安装，登录

###1.3 创建项目（复习）

    project.config.json  项目设置文件
        核心属性：appid
             每个项目不同的id， 这个id是由微信小程序网站后台产生
        核心属性：projectname 项目名字

    app.json 应用配置文件
        pages属性， 这个是个数组， 所有界面的路径都放这儿
            注意1： 这个数组中，添加一个页面的路径， 页面会自动创建
            注意2：这个数组中，第一个路径对应的界面， 是应用第一个显示的界面

        window属性
            控制所有的界面 顶部的文字和样式

    app.js 程序入口
        作用: 创建App对象,  以后如果有代码, 需要初始化一次, 就放在这儿


    app.wxss 整个程序的样式文件
        作用: 这儿写的样式, 所有的界面中都会生效, 但是如果和界面本身的样式冲突,页面中样式优先级,要比这个要高


    界面 test.wxml
        作用: 这是一个界面 结构文件, 里面都放微信小程序的  组件, 例如 <text> <view> <button> <image> .....

    界面 test.wxss
        作用：这是一个界面样式文件， 里面放css， 需要注意， 支持的选择器只是一小部分。。。。

    界面 test.js
        作用： 这是界面的逻辑文件， 里面创建对象Page对象，
        核心属性1： data 页面初始数据
        核心函数1： onLoad 页面加载执行一次

    界面 test.json
        作用: 添加的配置覆盖全局的配置, 具体格式,参考文档


    创建界面的方式有几种？
        方式1： 直接添加路径
        方式2： 一般先新建目录(可以不创建), 右键点击新建Page, 创建页面(默认4个文件)

### 范例: 输入两个数据， 点击计算按钮， 输出两数之和

        小难点1：数据绑定
            先定义数据, 数据放在data属性中, 如果属性名是v1, 获取方式 this.data.v1, 显示方式 {{v1}}
                修改方式 this.setData({v1:2000})

        小难点2: 点击事件处理
            通过bindtap="函数名字", 函数定义在js文件中,位置随意,推荐大家把自己的函数写在 onLoad下面

        小难点3：数据框数据获取
            通过bindinput="函数名字", 添加数据改变处理函数, 处理函数中传过来event, 拿到event.detail.value

##2.常用组件

### view

    类似html中div,是容器

### scroll-view

    简介: 实现滚动效果, 核心属性

    案例1: 要实现纵向滚动
        容器中放了很多元素,所有元素高度超出了容器高度,默认不能滚动
        添加 scroll-y="true", 实现了纵向滚动

    案例2: 实现横向滚动


    注意1: 默认不滚动

    注意2: 有的时候实现吸顶效果, 需要检查当前滚动位置
        纵向滚动, 变化 scrollTop, 横向滚动变化scrollLeft

### swiper

    实现轮播图

    核心属性:
        autoplay 是否自动播放
        interval 间隔
        duration 持续时间
        vertical 方向

    案例1: 实现一个简单的轮播图
        在swiper这个组件添加多个swiper-item
        swiper-item中内容,设置一个高度
        注意: 默认不会循环滚动,也不会自动滚动

    案例2: 实现带循环滚动,自动滚动,指示点的轮播图
        autoplay="true" circular="true" indicator-dots="true"

### icon

    图标组件

### text

    文本

### rich-text

    富文本组件,
    作用: 用于显示html
    使用: 添加组件, 设置属性nodes, nodes传入html数据, html对应的样式写入wxss文件

### progress

    进度条
    作用: 显示耗时任务的进度, 耗时任务经常是网络,文件操作相关的任务

    最简单案例:
        添加一个progress, 设置属性percent, 注意因为进度需要改变, 往往percent的值,从data获取的值

    设置样式
        stroke-width 较为常见

    设置动画
        使用active属性

### button

    按钮组件

    作用: 让用户点击, 执行一些任务

    最简单案例:
        添加button组件, 添加事件处理方法  bindtap="dealTap"

### checkbox

    复选

    最简单案例: 选择喜欢的爱好
        添加checkbox-group组件,内部添加多个checkbox, 每个checkbox设置value, 组件内部设置显示文本

        注意1: checkbox添加checked属性是默认选中

        checkbox-group添加bindchange去获取e.detail, e.detail.value就是选择的数据的数组

### input

    输入框

### picker (底部弹出框)

    滚动选择器

    最简单使用
        (1)定义数组
        (2)添加picker组件, 设置range为刚才的数组, 注意: 默认不显示
        (3)picker组件显示文本,显示选择的数据

### picker-view (页面内部的视图)

    选择器

### radio

    单选

### slider

    滑块

### switch

    开关

### textarea

    文本域

### navigator

    导航 类似html中a标签


    跳转方式1:  A界面跳转到B界面, B界面覆盖在A界面之上
        open-type="navigate"

    跳转方式2:  B界面显示,替换A界面, A界面没有了
        open-type="redirect"

    跳转方式3:  某个界面跳转到 tabbar的某个界面
        open-type="switchTab"

    跳转方式4:   A界面跳转到B界面, B界面直接返回上个界面
        open-type="navigateBack"


    注意: url填入相对路径或者绝对路径
        绝对路径以/开始, 一般是  /pages/

        相对路径, 表示跳转的界面相对于当前界面的路径
        ..表示上级目录
        .表示当前目录

### audio(API)

    播放音乐

### image

    显示图像

    对比html中img:

        相同: 都是显示图片

        不同: img标签显示图片和image组件不同,image组件默认铺满整个image,不保持纵横比
            重要属性mode="",常用scaleToFill, aspectFit, widthFix, center

    注意: 微信小程序大小限制为2M, 所以除了一些特别小的图片, 所有图片应该放到服务器上,通过image和对应网址加载图片

### video(API)

    显示视频

### camera

    摄像/摄影

### map

    地图

### canvas

    绘图

### web-view

    显示一个网址对应的网页

    简单实用:
        1.添加组件,设置src
        2.添加一些事件处理函数处理load和error事件

    注意: 微信小程序中网址要求是https的, 要求在后台把这些域名加入到白名单中

    注意: 开发没有这个条件, 怎么办, 设置中开启不校验网址

##3.常用 API

### 路由 API

        包含界面跳转各个函数

        wx.navigateTo({})   跳转到指定的页面
        wx.navigateBack({}) 返回上级界面(指定返回层级数)
        wx.switchTab({})    切换到tabbar中个某个界面
        wx.redirectTo({})   关闭当前界面, 用指定的界面替换

### 界面-交互

    显示消息提示框

        案例1: 简单实用
            添加这个函数, 传入一个对象, 必填参数title

            额外, 设置时间,遮罩


    显示模态框
        案例1: 简单实用
            添加这个函数, 传入一个对象, 必填参数title,content

            额外, 一般情况下, 设置success回调函数, 处理点击确认的操作


    显示loading/关闭loading

        实用案例:
            开始网络请求 wx.request 显示loading, 当数据下载之后, 回调函数中关闭loading

### 界面-Tabbar

    显示小红点 wx.showTabBarRedDot(Object object)
    隐藏小红点 wx.hideTabBarRedDot(Object object)

    显示标签栏 wx.showTabBar(Object object)
    隐藏标签栏 wx.hideTabBar(Object object)

### 界面-下拉刷新/上拉加载更多

    基本使用案例1:
        (1)要在page.json中或者app.json添加属性,开启下拉刷新,设置loading颜色
            "enablePullDownRefresh":true,
            "backgroundTextStyle":"dark"

        (2)实现下拉刷新的处理
            onPullDownRefresh 创建页面已经在Page()对象中


    上拉加载更多
        核心: 知道什么时候到底部了?
            通过函数 onReachBottom, (这个函数默认就有)


    代码核心逻辑:
        如果是下拉刷新, page=1, 下载新的数据, 以前的数据不要了
        如果是上拉加载更多, page++, 下载的数据附加到原来数据的后面

        开始下载显示loading,
        结束加载的时候隐藏loading

        注意: 代码中通过setTimeout模拟了下载, 其中引用this使用self

### 网络-发起请求

    wx.request({
        url: 'test.php', // 仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
            x: '',
            y: ''
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success(res) {
            console.log(res.data)
        }
    })

### 数据缓存

    持久化存储和获取数据(和网页localStorage非常相似)

    基本实例1: 使用4个函数
        setStorageSync 存储
        getStorageSync 获取
        removeStorageSync 移除某个数据
        clearStorageSync 清除所有storage数据

### 位置

    定位的函数

    wx.getLocation({
        type: 'wgs84',
        success(res) {
            const latitude = res.latitude
            const longitude = res.longitude
            const speed = res.speed
            const accuracy = res.accuracy

            console.log(res)
        }
    })

### 用户登录/用户信息

    默认代码功能:


    app.js中onload执行两个函数,第一个函数 wx.login() 实现登录
        第二个函数 wx.getSetting获取用户信息
        存储到app对象的globalData中

    其他界面,先通过 const app = getApp()获取app对象
        直接获取用户信息 app.globalData.userInfo
        userInfo中nickname是昵称
        avatarUrl是头像图片的URL

### 设备-网络状态

    wx.getNetworkType  执行一次,获取当前的网络状态
    wx.onNetworkStatusChange() 当网络状态改变执行
        4g->wifi
        wifi->4g
        4g->断网
        wifi->断网
        .....

### 设备-打电话

### 设备-扫码

##4.项目

豆瓣简易版

文艺范

1.框架搭建和资源导入
1.1 创建项目
1.2 导入资源
1.3 创建需要的界面
1.4 添加 tabBar

2.首页
2.1 导入需要 js
interface.js

3.阅读列表页

4.阅读详情页

5.音乐列表页

6.音乐详情页

7.影视列表页

8.影视详情页

9.搜索功能

    检查: 接口是否可用

10.注册

11.登录

12.用户中心

13.收藏
(1) 详情页中底部添加工具栏(收藏,点赞,评论,分享)

    问题:
        <1>. 如何发起收藏某个文章请求?
            用户id=5,itemid=10813, type=1
            //收藏
            http://127.0.0.1/project/artist-v3/api/index.php?m=favorite&a=saveFavorite&userId=x&itemId=10813&type=1&token=x

            //取消收藏
            http://127.0.0.1/project/artist-v3/api/index.php?m=favorite&a=cancelFavorite&userId=x&itemId=10813&type=1&token=x

            //获取数据详情 - 添加userId和token有属性is_collect
            http://127.0.0.1/project/artist-v3/api/index.php?m=read&a=detail&id=10813&userId=x&token=x
                is_collect=0/1


        <2>代码逻辑
            如果没有登录, 弹出是否跳转

            如果登录, 给获取详情接口传入userId和token,根据这个值显示是否收藏

            点了收藏,如果没有收藏, 发起收藏请求
            点了收藏,如果已经收藏, 发起取消收藏请求

    显示所有用户已经收藏的文章
        问题1: 在什么地方显示?
            用户中心 -> 收藏页面(三个)

        问题2: 如何获取用户的收藏?
            发起获取收藏的请求 getFavoriteUrl
            案例:
            http://127.0.0.1/project/artist-v3/api/index.php?m=favorite&a=getFavorite&userId=5&type=1&token=9257bb7746768dbf77b4e0493fec240e
            http://127.0.0.1/project/artist-v3/api/index.php?m=favorite&a=getFavorite&userId=x&type=1&token=x

        问题: 显示所有收藏,点击收藏查看对应的文章
            根据category进行跳转


        代码流程
            <1> 创建阅读收藏界面, 跳转过去
            <2> 定义list通过请求获取数据


            <3> 显示获取的数据
            <4> 每个收藏点击之后跳转到对应的文章


    练习:
        音乐收藏
            注意: 获取音乐收藏列表, 用type=4
        影视收藏
             注意: 获取影视收藏列表, 用type=5

14.点赞

    问题:
        <1>如何知道是否点赞
            http://127.0.0.1/project/artist-v3/api/index.php?m=read&a=detail&id=10813&userId=5&token=01858163690ee3c36b12641be6b13946

            传入userId和token, 有个属性is_good 这个值为1,表示已经点赞,为0没有点赞

        <2>如何实现点赞
            http://127.0.0.1/project/artist-v3/api/index.php?m=good&a=addGood&userId=5&itemId=10813&token=01858163690ee3c36b12641be6b13946

        <3>如何取消点赞
            http://127.0.0.1/project/artist-v3/api/index.php?m=good&a=cancelGood&userId=5&itemId=10813&token=01858163690ee3c36b12641be6b13946



    逻辑:
        <1>显示当前点赞状态
            readDetail.js 中 downloadData 获取当前详情 is_good数据, 根据这个数据显示是否点赞

        <2>如果没有登录, 点击点赞 弹框显示是否跳转
            新建事件函数, readDetail.js dealGood()

        <3>如果没有点赞,点赞
            readDetail.js dealGood() 发起请求,发起点赞请求

        <4>如果已经点赞, 取消店在哪
            readDetail.js dealGood() 发起请求,发起取消点赞请求

15.评论

    功能:
        <1>点击评论按钮, 打开评论列表, 显示评论列表

        <2>评论列表底部添加按钮[发表新评论], 点击弹出输入框输入评论,可以发表评论


    问题:
        <1> 如何获取评论列表?
            http://127.0.0.1/project/artist-v3/api/index.php?m=comment&a=getComment&itemId=10813
            http://127.0.0.1/project/artist-v3/api/index.php?m=comment&a=getComment&itemId=10813&order=desc

        <2> 如何发表评论?
            http://127.0.0.1/project/artist-v3/api/index.php?m=comment&a=addComment&userId=5&itemId=10813&comment=aaaa&token=01858163690ee3c36b12641be6b13946


        <3> 弹框如何实现?
            底部创建view,这个view的postion是fiexd默认不显示, 点击发表评论去显示

    逻辑:
        S1: 创建评论界面, 点击评论按钮,跳转到评论界面

16.分享

    分享形式: 网页中使用 分享工具
            微信小程序-转发

    问题
        <1>在网页内容如何实现分享?
            最简单形式利用开发分享库, 例如百度分享

        <2>微信小程序如何实现分享?
            默认自带分享功能, 页面右上角点击, 点击转发, 就能转发小程序内容
            另外一种形式, 给button添加属性 open-type="share"

        <3>如何自定义分享内容
            任何微信转发都会执行函数onShareAppMessage: function (res)
            函数内部返回一个对象,去定义分享的内容

        <4>分享如何带上一些参数
            path写成这种类型 path: '/page/home/home?id=123'
            其他人打开home界面, onLoad的options带上id=123

    参考文档:
        https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html

17.用户信息修改-用户头像上传

    问题:
        <1> 在微信小程序如何选择图片文件
            复习: 网页中添加input标签, 这个标签type="file"

            使用API接口: wx.chooseImage(Object object)


        <2>如何显示选择的图片(预览)
            chooseImage成功返回的tempFilePath可以作为img标签的src属性显示图片


        <3>图像的上传
             wx.uploadFile(Object object)

    功能逻辑:
        <1> 先创建界面, 点击个人设置跳转到这个界面
        <2> 界面先显示当前头像

        <3> 点击头像显示一个弹框(选择图片,预览图片)
        <4> 选择一个图片,显示这个图片的预览
        <5> 添加上传头像功能, 服务器发送最新的头像
        <6> 本地store存储头像和服务器头像不一样, 获取用户信息, 更新当前的头像信息

练习
用户信息模块补全(接口: 修改昵称,修改密码)
信息设置页面补全(接口: 提交用户反馈)

##5.练习项目

......
