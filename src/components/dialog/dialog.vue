<template>
  <transition name="dialog-fade">
    <div class="dialog" v-show="showFlag">
      <div class="dialog-wrapper">
        <div class="dialog-content" v-if="type !== 'modal'">
          <p class="dialog-text">{{ text }}</p>
          <div class="dialog-operate">
            <div @click="cancel" class="dialog-operate-btn cancel" v-if="type === 'confirm'">{{ cancelBtnText }}</div>
            <div @click="confirm" class="dialog-operate-btn">{{ confirmBtnText }}</div>
          </div>
        </div>
        <div class="dialog-content" v-if="type === 'modal'">
          <div class="dialog-modal-close">
            <span class="dialog-modal-close-x" @click="cancel"></span>
          </div>
          <div class="dialog-modal">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: 'alert'
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    cancel () {
      this.hide()
      this.$emit('cancel')
    },
    confirm () {
      this.hide()
      this.$emit('confirm')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.dialog
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  z-index: 9998
  background-color: rgba(0, 0, 0, 0.5)
  &.dialog-fade-enter-active
    animation: dialog-fadein 0.3s
    .dialog-content
      animation: dialog-zoom 0.3s
  .dialog-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 999
    .dialog-content
      min-width: 3rem
      border-radius: 0.08rem
      background: #ffffff
      padding-top: 0.01rem
      position: relative
      .dialog-text
        padding: 0.24rem
        line-height: 0.22rem
        text-align: center
        font-size: 0.16rem
        color: #202020
        letter-spacing: -0.0032rem
      .dialog-operate
        display: flex
        align-items: center
        text-align: center
        font-size: 0.17rem
        background: #ffffff
        border-bottom-left-radius: 0.08rem
        border-bottom-right-radius: 0.08rem
        .dialog-operate-btn
          flex: 1
          line-height: 0.24rem
          padding: 0.1rem 0
          border-top: 0.01rem solid #dbdbdb
          color: $color-theme
          &.cancel
            border-right: 1px solid #dbdbdb
            color: #8E9499
      .dialog-modal-close
        cursor: pointer
        background: transparent
        position: absolute
        right: 0
        top: 0
        z-index: 1
        font-weight: bold
        -webkit-transition: color .3s ease
        transition: color .3s ease
        color: #c9c9c9
        &:hover
          color: #444
        .dialog-modal-close-x
          display: block
          width: 0.48rem
          height: 0.48rem
          position: relative
          &:before
          &:after
            content: ''
            display: block
            background-color: currentColor
            position: absolute
            top: 50%
            left: 50%
            border-radius: 0.02rem
            transform:rotate(45deg);
            -ms-transform:rotate(45deg)
            -moz-transform:rotate(45deg)
            -webkit-transform:rotate(45deg)
            -o-transform:rotate(45deg)
          &:before
            width: 0.2rem
            height: 0.02rem
            margin-left: -0.1rem
            margin-top: -0.01rem
          &:after
            height: 0.2rem
            width: 0.02rem
            margin-top: -0.1rem
            margin-left: -0.01rem
      .dialog-modal
        min-height: 1rem
@keyframes dialog-fadein
  0%
    opacity: 0
  100%
    opacity: 1
@keyframes dialog-zoom
  0%
    transform: scale(0)
  50%
    transform: scale(1.1)
  100%
    transform: scale(1)
</style>
