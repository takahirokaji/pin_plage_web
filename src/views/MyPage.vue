<template>
  <div class="mypage">
    <p>{{user.name}}</p>
    <img :src="user.icon">
    <ul>
      <li v-for="(item,i) in rinrin.favorite" :key="i">{{item}}</li>
    </ul>
    <ul v-for="(item,i) in rinrin.read" :key="i">
      <li>{{item}}</li>
    </ul>
    <ul v-for="(item,i) in event.interested" :key="i">
      <li>{{item}}</li>
    </ul>
    <ul v-for="(item,i) in event.join" :key="i">
      <li>{{item}}</li>
    </ul>
    <ul v-for="(item,i) in question.mine" :key="i">
      <li>{{item}}</li>
    </ul>
    <ul v-for="(item,i) in question.liked" :key="i">
      <li>{{item}}</li>
    </ul>
    <ul v-for="(item,i) in question.good" :key="i">
      <li>{{item}}</li>
    </ul>

  </div>
</template>

<script>
import firebase from '@/firebase/firebase.js';
export default {
  name: 'mypage',
  data(){
    return{
      cardmsg : "ここにマイページを書いていくぞ～～",
      user:{
        name:"",
        icon:""
      },
      rinrin:{
        favorite:[],
        read:[]
      },
      event:{
        interested:[],
        join:[]
      },
      question:{
        mine:[],
        liked:[],
        good:[]
      }

    }
  },
  components: {
  },
  created(){
  const that = this;
  const getUserData = firebase.firestore().collection("userData");
  getUserData
    .doc("kaji.takahiro.17@shizuoka.ac.jp")
    .get()
    .then(function(doc) {
        const data = doc.data()
        that.user.name = data.userName;
        that.user.icon = data.userIcon;
        that.rinrin.favorite.push(data.favoriteRinrin);
        that.rinrin.read.push(data.alreadyRinrin);
        that.event.interested.push(data.interestedEvent);
        that.event.join.push(data.joinEvent);
        that.question.mine.push(data.questions);
        that.question.liked.push(data.likedQuestions);
        that.question.good.push(data.goodAnswers);
    })
    .catch(function(error) {
      console.log(error);
    });
}
}
</script>
