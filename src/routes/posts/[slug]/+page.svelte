<script lang="ts">
    import type { PageData } from './$types';
    import { formatDate } from '$lib/utils';
    
    export let data: PageData;

    let post = data.post.publication.post;
    let comments = post.comments.edges;

</script>
<svelte:head>
    <title>{post.title}</title>
    <meta property="og:type" content="article">
    <meta property="og:title" content={post.title}>
</svelte:head>

{#if data}

<article>
    <header>
        <h1>{post.title}</h1>
        <span>Published on {formatDate(post.publishedAt)}</span>
        <div class="tags">
            {#each post.tags as cat}
                <a href={`/tags/${cat.name}`}>&num;{cat.name}</a>
            {/each}
        </div>
    </header>
    <div class="tags">
    </div>
    <body class="post-content">
        {@html post.content.html}
            <!-- <svelte:component this={post.content.markdown} /> -->
    </body>
</article>
<article>
    <header>
        <h1>Comments</h1>
            {#each comments as comment}
                <div class="comment">
                    <p>{comment.node.content}</p>
                    <!-- <p>By {comment.node.author.name} on {formatDate(comment.node.createdAt)}</p> -->
                </div>
            {/each}
    </header>
</article>
{:else}
<h1>This post was not found.</h1>
    <a role="button" href="/">Maybe head back to the home page and try again.</a>
{/if}


<style>
    .tags {
        display: flex;
        gap: 1rem;
    }
</style>
