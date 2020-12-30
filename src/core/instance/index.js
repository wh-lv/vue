import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}


initMixin(Vue) // 实现上面的 _init 方法
stateMixin(Vue) // 实现 $set、$delete、$watch
eventsMixin(Vue) // 实现 $emit/$on/$once/$off
lifecycleMixin(Vue) // 实现 _update/$forceUpdate/$destroy
renderMixin(Vue) // 实现 _render/$nectTick

export default Vue
