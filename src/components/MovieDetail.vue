<template>
  <div v-if="loading">
    Loading
  </div>
  <div v-else>
    <div class="detail__backdrop">
      <div class="detail__title">
        <h1>{{movie.title}}</h1> - <span class="detail__year">({{movie.release_date}})</span>
      </div>
      <div class="detail__poster">
        <img :src="'https://image.tmdb.org/t/p/w154/' + movie.poster_path" alt="" />
      </div>
      <img class="detail__backdrop__image" :src="'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/' + movie.backdrop_path" alt="" />
    </div>
    <div class="detail__description">
      <dl class="detail__list">
        <dt>Release Date</dt>
        <dd>{{movie.release_date}}</dd>
        <dt>Budget</dt>
        <dd>{{movie.budget}}</dd>
        <dt>Score</dt>
        <dd>{{movie.vote_average}}</dd>
        <dt>Vote Count</dt>
        <dd>{{movie.vote_count}}</dd>
        <dt>Genres</dt>
        <dd>
          <ul>
            <li v-for="genre in movie.genres">
              {{genre.name}}
            </li>
          </ul>
        </dd>
      </dl>
    </div>
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
        errors: [],
        loading: true
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
            this.loading = false
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

  .detail {
    &__backdrop {
      position: relative;
      margin-bottom: 110px;
      &__image {
        width: 100%;
      }
    }
    &__poster {
      position: absolute;
      top: 150px;
      left: 50px;
      background: #fff;
      padding: 4px;
      border: 1px solid #eee;
      img {
        display: block;
      }
    }
    &__title {
      position: absolute;
      top: 300px;
      left: 230px;
      h1 {
        display: inline-block;
      }
    }
    &__year {
      display: inline-block;
    }
    &__description {
      clear: both;
      margin: 0 50px;
    }
    &__list {
      dt {
        float: left;
        clear: left;
        width: 150px;
      }
      dd {
        float: left;
        ul {
          margin-left: 20px;
        }
      }
    }
  }
</style>
