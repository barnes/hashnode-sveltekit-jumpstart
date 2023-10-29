<script lang="ts">
	import '@picocss/pico';
    import '../global.css';
    import '@fontsource/fira-sans';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ResMenu from '$lib/components/ResMenu.svelte';
	import github from 'svelte-highlight/styles/github';
	import TagToggle from '$lib/components/TagToggle.svelte';

	export let data;

	let pages = data.pages.publication.staticPages.edges
	
	let tags = [];
	data.tags.publication.posts.edges.forEach((tag) =>{
		tag.node.tags.forEach((slug) => {
			tags.push(slug.slug);
		})
	})
	
	let metadata = {
		title: data.pages.publication.title,
		displayTitle: data.pages.publication.displayTitle,
		about: data.pages.publication.about
	}
</script>

<svelte:head>
	{@html github}
</svelte:head>


<main class="container-fluid">
	<div class="content">
		<Nav {pages} {metadata} {tags}/>
		<ResMenu {pages} {tags}/>
		<div class="slot">
			<slot />
		</div>
	</div>
	<Footer {metadata}/>  
</main>

<style>
	.container-fluid{
		padding-top: var(--pico-spacing)
	}
	.content {
		display: flex;
		flex: wrap;
		flex-direction: row-reverse;
		gap: var(--pico-spacing);
	}
	.slot {
		width: 80%;
	}

	@media only screen and (max-width: 1000px) {
		.content {
			flex-direction: column;
		}
		.slot {
			width:100%;
		}
		.container-fluid {
			width: 100%;
		}
	}

	



</style>