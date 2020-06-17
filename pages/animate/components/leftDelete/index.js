Component({
    data: {
        list:[
            { txt:'红藕香残玉簟秋',txtStyle:''},
            { txt:'轻解罗裳,独上兰舟',txtStyle:''},
            { txt:'云中谁寄锦书来',txtStyle:''},
            { txt:'雁字回时,月满西楼',txtStyle:''},
        ],
        delBtnWithBtn: 180 // 删除按钮宽度
    },
    methods: {
        touchStart(e) {
            if(e.touches.length == 1) {
                this.setData({
                    // 设置触摸其实点水平方向位置
                    startX: e.touches[0].clientX
                })
            }
        },
        touchMove(e) {
            if(e.touches.length == 1) {
                // 手指移动时水平方向位置
                let moveX = e.touches[0].clientX;
                // 手指移动距离
                let distanceX = this.data.startX - moveX;
                let delBtnWithBtn = this.data.delBtnWithBtn;
                let txtStyle;
                if(distanceX <= 0) {
                    txtStyle = "left:0rpx"
                } else {
                    txtStyle = `left: -${distanceX}rpx`;
                    if(distanceX >= delBtnWithBtn) { // 手指移动距离大于等于按钮宽度时,距离值最大为按钮宽度
                        txtStyle = `left: -${delBtnWithBtn}rpx`;
                    }
                }
                let index = e.target.dataset.index;
                let list = this.data.list;
                list[index].txtStyle = txtStyle
                this.setData({
                    list: list
                })
            }
        },
        touchEnd(e) {
            if(e.changedTouches.length == 1) {
                let endX = e.changedTouches[0].clientX;
                let distanceX = this.data.startX - endX;
                let delBtnWithBtn = this.data.delBtnWithBtn;
                // 滑动距离小于删除按钮的1/2
                let txtStyle = distanceX > delBtnWithBtn / 2? `left:-${delBtnWithBtn}rpx` : `0rpx`;
                let index = e.target.dataset.index;
                let list = this.data.list;
                list[index].txtStyle = txtStyle
                
                this.setData({
                    list: list
                })
            }
        },
        delItem(e) {
            let index = e.target.dataset.index;
            let list = this.data.list;
            list.splice(index, 1)
            this.setData({
                list: list
            })
        },
        // 获取元素自适应后的实际宽度
        getEleWidth(w) {
            let real = 0;
            try {
                let res = wx.getSystemInfoSync().windowWidth;
                let scale = (750 / 2) / (w / 2)
                real = Math.floor(res/scale)
            }catch(e) {
                return false
            }
        },
        initEleWidth() {
            let delBtnWithBtn = this.getEleWidth(this.data.delBtnWithBtn);
            this.setData({
                delBtnWithBtn: delBtnWithBtn
            })
        }
    }
})