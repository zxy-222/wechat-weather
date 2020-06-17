Component({
    data:{
        rippleStyle:''
    },
    methods:{
        clickIt(res) {
            let that = this;
            let x = res.touches[0].pageX;
            let y = res.touches[0].pageY + 85;
            let rippleStyle = `top:${y}px;left:${x}px;-webkit-animation: ripple 1s linear; animation: ripple 1s linear`
            that.setData({
                rippleStyle: rippleStyle
            })
            let timer = null
            if(timer){
                clearTimeout(timer)
                return false
            }
            timer = setTimeout(()=>{
                that.setData({
                    rippleStyle:''
                })
            },1500)
        }
    }
})