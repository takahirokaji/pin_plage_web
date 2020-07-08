<template>
    <button class="circle"><img class="icon" src="../../assets/logo/sakura.jpg"></button>
</template>

<style scoped>
.circle{  
  border: none;
  border-radius: 50%;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  outline: none;
  background: #98e6d0;
  box-shadow:  6px 6px 11px #83c6b3, 
              -6px -6px 11px #adffed;
}
.circle:hover{
  cursor: pointer;
}
.circle:active{
  border: none;
  border: 0;
  border-radius: 50%;
  background: #98e6d0;
  box-shadow: inset 8px 8px 20px #81c4b1, 
            inset -8px -8px 20px #afffef;
}
.icon{
    border: none;
    width:70px;
    height: 70px;
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    background: #98e6d0;
    box-shadow:  7px 7px 10px #89cfbb, 
                -7px -7px 10px #a7fde5;
}
.icon:active{
  width:63px;
  height: 63px;
  border: none;
  background: #98e6d0;
  box-shadow: none;
}


</style>