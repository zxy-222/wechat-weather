//app.js
App({
    globalData:{
        appApiUrl: "https://free-api.heweather.com",
        appApiSecret:"d62ab1315ac911679243e06c63b4e2a8",
        appApiKey: "wxa7d3231c463e2749",
        appApiSecret: "d62ab1315ac911679243e06c63b4e2a8",
        location:{},
        extAppId: "wx18829cc8ca774131",
        isAppReady: false,
    },
    onLaunch(){
        let _this = this;
        _this.getUserLocation()
    },
    getUserLocation(){
        let _this = this;
        wx.getSetting({
            success:(res) =>{
                // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
                // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
                // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
                console.log(res.authSetting['scope.userLocation'])
                if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true){
                    wx.showModal({
                        title: '请授权当前位置',
                        content: '需要获取您的地理位置，请授权',
                        success:function(res){
                           if(res.cancel){
                               //取消授权
                               wx.showToast({
                                   title: '拒绝授权',
                                   icon: 'none',
                                   duration: 1000
                               })
                           } else if(res.confirm){
                               // 确定授权，通过wx.openSetting发起请求
                               wx.openSetting({
                                   success:function(res){
                                       if(res.authSetting['scope.userLocation'] == true){
                                           wx.showToast({
                                               title:'授权成功',
                                               icon:'success',
                                               duration:1000
                                           })
                                           //再次授权
                                           _this.getCity()
                                       }else{
                                           wx.showToast({
                                               title:'授权失败',
                                               icon:'none',
                                                duration:1000
                                           })
                                       }
                                   }
                               })
                           } 
                        }
                    })
                } else if (res.authSetting['scope.userLocation'] == undefined) {
                    //用户首次进入页面,调用wx.getLocation的API
                    _this.getCity();
                } else {
                    console.log('授权成功')
                    //调用wx.getLocation的API
                    _this.getCity();
                }
            }
        })
    },
    getCity () {
        let _this = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var latitude = res.latitude,
                    longitude = res.longitude,
                    sendData = {};
                sendData = {
                    ak: "k6sZqpFPjO9aOsnLWXT0LWTn9CcKYXss",
                    output: 'json',
                    location: latitude + "," + longitude
                }
                wx.request({
                    url: 'https://api.map.baidu.com/geocoder/v2/',
                    data:sendData,
                    success: function (ops) {
                        _this.globalData.location = ops.data.result;
                        _this.globalData.isAppReady = true
                    },
                    fail: function (resq) {
                        wx.showModal({
                            title: '信息提示',
                            content: '请求失败',
                            showCancel: false,
                            confirmColor: '#f37938'
                        });
                    },
                    complete: function () {
                    }
                })
            },
            fail: res =>{
                wx.showModal({
                    title:'授权提示',
                    content:'授权失败'
                })
            }
        })
    },  
    getUserInfo(){
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
    getApiData(apiName, data, successCallback) {
        let _this = this;
        let apiUrl = _this.globalData.appApiUrl + '/s6/weather/' + apiName;
        data['location'] = _this.globalData.location.addressComponent.city;
            data['key'] = "0b5bd669f134463b820eddf1756edca7"
        wx.showLoading({
            title: '加载中...',
        })
        wx.request({
            url:apiUrl,
            data:data,
            complete(res){
                wx.hideLoading()
                res = res.data
                if (typeof successCallback == 'function') {
                    successCallback(res);
                }
            }
        })
    },
    getMusicApi(apiName, data, successCallback) {
        let _this = this;
        let apiUrl =' https://api.douban.com '+ '/v2/music/' + apiName;
        wx.showLoading({
            title: '加载中...',
        })
        wx.request({
            url: apiUrl,
            data: data,
            complete(res) {
                wx.hideLoading()
                res = res.data
                if (typeof successCallback == 'function') {
                    successCallback(res);
                }
            }
        })
    },
    wxReady(callback) {
        var that = this;
        if (that.globalData.isAppReady && typeof callback == 'function') {
            callback();
        } else {
            setTimeout(() => {
                that.wxReady(callback);
            }, 300)
        }
    },
})