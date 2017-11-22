import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/popular'
    },
    {
      path: '/top',
      component: Movies,
      props: {
        type: 'top'
      }
    },
    {
      path: '/popular',
      component: Movies,
      props: {
        type: 'popular'
      }
    },
    {
      path: '/upcoming',
      component: Movies,
      props: {
        type: 'upcoming'
      }
    },
    {
      path: '/now-playing',
      component: Movies,
      props: {
        type: 'now playing'
      }
    }
  ]
})
