Page({
    data:{
        id:'',
        name:''
    },
    onLoad(options){
        let that = this;
        let id = options.id;
        let name = options.name
        that.setData({
            id: id,
            name: name
        }) 
        console.log(options)
        wx.setNavigationBarTitle({ title: that.data.name });
    }
})