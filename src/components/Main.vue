<script>
  import Card from './partial/Card.vue'
  import { store } from '../data/store';
  export default {
    components:{
      Card,
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="container text-center my-3">
    <Card v-for="card in this.store.cardsList" :key="card.id" />
  </div>
</template>


<style lang="scss" scoped>

</style>