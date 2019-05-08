// pages/musicDetail/musicDetail.js

var api = require("../../api/interface.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  item:{},
	  imagePrefix: api.imagePrefix
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var id = options.id
	  //console.log(options)
	  this.downloadData(id)
  },
  downloadData(id){
  	var self = this
  	wx.showLoading({
  		title: '加载中...',
  	})
  	var url = api.musicDetailUrl+"&id="+id
  	wx.request({
  		url: url,
  		success: function (res) {
  			wx.hideLoading()
  			//console.log(res.data)
  			self.setData({
  				item: res.data.result
  			})
  			wx.setNavigationBarTitle({
  				title: self.data.item.name
  			})
			console.log(self.data.item)
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