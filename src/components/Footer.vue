<script>
  import { store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="text-center">
    <p>Risultati trovati: {{ store.cardsList.length }}</p>
  </div>
</template>


<style lang="scss" scoped>

</style>