<template>
    <div>
        <Covers :culum = 'culum'
                :image = 'image'
                :images = 'images'
        ></Covers>
        <Revert :culum = 'culum'>
        </Revert>
        <Collect :productId="productId"></Collect>
        <Speech :culum = 'culum'
			    :lecturer = 'lecturer'
			    :article = 'article'
        ></Speech>
        <Sliding :images = 'images'
        ></Sliding>
    </div>
</template>

<script>
import Covers from './components/covers'
import Sliding from './components/sliding'
import Revert from './components/revert'
import Speech from './components/speech'
import Collect from './components/collect'
//引入数据请求的api
import { goods } from '../../api/api'
export default {
    name : 'Container',
    components : {
        Covers,
        Sliding,
        Revert,
        Speech,
        Collect
    },
    data(){
        return {
             productId : '',//这是获取列表页的id
             culum :'',//标题
             image : '',//图片
             images : [],//相册
             lecturer : '',//语音描述
             article:'',//文章
        }
    },
    mounted(){
        goods(this.productId)
            .then((res) => {
                // console.log(res);
                var data = res.data;
                //这里通过父组件传值给子组件
                //标题
                this.culum = data.curriculum;
                //背景图片
                this.image = data.image;
                //相册
                this.images = data.images;
                //语音描述
                this.lecturer = data.lecturer;
                //文章
				this.article = data.goods_desc
            }).catch((err) => {
                console.log(err)
            })
    },
    created () {
        //取到列表页传过来的id值
        this.productId = this.$route.params.id;
        // console.log("当前详情页的id是多少")
        // console.log(this.productId)
    }
}
</script>

<style scoped>

</style>