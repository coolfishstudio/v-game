<template>
  <div id="app" @touchmove.prevent>
    <y-header></y-header>
    <router-view/>
  </div>
</template>

<script>
import YHeader from 'components/header/header'

export default {
  components: {
    YHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
