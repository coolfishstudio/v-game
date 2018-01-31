<template>
  <div class="header">
    <div class="menu menu-left" @click="back">
      <y-icon name="left" width="22" height="22" />
    </div>
    <h1 class="text">猿Game</h1>
  </div>
</template>

<script>
import YIcon from 'components/icon/icon'

export default {
  components: {
    YIcon
  },
  props: {
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.header
  position: relative
  height: 0.44rem
  text-align: center
  color: $color-theme
  font-size: 0
  .text
    display: inline-block
    vertical-align: top
    line-height: 0.44rem
    font-size: 0.20rem
  .menu
    position: absolute
    top: 0
    font-size: 0
    padding: 0.105rem
    width: 0.23rem
    height: 0.23rem
    &.menu-right
      right: 0
    &.menu-left
      left: 0
</style>
