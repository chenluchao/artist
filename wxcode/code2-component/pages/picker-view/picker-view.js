// pages/picker-view/picker-view.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		years:[1990,1991,1992,1993,1994],
		months: [1,2,3,4,5,6,7,8,9,10,11,12],
		days:[1,2,3,4,5],

		index1:0,
		index2:0,
		index3:0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	dealChange(e){
		console.log(e.detail)

		this.setData({
			index1:e.detail.value[0],
			index2: e.detail.value[1],
			index3: e.detail.value[2]
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