import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { IGlobalState } from '@stores/global'
import api from '@utils/api'
import { IRole } from '@/interfaces/permission'

interface IUser {}

export interface IState {
  users: IUser[]
  permissions: any[]
  roles: IRole[]
}

const state: IState = {
  users: [],
  roles: [],
  permissions: []
}

const getters: GetterTree<IState, IGlobalState> = {}

const mutations: MutationTree<IState> = {
  SET_USERS(state, payload) {
    state.users = payload
  },
  SET_PERMISSIONS(state, payload) {
    state.permissions = payload
  },
  SET_ROLES(state: IState, payload: IRole[]) {
    state.roles = payload
  }
}

const actions: ActionTree<IState, IGlobalState> = {
  async fetchUsers(context, payload) {
    // context.commit('setLoading', true)

    // const data = await API.get('/keyword')

    // context.commit('setLoading', false)

    // if (data.error) {
    //   return
    // }

    const { data } = await api.get('/users')

    context.commit('SET_USERS', data)
  },

  async fetchPermissions(context, payload?) {
    const { data } = await api.get('/users/permissions')
    context.commit('SET_PERMISSIONS', data.data)
  },

  async addUsers(context, payload) {
    const params = {
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      password: payload.password,
      role_id: payload.role_id
    }
    const { data } = await api.post('/users', params)

    if (data && data.data) {
      context.dispatch('fetchUsers')
    }

    return data
  },

  async createPermission(context, payload) {
    const params = {
      name: payload.name
    }

    const { data } = await api.post('/users/permissions', params)

    if (data.error) {
      return data
    }
    context.dispatch('fetchPermissions')
  },

  async createMultiPermissions(context, payload: any[]) {
    const { data } = await api.post('/users/permissions/multi', payload)
    if (data.error) {
      return data
    }
    context.dispatch('fetchPermissions')
  },

  async updateUsers(context, payload) {
    const params = {
      id: payload.id,
      name: payload.name,
      phone: payload.phone,
      password: payload.password,
      role_id: payload.role_id
    }
    const { data } = await api.put(`/users/${payload.id}`, params)

    if (data && data.data) {
      context.dispatch('fetchUsers')
    }

    return data
  },

  async updatePermission(context, payload) {
    const params = {
      id: payload.id,
      name: payload.name
    }
    const { data } = await api.put(`/users/permissions/${payload.id}`, params)

    if (data.error) {
      return data
    }

    context.dispatch('fetchPermissions')
  },

  async deleteUser(context, payload) {
    const { data } = await api.delete(`/users/${payload}`, payload)

    if (data.error) {
      return data.error
    }

    context.dispatch('fetchUsers')
  },

  async deletePermission(context, payload) {
    const { data } = await api.delete(`/users/permissions/${payload.id}`, payload)

    if (data.error) {
      return data
    }

    context.dispatch('fetchPermissions')
  },

  async fetchRoles(context) {
    const { data } = await api.get('/roles')

    if (data.data) {
      context.commit('SET_ROLES', data.data)
    }

    return data
  },

  async updateRole(context, payload) {
    const params = {
      role_id: payload.role_id
    }

    const { data } = await api.put(`users/${payload.id}/role`, params)

    context.dispatch('fetchUsers')

    return data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
} as Module<IState, IGlobalState>
