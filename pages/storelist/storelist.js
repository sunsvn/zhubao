var commonMixin = require('../../components/comonMix.js');
const app = getApp();
Page(Object.assign({

    data: {
        selectedNav: '00',
        width: app.systemInfo.windowWidth,
        showspinner: false,
        showPrice: false,
        search: {
          keyword: '',
          minPrice: '',
          maxPrice: ''
        },
        nearby: [
            {
              name: '戒指',
                id: 'a01',
            },
            {
              name: '吊坠',
                id: 'a02',
            },
            {
              name: '手链',
                id: 'a03',
            },
            {
              name: '耳饰',
                id: 'a04',
            },
            {
              name: '其他',
                id: 'a05',
            },
        ],
        sort: [
            {
                name: '全部',
                id: 'b00'
            },
            {
                name: '婚礼策划',
                id: 'b01'
            },
            {
                name: '婚纱摄影',
                id: 'b02'
            },
            {
                name: '婚宴酒店',
                id: 'b03'
            },
            {
                name: '婚礼用车',
                id: 'b04'
            },
            {
                name: '婚礼用品',
                id: 'b05'
            },
            {
                name: '金银首饰',
                id: 'b06'
            },
        ],
        rank: [
            {
                name: '智能排序',
                id: 'c00',
            },
            {
                name: '从高到低',
                id: 'c01',
            },
            {
                name: '从低到高',
                id: 'c02',
            },
            {
                name: '人气最高',
                id: 'c03',
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
            },
            {
                name: '真品婚礼定制',
                photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 2.8,
                price: '￥8000',
                buztype: '婚庆公司',
                km: '2.1km',
            },
            {
                name: 'SHINE茜恩婚纱(滨江店)',
                photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 1.1,
                price: '￥9000',
                buztype: '婚纱礼服',
                km: '3.2km',
            },
            {
                name: '风尚国际婚纱(外景领导品牌)',
                photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
                star: 3.5,
                price: '￥4888',
                buztype: '影楼',
                km: '4.5km',
            },
            {
                name: '仁和春天酒店·婚宴',
                photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w_380h_1e_1c_1l%7Cwatermark%3D0',
                star: 4.4,
                price: '1599元/桌起',
                buztype: '星级酒店',
                km: '1.6km',
            },
            {
                name: '真品婚礼定制',
                photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 2.8,
                price: '￥8000',
                buztype: '婚庆公司',
                km: '2.1km',
            },
            {
                name: 'SHINE茜恩婚纱(滨江店)',
                photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 1.1,
                price: '￥9000',
                buztype: '婚纱礼服',
                km: '3.2km',
            },
            {
                name: '风尚国际婚纱(外景领导品牌)',
                photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
                star: 3.5,
                price: '￥4888',
                buztype: '影楼',
                km: '4.5km',
            },
            {
                name: '仁和春天酒店·婚宴',
                photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w_380h_1e_1c_1l%7Cwatermark%3D0',
                star: 4.4,
                price: '1599元/桌起',
                buztype: '星级酒店',
                km: '1.6km',
            },
            {
                name: '真品婚礼定制',
                photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 2.8,
                price: '￥8000',
                buztype: '婚庆公司',
                km: '2.1km',
            },
            {
                name: 'SHINE茜恩婚纱(滨江店)',
                photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 1.1,
                price: '￥9000',
                buztype: '婚纱礼服',
                km: '3.2km',
            },
            {
                name: '风尚国际婚纱(外景领导品牌)',
                photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
                star: 3.5,
                price: '￥4888',
                buztype: '影楼',
                km: '4.5km',
            },
            {
                name: '仁和春天酒店·婚宴',
                photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w_380h_1e_1c_1l%7Cwatermark%3D0',
                star: 4.4,
                price: '1599元/桌起',
                buztype: '星级酒店',
                km: '1.6km',
            },
            {
                name: '真品婚礼定制',
                photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 2.8,
                price: '￥8000',
                buztype: '婚庆公司',
                km: '2.1km',
            },
            {
                name: 'SHINE茜恩婚纱(滨江店)',
                photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w_480h_1e_1c_1l%7Cwatermark%3D0',
                star: 1.1,
                price: '￥9000',
                buztype: '婚纱礼服',
                km: '3.2km',
            },
            {
                name: '风尚国际婚纱(外景领导品牌)',
                photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
                star: 3.5,
                price: '￥4888',
                buztype: '影楼',
                km: '4.5km',
            },
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
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736418&di=7d5d859f7a3aee1e3ee02f358a4a0a58&imgtype=0&src=http%3A%2F%2Fwww.yccyzb.com%2FUpload%2Fplpro2017091916512395904.jpg',
            name: '戒指2',
            price: '8800',
            oldprice: '10800',
            sell: '20',
            address: '东大街芷泉段88号时代豪庭(香格里拉酒店)',
            km: '1.8km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736417&di=9af94e8ea5a7bed6d49bc5a23a488a76&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7c1ed21b0ef41bd5dcb187d75bda81cb39db3d36.jpg',
            name: '戒指3',
            price: '15800',
            oldprice: '20800',
            sell: '15',
            address: '总府路46号1-4楼(盐市口红旗商场斜对面)',
            km: '2.4km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736417&di=a0e311ac95640abc835fa60069bda04d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D5d452465c08065386fe7ac50ffb4cb31%2F0dd7912397dda1446362cd99b8b7d0a20cf486b6.jpg',
            name: '戒指4',
            price: '12900',
            oldprice: '15800',
            sell: '25',
            address: '天府新区益州大道588号益州国际写字楼10楼',
            km: '3.4km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736419&di=0c40e4b83435a90fa266c336e9bc7524&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa686c9177f3e67098b0f00c230c79f3df8dc55fb.jpg',
            name: '戒指1',
            price: '13800',
            oldprice: '19800',
            sell: '5',
            address: '二环路东五段万达广场8单元2101(近成仁公交站)',
            km: '1.1km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736418&di=7d5d859f7a3aee1e3ee02f358a4a0a58&imgtype=0&src=http%3A%2F%2Fwww.yccyzb.com%2FUpload%2Fplpro2017091916512395904.jpg',
            name: '戒指2',
            price: '8800',
            oldprice: '10800',
            sell: '20',
            address: '东大街芷泉段88号时代豪庭(香格里拉酒店)',
            km: '1.8km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736417&di=9af94e8ea5a7bed6d49bc5a23a488a76&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7c1ed21b0ef41bd5dcb187d75bda81cb39db3d36.jpg',
            name: '戒指3',
            price: '15800',
            oldprice: '20800',
            sell: '15',
            address: '总府路46号1-4楼(盐市口红旗商场斜对面)',
            km: '2.4km'
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536387736417&di=a0e311ac95640abc835fa60069bda04d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D5d452465c08065386fe7ac50ffb4cb31%2F0dd7912397dda1446362cd99b8b7d0a20cf486b6.jpg',
            name: '戒指4',
            price: '12900',
            oldprice: '15800',
            sell: '25',
            address: '天府新区益州大道588号益州国际写字楼10楼',
            km: '3.4km'
          }
        ]

    },
    onLoad: function (options) {
      console.log(options)
      console.log(options.classfiy); //分类
      console.log(options.brand); //品牌
      console.log(options.keyword); //搜索关键字
      this.getList();
    },
    getList: function () {
      wx.request({
        url: app.globalData.appUrl + '/goods/list?categoryId=1&brandId=&keyword=&sort=price&order=asc&page=1&size=10',
        method: 'GET',
        data: {},
        success: function (res) {
          if (res.data) {

          }
          else {

          }
        }
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

    spinnerclick(event) {
        const that = this;
        that.setData({
            showspinner: false,
        })
    },

    storelick(event){
        const that = this;
        wx.navigateTo({
          url: '../store/store',
        })
    },
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
    surePiceFun () {
      this.setData({
        showPrice: false
      })
    }
}, commonMixin))