<template>
    <div class="detail">
        <div class="bg-img"></div>
        <div class="music-box">
            <div class="music-list">
                <div class="music-header">
                    播放全部
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
.music-singer{
    color: #757575;
}
.music-num{
    color: #757575;
    line-height: 40px;
    margin: 0 20px 0 0;
}
.music-list{
}
.music-box{
    background-color: #fff;
    border-radius: 10px 10px 0 0;
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

