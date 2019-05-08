var host = "http://news-at.zhihu.com/"
var detail = "http://news-at.zhihu.com/"

//最后更新
var lastUpData = host + "api/4/news/latest"

//加载更多
var more = host + "api/4/news/before/"

//主页对应详情页
var homeDetail = detail + "api/4/news/"

//列表页2  最热门数据(注意:详情url就在json中)

var hotDetail = detail + "api/3/news/hot"

module.exports = {
	lastUpData:lastUpData,
	more:more,
	homeDetail:homeDetail,
	hotDetail:hotDetail
}