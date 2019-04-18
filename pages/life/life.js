const app = getApp()
Page({
    data: {
        location:{},
        lifestyle:[],
        update:{}
    },
    onShow(){
        app.wxReady(()=>{
            let _this = this;
            let location = app.globalData.location;
            _this.setData({
                location:location
            })
            _this.getLifetyle()
        })
    },
    onPullDownRefresh () {
        let _this = this;
        _this.getLifetyle();
        wx.stopPullDownRefresh()
    },
    getLifetyle(){
        let _this = this,
            sendData = {};
        app.getApiData('lifestyle',sendData,(res)=>{
            let lifestyle = res.HeWeather6[0].lifestyle;
            let update = res.HeWeather6[0].update
            _this.setData({
               lifestyle: _this.addAttr(lifestyle),
               update:update
            })
        })
    },
    addAttr(arr){
        if(arr.length > 0){
            for (let i in arr) {
                if (arr[i].type) {
                    switch (arr[i].type) {
                        case "comf":
                            arr[i].name = '舒适度'
                            break;
                        case "drsg":
                            arr[i].name = '穿衣'
                            break;
                        case "flu":
                            arr[i].name = '感冒'
                            break;
                        case "sport":
                            arr[i].name = '运动'
                            break;
                        case "trav":
                            arr[i].name = '旅游'
                            break;
                        case "uv":
                            arr[i].name = '紫外线'
                            break;
                        case "cw":
                            arr[i].name = '洗车'
                            break;
                        case "air":
                            arr[i].name = '空气'
                            break;
                    }
                }

            }
            return arr;
        }
       
    }
})