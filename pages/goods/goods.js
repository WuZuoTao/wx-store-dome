// pages/goods/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.fid
        this.getGoodsListFun(id)
    },
    getGoodsListFun(id){
        wx.request({
          url: 'http://localhost:3000/api/getgoods?fid='+id,
          success: res =>{
              console.log('wdaw',res.data.list)
              this.setData({
                  goodsList: res.data.list
              })
          }
        })
    },
    //
    buyNow(e){
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '/pages/detail/detail?id='+id,
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