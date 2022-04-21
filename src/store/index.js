import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {
      teams: [
        {
          id: 1,
          name: 'Backend',
          members: [
            {
              id: '1',
              name: 'Dmitriy'
            },
            {
              id: 2,
              name: 'Mark'
            }
          ]
        },
        {
          id: 2,
          name: 'Testers',
          members: [
            {
              id: 1,
              name: 'Alex'
            },
            {
              id: 2,
              name: 'Mary'
            }
          ]
        },
      ],
      topics: [
        {
          id : '1',
          name: 'TICKET-123',
          teamIds: [1]
        },
        {
          id : '2',
          name: 'TICKET-456',
          teamIds: [1,2]
        }
      ]
    }
  },
  getters: {
    getSession(state) {
      return state.session;
    }
  },
  mutations: {
    addMember(state) {
      state.session.teams[0].members.push(
          {
            id: null,
            name: 'new member'
          }
      )
    }
  },
  actions: {
  }
})
