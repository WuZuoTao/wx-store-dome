// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cartList:[],
        totalPrice:0,
        checkedAll:true
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
    singCheckChange(e){
        let id = e.currentTarget.dataset.id
        let check = e.detail
        let list = this.data.cartList
        list = list.map(item =>{
            if(item.id == id){
                item.checked = check
            }
            return item
        })
        // 判断是否列表中有一个元素未选中
        let flag = true
        list.forEach(item =>{
            if(!item.checked){
                flag = false
            }
        })
        this.setData({
            checkedAll:flag,
            cartList:list
        })
        this.calTotalPrice()
    },
    //全选控制单选
    allCheckChange(e){
        let check = e.detail
        let list = this.data.cartList
        list = list.map(item =>{
            item.checked = check
            return item
        })
        this.setData({
            checkedAll:check,
            cartList:list
        })
        this.calTotalPrice()
    },
    onClickButton(){
        wx.navigateTo({
          url: '/pages/order/order',
        })
    },
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