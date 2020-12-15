<template>
    <div>
        <div class="speech">
            <div class="speech-title">
                <p>{{ this.culum }}</p>
                <p>{{ this.lecturer }}</p>
            </div>
            <div>
                <img v-show="playing" @click="plays()" src="../../../assets/image/bofang.jpg">
                <img v-show="suspend" @click="suspende()" src="../../../assets/image/zanting.jpg" />
                <audio :src="this.aispeech" ref="audio" @ended="songend"></audio>
            </div>
        </div>

        <!-- 文章 -->
        <div class="strategy" ref="box">
            <div v-html="this.article"></div>
        </div>
    </div>
</template>

<script>
import { speechend } from '../../../api/api';
export default {
    name : 'speech',
    props : {
        culum:'',
		lecturer:'',
		article:''
    },
    data() {
        return {
           playing:true,
           suspend:false,
           textcon:'',
			aispeech:''
        }
    },
    methods :{
        plays () {
            //获取音频这个dom元素
            var Audio = this.$refs.audio;
            //音频播放的函数
            Audio.play();
            this.playing = false;
            this.suspend = true;
        },
        suspende () {
            //获取音频这个dom元素
            var Audio = this.$refs.audio;
            Audio.pause();
            this.playing = true;
			this.suspend = false
        },
        songend () {
            this.playing = true;
            this.suspend = false;
        },
        voIce () {
            var box = this.$refs.box;
            var con = box.textContent ||box.innerText;
            this.textcon = con;
            //这个是用来添加内容的append,那么它里边就有添加进去的内容了
            const formData = new FormData();
            formData.append('speechen', this.textcon);
            speechend(formData)
                .then((res) => {
                   this.aispeech = res.data.speeching
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
    //监听文章是否渲染完毕
    watch : {
        article : function () {
            this.$nextTick(function(){
//				console.log('文章渲染完成了')
				this.voIce()
			})
        }
    }
}
</script>

<style scoped>
    .speech{
        clear:both;
        display: flex;
        justify-content: flex-end;
        background: #CACACA;
        align-items: center;
        margin: 0.3rem 0.1rem;
        border-radius: 3px;
    }
    .speech img{width: 1rem; padding-left: 0.5rem;}	
    .speech-title{
        line-height: 1.5;
    }
    .speech-title p:nth-child(2){color: #888; font-size: 0.2rem;}	
    .strategy{margin: 0.5rem 0.1rem; line-height: 1.8;}
</style>