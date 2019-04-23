<template>
<div>
    <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
        <div v-for="(item,index) in items" :key="index">
            <a :href="item.linkUrl" target="_blank">
                <img :src="item.picUrl">
            </a>
        </div>
    </slide>
    <div class="song">
        <div class="song-title">推荐歌单</div>
        <div class="song-box">
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
        </div>
        <div class="song-box">
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
        </div>
    </div>
    <div class="song">
        <div class="song-title">推荐歌单</div>
        <div class="song-box">
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
        </div>
        <div class="song-box">
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
            <div class="music-box">
                <a href="http://www.baidu.com" target="_blank">
                    <span class="music-listen">567.3万</span>
                    <img src="http://p2.music.126.net/5qATW1eZpaMerBgPCbj3Xw==/109951163970536996.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                    <p>清明｜烟雨十里春深 念念不忘故人</p>
                </a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
// var items = [
    //   {
    //     linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
    //     id: 11351
    //   },
    //   {
    //     linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
    //     id: 11372
    //   },
    //   {
    //     linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
    //     id: 11378
    //   },
    //   {
    //     linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
    //     id: 11375
    //   },
    //   {
    //     linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
    //     id: 11287
    //   }
    
//   ]
import slide from '@/components/Slide.vue'
export default {
    name:'index',
    created() {
        this.getBanner()
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
    data(){
      return{
          items:[
      {
        linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
        id: 11351
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
        id: 11372
      },
      {
        linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
        id: 11378
      },
      {
        linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
        id: 11375
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
        id: 11287
      }
    
  ],
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
            console.log(_banner)
            console.log(_this.items)
            console.log('1')
            // _this.items=res.banners.splice(4)
          }else{
          }
          
        },()=>{

        })
      },
      //推荐歌单
      getPersonalized(){
        
      }
    },
}
</script>

<style lang="scss" scoped>
.wrapper{
  // width: 100%;
  overflow: hidden;
  height: 150px;
  position: absolute;
  top: 105px;

}
.scroll{
    li{
        img{
            width: 100%;
        }
    }
}
.song{
    // padding: 152px 0 0 ;q
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
.song-box{
    margin: 0 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .music-box{
        width: 33%;
        a{
            text-decoration: none;
            position: relative;
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

            }
            p{
                margin: 0;
            }
            img{
                width: 100%;
            }
        }
    }
}
</style>
