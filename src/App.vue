<template>
  <div id="app">
    Movie App
    <ul>
      <li><router-link to="/">Popular</router-link></li>
      <li><router-link to="/top">Top Movies</router-link></li>
      <li><router-link to="/upcoming">Upcoming Movies</router-link></li>
      <li><router-link to="/now-playing">Now Playing</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>