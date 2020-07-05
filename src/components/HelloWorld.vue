<template>
  <div>
  <nav class="header-nav">
    <img class="pinplage-logo" width="18%" src="../assets/logo/pinplagelogo.png">
    <ul class="page">
      <li style="color:#effffa;">Home</li>
      <li style="color:#effffa;">rinrin</li>
      <li style="color:#effffa;">chie</li>
    </ul>
    <div class="circle">
    <img class="icon" src="../assets/logo/sakura.jpg">
    </div>
  </nav>
  <div class="card">
    <p class="str">this page is test page for pinplage</p>
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
.circle{
  position: absolute;
  top:0px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
background: #98e6d0;
box-shadow:  6px 6px 11px #83c6b3, 
             -6px -6px 11px #adffed;
}
.icon{
    margin:0 auto;
    width:70px;
    height: 70px;
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    background-position: left top;
    background: #98e6d0;
    box-shadow:  7px 7px 10px #89cfbb, 
                -7px -7px 10px #a7fde5;
}
/* .icon:before{
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fff;
} */
.header-nav {
  position: relative;
  margin-top: 15px;
  padding: 2px 60px;
  margin-bottom: 10px; 
  /* border-radius: 20px;
  background: #98e6d0;
  box-shadow:  6px 6px 12px #89cfbb, 
              -6px -6px 12px #a7fde5; */
}
.pinplage-logo{
  position: absolute;
  left:1%;
  top:5%;
  padding: 9px;
  border-radius: 20px;
  background: #98e6d0;
  box-shadow:  3px 3px 10px #89cfbb, 
              -3px -3px 10px #befae9;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding-left: 19%;
  text-align: left;
}
li {
  font-size: 28px;
  width: 90px;
  text-align: center;
  display: inline-block;
  margin: 0 18px;
  padding: 10px;
  border-radius: 8px;
  background: #98e6d0;
  box-shadow:  3px 3px 10px #89cfbb, 
              -3px -3px 10px #a7fde5;
}
a {
  color: #42b983;
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
