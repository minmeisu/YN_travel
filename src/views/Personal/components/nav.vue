<template>
    <div>
        <div class="nav">
            <router-link to="/">
                <div>
                    <img :src="shouye">
                    <p>首页</p>
                </div>
            </router-link>
            <router-link to="/personal">
                <div>
                    <img :src="wode">
                    <p>我的</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
//引入图片
import shouyea from '../../../assets/image/shouyea.png'
import wodeb from '../../../assets/image/wodeb.png'
export default {
    name : 'personl-nav',
    data () {
        return {
            shouye:shouyea,
			wode:wodeb
        }
    }
}
</script>
<style scoped>
   @import '../../../assets/style/public.css';
</style>