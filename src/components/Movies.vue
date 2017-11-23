<template>
  <div class="title">
    <h1>{{type}} Movies</h1>
    <button @click="shuffle">Shuffle</button>
    Alphabetical:
    <button @click="sort('title')">ASC</button>
    <button @click="sort('title', 'desc')">DESC</button>
    Rating:
    <button @click="sort('vote_average')">ASC</button>
    <button @click="sort('vote_average', 'desc')">DESC</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="movie in movies" v-bind:key="movie.title">
        {{ movie.title }}
        <!--<img :src="'https://image.tmdb.org/t/p/w154/' + movie.poster_path" alt="" />-->
      </li>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'
import shuffle from 'lodash/shuffle'
import sortBy from 'lodash/sortBy'
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
    },

    sort: function (sort, direction = 'asc') {
      // always have a secondary sort option in case movies have the same rating
      sort = [sort, 'title']
      this.movies = sortBy(this.movies, sort)
      if (direction === 'desc') this.movies.reverse()
    },

    fetch_data () {
      axios.get('https://api.themoviedb.org/3/movie/' + this.type + '?api_key=07a435bd643821239b3f9beb1a1027cb')
        .then(response => {
          console.log(response.data.results)
          this.movies = response.data.results
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  created () {
    this.fetch_data()
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
