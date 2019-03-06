<template>
	<div class="container">
		<ul class="list-group">
		  <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,index) of fruitsOrdered" :key="index"  @click="increment(index)">
		    {{index}} - {{item.name}}
		    <span class="badge badge-primary badge-pill">{{item.quantity}}</span>
		  </li>
		</ul>
		<button class="btn btn-danger" @click="reset">Reset</button>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	export default {
		name: 'List',
		computed: {
			...mapState(['fruits']),
			fruitsOrdered(){
				return this.fruits.sort((a,b) => b.quantity - a.quantity);
			}
		},
		methods: {
			...mapMutations(['increment','reset'])
		}
	}
</script>