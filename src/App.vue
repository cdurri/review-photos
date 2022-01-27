<template>
  <div id="app">
    <ReviewForm />
  </div>
</template>

<script>
import ReviewForm from './components/ReviewForm.vue'

export default {
  name: 'App',
  components: {
    ReviewForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
