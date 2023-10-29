<script lang="ts">
	import { Moon } from 'lucide-svelte';
	import TagToggle from './TagToggle.svelte';
	const setTheme = () => {
		let current = document.querySelector('html')?.getAttribute('data-theme');
		console.log(current);
		if (current == 'light') {
			document.querySelector('html')?.setAttribute('data-theme', 'dark');
		} else {
			document.querySelector('html')?.setAttribute('data-theme', 'light');
		}
	};
	export let pages;
	export let tags;

	
</script>

<ul class="menu">
	<li role='button' on:click={setTheme}>
		<Moon />
	</li>
	{#if pages.length > 0}
		{#each pages as page}
		<li><a role="button" href="pages/{page.node.slug}">{page.node.title}</a></li>
		{/each}
	{/if}
	<TagToggle {tags}/>
</ul>

<style>
	.menu {
		display: flex;
		flex-direction: column;
		gap: var(--pico-spacing);
		align-items: start;
		padding-bottom: var(--pico-spacing);
	}
	@media only screen and (max-width: 1000px) {
		.menu {
			display: none;
		}
	}
</style>
