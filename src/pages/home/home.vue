<style lang="less">

.content {      
    margin:0 auto;
    width:100%;
    height:100%;
}
</style>
<template>
    <div  class="content">
        home
        
    </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'
// import store from '../../store/indexStore.js';

export default {
    // computed: mapGetters(['get_usercenter_switchbtn']),
    name:'home',
	data () {
		return {
			
		}
	},
	mounted () {
		//this.count_message();
        
	},
	methods: {
		count_message() {
			
				this.$store.dispatch('set_usercenter_switchbtn',{
                        status:true,
                        text:'ff编辑'
                    });
			
		}
       
	},
    created () {
  }
}
</script>