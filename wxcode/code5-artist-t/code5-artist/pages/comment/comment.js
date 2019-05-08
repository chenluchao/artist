var api = require("../../interface/interface.js")

// pages/comment/comment.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list:[],
		imagePrefix: api.imagePrefix,

		//是否显示评论框
		isShowCommetView:false,
		inputNumbers:500,
		comment:"",

		itemId:0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log("id=" + options.id)

		var id = options.id

		this.setData({
			itemId: id
		})

		this.downloadData(id)
	},

	dealSend(){
		var url = api.addCommentUrl
		var self = this
		var user = wx.getStorageSync("user")
		var token = wx.getStorageSync("token")
		wx.request({
			url: url,
			data:{
				itemId: self.data.itemId,
				comment: self.data.comment,
				userId: user.id,
				token: token
			},success:function(res){
				var data = res.data
				if(data.code == "1"){
					wx.showToast({
						title: '发送评论完成'
					})
					self.setData({
						isShowCommetView: false,
						comment:""
					})
					self.downloadData(self.data.itemId)
				}else{
					wx.showToast({
						title: '发送评论失败 desc='+data.desc,
					})
				}
			}
		})

	},

	dealInput(e){
		var value = e.detail.value

		var newNumbers = 500 - value.length
		this.setData({
			comment: value,
			inputNumbers: newNumbers
		})
		console.log("comment = "+this.data.comment)
	},

	dealHide(){

		this.setData({
			isShowCommetView: false
		})
	},

	dealShow(){
		this.setData({
			isShowCommetView: true
		})
	},

	downloadData(id){
		
		var url = api.getCommentUrl+"&itemId="+id+"&order=desc"

		var self = this

		wx.request({
			url: url,
			success: function (res) {
				var data = res.data
				console.log(data)

				var list = data.data

				self.setData({
					list:list
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