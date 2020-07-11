import Vue from 'vue'

Vue.filter('number', (value: number): string => {
  if (!value) return '0'
  return value.toLocaleString()
})

Vue.filter('translate', (value: string, options?): string => {
  return value
})

export default Vue
