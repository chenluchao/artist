var api = require("../../interface/interface.js")
var validate = require("../../validate/validate.js")

// pages/reg/reg.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		username:"aaaa",
		password:"1234",
		repeatPassword:"1234",
		phone:"13611112222"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	dealInput(e) {
		var v = e.detail.value
		var id = e.currentTarget.id
		var dict = {}
		dict[id] = v

		this.setData(dict)
	},

	dealReg(){

		//数据校验
		//用户名 4-20
		//密码 4-20
		//手机号  手机号规则
		//密码和重复密码一致

		//真正的注册
		if (!validate.checkStringLength(this.data.username,4,20)){

			wx.showModal({
				title: '',
				content: '用户名长度应为4~20位',
				showCancel:false
			})
			return
		}

		if (!validate.checkStringLength(this.data.password, 4, 20)) {

			wx.showModal({
				title: '',
				content: '密码长度应为4~20位',
				showCancel: false
			})
			return
		}

		if (!validate.checkStringLength(this.data.repeatPassword, 4, 20)) {

			wx.showModal({
				title: '',
				content: '重复密码长度应为4~20位',
				showCancel: false
			})
			return
		}

		if (this.data.password != this.data.repeatPassword) {

			wx.showModal({
				title: '',
				content: '密码和重复密码不一致',
				showCancel: false
			})
			return
		}

		if (!validate.checkMobile(this.data.phone)) {

			wx.showModal({
				title: '',
				content: '请输入格式正确的手机号',
				showCancel: false
			})
			return
		}

		


		//真正注册
		var url = api.registerUrl

		var self = this

		wx.showLoading({
			title: '正在注册',
		})

		wx.request({
			url: url,
			data:{
				username:self.data.username,
				password: self.data.password,
				phone: self.data.phone
			},
			success: function (res) {
				var data = res.data
				//console.log(data)

				wx.hideLoading()

				if (data.code == 1){
					wx.showModal({
						title: '注册结果',
						content:"注册成功,是否跳转到登录界面?",
						success: function (res){

							if (res.confirm) {
								console.log('用户点击确定')

								console.log("1111")
								wx.navigateTo({
									url: '/pages/login/login',
								})

							} else if (res.cancel) {
								console.log('用户点击取消')
							}

						}
					})
				}
				else{
					wx.showModal({
						title: '注册结果',
						content: "注册失败,desc="+data.desc,
						showCancel:false
					})
				}


				//console.log(self.data.list)

				

	

			}
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