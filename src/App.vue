<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  export default {
    data(){
      return{
        store,
      }
    },

    components:{
      Header,
      Main,
      Footer,
    },

    methods:{
      getApi(){
        this.store.errorString = '';
        axios.get(this.store.apiUrl, {
          params: store.queryParams
        })
      .then(result => {
        this.store.cardsList = result.data.results;
        console.log(this.store.cardsList);
      })
      .catch(error => {
        console.log(error);
        this.store.errorString = 'Character not found'
      })
      },

      getAllCharacter(){
        axios.get(this.store.characterUrl)
        .then(res => {
          console.log(res.data.results);
          this.store.characterList = res.data.results.map(item => item.name)
          console.log(this.store.characterList);
        })
      },

      getAllSpecies() {
        axios.get(this.store.apiUrl)
          .then(res => {
            console.log(res.data.results);
            this.store.characterSpecies = [...new Set(res.data.results.map(spec => spec.species))]
            console.log(this.store.characterSpecies);
          })
      },
    },

    mounted(){
      this.getApi()
      this.getAllCharacter()
      this.getAllSpecies()
    }
  }
</script>

<template>
  <div>
    <Header @startSearch="getApi" />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">
  body{
    min-height: 100vh;
    background-image: 
    linear-gradient(to bottom,
    #051937, 
    #3e205b, 
    #850464, 
    #c5004c, 
    #eb1212);
  }
</style>