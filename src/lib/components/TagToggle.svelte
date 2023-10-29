<script lang="ts">
    import { ArrowUpNarrowWide, ArrowDownWideNarrow } from "lucide-svelte";
    import { slide } from "svelte/transition";

	export let tags;
    let displayTags = false;
	console.log(tags);
	console.log(displayTags);
</script>

{#if displayTags}
	<div class="toggle">
		<div role="button"
			on:click={() => {
				displayTags = !displayTags;
				console.log(displayTags);
			}}><ArrowUpNarrowWide size="24" stroke-width="3" />Tags</div
		>
	</div>
{:else}
	<div class="toggle">
		<div role="button"
			on:click={() => {
				displayTags = !displayTags;
				console.log(displayTags);
			}}
			><ArrowDownWideNarrow size="24" stroke-width="3" />Tags
		</div>
	</div>
{/if}
{#if displayTags}
	<div class="tags" transition:slide>
		{#each tags as tag}
			<a role="button" href={`/tags/${tag}`} on:click={()=> {displayTags=false}}>&num;{tag}</a>
		{/each}
	</div>
{/if}

<style>
    .toggle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: calc(var(--pico-spacing)*0.5);
		justify-content: start;
		align-items: start;
	}
</style>