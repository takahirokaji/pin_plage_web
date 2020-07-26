<template>
  <div class="mypage">
    <newmoCard :msg="userName"/>
    <newmoCard :msg="cardmsg"/>
  
  <div class="row">
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
  </v-row>
  </div>
</template>



<script>
import newmoCard from '@/components/newmoCard.vue';
import firebase from '@/firebase/firebase.js';

export default {
  data(){
    return{
      name: 'mypage',
      cardmsg : "ここにマイページを書いていくぞ～～",
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
    newmoCard
  },
  methods:{
    registerUser(){
      //if(this.email == /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        });
      // }else{
      //   alert("静大ドメインを使用してください");
      // }
    },
    logoutUser(){
      firebase.auth().signOut();
      alert("ログアウトしました");
    },
    loginUser(){
      console.log(this.loginEmail);
      // console.log(this.loginPassword);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(async () => {
          this.$store.state.email = this.loginEmail;
          console.log(this.$store.state.email);
          alert("ログインに成功しました。");
          this.overlay = false;
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          console.log("aaa");
        });
      }
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
</style>