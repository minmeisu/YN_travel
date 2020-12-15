<template>
    <div class="loginend">
        <form>
           <input type="text" v-bind="loginIng" v-model="phone" placeholder="请输入手机号">
            <input type="password" v-model="passwords" placeholder="请输入密码">
            <input type="button" @click="loGin" :disabled="!isregist" :class="{regid_active: sendregis, 'regis_begin': regisin}" value="登录" v-bind="loginIng">
        </form>
    </div>
</template>

<script>
import {login} from '../../../api/api';
import cookie from '../../../axios/cookie.js'
export default {
    name : 'loginend',
    data(){
        return{
           phone:'',
			passwords:'',
			isregist:false,
			//输入空为空时
			sendregis:true,
			//输入空必填的填写完毕
			regisin:false,
			//提示信息
			iphones:''

        }
	},
	//计算属性可以实时监听data里的数据变化。只要data里的数据发生改变，computed就会重新执行一次
	computed : {
		loginIng(){
			if(this.phone && this.passwords != ""){
				this.isregist = true;
				this.sendregis = false;
				this.regisin = true;
				
			}else{
				this.isregist = false;
				this.sendregis = true;
				this.regisin = false
			}
		}
	},
	methods : {
		//弹出组件
		showToast(){
			this.$popups(this.iphones)
		},
		//登录点击事件，需要进行路由页面的跳转，然后将用户信息放在数据仓库中
		loGin () {
			var that = this;
			login({
				username: that.phone,
				password: that.passwords
			}).then((res)=>{
				//存储到本地
				cookie.setCookie('name',that.phone,7);
				cookie.setCookie('token',res.data.token,7);
				//更新数据仓库的数据
				this.$store.dispatch('users')
				//跳转到首页
				this.$router.push({name:'Home'})
			}).catch((err) => {
				if('non_field_errors' in err){
					that.iphones = '手机号或密码错误';
					that.showToast()
				}
			})
		}
	}
}
</script>

<style scoped>
input{display: block; width: 100%;
			border: 1px solid #909090;
			padding: 0.2rem 0;
			border-radius: 3px;}
	.loginend{margin: 0 0.5rem;}	
	.loginend input:nth-child(1){
		margin: 0.3rem 0;
	}	
	.loginend input:nth-child(3){
		border-radius: 20px;
		margin-top: 0.8rem;
		border: 0;
		font-size: 0.3rem;
		color: white;
		/*background: #6cd868;*/
	}
	.regid_active{background: #6cd868;}
	.regis_begin{background: #02bf03;}
</style>