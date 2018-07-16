import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./src/routes/routes.js";
import components from './src/components/index.js'
import store from './src/store/indexStore.js'
import App from './app.vue';
Vue.use(VueRouter);
//初始化组件
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
});
//初始化路由
const route = new VueRouter({
    mode: 'history',
    routes,
    base:__dirname
});
//登录前验证
route.beforeEach((to, from, next) => {
    next();
});
// route.beforeEach((to, from, next) => {
    
//     if (to.matched.some(record => record.meta.requireAuth)) {
//         var u = navigator.userAgent;
//         var isAppLogin;
//         //判断是否是嵌入到app的标识
//         var isSelfApp = u.indexOf('maicai360_app') > -1;
//         //android终端
//         var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;    
//         //ios终端         
//         var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);                         
//         if(isSelfApp){  //是否是嵌入到app的页面,走app的逻辑                                                                
//             if(isAndroid){
//                 //页面嵌入到app 获取是否登录 调用的方法 布尔值 true false
//                 isAppLogin = window.WCJSBridge.isLogin();                               
//             }else if(isIOS){
//                 //页面嵌入到app 获取是否登录 获取cookie的字段isLogin的值 针对ios                
//                 var value = getCookie('isLogin');                                       
//                     isAppLogin = value ==="true" ? true : false; 
//             }
//             if(isAppLogin){
//                  next();    
//             }else{
//                 //app未登录 调用app登录的方法
//                 if(isAndroid){
//                     window.WCJSBridge.goLogin();
//                 }else if(isIOS){
//                     WCJSBridge.goLogin();    
//                 }
//             }    
//         }else{  //走h5的逻辑
//             if(Storage.get("ljh5user")){
//                 next();
//             }else{
//                 next({
//                     path: '/login'
//                 });    
//             }
//         }
//     } else {
//         next();
//     }
// });
// 
new Vue({
    router:route,
    store:store,
    render: h => h(App)
}).$mount('#app');