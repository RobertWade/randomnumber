<template>
  <div id="app">
    <h1 v-if="triggered === false">Participants</h1>
    <input class="inputField" v-model="participants.length" v-if="triggered === false">
    <button class="button" @click="generationProcess" v-if="triggered === false">Find Winner</button>
    <v-progress-circular
      v-if="loading"
      :size="150"
      color="orange"
      indeterminate
    ></v-progress-circular>
     <div class="winner">{{winner}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      triggered:false,
      winner:'',
      randomNumber:0,
      participants: 0,
      loading:false,
      participants:[]
    }
  },
  methods:{
    start () {
	      this.$confetti.start()
	    },
	    stop () {
	      this.$confetti.stop()
	    },
    generationProcess(){
      this.triggered=true;
      this.loading=true;
      setTimeout(()=>{
        this.randomNumber= Math.floor((Math.random()*this.participants)+1)
        this.loading=false;
        this.start()
        this.winner= this.participants[this.randomNumber];
        
      },2000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.inputField{
  border: 1px solid #f9c75b;
  padding: 20px;
  text-align: center;
  font-size: 40px;
  border-radius: 10px;
}
.button{
  background:  #f9c75b;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  color:white;
  font-size: 40px;

}
.winner{
  font-size: 80px;
  -webkit-animation: pulse 2s infinite; /* Safari 4.0 - 8.0 */
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {transform: scale(1)}
    50% {transform: scale(1.2)}
    1000% {transform: scale(1)}    
}
</style>
