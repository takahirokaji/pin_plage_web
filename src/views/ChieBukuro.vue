<template>
  <div class="rinrin">
    <newmoCard :msg="cardmsg"/>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Rinrin',
  data(){
    return{
      cardmsg : "this is test chiebukuro so don't care"    }
  },
  components: {
    newmoCard,
  }
}
</script>
