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
        <y-cell :width="item.width" :height="item.height" :text="item.text" :ref="'item-' + item.text" @clickItem="clickItem"></y-cell>
      </div>
    </div>
  </div>
</template>
<script>
import YCell from './components/cell'

export default {
  components: {
    YCell
  },
  data () {
    return {
      row: 5, // 行
      col: 5, // 列
      gridContainerWidth: 0,
      cells: [],
      current: 1,
      documentWidth: window.screen.availWidth > 420 ? 420 : window.screen.availWidth,
      time: 30,
      timer: null
    }
  },
  mounted () {
    this.initDate()
  },
  methods: {
    initDate () {
      this.current = 1
      // 获取随机数
      const numbers = new Array(this.row * this.col).fill(0).map((v, i) => i + 1).sort(() => 0.5 - Math.random())
      // 处理样式
      this.gridContainerWidth = Number((0.92 * this.documentWidth).toFixed(2))
      const cellSpace = Number((0.02 * this.documentWidth).toFixed(2))
      const gridCellWidth = Number(((0.92 - 0.02 * (this.col + 1)) / this.row * this.documentWidth).toFixed(2))
      let _cells = []
      for (let i = 0; i < this.row * this.col; i++) {
        _cells.push({
          text: numbers[i],
          width: gridCellWidth,
          height: gridCellWidth,
          top: cellSpace + Math.floor(i / this.row) * (gridCellWidth + cellSpace),
          left: cellSpace + i % this.col * (gridCellWidth + cellSpace)
        })
      }
      this.cells = _cells
      // 开始游戏
      this.timer = setInterval(() => {
        if ((this.time--) <= 0) {
          clearInterval(this.timer)
          if (this.current !== 26) {
            alert('抱歉，挑战失败')
            this.time = 0
          }
        }
      }, 1000)
    },
    clickItem (num) {
      if (num === this.current) {
        this.$refs[`item-${this.current}`][0].changeColor()
        this.current++
      }
      if (this.current === 26) {
        alert('恭喜，挑战成功')
      }
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
