<template>
  <div class="page-panel">
    <y-scroll-view :data="menus" ref="scroll" class="scroll-view">
      <div class="menus">
        <router-link v-for="(item, index) in menus" :key="index" tag="a" class="item" :to="item.url" :style="{
          'background-position-y': `${-Math.round(Math.random() * 200)}px`
        }">
          <div class="text clearfix">
            <p class="title">{{ item.title }}</p>
            <p class="caption">开始游戏</p>
          </div>
        </router-link>
      </div>
    </y-scroll-view>
  </div>
</template>

<script>
import YScrollView from 'components/scroll-view/scroll-view'
export default {
  components: {
    YScrollView
  },
  data () {
    return {
      menus: [
        { title: '挑战舒尔特3*3', url: '/game-shuerte?r=3' },
        { title: '挑战舒尔特4*4', url: '/game-shuerte?r=4' },
        { title: '挑战舒尔特5*5', url: '/game-shuerte?r=5' },
        { title: '挑战舒尔特6*6', url: '/game-shuerte?r=6' },
        { title: '挑战舒尔特7*7', url: '/game-shuerte?r=7' }
      ]
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.menus
  padding: 0.05rem
  .item
    display: block
    background-color: #3c4256
    margin-bottom: 0.05rem
    position: relative
    color: #fff
    height: 1.23rem
    text-align: right
    line-height: 1.6
    background-image: url('../../assets/button_bg.png')
    background-size: cover
    .text
      float: right
      width: 48%
      text-align: center
      color: #fff
      margin-top: 0.29rem
      margin-bottom: 0.29rem
      .title
        font-size: 0.22rem
        margin-bottom: 0.05rem
      .caption
        font-size: 0.16rem
</style>
