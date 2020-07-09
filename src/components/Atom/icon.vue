<template>
  <div class="circle">
    <img class="icon" src="../assets/logo/sakura.jpg">
  </div>
</template>

<style scoped>
.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #98e6d0;
  box-shadow:  6px 6px 11px #83c6b3, 
              -6px -6px 11px #adffed;
}
.icon{
    width:70px;
    height: 70px;
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    background: #98e6d0;
    box-shadow:  7px 7px 10px #89cfbb, 
                -7px -7px 10px #a7fde5;
}
</style>