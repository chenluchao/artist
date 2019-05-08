//书籍列表 - 直接用
var bookListUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=book&a=list"

//书籍详情 - 后面加 &id=10001
var bookDetailUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=book&a=detail"

//音乐列表 - 直接用
var musicListUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=music&a=list"

//音乐详情 - 后面加 &id=300000
var musicDetailUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=music&a=detail"

//影视列表 - 直接用
var filmListUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=film&a=list"

//影视详情 - 后面加 &id=200000
var filmDetailUrl = "http://127.0.0.1/project/dou/api/public/index.php?m=film&a=detail"

var imagePrefix = 'http://127.0.0.1/project/dou/api/';

module.exports = {
  bookListUrl: bookListUrl,
  bookDetailUrl: bookDetailUrl,
  musicListUrl: musicListUrl,
  musicDetailUrl: musicDetailUrl,
  filmListUrl: filmListUrl,
  filmDetailUrl: filmDetailUrl,
  imagePrefix: imagePrefix
}