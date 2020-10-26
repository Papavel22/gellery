<template>
    <div class="user-card-section">
        <div class="user-photo">
            <img :src="user.profile_image.large"
                 alt="user avatar"></div>
        <div class="user-information">
            <p class="name">{{ `Fullname: ${user.first_name}` }}</p>
            <p>{{`Collections: ${user.total_collections}`}}</p>
            <p>{{`Likes: ${user.total_likes}`}}</p>
            <p>{{`Total photos: ${user.total_photos}`}}</p>
            <p>{{`Followers count: ${user.followers_count}`}}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex'

    export default {
        name: "author",
        computed: {
            ...mapGetters({
                user: 'users/getUser'
            })
        },
        created() {
            const userName = this.$route.params.authorName
            this.fetchUser(userName)
        },
        methods: {
            ...mapActions({
                fetchUser: 'users/fetchUserByName'
            })
        }
    }
</script>

<style scoped>

</style>
