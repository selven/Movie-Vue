<template>
  <div class="title">
    <h1>{{type}} Movies</h1>
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="movie in movies" v-bind:key="movie.title">
<!--        {{ movie.title }}-->
        <img :src="'https://image.tmdb.org/t/p/w154/' + movie.poster_path" alt="" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'
import shuffle from 'lodash/shuffle'
export default {
  name: 'Movies',
  props: ['type'],

  data () {
    return {
      movies: [],
      errors: []
    }
  },

  methods: {
    shuffle: function () {
      this.movies = shuffle(this.movies)
    }
  },

  created () {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=07a435bd643821239b3f9beb1a1027cb')
    .then(response => {
      console.log(response.data.results)
      this.movies = response.data.results
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style lang="scss" scoped>
  .flip-list-move {
    transition: transform 1s;
  }
  li {
    list-style: none;
    float: left;
    height: 240px;
  }
</style>
