import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { IGlobalState } from '@stores/global'

@Component
export default class Background extends Vue {
  @State('is_loading') is_loading: IGlobalState['is_loading']
}
