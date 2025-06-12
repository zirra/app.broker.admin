const MUTATE_PROFILE = 'mutateProfile'

const state = {
  profile: null
}

const getters = {
  profile: state => state.profile
}

const mutations = {
  mutateProfile (state, user) {
    state.profile = user
  }
}

const actions = {
  setProfile ({ commit }, user) {
    commit(MUTATE_PROFILE, user)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}