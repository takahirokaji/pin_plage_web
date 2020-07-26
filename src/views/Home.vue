<template>
<div class="container">
  
  <v-carousel   width="1079px" height="607px" :show-arrows="false"
  :cycle="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    >
    <div id="pin-botan" >
    <v-btn style="width:3%; height:3%; position:absolute;bottom: 50px;left:42%;" v-if="item.name=='main_pic'" :href="sites.ios">iOS版</v-btn>
    <v-btn  style="width:9%; height:3%; position:absolute;bottom: 50px;left:49%;" v-if="item.name=='main_pic'" :href="sites.android">Android版</v-btn></div>
    </v-carousel-item>
  </v-carousel>
  
  <div class="pin_chie">
    <img src="@/assets/pin_iphone/icon-1024.png" alt="パンプラ知恵袋" width="30%" height="60%">
    <v-card
    >
    <v-card-text>
      <div>パンプラの理念</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>

  </v-card>
  </div>
</div>


  



</template>
<script>
export default {
  
  data(){
    return{
      items: [ 
          {  
            name: 'main_pic',
            src: 'https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=de075e18-5956-44fb-aa70-4ccd837ef761',
          
          },
          {
            name:'sec_pic',
            src: 'https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Ftop_1.png?alt=media&token=4860d633-a838-4fbd-bf72-620f5a39e2e1',
          },
          {
            name:'third_pic',
            src: 'https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Ftop_2.png?alt=media&token=1eeba7c1-ab35-435d-8788-c6efe06e92b8',
          },
          {
            name:'four_pic',
            src: 'https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Ftop_3.jpg?alt=media&token=293c2636-ed60-4e08-90be-7a5abccb50aa',
          },
        ],
      sites:{
        ios:'https://apps.apple.com/jp/app/%E9%9D%99%E5%A4%A7%E6%B5%9C%E3%82%AD%E3%83%A3%E3%83%B3-%E3%83%91%E3%83%B3%E3%83%97%E3%83%A9%E3%83%BC%E3%82%B8%E3%83%A5/id1316220980',
        android:'https://play.google.com/store/apps/details?id=com.y_lab.pin_plage'
      }  
          }
  },
}



</script>

<style scoped>
  .pin-pictures{
    width: 1500px;
  }
  .pin_chie{
display: flex;
justify-content: space-evenly;
    
  }
  
  
</style>

