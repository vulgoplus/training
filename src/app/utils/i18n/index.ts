import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as locale from './locale.json'

Vue.use(VueI18n)

const en = {}
const vi = {}

Object.keys(locale).forEach(key => {
  en[key] = key

  if (locale[key].vi) {
    vi[key] = locale[key].vi
  }
})

const messages = { en, vi }

const i18n = new VueI18n({
  locale: 'en',
  messages: messages
})

export default i18n
