import Vue from 'vue'
import * as ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import store from '@/stores'
import '@utils/filter'
import i18n from '@utils/i18n'
import VueI18nFilter from 'vue-i18n-filter'
import '@/style.scss'

Vue.use(ElementUI, { locale })
Vue.use(VueI18nFilter)

export const app = new Vue({
  i18n,
  router,
  store
}).$mount('#app')
