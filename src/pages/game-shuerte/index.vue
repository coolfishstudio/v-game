<template>
  <div class="container">
    <header>
      <p>
        <span style="font-size: 36px;position: relative;top: 6px;margin: 0px 6px;">{{ time }}</span>
        <span style="color: #d2d2d2;"> 秒 </span>
      </p>
    </header>
    <div class="grid-container" :style="'width:' + gridContainerWidth + 'px;height:' + gridContainerWidth + 'px;'">
      <div class="grid-cell" v-for="(item, index) in cells" :key="index" :style="{
        width: item.width + 'px',
        height: item.height + 'px',
        top: item.top + 'px',
        left: item.left + 'px'
      }">
        <y-cell
          :width="item.width"
          :height="item.height"
          :text="item.text"
          :ref="'item-' + item.text"
          :color="item.color"
          @clickItem="clickItem"></y-cell>
      </div>
    </div>
    <y-dialog ref='dialog' :text="alertText" confirmBtnText="再次挑战" cancelBtnText="返回首页" type="confirm" @cancel="gotoIndex" @confirm="refresh"></y-dialog>
  </div>
</template>
<script>
import YCell from 'components/cell/cell'
import YDialog from 'components/dialog/dialog'

export default {
  components: {
    YCell,
    YDialog
  },
  data () {
    return {
      row: 3, // 行
      col: 3, // 列
      gridContainerWidth: 0,
      cellSpace: 0,
      gridCellWidth: 0,
      cells: [],
      current: 1,
      documentWidth: window.screen.availWidth > 420 ? 420 : window.screen.availWidth,
      mode: 0, // 0 挑战 1 训练
      time: 30,
      timer: null,
      isEnd: false,
      alertText: ''
    }
  },
  mounted () {
    this.initDate()
  },
  methods: {
    initDate () {
      let r = +this.$route.query.r || 5
      let m = +this.$route.query.m || 0
      if (r && [3, 4, 5, 6, 7, 8, 9].indexOf(r) !== -1) {
        this.row = this.col = r
      }
      if ([0, 1].indexOf(m) !== -1) {
        this.mode = m
      }
      this.gridContainerWidth = Number((0.92 * this.documentWidth).toFixed(2))
      this.cellSpace = Number((0.02 * this.documentWidth).toFixed(2))
      this.gridCellWidth = Number(((0.92 - 0.02 * (this.col + 1)) / this.row * this.documentWidth).toFixed(2))
      this.startGame()
    },
    initCells () {
      this.current = 1
      this.isEnd = false
      this.time = this.mode === 0 ? this.row * (this.row + 2) : 0 // x^2 + 2x
      // 获取随机数
      const numbers = new Array(this.row * this.col).fill(0).map((v, i) => i + 1).sort(() => 0.5 - Math.random())
      const color = ['green', 'red', 'blue', 'gold'][Math.floor(Math.random() * 4)]
      let _cells = []
      for (let i = 0; i < this.row * this.col; i++) {
        _cells.push({
          text: numbers[i],
          width: this.gridCellWidth,
          height: this.gridCellWidth,
          top: this.cellSpace + Math.floor(i / this.row) * (this.gridCellWidth + this.cellSpace),
          left: this.cellSpace + i % this.col * (this.gridCellWidth + this.cellSpace),
          color: color
        })
      }
      this.cells = _cells
    },
    startGame () {
      this.initCells()
      // // 开始游戏
      this.timer = setInterval(() => {
        if (this.mode === 0 && (this.time--) <= 0) {
          clearInterval(this.timer)
          if (this.current !== (this.row * this.col + 1)) {
            this.alert('抱歉，挑战失败')
            this.time = 0
          }
        }
        if (this.mode === 1) {
          this.time++
          if (this.time >= (this.row * this.row * this.row)) {
            this.alert('超时，挑战失败')
            clearInterval(this.timer)
          }
        }
      }, 1000)
    },
    clickItem (num) {
      if (num === this.current) {
        this.$refs[`item-${this.current}`][0].changeColor()
        this.current++
      }
      if (this.current === (this.row * this.col + 1)) {
        this.isEnd = true
        clearInterval(this.timer)
        this.alert('恭喜，挑战成功')
      }
    },
    alert (text) {
      if (text) {
        this.alertText = text
      }
      this.$refs.dialog.show()
    },
    refresh () {
      this.$refs.dialog.hide()
      for (let i = 0; i < this.row * this.col; i++) {
        this.$refs[`item-${i + 1}`][0].refreshColor()
      }
      this.startGame()
    },
    gotoIndex () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.container
  font-size: 0.12rem
  header
    padding: 0.2rem 0.2rem 0 0.2rem
    margin: 0.2rem auto 0 auto
    p
      padding: 0.05rem 0.05rem 0.15rem
      font-size: 0.2rem
      margin: 0.15rem auto
  .grid-container
    background-color: $color-grid-main
    border-radius: 6px
    position: relative
    margin: 0 auto
    .grid-cell
      border-radius: 6px
      background-color: $color-grid-cell
      position: absolute
</style>
