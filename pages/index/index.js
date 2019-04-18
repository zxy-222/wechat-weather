const app = getApp()
Page({
    data:{
        weatherLists:[],
        location:{},
    },
    onShow(){
        app.wxReady(()=>{
            let _this = this,
                location = app.globalData.location;
                console.log(location)
            _this.setData({
                location: location
               
            })
            _this.getNowWeather()
            _this.getWeahter()
        })
    },
    onPullDownRefresh(){
        var _this = this;
        _this.getNowWeather()
        _this.getWeahter()
        wx.stopPullDownRefresh()
    },
    getNowWeather(){
        let _this = this,
            sendData = {};
        app.getApiData('now',sendData,(res)=>{
            let nowInfo = res.HeWeather6[0].now;
            _this.setData({
                nowInfo: nowInfo
            })
        })
    },
    getWeahter() {
        let _this = this,
            sendData = {};
        app.getApiData('forecast',sendData,(res)=>{
            let weatherLists = res.HeWeather6[0].daily_forecast;
            weatherLists[0].day = '今天'
            weatherLists[1].day = '明天'
            weatherLists[2].day = '后天'
            _this.setData({
                weatherLists: weatherLists
            })
        })
    },
})
