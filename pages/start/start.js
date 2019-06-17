//获取应用实例
var app = getApp();
var canClick =false;
Page({
  data: {
    text:'',
    text2:'',
    text3:'',
    text4:''
  },
  init:function(){
    var _this =this
    var story = "Dear World:";
    var story2 = "My name is liugezhou,Welcome to my online world!";
    var story3 = "My favorite proverb is: A journey of a thousand miles begins with a single step!";
    var story4 = "So, let's start our journey!";
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
            var k = 0;
            var time3 = setInterval(function () {
              var text3 = story3.substring(0, k);
              k++;
              _this.setData({
                text3: text3
              });
              if (text3.length == story3.length) {
                clearInterval(time3);
                var x = 0;
                var time4 = setInterval(function () {
                  var text4 = story4.substring(0, x);
                  x++;
                  _this.setData({
                    text4: text4
                  });
                  if (text4.length == story4.length) {
                    clearInterval(time4);
                      canClick = true
                  }
                }, 50)
              }
            }, 50)
          }
        }, 50)
      }
    }, 50)
  },
  goNext: function(){
    if (canClick){
      wx.navigateTo({
        url: '../index/index',
      })
    }
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