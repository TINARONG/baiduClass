/**
 * Created by Administrator on 2018/5/28.
 */
require('./js/a.js')
document.write('hello world!');
console.log(process.env.NODE_ENV);

import Vue from 'vue';
import ElementUI from 'element-ui'
import MAIN from './view/App.vue';


var APP = new Vue({
    el: '#app',
    data:function () {
        return{
            root: 'root'
        }
    },
    components:{MAIN: MAIN}
});