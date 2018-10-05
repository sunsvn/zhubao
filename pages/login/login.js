// pages/login/login.js
var commonMixin = require('../../components/comonMix.js');
const app = getApp();
Page(Object.assign({

  data: {
    login:{
      phone:'',
      pwd:'',
      code:''
    },
    openid:''
  },
  loginFun: function () {
    console.log(app.globalData.openid);
    var _this = this;
    var _data = this.data.login;
    if (_this.data.login.phone == '') {
      this.toastmsg('请输入手机号码');
      return false;
    }
    if (!this.phonechk(_data.phone)) {
      this.toastmsg('手机号码格式错误');
      return false;
    }
    if (_data.pwd == '') {
      this.toastmsg('请输入登录密码');
      return false;
    }
    var openid;
    wx.getStorage({
      key: 'user',//对应存储的key名
      success: function (res) {
        console.log(res);
        openid = res.data.openid;
        console.log(openid,5232)
        //登录ajax
        wx.request({
          url: app.globalData.appUrl + '/auth/login',
          method: 'POST',
          data: {
            'mobile': _this.data.login.phone,
            'password': _this.data.login.pwd,
            'openid': openid
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function (res) {
            if (res.code == 0) {
              wx.setStorage({
                key: 'zbtoken',
                data: res.token
              })
              wx.switchTab({
                url: '../index/index',
              });
            }
            else {
              _this.toastmsg(res.expire);
            }
          }
        })
      }
    })
    
  },
  toastmsg: function (msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000//持续的时间
    })
  },
  toReg: function() {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onShareAppMessage: function () {

  }

}, commonMixin))

