<template lang="html">
<div class="container mt-5">
	<title>Nuxt Post Website</title>
	<h1 class="title">Nuxt Post Website</h1>
	<h2 class="subtitle">Recent Posts</h2>
	<h3 class="link">
		<!-- <a href="https://devkhris.carrd.co/" target="_blank">Developed by DevKhris</a> -->
	</h3>
	<hr/>
	<div class="columns is-multiline">
		<PostCard :post="post" v-for="post in posts" :key="post.id"/>
	</div>
	
</div>
</template>

<script>
import axios from 'axios';
import env from '../config/env';
import PostCard from '../components/PostCard';
export default {
    name: 'IndexPage',
    components:{
    	PostCard
    },
    data() {
    	return {
    		posts: []
    	}
    },
    created: async function(){
		let postsResponse = await axios.get(`${env.endpoint}/posts`);
		this.posts = postsResponse.data;
	}
}
</script>

<style scoped>
</style>
