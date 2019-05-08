// pages/clc_list/clc_list.js
var api = require("../../api/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  list:[],
	  listDetailUrl:"/pages/clc_listDetail/clc_listDetail"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.clc_downloadData()
  },
  clc_downloadData(){
	  wx.showLoading({
	  	title: '加载中...',
	  })
	  var self = this
	  var url = api.hotDetail
	  wx.request({
	  	url: url,
	  	success: function(res) {
	  		wx.hideLoading()
	  		var list = res.data.recent
	  		self.setData({
	  			list: list,
	  		})
			console.log(self.data.list)
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