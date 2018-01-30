import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/pages/home-page'
import GameChongshangshuerte from '@/pages/game-chongshangshuerte'
import GameShuzihuarongdao from '@/pages/game-shuzihuarongdao'
import Game2048 from '@/pages/game-2048'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{ path: '/index', redirect: '/' },
    { path: '/', component: GameChongshangshuerte },
    { path: '/game-chongshangshuerte', component: GameChongshangshuerte },
    { path: '/game-shuzihuarongdao', component: GameShuzihuarongdao },
    { path: '/game-2048', component: Game2048 }
  ]
})
