// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsInfoList:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id
        this.getGoodsInfo(id)
    },
    // 获取详情页数据
    getGoodsInfo(id){
        wx.request({
          url: 'http://localhost:3000/api/getgoodsinfo?id='+id,
          success: res =>{
              this.setData({
                  goodsInfoList: res.data.list[0]
              })
          }
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