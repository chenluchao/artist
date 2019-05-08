var api = require("../../api/interface.js")
// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  keyword: "",
	  show: [],
	  list:[],
	  imgUrl:api.imagePrefix
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.downLoadData()
  },
  dealChange(e) {
  	var self = this
  	var keyword = e.detail.value
  	this.setData({
  		keyword: keyword
  	})
  	var url = api.musicListUrl + "&keyword=" + keyword
  	wx.request({
  		url: url,
  		data: {
  
  		},
  		header: {
  			'content-type': 'application/json'
  		},
  		success(res) {
  			var show = res.data.result
  			//console.log(res.data.result)
  			self.setData({
  				show: show
  			})
  		}
  	})
  	//console.log(this.data.keyword)
  },
  dealSearch() {
  	var self = this;
  	var keyword = self.data.keyword
  	var url = api.musicListUrl + "&keyword=" + keyword
  	wx.request({
  		url: url,
  		data: {
  
  		},
  		header: {
  			'content-type': 'application/json'
  		},
  		success(res) {
  			var show = res.data.result
  			//console.log(res.data.result)
  			self.setData({
  				show: show
  			})
  		}
  	})
  },
  downLoadData(){
  	  var self = this;
  	  wx.showLoading({
  	  	title: '加载中...',
  	  })
  	  var url = api.musicListUrl
  	  wx.request({
  	  	url:url,
  	  	data:{
  	  		
  	  	},
  	  	header:{
  	  		'content-type':'application/json'
  	  	},
  	  	success(res){
  			wx.hideLoading()
  			var list = res.data.result
  	  		//console.log(res.data)
  	  		self.setData({
  				list:list
  	  		})
  			console.log(list)
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
	  this.downLoadData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
	  this.downLoadData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})