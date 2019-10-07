import Vue from 'vue'
import App from './App.vue'
import router from './router'

//可以忽略，生成环境时是否有提示
Vue.config.productionTip = false

//$mount把根实例挂载到指定的节点中，相当于el
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
