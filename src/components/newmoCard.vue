<template>
  <div class="card">
    <p class="str">{{msg}}</p>
  </div>
</template>
<script>
export default {
  props:{
    msg:{
      type:String,
      required:false
    }
  }
}
</script>
<style scoped>
.str{
  font-size: 1rem;
  color:#effffa;
}
.card{
  margin: 50px 200px;
  padding: 2rem;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #98e6d0;
  box-shadow:  6px 6px 11px #83c6b3, 
              -6px -6px 11px #adffed
}
</style>