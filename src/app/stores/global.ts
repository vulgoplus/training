import { GetterTree, MutationTree, ActionTree, StoreOptions } from 'vuex'
import { IUser } from '@/interfaces/user'
import api from '@utils/api'
import i18n from '@utils/i18n'

export interface IGlobalState {
  is_loading: boolean
  user: IUser | null
  lang: string
}

const state: IGlobalState = {
  is_loading: false,
  user: null,
  lang: 'en'
}

const getters: GetterTree<IGlobalState, IGlobalState> = {}

const mutations: MutationTree<IGlobalState> = {
  SET_IS_LOADING(state: IGlobalState, payload: boolean) {
    state.is_loading = payload
  },
  SET_USER(state: IGlobalState, payload: IUser) {
    state.user = payload
  },
  SET_LANG(state, payload) {
    state.lang = payload
    i18n.locale = payload
  }
}

const actions: ActionTree<IGlobalState, IGlobalState> = {
  setIsLoading(context, payload: boolean) {
    context.commit('SET_IS_LOADING', payload)
  },

  async getUser(context) {
    const { data } = await api.get('/me')

    if (data && data.data) {
      context.commit('SET_USER', data.data)
    }

    return data
  },

  setLang(context, payload) {
    context.commit('SET_LANG', payload)
  }
}

export default { state, getters, mutations, actions } as StoreOptions<IGlobalState>
