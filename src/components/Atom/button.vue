<template>
    <button class="newmoButton" :class="{btnActive:isActive}" >
      <p :class="['btnName',{btnNameActive:isActive}]">{{btnName}}
        <span :class="['btnIcon','mdi',`${mdiIcon}`,{active:isActive}]" style="margin-left:0.5rem;"></span>
      </p>
    </button>
</template>

<script>
export default {
  props:{
    btnName:{
      type:String,
      required:true
    },
    link:{
      type:String,
      required:true
    },
    mdiIcon:{
      type:String,
      required:false
    }
  },
  computed:{
    isActive:function(){
      return (this.link === this.$route.path ? true : false)
    }
  }
}
</script>

<style scoped>
.newmoButton{
  padding: 1rem;
  width: 8rem;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 8px;
  background: #E9F7EC;
  box-shadow:  5px 5px 10px #a6aca7, 
              -5px -5px 10px #ffffff;
}
/* .newmoButton:active{
  border: none;
  border-radius: 8px;
  background: #98e6d0;
  box-shadow: inset 3px 3px 10px #81c4b1, 
            inset -3px -3px 10px #afffef;
} */
.btnActive{
  border: none;
  border-radius: 8px;
background: #E9F7EC;
box-shadow: inset 5px 5px 10px #c6d2c9, 
            inset -5px -5px 10px #ffffff;
}
.btnName{
    color: rgb(48, 48, 48);
    font-size:1rem;
}
.btnNameActive{
    color:#E697D5
}
.newmoButton:hover{
  cursor:pointer;
}

</style>