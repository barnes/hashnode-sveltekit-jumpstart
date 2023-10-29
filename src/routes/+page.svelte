<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';
	export let data: PageData;

	console.log(data.posts);
	let posts = data.posts.publication.posts.edges;
</script>

<div class="post-grid">
	{#each posts as post}
		<PostCard {post} />
	{/each}
</div>

<style>
	.post-grid {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-column-gap: calc(var(--pico-spacing) * 1.25);
		grid-row-gap: calc(var(--pico-spacing) * 1.25);
	}

	@media (max-width: 742px) {
		.post-grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
