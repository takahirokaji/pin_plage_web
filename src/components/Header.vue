<template>
    <nav class="header-nav">
      <img class="pinplage-logo" width="18%" src="../assets/logo/pinplagelogo.png">
    <ul class="links">
      <li class="link" v-for="item in btnInfo" :key="item.name">
        <router-link :to="item.link"><Button :btnName="item.name" :link="item.link"/></router-link>
      </li>
    </ul>
    <div class="mypage">
      <router-link to="/mypage"><iconbtn :link='iconInfo.link' /></router-link>
    </div>
    </nav>
</template>

<script>
import Button from '@/components/button.vue'
import iconbtn from '@/components/Atom/iconbtn.vue'
export default {
    data(){
        return{
            btnInfo:[
                {name: 'ホーム',link:'/'},
                {name: 'はままつ',link:'/rinrin'},
                {name: '知恵袋',link:'/Chiebukuro'},
            ],
            iconInfo:{link:'/mypage'}
        }
    },
    components:{
        Button,
        iconbtn
    },
    function:{
      pushPage(str){
        this.$router.push({name: str})
      }
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
