<script lang="ts">
	export let post;
	import { formatDate } from '$lib/utils';
	post = post.node;
</script>

<article data-testid="blog-post">
	<div class="blog-content">
		<header class="head">
				<a role="button" href="posts/{post.slug}"><h1>{post.title}</h1></a>
			<!-- <a href="/{post.slug}"><h1>{post.title}</h1></a> -->
			<p>{formatDate(post.publishedAt)}</p>
			<div class="tags">
					{#each post.tags as tag}
						<a href="tags/{tag.name}">&num;{tag.name}</a>
					{/each}
				</div>
		</header>
		<body>
			<p>{post.brief}</p>
		</body>
	</div>
</article> 




<style>
    .tags {
        display: flex;
		flex-wrap: wrap;
        gap: calc(var(--pico-spacing)*0.5) var(--pico-spacing);
    }
</style>
