<template>
    <div class="singer">
        <ul>
            <li>
                <div class="singer-flag">
                    热门
                </div>
                <ul>
                    <li class="list-group-item" v-for="(items,index) in singerList" :key="index" @click="pageSkipping(items.id)">
                        <img class="avatar" :src="items.img1v1Url"/>
                        <span class="name">{{items.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'singer',
    data(){
        return{
            singerList:[]
        }
    },
    created(){
        this.getSingerList()
    },
    methods:{
        pageSkipping(val){
            this.$router.push({ name: 'singerDetail', params: { id: val }})
        },
        //获取歌手列表
        getSingerList(){
             let _this = this
            _this.$api.post('toplist/artist',{},(res)=>{
                _this.singerList = res.list.artists
            },(res)=>{

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.name{
        margin-left: 20px;
    color: #2e3030;
    font-size: 14px;
}
.avatar{
        width: 50px;
    height: 50px;
    border-radius: 3px;
}
.singer-flag{
        height: 20px;
    line-height: 20px;
    padding-left: 12px;
    margin-bottom: 10px;
    font-size: 11px;
    color: #fff;
    background: rgba(0,0,0,.1);
}
.list-group-item{
        display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
}
</style>
