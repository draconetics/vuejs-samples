<template>
  <div class="home">
    <h1>Galery Photos</h1>
    <router-link :to="{name:'photos', params:{id:item}}" v-for="(item,index) of photosArray" :key="index">
    	<button>foto {{item}}</button>
    </router-link>
    <Photo></Photo>
    <button @click="returnHome">Home</button>
    <button @click="returnNext">Next</button>
    <button @click="returnBefore">Before</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'

export default {
  name: 'home',
  components: {
    Photo
  },
  data() {
  	return {
  		photosArray: [1,2,3]
  	};
  },
  methods: {
  	returnHome() {
  		this.$router.push('/');
  	},
  	returnNext() {
  		this.$router.go(1);	
  	},
  	returnBefore() {
  		this.$router.go(-1);
  	}
  }

}
</script>
