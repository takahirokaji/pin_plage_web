<template>
  <div class="rinrin">
    <div>浜松鈴鈴一覧ページ</div>
    <ul class="sortBtns">
      <li class="sortBtn" v-for="item in sortBtn" :key="item.sortKey">
        <div @click="sortArr(allContents,item.sortKey)">
        <Button :btnName="item.name"/>
        </div>
      </li>
    </ul>
    <ul class="rinrinContainer">
      <li class="rinrinItem" v-for="item in allContents" :key="item.id">
        <rinrinCard 
          :mainImg="item.articleMainImg.url" 
          :title="item.title" 
          :views="item.views" 
          :good="item.good"
          :category="item.category"
          :date="item.date"
          :mainArticle="item.mainArticle"/>
      </li>
    </ul>
  </div>
</template>

<script>
import rinrinCard from '@/components/Orga/rinrinCard.vue'
import Button from '@/components/Atom/button.vue'
import firebase from "@/firebase/firebase";
export default {
  name: 'Rinrin',
  data(){
    return{
      cardmsg : "浜松鈴鈴一覧",
      allContents: [],
      sortBtn:[
        {name:'新着順',sortKey:'date'},
        {name:'いいね順',sortKey:'good'},
        {name:'閲覧数順',sortKey:'views'}
      ],
      categoryArray:[],
      dataStock:[]
    }
  },
  components: {
    rinrinCard,
    Button
  },
  created: function(){
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
      this.sortArr(that.allContents,'date');
      that.$store.state.rinrinAll = that.allContents;
    })
  },
  methods:{
    sortArr: (arr,str)=>{
      arr.sort((a,b)=>{
        let aStr = a[str];
        let bStr = b[str];
        if(aStr > bStr) return -1;
        if(aStr < bStr) return 1;
        return 0;
      })
    },
    
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
.sortBtns{
  display: flex;
  justify-content: left;
  align-items: center;
  width: 400px;
  margin-left:100px;
}
.sortBtn{
  display: inline-block;
  margin: 0 auto;
  padding: 0.5rem;
}

.btnbtn{
  padding: 10px 20px;
  border-radius: 10px;
  background: #E9F7EC;
  box-shadow:  8px 8px 17px #b6c1b8, 
              -8px -8px 17px #ffffff;
}
  
</style>