<template>
<!-- 标题组件 -->
    <div class="covers">
        <div class="covers-sipers">
            <img :src="image">
        </div>
        <div class="covers-title">
            {{ this.culum }}
        </div>
        <div class="covers-image" @click="imageShow">
            {{ this.images.length }}张图片
        </div>
        <!-- 小导航图标 -->
        <div class="classify">
            <div>
				<img src="../../../assets/image/jingdian.png"/>
				<p>景点</p>
			</div>
			<div>
				<img src="../../../assets/image/meishi.png"/>
				<p>美食</p>
			</div>
			<div>
				<img src="../../../assets/image/gouwu.png"/>
				<p>购物</p>
			</div>
			<div>
				<img src="../../../assets/image/zhusu.png"/>
				<p>住宿</p>
			</div>
        </div>
    </div>

</template>

<script>
import Bus from '../../../bus/bus.js'	
export default {
    name : 'Covers',
    //props接受父组件传过来的值
    props:{
        culum : '',
        image :'',
        images : Array,

    },
    data(){
        return {
            showimg : String,
        }
    },
    mounted (){
        //接受从轮播相册组件sliding传过来的值
        Bus.$on('val', (data) =>{
            this.showimg = data;
        })
    },
    methods : {
        imageShow () {
            this.showimg = true
            //发送已改变的this.showimg
            Bus.$emit('val', this.showimg)
        }
    }
}
</script>
<style scoped>
    .covers{
        position: relative;
    }
    .covers-sipers img{
        width: 100%;
    }
    .covers-title{
        position: absolute;
        top: 2rem;
        left: 0.5rem;
        font-size: 0.5rem;
        color: #fff;
    }
    .covers-image{
        position: absolute;
        top: 3rem;
        left: 0.5rem;
        font-size: 0.36rem;
        color:#fff;
    }
    .classify{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0.5rem;
        text-align: center;
        width: 100%;
    }
    .classify img{
        width: 45%;
    }
    .classify p{
        color: #fff;
        padding-top: .1rem;
        font-size: 0.3rem;
    }
</style>