<template>
    <div>
        <div v-if="randomPhotoUrl" :class="`slider ${sliderClass}`"
             v-bind:style="{ backgroundImage: `url(${randomPhotoUrl})` }"></div>
        <h2 class="no-results" v-if="photos && photos.length === 0">
            No photos
        </h2>
        <div v-else class="gallery-section">
            <div  class="gallery-container">
                <router-link v-for="photo in photos" :key="photo.id" class="photo-item"
                             :to="{ name: 'Card', params:{ photoId: photo.id } }">
                    <div class="img">
                        <img :src="photo.urls.thumb" alt="photo">
                    </div>
                </router-link>
            </div>
            <div @click="loadMore" class="loader-box"><span class="glyphicon glyphicon-refresh loader "></span></div>
        </div>
    </div>
</template>

<script>
    import {getRandomPhoto} from "../services/photos";
    import {mapActions, mapGetters} from 'vuex'
    import {bus} from '../main';

    export default {
        name: "Home",
        data() {
            return {
                randomPhotoUrl: '',
                sliderClass: 'invisible'
            }
        },
        props: {
            categoryName: {
                required: false,
                type: String,
                default: ''
            },
            searchQuery: {
                required: false,
                type: String,
                default: ''
            },
        },
        computed: {
            ...mapGetters({
                photos: 'photos/getPhotos'
            }),
            photosParams() {
                return {
                    category: this.categoryName,
                    searchQuery: this.searchQuery
                }
            }
        },
        watch: {
            $route() {
                this.fetchPhotos(this.photosParams)
            }
        },
        created() {
            this.fetchPhotos(this.photosParams)
            this.updateRandomPhoto()
            bus.$on('search', (searchQuery) => {
                this.photosParams['searchQuery'] = searchQuery
                this.fetchPhotos(this.photosParams)
            })
        },
        methods: {
            ...mapActions({
                fetchPhotos: 'photos/fetchPhotos',
                loadMorePhotos: 'photos/loadMorePhotos'
            }),
            updateRandomPhoto() {
                this.sliderClass = 'invisible'
                getRandomPhoto().then(res => {
                    this.randomPhotoUrl = res.data[0].urls.regular
                    this.sliderClass = 'visible'
                    setTimeout(this.updateRandomPhoto, 20000)
                })
            },
            loadMore() {
                this.loadMorePhotos(this.photosParams)
            }
        },


    }
</script>

<style scoped lang="scss">
    .slider {
        transition: all .5s linear;

        &.invisible {
            opacity: 0;
        }

        &.visible {
            opacity: 1;
        }
    }

    .no-results {
        text-align: center;
        padding-top: 100px;
    }
</style>
