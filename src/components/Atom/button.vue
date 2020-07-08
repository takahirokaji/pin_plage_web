<template>
    <div>
        <button class="newmoButton">
            <p class="btnName">{{btnName}}</p>
        </button>
    </div> 
</template>

<script>
export default {
    props:{
        btnName:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
.newmoButton{
  width: 120px;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 8px;
  background: #98e6d0;
  box-shadow:  3px 3px 10px #89cfbb, 
              -3px -3px 10px #a7fde5;
}
.newmoButton:active{
  border: none;
  border-radius: 8px;
  background: #98e6d0;
  box-shadow: inset 3px 3px 10px #81c4b1, 
            inset -3px -3px 10px #afffef;
}
.btnName{
    color: #fff;
    font-size:1rem;
}

.newmoButton:hover{
  cursor:pointer;
}

</style>