<template>
    <div class="rank">
        <div class="rank-box">
            <div class="rank-img">
                <img src="http://p2.music.126.net/8-GBrukQ3BHhs4CmK6qE4w==/109951163424197392.jpg"/>
            </div>
            <div class="rank-text">
                <p>1.告白气球</p>
                <p>2.告白气球</p>
                <p>3.告白气球</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.rank-box{
    padding: 10px 0;
    display: flex;
    margin: 10px;
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
