//app.js
App({
  onLaunch: function () {
    
    //调用API从本地缓存中获取数据
    const that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    wx.getSystemInfo({
      success: function(res) {
      that.systemInfo = res;
      }
    })
    
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var d = that.globalData;//这里存储了appid、secret、token串  
        var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
        wx.request({
          url: l,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          // header: {}, // 设置请求的 header  
          success: function (res) {
            var obj = {};
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            wx.setStorageSync('user', obj);//存储openid  
          }
        });
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    appUrl: 'https://zbl.123net.cc/api',
    zbtoken: '',
    appid: 'wx15d3ab57c635fc1e',
    secret: '6b14953c5ba377ac327a84187c591679'
  },
  systemInfo:null,
})