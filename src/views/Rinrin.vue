<template>
  <div class="rinrin">
    <newmoCard :msg="cardmsg"/>
    <ul>
      <li class="link" v-for="(item,index) in allContents" :key="index">
        <newmoCard :msg="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue'
import firebase from "@/firebase/firebase";
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Rinrin',
  data(){
    return{
      cardmsg : "こちらは、浜松鈴鈴一覧のページですぅ～",
      allContents: []
    }
  },
  components: {
    newmoCard,
  },
  created(){
    let that = this;
    const allRinrin = firebase.firestore().collection("rinrinDatas");
    allRinrin
    .get()
    .then(snapshot => {
      snapshot.forEach(doc=>{
        that.allContents.push(doc.data().title);
        console.log(that.allContents)
      })
    })
  }
}
</script>

<style scoped>
.links {
  display: flex;
  justify-content: left;
  align-items: center;
}
/* .link {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
} */
  
</style>