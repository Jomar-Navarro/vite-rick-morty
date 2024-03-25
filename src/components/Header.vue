<script>  
  import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
      }
    }
  }
</script>


<template>
  <div class="text-center my-3">
    <h1 class="text-white">{{ store.mainTitle }}</h1>
  </div>
</template>


<style lang="scss" scoped>

</style>