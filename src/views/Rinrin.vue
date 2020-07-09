<template>
  <div class="rinrin">
    <newmoCard :msg="cardmsg"/>
    <ul class="rinrinContainer">
      <li class="rinrinItem" v-for="item in allContents" :key="item.id">
        <rinrinCard 
          :mainImg="item.articleMainImg.url" 
          :title="item.title" :views="item.views" :category="item.category" />
      </li>
    </ul>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue'
import rinrinCard from '@/components/Orga/rinrinCard.vue'
import firebase from "@/firebase/firebase";

export default {
  name: 'Rinrin',
  data(){
    return{
      cardmsg : "浜松鈴鈴一覧",
      allContents: [],
    }
  },
  components: {
    newmoCard,
    rinrinCard
  },
  created(){
    let that = this;
    const allRinrin = firebase.firestore().collection("rinrinDatas");
    allRinrin
    .get()
    .then(snapshot => {
      snapshot.forEach(doc=>{
        let arr = doc.data();
        arr.id = doc.id;
        that.allContents.push(arr);
      })
    })
    .then( () => {
      console.log(that.allContents);
    })
  }
}
</script>

<style scoped>
.rinrinContainer{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.rinrinItem{
  margin:30px;
}
  
</style>