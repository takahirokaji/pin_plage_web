<template>
    <nav class="header-nav">
      <img class="pinplage-logo" src="@/assets/logo/pinplagelogo.png">
    <ul class="links">
      <li class="link" v-for="item in btnInfo" :key="item.name">
        <router-link :to="item.link"><Button :btnName="item.name" :link="item.link" :mdiIcon="item.icon"/></router-link>
      </li>
    </ul>
    <div class="mypage">
        <v-btn
          class="mt-12"
          color="black"
          text
          style="margin-right:5px;"
          @click="loginOrLogout"
        >
          {{text}}
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
                        prepend-icon="mdi-account-circle"
                        :rules="emailRules"
                      ></v-text-field>
                  </v-row>
                </v-container>
              </v-form>
              <v-form>
                <v-container>
                  <v-row>
                      <v-text-field
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                        v-bind:type="passwordShow ? 'text' : 'password'"
                        @click:append="passwordShow = !passwordShow"
                        v-model ="loginPassword"
                        name="input-10-1"
                        label="Password"
                        prepend-icon="mdi-lock"
                        :rules="passwordRules"
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
            :disabled="loginEnable"
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
      <router-link to="/mypage"><iconbtn :link='iconInfo.link' /></router-link>
    </div>
    </nav>
</template>

<script>
import Button from '@/components/Atom/button.vue'
import iconbtn from '@/components/Atom/iconbtn.vue'
import firebase from '@/firebase/firebase.js';
export default {
    data(){
        return{
            btnInfo:[
                {name: 'ホーム',link:'/',icon:'mdi-home'},
                {name: '浜松鈴鈴',link:'/rinrin',icon:'mdi-book-open-page-variant'},
                {name: '知恵袋',link:'/Chiebukuro',icon:'mdi-comment-question-outline'}
            ],
            iconInfo:{link:'/mypage'},
            loginEmail: '',
            loginPassword: '',
            passwordShow:false,
            loginEnable:false,
            authenticatedUser: '',
            absolute: false,
            opacity: 0.3,
            overlay: false,
            zIndex: 200,
            emailRules: [
              v => !!v || "メールアドレスは必須項目です。",
              v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/.test(v) || "静大ドメインからのみログインが可能です。"
            ],
            passwordRules:[
              v => (v && v.length >= 6) ||"パスワードは6文字以上必須です" 
            ],
            text:"ログイン"
        }
    },
    methods:{
    pushPage(str){
        this.$router.push({name:str})
    },
    loginOrLogout(){
        if(this.$store.state.id !== undefined){
          this.logoutUser();
        }else{
          this.overlay = true;
        }
      },
    logoutUser(){
      if(confirm("ログアウトしますか？")==true){
        firebase.auth().signOut();
        this.$store.state.id = undefined;
        this.text="ログイン"
        this.pushPage('Home')
        alert("ログアウトしました");
      }
    },
    loginUser(){
      console.log(this.loginEmail);
      // console.log(this.loginPassword);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(async () => {
            this.$store.state.id = this.loginEmail;
            console.log(`id:::${this.$store.state.id}`);
            this.overlay = false;
            alert("ログインに成功しました。");
            this.text="ログアウト"
            this.pushPage('MyPage');
        })
        .catch(function(error) {
          // Handle Errors here.
          alert("メールアドレスかログインパスワードが違います。");
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
      }
    },
    components:{
        Button,
        iconbtn
    },
    mounte(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('login');
          this.authenticatedUser = true;
        } else {
          console.log('logout');
          this.authenticatedUser = false;
        }
      });
    },
    watch:{
      loginEmail: function(val){
        console.log("loginE");
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/.test(val)&&this.loginPassword.length >= 6){
          this.loginEnable = false;
          console.log("true");
        }else{
          this.loginEnable = true;
        }
      },
      loginPassword: function(val){
        console.log("loginP");
        console.log(val.length >= 6);
        console.log(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/.test(this.loginEmail));
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(s.)?(inf.)?shizuoka.ac.jp|yuhashi.laboratory@gmail.com/.test(this.loginEmail)&&val.length >= 6){
          this.loginEnable = false;
          console.log("true");
        }else{
          this.loginEnable = true;
        }
      },
      deep:true
    }
}
</script>
<style scoped>
.header-nav{
  margin: 1rem 0;
}
.links,.header-nav {
  display: flex;
  justify-content: left;
  align-items: center;
}
.pinplage-logo{
  width: 13rem;
  margin: 0 2rem;
  margin-top:1rem;
}
.link {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
}
.mypage{
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
}
.inCard{
  padding:20px 20px;
  font-size: large;
}
</style>
