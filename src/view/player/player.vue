<template>
  <div>
    <div class="filter"></div>
    <!-- <div class="player" @click="play" :style="{'background-image':'url('+song.picUrl+')'}"> -->
    <div class="player">
      <div class="player-song-wrap">
        <div class="player-disc" v-show="!isLyric" @click="changingOver">
          <div class="player-turn">
            <div class="player-rollwrap ">
              <div class="player-img player-circling" :class="{'player-circling-running':isPlaying}">
              <img class="u-img" :src="song['picUrl']" alt="">
              </div>
            </div>
            <div class="player-song-lgour">
              <div class="player-song-light player-circling" :class="{'player-circling-running':isPlaying}"></div>
            </div>
          </div>
          <!-- <span class="player-song-plybtn" v-show="isPlaying==false"> -->
          <!-- </span> -->
        </div>
      </div>
      <!--歌词-->
      <div class="player-song-info" v-show="isLyric" @click="changingOver">
        <h2 class="player-song-h2">{{song.name}}-{{singer.name}}</h2>
        <p class="m-song-lritem j-lritem" v-if="lyric == ''">无歌词</p>
        <div class="player-song-lrc" ref="lyric">
          <div class="player-song-scroll" style="height:100%">
            <div class="player-song-iner">
              <p :class="['lyric-item', {'lyric-active': activeIndex === index}]" v-for="(items,index) in lyric" :key="index" class="m-song-lritem j-lritem" style="">{{items.content}}</p>
            </div>
          </div>
        </div>
      </div>
          <ProgressBar class="progress-bar" :percent="percent" @percentChange="setProgress"></ProgressBar>
      <div class="play" @click="play">
      </div>
      <audio id="audio" :src="url" autoplay loop ref="audio"></audio>
    </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { timingSafeEqual } from 'crypto';
import { lrc2Json } from '@/common/js/tool'
import ProgressBar from '@/components/ProgressBar'

export default {
    name:"player",
    components:{
      ProgressBar
    },
    data(){
        return{
          scroll:null,
          url:'',
          isPlaying:false,
          isLyric:false,
          song:{},
          singer:{},
          lyric:[],//歌词
          activeIndex: 0,
          currentTime:0,
          currentSong:{
            duration:0
          }
        }
    },
    created(){
      this.getSongUrl()
      this.getDetail()
      this.getLyric()
      this.play()
    },
    mounted(){
      this.init()
      this.lyricScrollInit()
    },
    methods:{
      percent(){
        return Math.min(1, this.currentTime / this.currentSong.duration)
      },
      changingOver(){
        this.isLyric = !this.isLyric
      },
      setProgress(percent) {
        // 根据子组件传过来的百分比设置播放进度
        // this.$refs.audio.currentTime = this.currentSong.duration * percent
        // 拖动后设置歌曲播放
        if (!this.isPlaying) {
          this.play()
        }
      },
      init () {
        let _this = this
        this.$refs.audio.addEventListener('timeupdate', e => {
          let timeStamp = e.target.currentTime * 1000
          _this.activeIndex = _this.lyric.findIndex((item, index) => {
            return item.ms < timeStamp && _this.lyric[index + 1] ? _this.lyric[index + 1].ms > timeStamp : true
          })
          _this.scroll.scrollTo(0, -30 * _this.activeIndex + 54, 500)
        })
      },
      lyricScrollInit () {
        this.scroll = new BScroll(this.$refs.lyric)
        this.scroll.scrollTo(0, 54)
      },
      //获取音乐
      getSongUrl(){
        let _this = this
        let _id = this.$route.params.id
        _this.$api.get('song/url',{
          id:_id
        },(res)=>{
          if(res.code == 200){
            _this.url = res.data[0].url
          }else{

          }
        },(res)=>{

        })
      },
      //获取歌曲详情
      getDetail(){
        let _this = this
        let _id = this.$route.params.id
        _this.$api.get('song/detail',{
          ids:_id
        },(res)=>{
          if(res.code == 200){
            _this.song = res.songs[0].al
            console.log(res.songs)
            _this.singer = res.songs[0].ar[0]
          }else{

          }
        },(res)=>{

        })
      },
      // 获取歌词
      getLyric(){
          let _this = this
        let _id = this.$route.params.id
        _this.$api.get('lyric',{
          id:_id
        },(res)=>{
          if(res.code == 200){
            _this.lrc2Json(res.lrc.lyric)
          }else{

          }
        },(res)=>{

        })
      },
      //歌词转换
      lrc2Json(lrc){
        let _this = this
        let arr = lrc.split('\n')
        let timeReg = /^\[.*\]/
        _this.lyric = []
        arr.forEach(item => {
          let time = item.match(timeReg)[0].substr(1, 8)
          if(time.match(/\d+/g)!=null){
            let minute = time.substr(0, 2)
            let second = time.substr(3, 2)
            let ms = time.substr(6, 2)
            _this.lyric.push({
              time:time,
              ms: parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(ms) * 10,
              content: item.substr(11)
            })
          }
        })
      },
      //播放
      play(){
        let _this = this
        let _audio =document.querySelector('#audio')
        if(!_this.isPlaying){
          _audio.play()
          _this.isPlaying =true
        }else{
          _this.stop()
        }
      },
      //暂停
      stop(){
        let _this = this
        let _audio =document.querySelector('#audio');
        if(_this.isPlaying){
          _audio.pause()
          _this.isPlaying =false
        }
      }
    }
}
</script>

