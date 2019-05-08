// pages/test/test.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		v1:100,
		v2:200,
		r:0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	dealInput(event){
		//console.log(event)

		var id = event.currentTarget.id
		var value = event.detail.value
		console.log("id="+id)
		console.log("v="+value)

		var dict = {}
		dict[id] = value
		this.setData(dict)
	},

	dealAdd(){
		console.log("hehe")

		var v1 = parseFloat(this.data.v1)
		var v2 = parseFloat(this.data.v2)
		var sum = v1+v2

		//this.data.r = sum
		this.setData({
			r:sum
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