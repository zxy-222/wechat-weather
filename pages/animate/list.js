Page({
    data: {
        lists:[
            { id: 1, name:'文字跑马灯' },
            { id: 2, name:'触摸水波涟漪' },
            { id: 3, name:'下拉菜单' },
            { id: 4, name:'五星评分' },
            { id: 5, name:'动态数字累加'},
            { id: 6, name:'星战字幕' },
            { id: 7, name:'动画卡片' },
            { id: 8, name:'列表项左滑删除' },
            { id: 9, name:'图片滤镜' },
            { id: 10, name:'黑客帝国metrix' },
            { id: 11, name:'仿直播点赞气泡' },
            { id: 12, name:'文字弹幕' },
            { id: 13, name:'短信验证码倒计时' },
            { id: 14, name:'弹出菜单' },
            { id: 15, name:'滚动动画'},
            { id: 16, name:'实时圆形进度条' },
            { id: 17, name:'遮罩层' },
            { id: 18, name:'仿Table' },
            { id: 19, name:'按钮悬浮固定底部' },
            { id: 20, name:'支付倒计时' },
            { id: 21, name:'文字单行背景自适应带角标' },
            { id: 22, name:'侧边栏滑动' },
            { id: 23, name:'顶部导航'},
            { id: 24, name:'弹出隐藏动画' },
            { id: 25, name:'切换动画' },
            { id: 26, name:'仿UC宣传页动画' },
            { id: 27, name:'查看全文和收起'}
        ]
    },
    onLoad() {

    },
    onShow(){
       
    },
    toLink(e){
        let id = e.target.dataset.id;
        let name = e.target.dataset.name;
        wx.navigateTo({ url: `/pages/animate/animate?id=${id}&name=${name}`});
    }
})