<template>
    <button class="circle" :class="{btnActive:isActive}" title="マイページに遷移">
      <img class="icon" :class="{iconActive:isActive}" src="../../assets/logo/sakura.jpg">
      <img v-if="icon!==''" class="icon" :class="{iconActive:isActive}" :src="icon">
    </button>
</template>

<script>
export default {
  data() {
    return {
      icon:''
    }
  },
  props:{
    link:{
      type:String,
      required:true
    }
  },
  computed:{
    isActive:function(){
      return (this.link === this.$route.path ? true : false)
    }
  },
  created: function(){
    this.icon == this.$store.state.icon
  }
}
</script>

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
  background: linear-gradient(145deg, #d2ded4, #f9fffd);
  box-shadow:  5px 5px 10px #c6d2c9, 
              -5px -5px 10px #ffffff;
}
.circle:hover{
  cursor: pointer;
}
/* .circle:active{
  border: none;
  border: 0;
  border-radius: 50%;
  background: #98e6d0;
  box-shadow: inset 8px 8px 20px #81c4b1, 
            inset -8px -8px 20px #afffef;
} */
.icon{
    border: none;
    width:70px;
    height: 70px;
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    /* background: linear-gradient(145deg, #f9fffd, #d2ded4);
    box-shadow:  15px 15px 50px #c6d2c9, 
                -15px -15px 50px #ffffff; */
}
.iconActive{
  width:63px;
  height: 63px;
  border: none;
  /* background: #98e6d0; */
  box-shadow: none;
}
.btnActive{
  border: none;
  border-radius: 50%;
  background: #E9F7EC;
  box-shadow: inset 15px 15px 30px #c6d2c9, 
                inset -15px -15px 30px #ffffff;
}


</style>