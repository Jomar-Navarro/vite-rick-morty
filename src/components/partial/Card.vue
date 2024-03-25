<script>  
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String,
    }
  }
</script>


<template>
  <div class="card" style="width: 18rem;">
  <img :src="image" class="card-img-top p-3" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <hr>
    <p class="card-text">{{ status }}</p>
    <p class="card-text">{{ species }}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>
  .card{
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      img{
        border-radius: 50%;
      }
  }
</style>