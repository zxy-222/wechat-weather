const app = getApp();
Page({
    data:{
        graphs:[
            {id: 1, name: '折线图', url:'/pages/graph/line'},
            {id: 2, name: '柱状图', url:'/pages/graph/bar'},
            {id: 3, name: '饼图', url:'/pages/graph/bar'}
        ]
    },
    onShow(){
        let _this = this;
        app.wxReady(()=>{
            
        })
    },
    onLoad(){},
    onUnhide(){},
    onPullDownRefresh(){
        wx.stopPullDownRefresh()
    },
    toLink(e){
        var url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url:url
        })
    }
})