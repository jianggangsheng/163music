<template>
<div>
    <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
        <div v-for="(item,index) in items" :key="index">
            <a :href="item.linkUrl" target="_blank">
                <img :src="item.picUrl">
            </a>
        </div>
    </slide>
    <div class="song-title">推荐歌单</div>
    <div class="song">
      <div class="music-box" v-for="(items,index) in personalized" :key="index"> 
          <router-link :to="{ name: 'detail', params: { id: items.id }}" class="music-href">
            <span class="music-listen">{{items.playCount | unit}}</span>
            <img class="album" :src="items.picUrl"/>
            <p class="music-title">{{items.name}}</p>
          </router-link>
      </div>
    </div>
    <div class="song-title">最新专辑</div>
    <div class="song">
      <div class="music-box" v-for="(items,index) in newest" :key="index"> 
          <router-link :to="{ name: 'album', params: { id: items.id }}" class="music-href">
              <!-- <span class="music-listen">{{items.playCount | unit}}</span> -->
              <img class="album" :src="items.picUrl"/>
              <p class="music-title">{{items.name}}</p>
          </router-link>
      </div>
    </div>
    </div>
</template>

<script>
import slide from '@/components/Slide.vue'
export default {
    name:'index',
    created() {
        this.getBanner()
        this.getPersonalized()
        this.getNewest()
    },
    components: {
      slide
    },
    // computed: {
    //   items() {
    //     // return items
    //   }
    // },
    watch: {
      index() {
        this.$refs.slide.update()
      }
    },
    filters:{
        unit:function(val){
            return Math.round((val /10000) * 100) / 100+'万';
        }
    },
    data(){
      return{
        items:[],
        scroll:'',
        index: 0,
        turnToPrev: false,
        turnToNext: false,
        isAutoPlay: true,
        isLoop: true,
        isShowDot: true,
        speed: 400,
        threshold: 0.3,
        interval: 4000,
        personalized:[],//推荐歌单
        newest:[],//推荐专辑
      }
    },
    mounted() {
    },
    methods: {
      //获取banner
      getBanner(){
        let _this = this
        let _banner = []
        _this.$api.post('banner',{},(res)=>{
          if(res.code == 200){
            res.banners.map(function(item,index,input){
                _banner.push({
                    'linkUrl':item.url,
                    'picUrl':item.imageUrl,
                    'id':item.encodeId,
                })
            })
            _this.items = _banner
            _this.$refs.slide.update()
          }else{
          }
          
        },(res)=>{

        })
      },
      //推荐歌单
      getPersonalized(){
        let _this = this
        _this.$api.post('personalized',{},(res)=>{
          if(res.code == 200){
            _this.personalized = res.result
          }else{

          }
        },(res)=>{

        })
      },
      //最新专辑
      getNewest(){
        let _this = this
        _this.$api.post('album/newest',{},(res)=>{
            _this.newest= res.albums
        },(res)=>{

        })
      }
    },
}
</script>

<style lang="scss" scoped>
.wrapper{
  overflow: hidden;
  height: 150px;
  position: absolute;
  top: 105px;
}
.music-href{
  position: relative;
}
.scroll{
    li{
        img{
            width: 100%;
        }
    }
}
.music-title{
  float: left;
  text-align: left;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  margin-bottom: 10px !important;
  font-size: 11px;
}

.song-title{
    height: 40px;
    font-weight: 400;
    line-height: 40px;
    position: relative;
    padding: 0 0 0 10px;
    font-size: 16px;
    &:after{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -9px;
        width: 2px;
        height: 16px;
        background-color: #d33a31;
    }
}
    .music-box{
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 33%;
      padding: 0 1%;
        a{
            text-decoration: none;
            .music-listen{
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
                color: #fff;
                position: absolute;
                right: 4px;
                background-position: 1px 4px;
                background-repeat: no-repeat;
                background-size: 11px 10px;
                text-shadow: 1px 0 0 rgba(0,0,0,.15);
                padding-left: 13px;
                background: none;
                text-shadow: 0px 0px 3px #333;
            }
            p{
                margin: 0;
            }
            .album{
                width: 100%;
            }
        }
    }
</style>
