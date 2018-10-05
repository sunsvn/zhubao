// pages/register/register.js
var commonMixin = require('../../components/comonMix.js');
const app = getApp();
var timer;
Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
    reg: {
      phone: '',
      yzm: '',
      password: '',
      passwordRe: '',
      code: ''
    },
    timerNum: 60,
    showTime: false,
    openid:''
  },
  timerFun: function () {
    var _this = this;
    var time = 60
    timer = setInterval(function () {
      if (time > 0){
        time--;
        _this.setData({
          timerNum: time
        })
      } else {
        clearInterval(timer);
        _this.setData({
          timerNum: 60,
          showTime: false
        })
      }
      
    }, 1000)
  },
  getyzm: function () {
    var _this = this;
    if (_this.data.reg.phone == '') {
      this.toastmsg('请输入手机号码');
      return false;
    }
    if (!this.phonechk(_this.data.reg.phone)) {
      this.toastmsg('手机号码格式错误');
      return false;
    }
    //success
    
    wx.request({
      url: app.globalData.appUrl + '/sendSms',
      data: {
        'mobile': _this.data.reg.phone
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        if (res.data.code == 0) {
          _this.toastmsg('验证码已发到您的手机');
          _this.setData({
            showTime: true
          })
          _this.timerFun();
        }
        else {
          _this.toastmsg(res.expire);
        }
      }
    })
    
  },
  regFun: function () {
    var _this = this;
    if (_this.data.reg.phone == '') {
      this.toastmsg('请输入手机号码');
      return false;
    }
    if (!this.phonechk(_this.data.reg.phone)) {
      this.toastmsg('手机号码格式错误');
      return false;
    }
    if (_this.data.reg.yzm == '') {
      this.toastmsg('请输入验证码');
      return false;
    }
    if (_this.data.reg.password == '') {
      this.toastmsg('请输入登录密码');
      return false;
    }
    if (_this.data.reg.passwordRe == '') {
      this.toastmsg('请确认登录密码');
      return false;
    }
    if (_this.data.reg.passwordRe != _this.data.reg.password) {
      this.toastmsg('两次输入的密码不一致');
      return false;
    }
    if (_this.data.reg.code == '') {
      this.toastmsg('请输入授权码');
      return false;
    }
    
    //注册ajax
    wx.request({
      url: app.globalData.appUrl + '/register/register',
      data: {
        'mobile': _this.data.reg.phone,
        'password': _this.data.reg.password,
        'checkWord': _this.data.reg.code,
        'openid': _this.data.openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        if (res.data.code == 0) {
          _this.toastmsg('注册成功');
          setTimeout(function () {
            wx.navigateTo({
              url: '../login/login'
            })
          }, 1500)
        }
        else {
          console.log(res)
          _this.toastmsg(res.data.msg);
        }
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'user',//对应存储的key名
      success: function (res) {
        console.log(res.data.openid)
        _this.setData({
          openid: res.data.openid
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  }
}, commonMixin))