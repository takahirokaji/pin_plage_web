<template>
    <nav class="header-nav">
      <img class="pinplage-logo" width="18%" src="../assets/logo/pinplagelogo.png">
    <ul class="links">
      <li class="link" v-for="item in btnInfo" :key="item.name">
        <router-link :to="item.link"><Button :btn-name="item.name"/></router-link>
      </li>
    </ul>
    <icon class="mypage" />
    </nav>
</template>

<script>
import Button from '@/components/button.vue'
import icon from '@/components/icon.vue'
export default {
    data(){
        return{
            btnInfo:[
                {name: 'ホーム',link:'/'},
                {name: '浜松鈴鈴',link:'/rinrin'},
                {name: 'パンプラ',link:'/Chiebukuro'},
            ]
        }
    },
    name: 'Header',
    components:{
        Button,
        icon
    }
}
</script>
<style scoped>
.links,.header-nav {
  display: flex;
  justify-content: left;
  align-items: center;
}
.pinplage-logo{
  margin-top:1rem;
  margin-left: 2rem;
}
.link {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
}
.mypage{
  margin-left: auto;
  margin-right: 1rem;
}
</style>
