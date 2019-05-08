// pages/userInfo/userInfo.js

var api = require("../../interface/interface.js")


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imagePrefix:api.imagePrefix,
		headImage:"",

		selectHeadImage:"",
		isShowSelectImageBox:false,

		//是否选择了一个图片
		isSelectImage:false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		var user = wx.getStorageSync("user")
		this.setData({
			headImage:user.image,
			selectHeadImage: api.imagePrefix+user.image
		})

	},

	dealChooseImage(){

		var self = this

		wx.chooseImage({
			count:1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				const tempFilePaths = res.tempFilePaths


				console.log(tempFilePaths)

				if (tempFilePaths.length >= 1){

					var src = tempFilePaths[0]

					self.setData({
						selectHeadImage: src,
						isSelectImage: true
					})

				}
				
				
				
			}
		})

	},

	dealUploadImage(){

		var self = this

		if (this.data.isSelectImage == false){
			wx.showModal({
				title: '提示',
				content: "请先选择图片,再点击上传",
				showCancel:false
			})
		}

		var user = wx.getStorageSync("user")
		var token = wx.getStorageSync("token")

		//接口说明
		// url网址 传入 接口网址
		// filePath传入wx.chooseImage返回的图片的地址
		// name 传入图片的名字(不是文件名, 而是服务器后台用的名字,就是一个字符串)
		// formData传入额外的参数
		wx.uploadFile({
			url: api.changeHeadImageUrl, // 仅为示例，非真实的接口地址
			filePath: this.data.selectHeadImage,
			name: 'newHeadImage',
			formData: {
				m: 'user',
				a: 'changeHeadImage',
				userId:user.id,
				token:token
			},
			success(res) {
				var data = res.data
				// do something
				

				data = JSON.parse(data)

				console.log(data)

				if(data.code == 1){
					wx.showToast({
						title: '上传成功',
					})

					//修改当前显示url
					var canUseHeadImage = data.data.url
					self.setData({
						headImage: canUseHeadImage
					})

					//修改store中user的image属性
					user.image = canUseHeadImage
					wx.setStorageSync("user", user)

				}else{
					wx.showModal({
						title: '提示',
						content:"上传失败 desc="+data.desc,
						showCancel:false
					})
				}
			}
		})

	},

	dealShowSelectImageBox(){

		this.setData({
			isShowSelectImageBox: !this.data.isShowSelectImageBox
		})

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})