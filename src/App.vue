<template>
  <nav>
    <NavBar />
  </nav>
  <router-view/>
</template>

<script>
  import NavBar from './components/Layout/NavBar.vue'

  export default {
    components: {
      NavBar
    }

  }

</script>

<style lang="scss">
  @import'../src/scss/App.scss'
</style>
