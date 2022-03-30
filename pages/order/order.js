// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cartList:{},
        totalPrice:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCartList()
    },
    getCartList(){
        let str = wx.getStorageSync('user')
        if(str){
            let user = JSON.parse(str)
            wx.request({
                url: 'http://localhost:3000/api/cartlist?uid='+user.uid,
                success: res =>{
                    let list = res.data.list
                    list = list.map(item =>{
                        item.checked = true 
                        item.goodsname = item.goodsname.length > 5 ? item.goodsname.slice(0,5) + '...' : item.goodsname
                        return item
                    })
                    this.setData({
                        cartList:list
                    })
                    this.calTotalPrice()
                }
              })
        }
    },
    //金额结算
    calTotalPrice(){
        let count = 0 
        let list = this.data.cartList
        list.forEach(item =>{
            if(item.checked){
                count += item.price * item.num
            }
        })
        this.setData({
            totalPrice:count * 100
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