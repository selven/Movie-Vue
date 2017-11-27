<template>
  <li class="movie">
    <router-link class="movie__link" :to="{path: '/movie/' + id}">
      <div class="movie__image">
        <img :src="'https://image.tmdb.org/t/p/w154/' + poster" alt="" />
      </div>
      <span class="movie__title">{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'MovieItem',
    props: ['id', 'title', 'poster']
  }
</script>

<style lang="scss" scoped>
  .movie {
    list-style: none;
    display: inline-block;
    margin: 0 9px;
    width: 154px;
    overflow: hidden;

    &__link {
      color: #000;
    }

    &__image {
      height: 231px;
      overflow: hidden;
    }
    &__title {
      text-align: left;
      white-space: nowrap;
    }
  }
</style>
