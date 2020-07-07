<template>
  <div>
  <div class="card">
    <p class="str">this page is test page for pinplage</p>
  </div>
  <div class="box">
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
  </div>
  <div class="box">
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
  </div>
  <div class="box">
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
    <div class="something"><p class="str">this page is test page for pinplage</p></div>
  </div>
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
h3 {
  margin: 40px 0 0;
}

.card{
  margin: 100px auto;
  width: 90%;
  height: 90px;
  background: #eeeeee;
    display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
background: #98e6d0;
box-shadow:  6px 6px 11px #83c6b3, 
             -6px -6px 11px #adffed
}

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
  border-radius: 20px;
  margin:0 40px;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background: #98e6d0;
  box-shadow:  6px 6px 11px #83c6b3, 
              -6px -6px 11px #adffed
}

.str{
  color:#effffa;
}

</style>
