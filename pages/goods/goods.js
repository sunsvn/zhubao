const app = getApp();

Page({

    data: {
        width: app.systemInfo.windowWidth,
        id: 1,
        goods: '',
        info: ''
    },
    onLoad: function (options) {
      var id = options.detail//珠宝id
      this.setData({
        id: options.detail
      })
      this.desc();
    },
    //广告栏
    banner(event) {
        const that = this;
        const index = event.currentTarget.dataset.index;
        wx.previewImage({
            current: that.data.goods.photo[parseInt(index)], // 当前显示图片的链接，不填则默认为 urls 的第一张
            urls: that.data.goods.photo,
        })
    },
    desc: function () {
      var _this = this;
      //获取首饰详情
      wx.request({
        url: app.globalData.appUrl + '/goods/detail?id='+_this.data.id,
        method: 'GET',
        data: {},
        header: {
          'User-Agent': 'Fiddler',
          'X-Nideshop-Token': '99fy6167fo42bdmnyf6heyp4qro5dbta'
        },
        success: function (res) {
          if (res) {
            console.log(res.data.data)
            _this.setData({
              goods: res.data.data
            })
          }
          else {
            _this.toastmsg(res.expire);
          }
        }
      })
    },
    callPhone(event) {
      wx.makePhoneCall({
        phoneNumber: '18581885527',
      })
    },
  onShareAppMessage: function () {
    return {
      title: '高级珠宝定制',
      path: '/pages/home/home'
    }
  }
})