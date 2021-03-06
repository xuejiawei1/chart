import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
