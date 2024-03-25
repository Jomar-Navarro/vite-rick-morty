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
  <img :src="image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <hr>
    <p class="card-text">{{ status }}</p>
    <p class="card-text">{{ species }}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>