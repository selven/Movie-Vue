<template>
  <div id="app">
    <header>
      <router-link to="/" id="logo">Movie Vue</router-link>
    </header>
    <div class="content">
      <nav class="navigation">
        <ul>
          <li><router-link to="/popular">Popular</router-link></li>
          <li><router-link to="/top">Top Movies</router-link></li>
          <li><router-link to="/upcoming">Upcoming Movies</router-link></li>
          <li><router-link to="/now-playing">Now Playing</router-link></li>
        </ul>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  /* lazy reset */
  * {
    margin: 0;
    padding: 0;
  }
  html {
    min-height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    background-image: linear-gradient(to bottom, #243949 0%, #517fa4 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  header {
    margin-bottom: 10px;
  }
  #logo {
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    font-weight: bold;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 900px;
    margin: 60px auto 0;
    
    .content {
      background: #fff;
      overflow: auto;
    }
  }
  .navigation {
    background: #eee;
    height: 60px;
    
    ul {
      li {
        list-style: none;
        display: inline-block;
        a {
          padding: 20px;
          display: inline-block;
          color: #000;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>