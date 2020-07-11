import Vue from 'vue'

export default class TokenExpired {
  static is_show: boolean

  static show() {
    // trueだった場合はリターンして繰り返さない
    if (this.is_show) {
      return
    }

    this.is_show = true

    Vue.prototype.$notify({
      title: 'Your session has expired',
      dangerouslyUseHTMLString: true,
      message:
        'Please try to login again<br> <button type="button" class="mt-1 el-button el-button--danger"><span>Login</span></button>',
      customClass: 'danger pointer',
      type: 'error',
      onClick: () => {
        window.location.reload()
      },
      duration: 0
    })
  }
}
