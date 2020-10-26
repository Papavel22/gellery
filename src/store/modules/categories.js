import { getCategories } from "../../services/categories";

export default {
    namespaced: true,
    state: {
        items: [],
        item: {}
    },
    getters: {
        getCategories: state => state.items
    },
    actions: {
        async fetchCategories({commit}) {
            try {
                const categories = await getCategories()
                commit('setItems', {resource: 'categories', items: categories.data}, {root: true})
            } catch (e) {
                console.log(e);
            }
        }
    },
}
