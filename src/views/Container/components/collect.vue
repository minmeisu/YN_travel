<template>
    <div>
        <div class="collect" v-if="notcoll" @click="noColl">
            <img src="../../../assets/image/weishoucang.png">
            <p>未收藏</p>
        </div>
        <div class="collect" v-else @click="canCel">
            <img src="../../../assets/image/yishou.png" alt="">
            <p>已收藏</p>
        </div>
    </div>
</template>

<script>
import cookie from '../../../axios/cookie.js';
import {getcoll, collect, delcoll} from '../../../api/api'
export default {
    name : 'collect',
    props : {
        productId : '',
    },
    data () {
        return {
            notcoll : true,
            collectplay : '',
        }
    },
    //判断是否收藏
    created () {
        var productId = this.productId;
        if (cookie.getCookie('token')) {
            //判断是否收藏
            getcoll(productId)
                .then((res) => {
                    this.notcoll = false;
                }).catch((err) => {
                    this.notcoll = true;
                })
        }else{
            this.notcoll = true;
        }
    },
    methods : {
        //判断是否登录了
        noColl () {
            //从数据存储里边看有没有该用户的信息进行判断是否已经登录
            if (cookie.getCookie('token')) {
                collect ({
                    goods : this.productId
                }).then ((res) => {
                    // console.log(res)
                    this.notcoll = false
                }).catch ((err) =>{
                    // console.log(err)
                    this.notcoll = true
                })
            }else {
                this.collectplay = '请登录后再收藏';
                this.showToast();
            }
        },
        //提示组件
        showToast(){
			this.$popups(this.collectplay)
        },
        //取消收藏
        canCel () {
            delcoll (this.productId)
                .then ((res) => {
                    this.notcoll = true
                }).catch((err) =>{

                })
        }
    }

}
</script>

<style scoped>
    .collect img{width: 0.5rem;}
    .collect p{font-size: 0.3rem; line-height: 1.8;}
    .collect{float: right;
			text-align: center;
			margin: 0.3rem 0.1rem;}
</style>