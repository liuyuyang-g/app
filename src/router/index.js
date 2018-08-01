import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MovieList from '@/components/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import PhotoList from '@/components/photo/PhotoList'


Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
    {
      path: '/',
      redirect:'/movielist'     
    },
    {
      path:'/movielist',
      component:MovieList
    },
    {
      path:'/music/musiclist',
      component:MusicList
    },
    {
      path:'/book/booklist',
      component:BookList
    },
    {
      path:'/photo/photolist',
      component:PhotoList
    }
  ]
})
