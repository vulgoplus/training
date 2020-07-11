import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { IGlobalState } from '@stores/global'
import api from '@utils/api'

@Component
export default class Navbar extends Vue {
  @State('user') user: IGlobalState['user']
  @State('lang') lang: IGlobalState['lang']
  @Action('getUser') getUser
  @Action('setLang') setLang

  addFast = [
    {
      label: 'Create product',
      value: 'createProduct'
    },
    {
      label: 'Create order',
      value: 'createOrder'
    },
    {
      label: 'Create customer',
      value: 'customers'
    },
    {
      label: 'Warehouse',
      value: 'warehouse',
      divided: true,
      disabled: true,
      no_icon: true
    },
    {
      label: 'Create receive note',
      value: 'importManagement'
    },
    {
      label: 'Create delivery note',
      value: 'exports'
    },
    {
      label: 'Create inventory note',
      value: 'inventory'
    },
    {
      label: 'Create warehouse transfer note',
      value: 'exchanges'
    }
  ]

  get name() {
    return this.user ? this.user.name : ''
  }

  get image_url() {
    return this.user.image_url
  }

  get has_avatar() {
    return !!this.user.image_url
  }

  get first_letter() {
    return this.user ? this.user.name.slice(0, 1).toUpperCase() : 'BB'
  }

  async mounted() {
    const result = await this.getUser()

    if (result.error && result.error.type === 'NOT_EXISTS') {
      this.$router.push('/login')

      return this.$notify.error({
        title: 'Đăng nhập thất bại.',
        message: 'Tài khoản không tồn tại hoặc hết phiên đăng nhập.'
      })
    }

    if (result.error) {
      this.$notify.error({
        title: 'Đăng nhập thất bại.',
        message: 'Lỗi không xác định.'
      })
    }
  }

  async logout() {
    await api.post('/me/logout')

    this.$router.push('/login')
  }

  switchLanguage(lang: string) {
    localStorage.setItem('lang', lang)
    this.setLang(lang)
  }

  goToPage(value: string) {
    if (value === 'warehouse') {
      return
    }

    if (['createProduct', 'createOrder'].includes(value)) {
      return this.$router.push({ name: value }).catch(_ => {})
    }

    this.setRouter(value)
  }

  setRouter(name: string) {
    return this.$router.replace({ name: name, query: null }).then(_ => {
      this.$router.push({ query: { create: 'true' } })
    }).catch(_ => {
      this.$router.push({ query: { create: 'true' } })
    })
  }
}
