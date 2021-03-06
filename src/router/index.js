import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from '@/components/MoviesList'
import MovieDetail from '@/components/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/popular'
    },
    {
      path: '/top',
      component: MoviesList,
      props: {
        type: 'top_rated',
        name: 'Top Rated'
      }
    },
    {
      path: '/popular',
      component: MoviesList,
      props: {
        type: 'popular',
        name: 'Popular'
      }
    },
    {
      path: '/upcoming',
      component: MoviesList,
      props: {
        type: 'upcoming',
        name: 'Upcoming'
      }
    },
    {
      path: '/now-playing',
      component: MoviesList,
      props: {
        type: 'now_playing',
        name: 'Now Playing'
      }
    },
    {
      path: '/movie/:id',
      component: MovieDetail
    }
  ]
})
