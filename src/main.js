/**
 * Created by Administrator on 2018/5/28.
 */
require("babel-polyfill");//解决兼容
require('./js/a.js');
require('./js/b.js');


console.log(process.env.NODE_ENV);
import Vue from 'vue';
import MAIN from './view/App.vue';
import '../theme/index.css'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

var APP = new Vue({
    el: '#app',
    data:function () {
        return{
            root: 'root'
        }
    },
    components:{MAIN: MAIN}
});


