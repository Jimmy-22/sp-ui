import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
//import SpUI from '../modules/spinfo-ui'
import {
  SpButton,
  SpFormItem,
  SpInput,
  SpForm,
  SpCollapse,
  SpCollapseItem,
  SpNotice
} from '../modules'
import '../modules/common.css'
import Bus from './utils/bus.js'

//按需加载
// Vue.use(SpUI, {
//   components: [
//     'SpButton',
//     'SpInput'
//   ]
// })
Vue.use(ElementUI)
Vue.use(SpButton)
Vue.use(SpInput)
Vue.use(SpFormItem)
Vue.use(SpForm)
Vue.use(SpCollapse)
Vue.use(SpCollapseItem)
Vue.use(SpNotice)
Vue.prototype.$bus = new Bus()

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
