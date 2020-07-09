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
  color:#575757;
}
.card{
  margin: 50px 200px;
  padding: 2rem;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #E9F7EC;
  box-shadow:  5px 5px 10px #c6d2c9, 
              -5px -5px 10px #ffffff;
}
</style>