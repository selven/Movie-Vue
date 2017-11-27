<template>
  <div class="movie-list">
    <div class="movies-list__bar">
      <h1 class="movies-list__name">{{name}} Movies</h1>
      <div class="movies-list__options">
        <button class="movies-list__button movies-list__button--shuffle" @click="shuffle">Shuffle</button>
        <label>Alphabetical:</label>
        <button class="movies-list__button" @click="sort('title')">ASC</button>
        <button class="movies-list__button" @click="sort('title', 'desc')">DESC</button>
        <label>Rating:</label>
        <button class="movies-list__button" @click="sort('vote_average')">ASC</button>
        <button class="movies-list__button" @click="sort('vote_average', 'desc')">DESC</button>
      </div>
    </div>
    <transition-group class="movies-list__items" name="movies-list__items" tag="ul">
      <template v-for="movie in movies">
        <MovieItem :id="movie.id" :title="movie.title" :poster="movie.poster_path" :key="movie.id"></MovieItem>
      </template>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'
import shuffle from 'lodash/shuffle'
import sortBy from 'lodash/sortBy'
import MovieItem from '@/components/MovieItem'
export default {
  name: 'MoviesList',
  props: ['type', 'name'],

  data () {
    return {
      movies: [],
      errors: []
    }
  },

  components: {
    MovieItem
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
          this.movies = response.data.results
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  // detect when type changes (probably when a new page is opened)
  watch: {
    type (newId, oldId) {
      this.fetch_data()
    }
  },

  created () {
    this.fetch_data()
  }
}
</script>

<style lang="scss" scoped>
  .movies-list {
    &__name {
      display: inline-block;
      padding: 15px 27px;
    }
    &__options {
      display: inline-block;
      label {
        margin-left: 20px;
      }
    }
    &__button {
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      &:focus {
        outline: none;
        background: #999;
        color: #fff;
      }
      &--shuffle {
        &:focus {
          background: #fff;
          color: #000;
        }
      }
    }
    &__items {
      text-align: center;
      &-move {
        transition: transform 1s;
      }
    }
  }
</style>
