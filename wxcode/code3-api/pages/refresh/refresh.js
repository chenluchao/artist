// pages/refresh/refresh.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		page:1,
		list:[]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		this.downloadData()

	},

	dealShowRefresh(){

		wx.startPullDownRefresh({
			
		})

	},

	downloadData(){
		var self = this;

		wx.showLoading({
			title: '正在下载数据',
		})

		setTimeout(function(){

			var list = []
			if(self.data.page != 1){
				list = self.data.list
			}
			for (var i = 0; i < 10; i++) {
				var v = (Math.random() * 100).toFixed(0)
				list.push(v)
			}

			self.setData({
				list: list
			})

			wx.hideLoading()
			wx.stopPullDownRefresh()

		},2000)
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
		console.log("onPullDownRefresh")

		this.setData({
			page:1
		})
		this.downloadData()
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		console.log("onReachBottom")

		var newPage = this.data.page + 1
		this.setData({
			page: newPage
		})
		this.downloadData()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})