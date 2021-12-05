import Vue from 'vue'

function create(Component, props) {
  //创建一个vue新实例
  const vm = new Vue({
    //render函数将传入组件配置对象转换为虚拟dom
    render(h) {
      console.log(h(Component, {props}));
      return h(Component, {props})
    }
  }).$mount() //执行挂载函数，但未指定挂载目标，表示只执行初始化工作

  //将生成dom元素追加直body
  document.body.appendChild(vm.$el)
  //给组件实例增加销毁方法
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create