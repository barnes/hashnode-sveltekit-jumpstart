<script lang="ts">
	import Menu from './Menu.svelte';

	export let pages;
	export let metadata;
	export let tags;
</script>

<header class="nav-menu">
	<nav>
		<article>
			<header>
				<a href="/"><h1 data-testid="title">{metadata.title}</h1></a>
				{#if metadata.about}
				{@html metadata.about.html}
				{/if}
			</header>
			<body>
				<Menu {pages} {tags} />
			</body>
		</article>
	</nav>
</header>

<style>
	.nav-menu { 
		width: 20%;
	}
	

	@media only screen and (max-width: 1000px) {
		.nav-menu {
			width: 100%;
		}
	}

    
</style>
