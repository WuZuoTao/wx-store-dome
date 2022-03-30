// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        password:'',
        phone:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onPassWordChange(e){
        this.setData({
            password:e.detail
        })
    },
    onPhoneChange(e){
        this.setData({
            phone:e.detail
        })
    },
    login(){
        let {password,phone} = this.data
        console.log(this.data)
        if( password && phone){
            wx.request({
                url: 'http://localhost:3000/api/login',
                method:"POST",
                data:{
                    password:password,
                    phone:phone
                },
                success: res =>{
                    console.log(res)
                    if(res.data.code === 200){
                        wx.setStorageSync('user', JSON.stringify(res.data.list))
                        wx.switchTab({
                          url: '/pages/mine/mine',
                        })
                    }
                }
              })
        }
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