<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Orga/Header.vue'
export default {
  components:{
    Header
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600&display=swap');
#app {
  min-height: 100vh;
  position: relative;
  font-family: 'Noto Serif JP', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  height: 100%;
  background: #E9F7EC;
}
</style>