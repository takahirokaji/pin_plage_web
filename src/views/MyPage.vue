<template>
  <div class="mypage">
    <!-- ばなー -->
    <div class="banner">
      <div>
        <v-img
          style="margin:1% 1%"
          height="250"
          src="https://firebasestorage.googleapis.com/v0/b/mcaexpf-2020.appspot.com/o/testforWeb%2Fsunset-3338242_1920.jpg?alt=media&token=9ea7877b-071f-429a-8d64-7a7f5a0a1638"
        ></v-img>
      </div>
    <img class="banner_icon" :src="user.icon">
    <p class="banner_name">{{user.name}}<span class="mdi mdi-account-edit"></span></p>
    </div>
    <ul style="margin-top:100px;">
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
  <!-- <div class="row">
      <div class="col-sm-6">
          <h2>ユーザ登録画面</h2>
          <form @submit.prevent="registerUser">
              <div class="form-group">
                  <label for="email">メールアドレス:</label>
                  <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">パスワード:</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>
              <button type="submit" class="btn btn-info">登録する</button>
          </form>
      </div>
      <div class="col-sm-6">
          <h2>ログイン画面</h2>
          <form @submit.prevent="loginUser">
              <div class="form-group">
                  <label for="loginEmail">メールアドレス:</label>
                  <input type="loginEmail" class="form-control" id="loginEmail" v-model="loginEmail">
              </div>
              <div class="form-group">
                <label for="loginPassword">パスワード:</label>
                <input type="password" class="form-control" id="loginPassword" v-model="loginPassword">
              </div>
              <button type="submit" class="btn btn-info">ログインする</button>
          </form>
      </div>
  <button class="btn btn-primary mb-3" @click="logoutUser">ログアウト</button>
  </div>
    <v-row justify="center">
    <v-col cols="12">
      <v-row align="center">
        <v-btn
          class="mt-12"
          color="primary"
          @click="overlay = !overlay"
        >
          Show Overlay
        </v-btn>

        <v-overlay
          :value="overlay"
          :z-index="zIndex"
        >
          <v-card
            class="mx-auto"
            width="150%"
            color="#00CC99"
            outlined
          >
          <div class="inCard">
            <h2>ログイン画面</h2><br>
              <v-form>
                <v-container>
                  <v-row>
                      <v-text-field
                        v-model = "loginEmail"
                        label="loginEmail"
                      ></v-text-field>
                  </v-row>
                </v-container>
              </v-form>
              <v-form>
                <v-container>
                  <v-row>
                      <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        v-model ="loginPassword"
                        label="Password"
                      ></v-text-field>
                  </v-row>
                </v-container>
              </v-form>
          </div>
          </v-card>
          <br>
          <v-btn
            color="primary"
            @click="loginUser"
          >
            ログイン
          </v-btn>
          <br><br>
          <v-btn
            color="primary"
            @click="overlay = false"
          >
            キャンセル
          </v-btn>
        </v-overlay>
      </v-row>
    </v-col>
  </v-row> -->
  </div>
</template>



<script>
import firebase from '@/firebase/firebase.js';

export default {
  data(){
    return{
      name: 'mypage',
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
      },
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      authenticatedUser: '',
      absolute: false,
      opacity: 0.3,
      overlay: false,
      zIndex: 200,
    }
  },
  components: {
  },
  // methods:{
    // registerUser(){
      //if(this.email == /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/){
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        // });
      // }else{
      //   alert("静大ドメインを使用してください");
      // }
    // },
    // logoutUser(){
    //   firebase.auth().signOut();
    //   alert("ログアウトしました");
    // },
    // loginUser(){
    //   // console.log(this.loginEmail);
    //   // console.log(this.loginPassword);
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
    //     .then(async () => {
    //       this.$store.state.id = this.loginEmail;
    //       console.log(`id:${this.$store.state.id}`);
    //       alert("ログインに成功しました。");
    //       this.overlay = false;
    //     })
    //     .catch(function(error) {
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       console.log(errorCode);
    //       console.log(errorMessage);
    //       console.log("aaa");
    //     });
    //   }
    // },
  created(){
  const that = this;
  const getUserData = firebase.firestore().collection("userData");
  getUserData
    .doc(this.$store.state.id)
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
  // const favoriteRinrin = firebase.firestore().collection("rinrinDatas");
  //   favoriteRinrin
  //   .doc('1mMZ3EuDVAvuI3LQXcQO')
  //   .get()
  //   .then(doc=>{
  //       let arr = doc.data();
  //       that.rinrin.favorite = arr;
  //       console.log(that.rinrin.favorite)
  //     })
  },
    mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('login');
        this.authenticatedUser = true;
      } else {
        console.log('logout');
        this.authenticatedUser = false;
      }
    });     
  }
}
</script>

<style scoped>
.inCard{
  padding:20px 20px;
  font-size: large;
}
.banner{
  position: relative;
}
.banner_icon{
  position: absolute;
  top: 9rem;
  left: 4rem;
  border-radius: 50%;
  width: 12rem;
}
.banner_name{
  position: absolute;
  left: 17rem;
  bottom: -3rem;
  font-size: 1.3rem;
}
</style>