<template>
  <div class="home">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item,i) in pinplage_img"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>

</template>

<script>


export default {
  name: 'Home',
    data () {
      return {
        pinplage_img: [
          {
            src: "https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=de075e18-5956-44fb-aa70-4ccd837ef761",
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  components: {
  }
}
</script>
