<template lang="html">
	<div class="box column is-full py-4">
		<h1 class="title">{{ post.title }}</h1>
		<p>{{ post.body }}</p>
		<br/>
		<nuxt-link :to="`/posts/${post.id}`" class="button is-primary">Read more...</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'PostCard',
	props: {
		post: Object
	}
}
</script>

<style lang="css">
	
</style>