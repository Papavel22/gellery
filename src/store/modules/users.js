import {getUserByName} from "../../services/users";

export default {
    namespaced: true,
    state: {
        item: {}
    },
    getters: {
        getUser: (state) => state.item
    },
    actions: {
        async fetchUserByName ( { commit }, name) {
            commit('setItem', {resource: 'users', item: {}}, {root: true})
            try {
                const user = await getUserByName(name)
                commit('setItem', {resource: 'users', item: user.data}, {root: true})
            } catch (e) {
                console.log(e);
            }
        }
    },
}
