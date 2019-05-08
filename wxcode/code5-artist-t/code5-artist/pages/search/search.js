var api = require("../../interface/interface.js")


// pages/search/search.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		keyword:"我们",
		list:[],
		imagePrefix: api.imagePrefix
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	dealSearch(){
		var keyword = this.data.keyword
		console.log("keyword=" + keyword)


		var url = api.searchUrl + "&keyword=" + keyword

		var self = this

		wx.showLoading({
			title: '正在搜索',
		})

		wx.request({
			url: url,
			success: function (res) {
				var data = res.data
				console.log(data)

				var list = data.data

				for (var item of list) {
					if (item.category == 1) {
						item.categoryName = "阅读"
						item.pageName = "/pages/readDetail/readDetail"
					}
					if (item.category == 4) {
						item.categoryName = "音乐"
						item.pageName = "/pages/musicDetail/musicDetail"
					}
					if (item.category == 5) {
						item.categoryName = "影视"
						item.pageName = "/pages/movieDetail/movieDetail"
					}
				}

				self.setData({
					list: list
				})

				//console.log(self.data.list)

				

				wx.hideLoading()

				wx.showToast({
					title: '搜索完成',
				})

			}
		})
	},

	dealInput(e){
		var v = e.detail.value
		var id = e.currentTarget.id
		var dict = {}
		dict[id] = v

		this.setData(dict)
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