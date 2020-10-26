import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/PageHome'
import Card from '../pages/PageCard'
import Author from '../pages/PageAuthor'
import Login from '../pages/PageLogin';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/photos_category/:categoryName',
            name: 'photosList',
            component: Home,
            props: true
        },
        {
            path: '/card/:photoId',
            name: 'Card',
            component: Card,
        },
        {
            path: '/author/:authorName',
            name: 'Author',
            component: Author
        },
    ]
})




