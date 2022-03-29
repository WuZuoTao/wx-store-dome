// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active:0,
        bannarsList:[],
        time:30*30*60*1000,
        timeData:{},
        goodsList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getBanners()
        this.getGoodList()
    },
    onChange:function(){

    },
    onTimechang(e){
        this.setData({
            timeData:e.detail
        })
    },
    /**
     * 轮播图请求API
     */
    getBanners(){
        wx.request({
          url: 'http://localhost:3000/api/getbanner',
          success:res => {
              if(res.data.code === 200){
                this.setData({
                    bannarsList:res.data.list
                })
              }
          }
        })
    },
    /**
     * 商品列表请求API
     */
    getGoodList(){
        wx.request({
          url: 'http://localhost:3000/api/getindexgoods',
          success: res => {
            let list = res.data.list
              if(res.data.code === 200){
                list[0].title = "热卖"
                list[1].title = "好货"
                list[2].title = "专场"
                console.log(res.data)
                  this.setData({
                      goodsList: res.data.list
                  })
              }
          }
        })
    },
    // 详情表单函数
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