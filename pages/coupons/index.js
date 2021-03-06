// pages/coupons/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: ["未使用", "已使用", "已失效"],
    currentType: 0,
    coupons: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  showCoupons: function (status) {
    wx.request({
      url: app.globalData.url + 'listCoupons',
      data: {
        mid: app.globalData.userInfo.mid,
        used: status
      },
      success: (res) => {
        // console.log(res.data)
        this.setData({
          coupons: res.data
        })
      }
    })
  },

  onNavBarTap: function (e) {
    var idx = e.currentTarget.dataset.index
    this.setData({
      currentType: idx
    })
    this.showCoupons(this.data.currentType)
  },

  onGetCouponTap: function (e) {
    wx.navigateTo({
      url: '/pages/getcoupons/index'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.showCoupons(this.data.currentType)
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