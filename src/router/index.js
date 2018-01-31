import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home-page'
import GameShuerte from '@/pages/game-shuerte'
import GameShuzihuarongdao from '@/pages/game-shuzihuarongdao'
import Game2048 from '@/pages/game-2048'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/v-game',
  routes: [{ path: '/index', redirect: '/' },
    { path: '/', component: HomePage },
    { path: '/game-shuerte', component: GameShuerte },
    { path: '/game-shuzihuarongdao', component: GameShuzihuarongdao },
    { path: '/game-2048', component: Game2048 }
  ]
})
