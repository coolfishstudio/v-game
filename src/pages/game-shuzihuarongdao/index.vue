<template>
  <div class="container">
    <header>
      <h1>数字华容道</h1>
      <p>
        <span style="font-size: 36px;position: relative;top: 6px;color: rgb(102, 102, 102);margin: 0px 6px;">11</span>
        <span style="color: #d2d2d2;"> 步／ 剩余 </span>
        <span style="font-size: 20px;color: #666666;">20</span>
        <span style="color: #d2d2d2;"> 步 </span>
      </p>
    </header>
    <div class="main">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  font-size: 0.12rem
  padding: 0.2rem
  header
    margin: 0.2rem auto 0 auto
    h1
      text-align: center
      font-size: 0.4rem
      font-weight: bold
    p
      padding: 0.05rem 0.05rem 0.15rem
      font-size: 0.2rem
      margin: 0.15rem auto
  .main
    background-color: rgba(255,233,120,.603)
    width: 3.35rem
    height: 3.35rem
</style>
