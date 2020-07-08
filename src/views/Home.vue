<template>
  <div class="home">
    <newmoCard :msg="cardmsg"/>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      cardmsg : "this is test HOME so don't care"    }
  },
  components: {
    newmoCard
  }
}
</script>
