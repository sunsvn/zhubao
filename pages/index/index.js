//index.js
//获取应用实例
var commonMixin = require('../../components/comonMix.js');
const app = getApp()
Page(Object.assign({
  data: {
    width: app.systemInfo.windowWidth,
    height: app.systemInfo.windowHeight,
    banner: [],
    search:{
      keyword: '',
    },
    functions: [
      // {
      //   url: '../../images/i01.jpg',
      //   name: '戒指',
      //   id: '01'
      // },
      // {
      //   url: '../../images/i02.jpg',
      //   name: '吊坠',
      //   id: '02'
      // },
      // {
      //   url: '../../images/i03.jpg',
      //   name: '手链',
      //   id: '03'
      // },
      // {
      //   url: '../../images/i04.jpg',
      //   name: '耳饰',
      //   id: '04'
      // },
      // {
      //   url: '../../images/i05.jpg',
      //   name: '其他',
      //   id: '05'
      // }
    ],
    seclist: [
      {
        app_list_pic_url:"",
        floor_price:2,
        id:1046001,
        name:"梵克雅宝"
      }
     
    ],
    goods: [
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736419&di=0c40e4b83435a90fa266c336e9bc7524&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa686c9177f3e67098b0f00c230c79f3df8dc55fb.jpg',
        name: '戒指1',
        price: '13800',
        oldprice: '19800',
        sell: '5',
        address: '二环路东五段万达广场8单元2101(近成仁公交站)',
        km: '1.1km'
      }
    ]
  },

  onLoad: function () {
    var _this = this;
    //轮播图ajax
    wx.request({
      url: app.globalData.appUrl + '/index/banner',
      method: 'GET',
      data: {},
      success: function (res) {
        if (res.data) {
          console.log(res.data.data.banner)
          _this.setData({
            banner: res.data.data.banner
          })
        }
        else {
          _this.toastmsg(res.expire);
        }
      }
    })
    //一级分类
    wx.request({
      url: app.globalData.appUrl + '/index/category',
      method: 'GET',
      data: {},
      success: function (res) {
        if (res.data) {
          _this.setData({
            functions: res.data.data
          })
        }
        else {
          _this.toastmsg(res.expire);
        }
      }
    })
    //品牌
    wx.request({
      url: app.globalData.appUrl + '/brand/list',
      method: 'GET',
      data: {},
      success: function (res) {
        if (res.data) {
          console.log(res.data.data.data)
          _this.setData({
            seclist: res.data.data.data
          })
        }
        else {
          _this.toastmsg(res.expire);
        }
      }
    })
    //获取热门首饰
    wx.request({
      url: app.globalData.appUrl + '/index/hotGoods',
      method: 'GET',
      data: {},
      success: function (res) {
        if (res) {
          console.log(res.data.data)
          _this.setData({
            
            goods: res.data.data.hotGoodsList
          })
        }
        else {
          _this.toastmsg(res.expire);
        }
      }
    })

    // wx.request({
    //   url: app.globalData.appUrl + '/goods/list?brandId=1046001&categoryId=1036005&sort=price&order=asc&minPrice=100&maxPrice=200',
    //   method: 'GET',
    //   data: {},
    //   success: function (res) {
    //     if (res.data) {
         
    //     }
    //     else {
    //       _this.toastmsg(res.expire);
    //     }
    //   }
    // })
  },
  
  fucClick(event){
    const id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../search/search?classify=' + id,
    })
  },
  goodDetail(e){
    var id = e.currentTarget.dataset.zbid;
    console.log(id);
    wx.navigateTo({
      url: '../goods/goods?detail=' + id,
    })
    
  },
  searchlist(e){
    var id = e.currentTarget.dataset.brandid;
    console.log(e.currentTarget.dataset.brandid,11111111111111111222)
    wx.navigateTo({
      url: '../search/search?brand=' + id,
    })
  },
  searchNow () {
    var _this = this;
    var keyword = _this.data.search.keyword;
    if(keyword == ''){
      return;
    }
    wx.navigateTo({
      url: '../search/search?keyword=' + keyword,
    })
  },
  onShareAppMessage: function () {
    return {
      title: '高级珠宝定制',
      path: '/pages/home/home'
    }
  }

}, commonMixin))
