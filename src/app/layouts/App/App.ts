import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { IGlobalState } from '@stores/global'
import Sidebar from '@/layouts/components/Sidebar'
import Navbar from '@/layouts/components/Navbar'

@Component({
  components: { Sidebar, Navbar }
})
export default class App extends Vue {
  @State('is_loading') is_loading: IGlobalState['is_loading']
  @Action('setLang') setLang

  mounted() {
    const lang = localStorage.getItem('lang') || 'en'
    this.setLang(lang)
  }
}
