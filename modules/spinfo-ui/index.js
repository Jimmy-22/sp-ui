import Button from './Button'
import Input from './Form/Input'
import FormItem from './Form/FormItem'
import Form from "./Form/Form";
import Collapse from './Collapse/collapse'
import CollapseItem from './Collapse/collapse-item'
import Notice from "./Notice/Notice";

const SpinfoUI = {}
const SpButton = {}
const SpInput = {}
const SpFormItem = {}
const SpForm = {}
const SpCollapse = {}
const SpCollapseItem = {}
const SpNotice = {}


const COMPONENTS = [ Button, Input, FormItem, Form, Collapse, CollapseItem, Notice ]

SpButton.install = Vue => Vue.component(Button.name, Button)
SpInput.install = Vue => Vue.component(Input.name, Input)
SpFormItem.install = Vue => Vue.component(FormItem.name, FormItem)
SpForm.install = Vue => Vue.component(Form.name, Form)
SpCollapse.install = Vue => Vue.component(Collapse.name, Collapse)
SpCollapseItem.install = Vue => Vue.component(CollapseItem.name, CollapseItem)
SpNotice.install = Vue => Vue.component(Notice.name, Notice)

export {
  SpButton,
  SpInput,
  SpCollapse,
  SpCollapseItem,
  SpFormItem,
  SpForm,
  SpNotice
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
