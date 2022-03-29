// pages/regist/regost.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username:'',
        password:'',
        phone:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onUserNameChange(e){
        this.setData({
            username:e.detail
        })
    },
    onPassWordChange(e){
        console.log(e)
        this.setData({
            password:e.detail
        })
    },
    onPhoneChange(e){
        console.log(e.detail)
        this.setData({
            phone:e.detail
        })
    },
    regist(){
        let {username,password,phone} = this.data
        console.log(this.data)
        if(username && password && phone){
            wx.request({
                url: 'http://localhost:3000/api/register',
                method:"POST",
                data:{
                    nickname:username,
                    password:password,
                    phone:phone
                },
                success: res =>{
                    console.log(res)
                    if(res.data.code === 200){
                        wx.navigateTo({
                          url: '/pages/login/login',
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