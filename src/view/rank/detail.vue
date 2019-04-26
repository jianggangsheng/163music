<template>
    <div class="detail">
        <div class="bg-img" :style="{'background-image':'url('+playlist.coverImgUrl+')'}">
            <div class="filter"></div>
        </div>
        <div class="music-return">
            <img src="@/assets/fanhui.png" @click="returnPage"/>
        </div>
        <div class="music-box">
            <div class="music-des">
                <div class="music-title">
                    {{playlist.name}}
                </div>
                <div class="music-time">
                    最近更新时间：4月12日
                </div>
            </div>
            <div class="music-header">
                <img src="@/assets/bofangall.png"/>
                <span class="play-all-text">播放全部</span>
                <span class="play-all-num">（共20首）</span>
            </div>
            <div class="music-list">
                <div class="music-content" v-for="(tracks,i) in playlist.tracks" :key="i">
                  <router-link :to="{ name: 'player', params: { id: tracks.id }}">
                    <div class="music-num">
                        {{i+1}}
                    </div>
                    <div>
                        <div>{{tracks.name}}</div>
                        <div class="music-singer">{{tracks.ar[0].name}}</div>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail',
    data(){
        return{
          playlist:[]
        }
    },
    created(){
        this.getDetail()
    },
    methods:{
      // 返回上一页
      returnPage(){
        this.$router.push({path:'/'})
      },
      //获取详情
        getDetail(){
          let _this = this
          let _id = this.$route.params.id
          _this.$api.get('playlist/detail',{
            id:_id
          },(res)=>{
            if(res.code == 200){
              _this.playlist = res.playlist
              console.log(res)
            }else{

            }
          },(res)=>{

          })
        }
    }
}
</script>

<style lang="scss" scoped>
a{
    display: inherit;
    text-decoration: none;
}
.filter{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .3;
}
.music-des{
    color: #fff;
    background: none;
    position: absolute;
    top: -78px;
    left: 20px;
    right: 0;
    .music-title{
        background: none;
        // font-style: italic;
        font-size: 18px;
    }
    .music-time{
        background: none;
        font-size: 11px;
    }
}
.music-return{
    img{
        position: absolute;
        top: 10px;
        background: none;
        width: 20px;
        left: 10px;
    }
}
.music-header{
    padding: 10px 16px;
    border-radius: 20px 20px 0 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #f2f3f4;
    img{
        vertical-align: text-top;
        width:16px;
    }
}
.play-all-text{
    font-size: 16px;
    margin: 0 0 0 14px;
}
.play-all-num{
    font-size: 14px;
    color: #757575;
}
.music-singer{
    color: #757575;
}
.music-num{
    color: #757575;
    line-height: 40px;
    margin: 0 20px 0 0;
}
.music-list{
    background-color: #f2f3f4;
}
.music-box{
    position: absolute;
    left: 0;
    right: 0;
    top: 240px;
}
.music-content{
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid #e4e4e4;
}
.detail{
    // position: fixed;
    // z-index: 124;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    background: #f2f3f4;
}
.bg-img{
    width: 100%;
    height: 316px;
    background-repeat: round;
}
</style>

