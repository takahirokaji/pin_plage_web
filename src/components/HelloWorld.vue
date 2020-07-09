<template>
  <div class="box">
    <div class="something"><p class="str">this page is test</p></div>
    <div class="something"><p class="str">this page is test</p></div>
    <div class="something"><p class="str">this page is test</p></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.something{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin:0 40px;
  border-radius: 20px;
  background: #98e6d0;
  box-shadow:  6px 6px 11px #83c6b3, 
              -6px -6px 11px #adffed
}
.str{
  color:#effffa;
}
</style>