import vue from 'vue'

//引入弹窗组件
import popupComponent from './popup.vue'

//使用vue的基础构造器，创建一个子类
const Popupctor = vue.extend(popupComponent)

//定义一个弹窗组件的函数，显示的提示信息，时间
function showToast(text, time=1500){
	//实例化一个弹窗组件
	const toastDom = new Popupctor({
		//createElement()创建一个元素
		el:document.createElement('div'),
		data(){
			return{
			text:text,
			showwrap:true  //是否显示组件	
			}
		}
		
	})
	
	//把实例化的弹窗组件添加到body里面来
	document.body.appendChild(toastDom.$el)
	
	//多长时间隐藏组件
	setTimeout(() => {toastDom.showwrap = false}, time)
}

//注册为全局组件的函数
function popupToast(){
	//将组件注册到vue的原型链中
	//其他页面就可以直接this.$popups
	vue.prototype.$popups = showToast
}

export default popupToast