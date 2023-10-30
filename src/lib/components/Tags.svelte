<script lang="ts">
    import { slide } from 'svelte/transition'
    export let tags
    let showTags = false;
</script>

<button on:click={() => showTags = !showTags}>{showTags? 'Hide Tags':'Sort By Tags'}</button>
{#if showTags}
    <div class="tag-group" transition:slide>
        {#each tags as tag}
                <a role="button" href={`/tags/${tag}`} on:click={()=> {displayTags=false}}>&num;{tag}</a>
        {/each}
    </div>
{/if}

<style>
    .tag-group {
        padding: var(--pico-spacing) calc(var(--pico-spacing)*0.25);
        display: flex;
        flex-wrap: wrap;
        gap: calc(var(--pico-spacing)*0.5);
        align-items: center;
        justify-content: center;
    }
    @media only screen and (max-width: 1000px) {
		.tag-group {
		}
	}


</style>

