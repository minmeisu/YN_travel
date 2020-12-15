<template>
    <div class="loginend">
        <form>
            <input type="text" v-model="iphone" placeholder="请输入手机号"/>
            <div class="verififcation">
                <input type="text" placeholder="请输入验证码" 
                        v-model="code" />
                <!-- 用户信息输入正确的时候验证码可以向后端请求 -->
                <input type="button" 
                       :value="codetext"
                       v-show="!epmty" 
                       :disabled="!send"
                       :class="{'active':sendcode,'begin':codein,'ver-input':funikm}"
                       @click="seedCode"
                        v-bind='teSting'>
                <!-- 前端验证码用户信息输入错误的提示 -->
                <input type="button" v-show="epmty" class="ver-input" :value="codetext" @click="epmtyCode">
            </div>
            <input type="password"  placeholder="请设置密码" v-model="password">
            <div class="loginend-input">
                <input type="button" value="注册并登录"
                       :disabled="!isregist" :class="{regid_active: sendregis, 'regis_begin': regisin}"
                       @click="stertRegis" 
                        v-bind:="minitor"
                >
            </div>
        </form>
    </div>
</template>
<script>

import cookie from '../../../axios/cookie.js' 
import { getcode, register } from '../../../api/api'
export default {
    name : 'register',
    data(){
        return{
            iphone:'',
            code:'',
            password :'',
            //输入框被禁用
            send:true,
            //验证码按钮是否展示
            epmty : true,
            //验证码按钮默认的内容
            codetext:'发送验证码',
            //手机输入错误的提示信息
            iphones : '',
            //验证码的样式
            sendcode:true,
			codein:false,
            funikm:true,
            //注册的输入框禁用
            isregist:false,
            //上边输入为空时
            sendregis:true,
            //必填的填写完毕
            regisin:false,
            
        }
    },
    methods : {
        
        //发送验证码
        seedCode(){
            var that = this
			//时间
			var countdown = 60;
			codetime();
			function codetime(){
				if(countdown == 0){
					that.codetext = "发送验证码";
					countdown = 60;
					that.send = true;
					that.codein = false;
					that.sendcode = true
					return;
				}else{
					countdown--;
					that.codetext = "" + countdown + "秒后重发";
					that.send = false;
					that.codein = true;
					that.sendcode = false
				}
				setTimeout(function(){
					codetime();
				},1000)
            }
            //发送验证码
            getcode ({
                mobile : that.iphone
            }).then ((res) => {
                console.log(res)
            }).catch((err) => {
                //错误情况就是验证码格式不正确或者手机已经存在
                // console.log(err)
                this.iphones = err.mobile[0];
                this.showToast()
            })
            
        },
        //注册
        stertRegis () {
            register ({
                username:this.iphone,
				code:this.code,
				password:this.password
            }).then ((res) => {
                // console.log(res)
                cookie.setCookie('name', res.data.username,7);
                cookie.setCookie('token',res.data.token,7);
                //改变后更新数据仓库的数据
                this.$store.dispatch('users')
                //跳转到首页
                this.$router.push({name:'Home'})
            }).catch((err) => {
                //这里的错误就是验证码不正确
                // console.log(err)
                this.iphones = err.code[0];
                this.showToast();
            })
        },
        //手机号码不正确的提示
        epmtyCode () {
            this.iphones = '手机号码不正确';
            this.showToast();
        },
        //提示框
        showToast () {
            this.$popups(this.iphones)
        },

    },
    //进入注册之前首先得监听用户输入的信息是否正确
    computed : {
        //先监听手机号是否正确
        teSting () {
            if (!(/^1[3|bai4|5|6|7|8|9][0-9]{9}$/).test(this.iphone)) {
                //手机号不正确
                this.epmty = true;
                this.send = false;
            }else{
                //手机号正确
                this.epmty = false;
                this.send = true;
            }
        },
        //验证上边输入的内容信息是否正确
        minitor(){
			if(this.iphone && this.code && this.password != ""){
			this.isregist = true;
			this.sendregis = false;
			this.regisin = true
			}else{
				this.isregist = false;
				this.sendregis = true;
				this.regisin = false
			}	
		},
    }
}
</script>

<style scoped>
input{display: block; width: 100%;
			border: 1px solid #909090;
			padding: 0.2rem 0;
			border-radius: 3px;}
	.loginend{margin: 0 0.5rem;}	
	.verififcation{display: flex; margin: 0.3rem 0;}	
	.ver-input{width: 50%;
				border-left: 0;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				background: #3091e7;
				border: 0;
				color: white;}	
	.verififcation input:nth-child(1){
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
	}			
	.loginend-input{margin-top: 0.8rem;}
	.loginend-input input{border-radius: 20px;
							font-size: 0.3rem;
							color: white;
							/*background: #6cd868;*/
							border: 0;}	
	.regid_active{background: #6cd868;}
	.regis_begin{background: #02bf03;}	
	.active{background: #3091e7;}
	.begin{background: #909090;}				
</style>