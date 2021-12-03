import Vue from 'vue'
import App from './App.vue'
//import SpUI from '../modules/spinfo-ui'
import { SpButton, SpFormItem, SpInput, SpForm, SpCollapse, SpCollapseItem } from '../modules/spinfo-ui'
import '../modules/spinfo-ui/common.css'
import Bus from './utils/bus.js'

//按需加载
// Vue.use(SpUI, {
//   components: [
//     'SpButton',
//     'SpInput'
//   ]
// })
Vue.use(SpButton)
Vue.use(SpInput)
Vue.use(SpFormItem)
Vue.use(SpForm)
Vue.use(SpCollapse)
Vue.use(SpCollapseItem)
Vue.prototype.$bus = new Bus()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