<style lang="scss" scoped>
 .play{
   width: 100px;
   height: 100px;
   background: #333;
   position: relative;
   z-index: 123
 }
 .progress-bar{
   position: relative;
   z-index: 123;
 }
.filter{
    //   position: absolute;
    // width: 100%;
    // height: 100%;
    // background: #000;
    // opacity: .6;
}
.lyric-active{
  color: #fff;
}
.m-song-lritem{
  text-align: center;
}
.player::after{
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0,0,0,.5);
}
.player{
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transform-origin: center top;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  opacity: 1;
  transition: opacity .3s linear;
}
.player-song-info {
  padding: 0 35px;
  position: relative;
  z-index: 11;
}
.player-song-iner{
  transition: transform .3s ease-out;
}
.player-song-lrc{
  position: relative;
  overflow: hidden;
  margin-top: 14px;
}
.player-song-scroll {
    line-height: 1.5;
    font-size: 13px;
    height: 72px;
    overflow: hidden;
}
.player-song-h2{
  text-align: center;
  font-size: 15px;
  line-height: 1.1;
  color: #fefefe;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.player-song-wrap{
  padding-top:70px;
}
.player-song-light{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: url(../../assets/disc_light-ip6.png) no-repeat;
  background-size: contain;
}
.player-song-lgour{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
}
.player-disc{
  position: relative;
  width: 248px;
  height: 248px;
  margin: 0 auto;
}
@media screen and (min-width: 414px){

.player-disc {
  width: 342px;
  height: 342px;
}
}

@media screen and (min-width: 360px){
.player-disc{
  width: 296px;
  height: 296px;
}
}

.player-song-plybtn{
  position: absolute;
  width: 56px;
  height: 56px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 10;
  background: url(../../assets/broadcast.png) 0 0 no-repeat;
  background-size: contain;
}
.player-turn{
  width: 100%;
}
.player-turn::after{
  content: " ";
  position: absolute;
  width: 96px;
  height: 137px;
  top: -70px;
  left: 133px;
  z-index: 5;
  background: url(../../assets/needle-ip6.png) no-repeat;
  background-size: contain;
}
.player-turn::before{
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  background-image:url(../../assets/disc-ip6.png);
  background: url(../../assets/disc.png) no-repeat;
  background-size: contain;
}
.player-circling{
  animation: circling 20s infinite linear;
  animation-play-state: paused;
}
.player-circling-running{
  animation-play-state: running;
}
@-webkit-keyframes circling{
  0%{-webkit-transform:rotate(0deg)}
  50%{-webkit-transform:rotate(180deg)}
  100%{-webkit-transform:rotate(360deg)}
}
.u-img{
  width: 100%;
}
.player-rollwrap{
  width: 184px;
  height: 184px;
  margin: -92px 0 0 -92px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
}
.player-img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: url(//s3.music.126.net/m/s/img/disc_default.png?7c9b3ad…) no-repeat;
  background-size: contain;
}
</style>

