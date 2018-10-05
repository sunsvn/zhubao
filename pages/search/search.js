var commonMixin = require('../../components/comonMix.js');
const app = getApp();
Page(Object.assign({

    data: {
        selectedNav: '00',
        width: app.systemInfo.windowWidth,
        showspinner: false,
        showPrice: false,
        nearby: [
            {
              name: '戒指',
                id: 'a01',
            }
        ],
        sort: [
            {
                name: '全部',
                id: 'b00'
            }
        ],
        spinners: [],
        storelist: [
            {
                name: '仁和春天酒店·婚宴',
                photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w_380h_1e_1c_1l%7Cwatermark%3D0',
                star: 4.4,
                price: '1599元/桌起',
                buztype: '星级酒店',
                km: '1.6km',
            }
        ],
        goods: [
          {
          }
        ],
        search: {
          keyword: '',
          minPrice: '',
          maxPrice: ''
        },
        brand: '112', //品牌
        categoryId: '11', //分类
        page: 1,
        hasMore: true
    },
    onLoad: function (options) {
      var _this = this;
      console.log(options)
      console.log(options.classfiy); //分类
      console.log(options.brand); //品牌
      console.log(options.keyword); //搜索关键字
      _this.setData({
        categoryId: options.classfiy ? options.classfiy:'',
        brand: options.brand ? options.brand:'',
        search: {
          keyword: options.keyword ? options.keyword:'',
          minPrice: '',
          maxPrice: ''
        }
      })
      setTimeout(function(){
        _this.getList();
      },200)
      

      //一级分类
      wx.request({
        url: app.globalData.appUrl + '/index/category',
        method: 'GET',
        data: {},
        success: function (res) {
          if (res.data) {
            _this.setData({
              nearby: res.data.data
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
              sort: res.data.data.data
            })
          }
          else {
            _this.toastmsg(res.expire);
          }
        }
      })
    },
    getList: function () {
      var _this = this;
      console.log(1111)
      console.log(_this.data.search.minPrice,121212121)
      wx.request({
        url: app.globalData.appUrl + '/goods/list?brandId=' + _this.data.brand + '&categoryId=' + _this.data.categoryId + '&sort=price&order=asc&minPrice=' + _this.data.search.minPrice + '&maxPrice=' + _this.data.search.maxPrice+'&keyword='+_this.data.search.keyword+'&page='+_this.data.page,
        method: 'GET',
        data: {},
        header: {
          //'User-Agent': 'Fiddler',
          'X-Nideshop-Token': '99fy6167fo42bdmnyf6heyp4qro5dbta'
        },
        success: function (res) {
          console.log(res.data.data.goodsList)
          if (res.data.data.goodsList.length>0) {
            var pageNow = _this.data.page++;
            var hasMoreNow = true;
            if (res.data.data.goodsList.length >= 10 ) {
              hasMoreNow = true;
            }else {
              hasMoreNow = false;
            }
            _this.setData({
              goods: res.data.data.goodsList,
              page: pageNow,
              hasMore:hasMoreNow,
            })
          }
          else {
            _this.toastmsg('相关产品为空')
          }
        }
      })
    },
    goodDetail(e) {
      var id = e.currentTarget.dataset.zbid;
      console.log(id);
      wx.navigateTo({
        url: '../goods/goods?detail=' + id,
      })

    },
    navitation(event) {
        let id = event.currentTarget.dataset.id;
        const that = this;
        console.log(id);
        if (id == that.data.selectedNav) {
            id = '00';
            that.setData({
                showspinner: false,
            })
        } else {
            that.setData({
                showspinner: true,
            })
        }
        console.log(id);
        that.setData({
            selectedNav: id,
        })
        let temps = that.data.spinners;
        if (id == '02') {
            temps = that.data.sort;
        } else if (id == '03') {
            temps = that.data.rank;
        } else if (id == '01') {
            temps = that.data.nearby;
        }
        that.setData({
            spinners: temps,
        })
    },
    //点击筛选项
    spinnerclick(event) {
        const _this = this;
        _this.setData({
          // event.currentTarget.dataset.id
        }) ;
      _this.setData({
        page: 1,
        showspinner: false,
      })
      _this.getList();
    },
    toastmsg: function (msg) {
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 2000//持续的时间
      })
    },
    //价格
    showPriceFun() {
      this.setData({
        showPrice: true
      })
    },
    hidePriceFun() {
      this.setData({
        showPrice: false
      })
    },
    surePiceFun () { //价格范围搜索
      this.setData({
        showPrice: false
      })
      _this.setData({
        page: 1
      })
      _this.getList();
    },
    searchNow() {  //搜索
      var _this = this;
      var keyword = _this.data.search.keyword;
      if (keyword == '') {
        return;
      }
      _this.setData({
        page: 1
      })
      _this.getList();
    }
}, commonMixin))