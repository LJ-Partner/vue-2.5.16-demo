import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		usercenter:{//用户中心header
			switchbtn:{
				status:false,
				text:'编辑'
			}
			
		}
		
	},
	mutations: {
		set_usercenter_switchbtn (state,obj) {
			state.usercenter.switchbtn = obj;
		},
		
		
	},
	actions: {
		set_usercenter_switchbtn (context,obj) {
			context.commit('set_usercenter_switchbtn',obj)
		},
		
		
	},
	getters: {
		get_usercenter_switchbtn (context) {
			return context.usercenter.switchbtn;
		}
		
	}
});