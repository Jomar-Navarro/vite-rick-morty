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
        axios.get(this.store.apiUrl, {
          params:{
            num: 20,
            offset: 0,
            language: 'it'
          }
        })
      .then(result => {
        this.store.cardsList = result.data.results;
        console.log(this.store.cardsList);
      })
      .catch(error => {
        console.log(error);
      })
      }
    },

    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>