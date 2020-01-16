import Vue from 'vue'
import VueI18n from 'vue-i18n'
import id from './id.json'

Vue.use(VueI18n)

const en = () => import('./en.json')

export default new VueI18n({
  locale: 'ID',
  messages: {
    ID: id,
    EN: en
  }
})
