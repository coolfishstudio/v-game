<template>
  <i :class="['icon', 'icon-' + name]" :style="'width: ' + width / 100 + 'rem; height: ' + height / 100 + 'rem;'" @click="$emit('click', $event)"></i>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 32
    },
    height: {
      type: [Number, String],
      default: 32
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.icon-left
  bg-image('image/left')
.icon
  display: inline-block
  background-size: 100%
</style>
