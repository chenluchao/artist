// pages/clc_home/clc_home.js
var api = require("../../api/api.js")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		ads: [],
		list: [],
		data: [],
		datalist:[],
		homeDetailUrl: "/pages/clc_homeDetail/clc_homeDetail",
		ago:1,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.clc_downloadData()
	},
	clc_downloadMore() {
		var self = this
		var timestamp = Date.parse(new Date());
		var date = new Date(timestamp);
		//年  
		var Y = date.getFullYear();
		//月  
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
		//日  
		var D = (date.getDate() - self.data.ago) < 10 ? '0' + (date.getDate() - self.data.ago) : (date.getDate() - self.data.ago);
		
		var nowData = Y + M + D
		//console.log(nowData)
		wx.showLoading({
			title: '加载中...',
		})
		var url = api.more + nowData
		wx.request({
			url: url,
			success: function(res) {
				wx.hideLoading()
				var datalist = self.data.datalist
				datalist.push(res.data)
				var ago = self.data.ago + 1
				self.setData({
					ago:ago,
					datalist:datalist
				})
				//console.log(self.data.datalist)
			},
			fail: function() {
				wx.hideLoading()
				wx.showModal({
					title: '提示',
					content: "请求超时，请重试",
					showCancel: false
				})
			}
		})
	},
	clc_downloadData() {
		wx.showLoading({
			title: '加载中...',
		})
		var self = this
		var url = api.lastUpData
		wx.request({
			url: url,
			success: function(res) {
				wx.hideLoading()
				var ads = res.data.top_stories
				var list = res.data.stories
				self.setData({
					ads: ads,
					list: list,
				})
				//console.log(self.data.list)
			},
			fail: function() {
				wx.showModal({
					title: '提示',
					content: "请求超时，下拉刷新",
					showCancel: false
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {
		this.setData({
			datalist:[]
		})
		this.clc_downloadData()
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
