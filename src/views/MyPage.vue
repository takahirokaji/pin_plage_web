<template>
  <div class="mypage">
    <newmoCard :msg="cardmsg"/>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue'
export default {
  name: 'mypage',
  data(){
    return{
      cardmsg : "ここにマイページを書いていくぞ～～"    }
  },
  components: {
    newmoCard
  }
}
</script>
