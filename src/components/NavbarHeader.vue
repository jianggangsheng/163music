<template>
    <div class="header">
        <div class="banner">
           
        </div>
        <ul>
            <li>
                <router-link  to="/">发现</router-link>
            </li>
            <li>
                <router-link  to="/rank">排行</router-link>
            </li>
            <li>
                <router-link  to="/singer">歌手</router-link>
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
    name:'NavbarHeader'
}
</script>

<style lang="scss" scoped>
.header{
    .banner{
        background-color: #d43c33;
        height: 64px;
        .topsvg{
            position: absolute;
            left: 10px;
            top: 20px;
            width: 142px;
            height: 25px;
            background-color: #d43c33;
        }
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #d33a31;
    z-index: 123;
    ul{
        display: flex;
        justify-content:center;
        height: 40px;
        line-height: 40px;
        li{
            background-color: #d33a31;
            list-style: none;
            float: left;
            width: 33.3%;
            text-align: center;
            line-height: 40px;
            font-weight: 400;
            a{
                font-size: 15px;
                color: #fff;
                text-decoration: none;
            }
            .router-link-exact-active{
                width: 32px;
                border-bottom: 2px solid #fff;
                padding-bottom: 0px;
                display: inline-block;
            }
        }
    }
    .active{
        color: #d33a31;
    }
}
</style>
