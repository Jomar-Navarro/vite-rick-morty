<script>  
  import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
        characterToSearch: '',
      }
    },

    methods:{
      reset(){
        this.characterToSearch = ''
      },

      startSearch(){
        this.store.queryParams= {
          name: this.characterToSearch
        }
        this.$emit('startSearch')
      }
    }
  }
</script>


<template>
  <div class="text-center my-3 container">
    <h1 class="text-white">{{ store.mainTitle }}</h1>
    <div class="d-flex my-5 justify-content-center">

      <input
        v-model.trim="characterToSearch"
        @keyup.enter="startSearch"
        class="form-control w-25"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search a name...">

      <datalist id="datalistOptions">
        <option
          v-for="(character, index) in this.store.characterList"
          :key="index"
          :value="character"></option>
      </datalist>

      <select class="form-select mx-3 w-25">
        <option selected>Select status</option>
        <option value="1">Alive</option>
        <option value="2">Dead</option>
        <option value="3">Unknown</option>
      </select>
      <button @click="startSearch" class="btn btn-success">Search</button>
      <button @click="reset" class="btn btn-danger mx-3">Reset</button>
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>