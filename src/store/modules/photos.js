import {getPhotos, getPhotoById} from '../../services/photos'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        items: [],
        item: {},
        lastLoadedPage: 1,
        count: 15
    },
    getters: {
        getPhotos: (state) => state.items,
        getPhoto: (state) => state.item
    },
    actions: {
        async fetchPhotos({commit, state}, option) {
            commit('setLoadedCounter', 1)
            option['lastLoadedPage'] = state.lastLoadedPage
            try {
                const photos = await getPhotos(option)
                commit('updatePhotos', photos.data.results || photos.data)
            } catch (e) {
                Vue.toasted.show(e, {duration: 2000, type:'error'} )

            }
        },
        async loadMorePhotos({commit, state}, option) {
            commit('setLoadedCounter', ++state.lastLoadedPage)
            option['lastLoadedPage'] = state.lastLoadedPage
            try {
                const photos = await getPhotos(option)
                commit('addPhotos', photos.data.results || photos.data)
            } catch (e) {
                Vue.toasted.show(e, {duration: 2000, type:'error'} )
            }
        },
        async fetchPhotoById({ commit }, id) {
            commit('setItem', {resource: 'photos', item: {}}, {root: true})
            try {
                const photo = await getPhotoById(id)
                commit('setItem', {resource: 'photos', item: photo.data}, {root: true})
            } catch (e) {
                console.log(e);
            }
        },
    },
    mutations: {
        updatePhotos(state, photos) {
            state.items = photos
        },
        setLoadedCounter(state, newCounter) {
            state.lastLoadedPage = newCounter
        },
        addPhotos(state, photos) {
            state.items.push(...photos)
        },
    }
}
