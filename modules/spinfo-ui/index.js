import Button from './Button'
import Input from './Input'
import Collapse from './Collapse/collapse'
import CollapseItem from './Collapse/collapse-item'

const SpinfoUI = {}
const SpButton = {}
const SpInput = {}
const SpCollapse = {}
const SpCollapseItem = {}

const COMPONENTS = [ Button, Input, Collapse, CollapseItem ]

SpButton.install = Vue => Vue.component(Button.name, Button)
SpInput.install = Vue => Vue.component(Input.name, Input)
SpCollapse.install = Vue => Vue.component(Collapse.name, Collapse)
SpCollapseItem.install = Vue => Vue.component(CollapseItem.name, CollapseItem)

export {
  SpButton, 
  SpInput,
  SpCollapse,
  SpCollapseItem
}

SpinfoUI.install = function(Vue, options) {
  console.log(options)
  // Vue.components
  // Vue.directive
  // Vue.mixin
  // Vue.prototype.$http = function() { }
  if (options && options.components) {
    const components = options.components
    components.forEach(item => {
      COMPONENTS.forEach(component => {
        if (item === component.name) {
          //注册组件
          Vue.component(component.name, component)
        }
      })
    })
  } else {
    COMPONENTS.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default SpinfoUI