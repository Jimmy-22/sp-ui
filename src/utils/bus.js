//事件总线  任意两个组件之间传值常用事件总线或vuex
//eventBus 事件派发，监听
class eventBus {
  cache = {}
// {
//   'name1': [fn1, fn2, fn3],
//   'name2': [fn1, fn2, fn3]
// }
  $on(name, fn) {
    //把fn推进this.cache[name]数组
    this.cache[name] = this.cache[name] || []
    this.cache[name].push(fn)
  }
  $emit(name, data) {
    //把数组里的fn全部依次调用
    (this.cache[name] || []).forEach(fn => fn(data))
  }
}

export default eventBus
