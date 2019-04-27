<template>
    <div class="detail">
        <div class="bg-img" :style="{'background-image':'url('+playlist.coverImgUrl+')'}">
            <!-- <div class="filter"></div> -->
        </div>
        <div class="music-return">
            <img src="@/assets/fanhui.png" @click="returnPage"/>
        </div>
        <div class="music-top">
          <div class="music-cover">
            <img class="music-cover-img" :src="playlist.coverImgUrl">
            <div class="music-icon">
              <img src="@/assets/music.png"/>
              <span>{{playlist.playCount | unit}}</span>
            </div>
          </div>
          <div class="music-des">
              <div class="music-des-title">
                  {{playlist.name}}
              </div>
              <div class="music-author">
                  <img class="music-author-img" :src="playlist['creator'].avatarUrl"/>{{playlist.creator.nickname}}
              </div>
              <div class="music-time">
                  最近更新时间：{{playlist.updateTime | getDate}}
              </div>
          </div>
        </div>
        <div class="music-title">歌曲列表</div>
        <div class="music-detail">
          <div class="music-list">
            <div class="music-content" v-for="(tracks,i) in playlist.tracks" :key="i">
              <div class="music-link" @click="checkMusic(tracks.id)">
                <div class="music-num">
                    {{i+1}}
                </div>
                <div>
                    <div class="music-name">{{tracks.name}}</div>
                    <div class="music-singer">{{tracks.ar[0].name}}</div>
                </div>
                <div class="music-play">
                  <img src="@/assets/bofang.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="music-title">精彩评论</div>
        <div class="music-comment" v-for="(items,index) in hotComments" :key="index">
            <div class="music-comment-portrait">
                <img :src="items.user.avatarUrl" alt="">
            </div>
            <div class="music-comment-content">
                <div class="music-comment-name">
                  {{items.user.nickname}} 
                </div>
                <div class="music-comment-time">
                    {{items.time | getDate}}
                </div>
                <div class="music-comment-detail">
                    {{items.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDate } from '@/common/js/tool'

export default {
    name:'detail',
    data(){
        return{
          playlist:{
            'creator':[]//用到里面的数据，不定义报错
          },
          hotComments:[]
        }
    },
    created(){
        this.getDetail()
    },
    filters:{
      getDate(val){
        return getDate(val)
      },
      unit:function(val){
        return Math.round((val /10000) * 100) / 100+'万';
      }
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
            _this.getComment()
          }else{

          }
        },(res)=>{

        })
      },
      // 获取评论
      getComment(){
        let _this = this
        let _id = this.$route.params.id
        _this.$api.get('comment/playlist',{
          id:_this.playlist.id
        },(res)=>{
          if(res.code == 200){
            _this.hotComments = res.hotComments
          }else{

          }
        },(res)=>{

        })
      },
      // 检测音乐接口
      checkMusic(id){
        let _this = this
        //使用检测音乐的接口遇到问题404，所以使用了获取音乐url的接口
        _this.$api.get('song/url',{
          id:id
        },(res)=>{
          if(res.code == 200 ){
            if(res.data[0].url){
              _this.$router.push({ name: 'player', params: { id: id }})
            }else{
              console.log('获取音乐地址失败')
            }
          }else{
            console.log(res)
          }
        },(res)=>{

        })
      }
    }
}
</script>

<style lang="scss" scoped>
.music-name{
  width: 240px;
  overflow: hidden;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.music-play{
  img{
    width: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
.music-comment-content{
  width: 100%;
  color: #333;
  border-bottom: 1px solid #ececec;
  margin: 0 0 0px 10px;
  padding-bottom: 10px;
}
.music-comment-time{
  font-size: 9px;
    color: #999;
}
.music-comment{
    display: flex;
    padding: 10px;
    position: relative;
    background: #fff;
}
.music-comment-portrait{
  img{
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
}
.music-title{
  position: relative;
  margin: 0;
  padding: 4px 10px;
  color: #666;
  font-size: 12px;
  font-weight: 400;
  background: #eeeff0;
}
.music-icon{
  background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
  position: absolute;
  top: 0;
  right: 0;
  text-shadow: 0px 0px 3px #333;
  left: 0;
  text-align: right;
  img{
    width: 16px;
    vertical-align:sub;
  }
  span{
    color: #fff;
    margin-left: 2px;
  }
}
.music-cover{
  position: relative;
}
.music-cover-img{
  width: 126px;
  height: 126px;
}
.music-detail{
  position: relative;
}
.music-author{
  margin: 10px 0;
}
.music-author-img{
 display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
}
.music-link{
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
    width: 190px;
    // position: absolute;
    // top: -78px;
    // left: 20px;
    // right: 0;
    .music-des-title{
        background: none;
        // font-style: italic;
        font-size: 16px;
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
    background-color: #fff;
}
.music-top{
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    display:flex;
    justify-content:space-between;
    padding: 0 14px;
}
.music-content{
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
}
.detail{
    overflow: hidden;
    background: #f2f3f4;
}
.bg-img{
    // width: 100%;
    height: 234px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    transform: scale(10);
}
</style>

