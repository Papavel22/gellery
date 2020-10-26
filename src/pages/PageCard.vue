<template>
    <div class="photo-card-section">
        <div @click="this.$router.back()" class="backTo">back to prev page</div>
        <div class="slider" v-bind:style="{ backgroundImage: `url(${ photoUrl.full })` }">
            <div class="fullname">
                <router-link :to="{ name:'Author', params: { authorName: photoAuthor.username } }">
                    {{ `${photoAuthor.first_name} ${photoAuthor.last_name ? photoAuthor.last_name : ''}` }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Card",
        computed: {
            ...mapGetters({
                photo: 'photos/getPhoto'
            }),
            photoUrl() {
                return this.photo.urls || {}
            },
            photoAuthor() {
                return this.photo.user || {}
            }
        },
        created() {
            const photoId = this.$route.params.photoId
            this.fetchPhotoById(photoId)
        },
        methods: {
            ...mapActions({
                fetchPhotoById: 'photos/fetchPhotoById'
            })
        }
    }

</script>

<style scoped>

</style>
