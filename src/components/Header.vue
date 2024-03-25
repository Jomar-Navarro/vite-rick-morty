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
  <div class="text-center my-3 container">
    <h1 class="text-white">{{ store.mainTitle }}</h1>
    <div class="d-flex my-5 justify-content-center">
      <input type="text" class="form-control w-25" placeholder="Search Character">
      <select class="form-select mx-3 w-25">
        <option selected>Select status</option>
        <option value="1">Alive</option>
        <option value="2">Dead</option>
        <option value="3">Unknown</option>
      </select>
      <button class="btn btn-success">Search</button>
      <button class="btn btn-danger mx-3">Reset</button>
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>