import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: '',
            name: '',
            role: ''
        }
    },
    mutations: {
        addUser(state, payload) {
            state.user.username = payload.username;
            state.user.role = payload.type;
        },
        logOut(state) {
            state.user.username = '';
            state.user.name = '';
            state.user.role = '';
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.user;
        },
        getCurrentRole(state) {
            return state.user.role;
        }
    },
    actions: {},
    modules: {}
});
