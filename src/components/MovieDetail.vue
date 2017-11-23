<template>
    <div class="title">
        {{movie.id}}
        {{movie.title}}
    </div>
</template>

<script>
  import axios from 'axios'
  import shuffle from 'lodash/shuffle'
  import sortBy from 'lodash/sortBy'
  export default {
    name: 'MovieDetail',
    props: ['id'],

    data () {
      return {
        movie: {},
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
        axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=07a435bd643821239b3f9beb1a1027cb')
          .then(response => {
            console.log(response.data)
            this.movie = response.data
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
