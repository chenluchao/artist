// pages/homework/homework.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  current:0,
	  imgList:[
		  {
			  img:'images/image0.png',
			  title:"豪车品牌"
		  },
		  {
			  img: 'images/image1.png',
			  title:"第一张图片"
		  },
		  {
			  img:'images/image2.png',
			  title:'第二张图片'
		  },
		  {
			  img:'images/image3.png',
			  title:"第三张图片"
		  }
	  ],
	  list:[
		  {
			  img:'images/0@2x.png',
			  title:"iPhon开发秘籍",
			  price:"85元",
			  info:"一本全方位介绍iPhon开发的书"
		  },
		  {
			  img:'images/1@2x.png',
			  title:"iPhon开发基础教程",
			   price:"35元",
			   info:"一本iPhon开发的入门书籍"
		  },
		  {
			  img:'images/2@2x.png',
			  title:"headerFirst设计模式",
			   price:"69元",
			   info:"一本权威的介绍开发设计模式的书籍"
		  },
		  {
			  img:'images/3@2x.png',
			  title:"iPhon开发秘籍",
			   price:"72元",
			   info:"一本开发入门书籍"
		  },
		  {
		  			  img:'images/0@2x.png',
		  			  title:"iPhon开发秘籍",
		  			  price:"85元",
		  			  info:"一本全方位介绍iPhon开发的书"
		  },
		  {
		  			  img:'images/1@2x.png',
		  			  title:"iPhon开发基础教程",
		  			   price:"35元",
		  			   info:"一本iPhon开发的入门书籍"
		  },
		  {
		  			  img:'images/2@2x.png',
		  			  title:"headerFirst设计模式",
		  			   price:"69元",
		  			   info:"一本权威的介绍开发设计模式的书籍"
		  },
		  {
		  			  img:'images/3@2x.png',
		  			  title:"iPhon开发秘籍",
		  			   price:"72元",
		  			   info:"一本开发入门书籍"
		  }
	  ]
	  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  animationfinish:function(e){
	  this.setData({
		  current:e.detail.current
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