//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Flower健康饮食管理',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ListArray:['首页','分类','我的','更多'],
    imgUrls: [
      'https://flowerwechat.oss-cn-shenzhen.aliyuncs.com/FlowerLogo.jpg',
      'https://flowerwechat.oss-cn-shenzhen.aliyuncs.com/IMG_3459.JPG',
      'https://flowerwechat.oss-cn-shenzhen.aliyuncs.com/flower_BGM.jpg'
    ]
  },
  clickToday:function(){
    wx.navigateTo({
      url: '/pages/today/today'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
