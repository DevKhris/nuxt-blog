<template lang="html">
	<div class="container my-6">
		<nuxt-link to="/">Go back</nuxt-link>
		<h1 class="title">{{ post.title }}</h1>
		<img class="" :src="photo.url" width="256">
		<p>{{ post.body }}</p>
	</div>
</template>

<script>
import router from 'vue-router';
import axios from 'axios';
import env from '../../config/env';
export default {
	name: 'PostPage',
	data(){
		return {
			post: {},
			photo: {}
		}
	},
	created: async function(){
		let postId = this.$route.params.id;
		let  postResponse = await axios.get(`${env.endpoint}/posts/${postId}`);
		let photoResponse = await axios.get(`${env.endpoint}/photos/${postId}`);
		this.post = postResponse.data;
		this.photo = photoResponse.data;
	}
}
</script>

<style lang="css">
	
</style>