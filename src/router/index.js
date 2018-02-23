import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from './../App'
import Toolbar from './../components/Toolbar'
import Header from './../components/public/Header'
import Footer from './../components/public/Footer'
import SearchByDate from './../components/public/SearchByDate'
import MatchList from './../components/match/MatchList'
import Game from './../components/match/Game'
import GameList from './../components/match/GameList'
import News from './../components/news/News'
import NewsList from './../components/news/NewsList'
import NewsInfo from './../components/news/NewsInfo'
import LiveInfo from './../components/live/LiveInfo'
import RankingList from './../components/public/RankingList'
import Login from './../components/public/Login'
import CenterIndex from './../components/center/CenterIndex'
import UserInfoManager from './../components/center/centerItem/UserInfoManager'
import ReviewManager from './../components/center/centerItem/ReviewManager'

import Topic from './../components/topic/Topic'
import TopicList from './../components/topic/TopicList'
import TopicInfo from './../components/topic/TopicInfo'

import Review from './../components/review/Review'
Vue.use(Router)

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
    {
      path: '/LiveInfo/:matchId',
      name: 'LiveInfo',
      component: LiveInfo
    },
    {
      path: '/RankingList',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Review',
      name: 'Review',
      component: Review
    },
    {
      path: '/CenterIndex',
      name: 'CenterIndex',
      component: CenterIndex,
      children:[
      {
  			 path:'',
  		},
  		{
  			 path:'UserInfoManager',
  			 component:UserInfoManager
  		},
      {
  			 path:'ReviewManager',
  			 component:ReviewManager
  		},
  		]
    },
    {
      path: '/Topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/TopicList',
      name: 'TopicList',
      component: TopicList
    },
    {
      path: '/TopicInfo/:topicId',
      name: 'TopicInfo',
      component: TopicInfo
    },
  ]
