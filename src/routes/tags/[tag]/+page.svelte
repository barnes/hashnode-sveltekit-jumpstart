<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let posts = data.res.publication.posts.edges

</script>

{#if posts.length > 0}
<h1>Posts with the tag <span>&num;{data.tag}</span></h1>
	<div class="post-grid">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
{:else}
	<h1>No posts with tag {data.tag} found.</h1>
    <a role="button" href="/">Maybe head back to the home page and try again.</a>
{/if}

<style>
	span {
		color: red;
	}
	.post-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 16px;
	}
</style>
