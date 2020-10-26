<template>
    <div class="search-wrapper">
        <input type="text" @keyup.enter="search()" v-model="query">
    </div>
</template>

<script>
    export default {
        name: "searchInput",
        data () {
            return {
                query: ''
            }
        },
        methods: {
            search () {
                this.$emit('search', this.query )
            },
        }
    }
</script>

<style scoped lang="scss">
    .search-wrapper {
        min-width: 50%;
    }
 input {
     width: 100%;
     background-color: rgba(255,255,255, 0.3);
     border: none;
     padding: 5px 10px;
     outline: none !important;
     border-radius: 4px;
 }
</style>
