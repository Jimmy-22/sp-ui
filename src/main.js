import Vue from 'vue'
import App from './App.vue'
//import SpUI from '../modules/spinfo-ui'
import { SpButton, SpInput } from '../modules/spinfo-ui'
import '../modules/spinfo-ui/common.css'

//按需加载
// Vue.use(SpUI, {
//   components: [
//     'SpButton',
//     'SpInput'
//   ]
// })
Vue.use(SpButton)
Vue.use(SpInput)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

