Component({
    data:{
        content1:'有个小孩他姓王,这个笑话就这么长',
        content:'1、box最外层盒子限制高度，通过overflow:hidden隐藏，给出padding-bottom，定位查看全文按钮；2、fold-box是文字实际高度，查看全文实在实际文字中定位，实际文字超出3行，则显示查看全文按钮，否则不显示；3、若未超出3行，则不需要另外的fold-box盒子啦',
        showAll: true
    },
    methods: {
        readMore() {
            this.setData({
                showAll: false
            })
        },
        foldAll() {
            this.setData({
                showAll: true
            })
        }
    }
})