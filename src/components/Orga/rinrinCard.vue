<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <div class="rinrinCard">
          <v-card
            flat
            class="rinrin"
            width="300px"
            style="border-radius:30px;"
            color="#E9F7EC"                
          >
            <v-img height="177px" :src="mainImg"></v-img>
            <v-card-text>
              <h2 class="rinrinTitle title primary--text">{{title}}</h2>
            </v-card-text>
            <v-card-title>
              <span class="mdi mdi-pencil"></span>
              <span class="info primary--text">{{date}}</span>
              <v-divider style="border-style:none;"></v-divider>
              <span class="mdi mdi-eye"></span>
              <span class="info primary--text">{{views}}</span>
              <v-divider style="border-style:none;"></v-divider>
              <span class="mdi mdi-heart"></span>
              <span class="info primary--text">{{good}}</span>
              <v-divider style="border-style:none;"></v-divider>
              <span class="info primary--text">{{category}}</span>
            </v-card-title>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="rgb(231,175,219)"
              >
                <v-btn @click="loglog(allData)">閲覧する</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </div>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  props:{
      mainImg:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      views:{
        type:String,
        required:true
      },
      category:{
        type:String,
        required:true
      },
      date:{
        type:String,
        required:true
      },
      allData:{
        type:Object,
        required:true
      },
      good:{
        type:Number,
        required:true
      }
  },
  methods:{
    loglog(arr){
      console.log(arr);
    }
  }
}
</script>

<style scoped>
.rinrinCard{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow:  9px 9px 10px #a6aca7, 
              -9px -9px 10px #ffffff;
}
.rinrinTitle{
  height: 70px;
  font-size:1rem;
}
.info{
  font-size: 0.8rem;
}
</style>