<template>
  <div class="mypage">
    <newmoCard :msg="userName"/>
    <newmoCard :msg="cardmsg"/>
  </div>
</template>

<script>
import newmoCard from '@/components/newmoCard.vue';
import firebase from '@/firebase/firebase.js';
export default {
  name: 'mypage',
  data(){
    return{
      cardmsg : "ここにマイページを書いていくぞ～～",
      userName: ""
    }
  },
  components: {
    newmoCard
  },
  created(){
  const that = this;
  const getUserData = firebase.firestore().collection("userData");

  getUserData
    .doc('kaji.takahiro.17@shizuoka.ac.jp')
    .get()
    .then(function(doc) {
        that.userName = `あなたの名前は  ${doc.data().userName}ですかぁ？？`;
    })
    .catch(function(error) {
      console.log(error);
    });
}
}
</script>
