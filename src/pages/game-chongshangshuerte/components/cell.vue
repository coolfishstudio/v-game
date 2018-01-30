<template>
  <div class="number-cell blue" :class="{on: isOn}" :style="{
    width: width + 'px',
    height: height + 'px',
    lineHeight: 0.92 * height + 'px'
  }" @click="clickItem">{{ text }}</div>
</template>

<script>
export default {
  props: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    text: 0,
    color: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
      isOn: false
    }
  },
  methods: {
    clickItem () {
      this.$emit('clickItem', this.text)
    },
    changeColor () {
      this.isOn = !this.isOn
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.number-cell
  border-radius: 6px
  font-weight: bold
  font-size: 0.36rem
  text-align: center
  position: absolute
  &.red
    background-color: #d55336
    &.on
      background-color: #ff856a
  &.green
    background-color: #54b154
    &.on
      background-color: #aaccaa
  &.blue
    background-color: #30a7c2
    &.on
      background-color: #87e1f5
  &:after
    content: ''
    display: block
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 12%
    background-color: rgba(0, 0, 0, 0.2)
    border-radius: 13px
</style>
