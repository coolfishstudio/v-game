<template>
  <div class="menus">
    <router-link v-for="(item, index) in menus" :key="index" tag="a" class="item" :to="item.url">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: '冲上舒尔特', url: '/game-chongshangshuerte' }
        // { title: '数字华容道', url: '/game-shuzihuarongdao' }
      ]
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.menus
  padding: 0.1rem
  .item
    display: block
    background-color: #aca
    border-radius: 5px
    text-align: center
    color: #fff
    font-weight: bold
    font-size: 0.2rem
    line-height: 0.64rem
    margin-bottom: 0.1rem
</style>
