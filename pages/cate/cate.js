// pages/cate/cate.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 0,
        cateList: [],
        contentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCateList()
    },
    getCateList(){
        wx.request({
          url: 'http://localhost:3000/api/getcatetree',
          success:res => {
              this.setData({
                  cateList: res.data.list,
                  contentList:res.data.list[0].children
              })
          }
        })
    },
    onCateChange(e){
        let index = e.detail
        let content = this.data.cateList[index].children
        this.setData({
            contentList: content
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