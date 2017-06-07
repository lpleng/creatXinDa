// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
Vue.config.productionTip = false


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.ajax = axios
Vue.prototype.qs = qs
Vue.prototype.md5 = md5
Vue.prototype.make_price =  function(price){//价格转化
    return (price/100).toFixed(2)
};
Vue.prototype.make_time =  function(times){//转化时间戳
    var add0 = function(value){
      return value < 10?"0"+value:value;
    }; 
    var time = new Date(times);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return year + "/" + add0(month) + "/" + " " + add0(h) + ":" + add0(mm) + ":" + add0(s);
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
