<template>
  <div class="home">
    <h1>Galery Photos</h1>
    <Photo></Photo>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'

export default {
  name: 'home',
  components: {
    Photo
  }
}
</script>
