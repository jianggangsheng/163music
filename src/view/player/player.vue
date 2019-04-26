<template>
    <div class="player">
      <audio id="audio" :src="song.url"></audio>
      <button @click="play">播放</button>
      <button  @click="stop">暂停</button>
    </div>
</template>

<script>
import { timingSafeEqual } from 'crypto';
export default {
    name:"player",
    data(){
        return{
          isPlaying:false,
          song:{}
        }
    },
    created(){
      this.getSongUrl()
    },
    methods:{
        //获取音乐
        getSongUrl(){
          let _this = this
          let _id = this.$route.params.id
          _this.$api.get('song/url',{
            id:_id
          },(res)=>{
            if(res.code == 200){
              _this.song = res.data[0]
            }else{

            }
          },(res)=>{

          })
        },
        //播放
        play(){
          let _this = this
          let _audio =document.querySelector('#audio')
          if(!_this.isPlaying){
            _audio.play()
            _this.isPlaying =true
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

<style>

</style>
