<script lang="ts">
	import { Moon } from 'lucide-svelte';
	import Tags from '$lib/components/Tags.svelte'
	const setTheme = () => {
		let current = document.querySelector('html')?.getAttribute('data-theme');
		if (current == 'light') {
			document.querySelector('html')?.setAttribute('data-theme', 'dark');
		} else {
			document.querySelector('html')?.setAttribute('data-theme', 'light');
		}
	};
	export let pages;
	export let tags;

	
</script>

<div class="menu">
	<div role='button' on:click={setTheme}>
		<Moon />
	</div>
	{#if pages.length > 0}
		{#each pages as page}
		<a role="button" href="/pages/{page.node.slug}">{page.node.title}</a>
		{/each}
	{/if}
	<Tags {tags}/>
</div>

<style>
	.menu {
		display: flex;
		flex-direction: column;
		gap: var(--pico-spacing);
		align-items: center;
		padding-bottom: var(--pico-spacing);
	}
	@media only screen and (max-width: 1000px) {
		.menu {
			flex-direction: row;	
		}
	}
</style>
