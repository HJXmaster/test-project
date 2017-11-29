import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import Toolbar from './../components/Toolbar'
import Header from './../components/public/Header'
import SearchByDate from './../components/public/SearchByDate'
import MatchList from './../components/match/MatchList'
import Game from './../components/match/Game'
import GameList from './../components/match/GameList'
import News from './../components/news/News'
import NewsList from './../components/news/NewsList'
import NewsInfo from './../components/news/NewsInfo'
// Vue.use(Router)

export default
[
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Toolbar',
      name: 'Toolbar',
      component: Toolbar
    },
    {
      path: '/Header',
      name: 'header',
      component: Header
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game
    },
    {
      path: '/GameList',
      name: 'GameList',
      component: GameList
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/NewsInfo/:publishId',
      name: 'NewsInfo',
      component: NewsInfo
    },

  ]
