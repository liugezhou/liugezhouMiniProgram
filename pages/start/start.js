//获取应用实例
var app = getApp();
Page({
  data: {
    text:'',
    text2:''
  },
  init:function(){
    var story = "";
    var story2 = "你走了没有啊！！！！";
    var i = 0;
    var _this = this
    var time = setInterval(function () {
      var text = story.substring(0, i);
      i++;
      _this.setData({
        text: text
      });
      if (text.length == story.length) {
        clearInterval(time);
        var j = 0;
        var time2 = setInterval(function () {
          var text2 = story2.substring(0, j);
          j++;
          _this.setData({
            text2: text2
          });
          if (text2.length == story2.length) {
            clearInterval(time2);
          }
        }, 200)
      }
    }, 200)
  },
  onLoad:function(){
    var _this = this
    setTimeout(function(){
        _this.init()
    },1000)
  },
  onShow:function(){
    
  },
  onShareAppMessage :function(){
    
  }
  
});