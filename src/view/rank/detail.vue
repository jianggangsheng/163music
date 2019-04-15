<template>
    <div class="detail">
        <div class="bg-img">
            <div class="filter"></div>
        </div>
        <div class="music-return">
            <img src="@/assets/fanhui.png"/>
        </div>
        <div class="music-box">
            <div class="music-des">
                <div class="music-title">
                    云音乐国电榜
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
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
                <div class="music-content">
                    <div class="music-num">
                        1
                    </div>
                    <div>
                        <div>告白气球</div>
                        <div class="music-singer">周杰伦</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

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
    top: -50px;
    left: 20px;
    right: 0;
    .music-title{
        background: none;
        font-style: italic;
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
    position: fixed;
    z-index: 124;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f2f3f4;
}
.bg-img{
    background-image: url(http://p2.music.126.net/8-GBrukQ3BHhs4CmK6qE4w==/109951163424197392.jpg);
    height: 50%;
    background-size: 100%100%;
}
</style>

