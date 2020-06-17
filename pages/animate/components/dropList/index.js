Component({
    data:{
        firstIndex: 1,
        firstList:[
            {
                id: 1,
                name: '一级目录1',
                secondList:[
                    {id: 1, name:'二级目录1'},
                    {id: 2, name:'二级目录2'},
                ]
            },
            {
                id: 2,
                name: '一级目录2',
                secondList:[
                    {id: 1, name:'二级目录1'},
                    {id: 2, name:'二级目录2'},
                ]
            },
            {
                id: 3,
                name: '一级目录3',
                secondList:[
                    {id: 1, name:'二级目录1'},
                    {id: 2, name:'二级目录2'},
                ]
            }
        ]
    },
    methods:{
        changeTab(e){
            let that = this;
            that.setData({
                firstIndex: e.currentTarget.dataset.id
            })
        }
    }
})