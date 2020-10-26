<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from "./components/TheHeader";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import "assets/main.e49ec1d4.chunk.css";
</style>
