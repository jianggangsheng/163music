<template>
    <div class="rank">
        <span v-for="(items, index) in topListDetail"
            :key="index">
            <div class="rank-box" v-if="items.tracks != ''">
            <router-link :to="{ name: 'detail', params: { id: items.id }}" class="music-href">
                <div class="rank-img">
                    <img :src="items.coverImgUrl"/>
                </div>
                <div class="rank-text">
                    <p v-for="(tracks,i) in items.tracks" :key="i">{{tracks.first}}</p>
                </div>
            </router-link>
            </div>
        </span>

    </div>
</template>

<script>
export default {
    name:'rank',
    data(){
        return {
            topListDetail:[]
        }
    },
    created(){
        this.getTopListDetail()
    },
    methods:{
        getTopListDetail(){
            let _this = this
            _this.$api.post('toplist/detail',{},(res)=>{
                _this.topListDetail = res.list
            },(res)=>{

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.music-href{
  display: flex;
  text-decoration: none;
}
.rank-box{
    padding: 10px 0;
    display: flex;
    margin: 6px 10px;
    border-bottom: 1px solid #e4e4e4;
}
.rank-text {
    margin: 0 20px;
    p{
        margin: 0;
        padding: 0;
        font-size: 12px;
        line-height: 34px;
    }
}
.rank-img img{
    width: 100px;
    height: 100px;
    border-radius: 4px;
}
</style>
