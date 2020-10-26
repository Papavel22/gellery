

import Vue from 'vue'
import Vuex from 'vuex'

import photos from './modules/photos'
import users from "./modules/users";
import categories from "./modules/categories";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
        setItems (state, {resource, items}) {
            state[resource].items = items
        },
        setItem (state, {resource, item}) {
            state[resource].item = item
        },
    },
    actions: {
    },
    modules: {
        photos,
        users,
        categories
    },

})
