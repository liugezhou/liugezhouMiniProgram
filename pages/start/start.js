//获取应用实例
var app = getApp();
Page({
  data: {
    banners: [
      {
        "id": 1,
        "picUrl": "http://liugezhou.online/img/001.png"
      },
      {
        "id": 2,
        "picUrl": "http://liugezhou.online/img/002.png"
      },
      {
        "id": 3,
        "picUrl": "http://liugezhou.online/img/003.png"
      },
      {
        "id": 4,
        "picUrl": "http://liugezhou.online/img/004.png"
      },
      {
        "id": 5,
        "picUrl": "http://liugezhou.online/img/005.png"
      },
      {
        "id": 6,
        "picUrl": "http://liugezhou.online/img/006.png"
      }
    ],
    swiperMaxNumber: 6,
    swiperCurrent: 0,
    height: wx.getSystemInfoSync().windowHeight
  },
  onLoad:function(){
    const _this = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    const app_show_pic_version = wx.getStorageSync('app_show_pic_version')
      // 展示启动页
   
  },
  onShow:function(){
    
  },
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  goToIndex: function (e) {
    wx.navigateTo({
      url: '../index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
});