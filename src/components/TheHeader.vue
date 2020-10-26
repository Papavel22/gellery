<template>
    <div class="header">
        <router-link class="logo active" :to="{ name: 'Home' }">
            <img src="../assets/logo.png">
        </router-link>
        <SearchInput @search="onSearch"></SearchInput>
        <router-link class="item" :to="{name: 'Login'}">Login</router-link>
        <div class="menu-wrapper">
            <ul class="menu">
                <li>
                    <router-link class="item" :to="{ name: 'Home' }">All</router-link>
                </li>
                <li>
                    <router-link v-for=" item in categories" :key="item.id" class="item"
                                 :to="{name: 'photosList', params: {categoryName: item.slug} }">{{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import SearchInput from "./SearchInput";
    import {bus} from '../main';

    export default {
        name: "Header",
        components: {SearchInput},
        computed: {
            ...mapGetters({
                categories: 'categories/getCategories'
            })
        },
        created() {
            this.fetchCategories()
        },
        methods: {
            ...mapActions({
                fetchCategories: 'categories/fetchCategories',
                searchPhotos: 'photos/searchPhotos',
                fetchPhotos: 'photos/searchPhotos'
            }),
            onSearch(query) {
                bus.$emit('search', query).then(this.$router.push({name: 'Home'}))
            }
        },

    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: auto;

        .menu {
            display: flex;
            justify-content: center;
            list-style: none;
            margin-bottom: 0;

            .item {
                margin: 0 15px 0;
                font-size: .7vw;
            }
        }

    }

</style>
