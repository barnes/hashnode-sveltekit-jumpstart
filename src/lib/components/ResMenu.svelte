<script lang="ts">
    import Menu from "./Menu.svelte";
    import { ArrowUpNarrowWide, ArrowDownWideNarrow } from "lucide-svelte";
    import { slide } from "svelte/transition";
	export let pages;
	export let tags;

    let displayMenu = false;
</script>

{#if displayMenu}
	<div class="toggle">
		<div class="mobile-menu">
			<ul>
				<Menu {pages} {tags} />
			</ul>
		</div>
		<div class="mobile-menu-toggle">
			<a role="button"
				on:click={() => {
					displayMenu = !displayMenu;
				}}><ArrowUpNarrowWide size="24" stroke-width="3" />Menu</a
			>
		</div>
	</div>
{:else}
	<div class="toggle">
		<div class="mobile-menu">
			<ul>
				<Menu {pages} {tags}/>
			</ul>
		</div>
		<div class="mobile-menu-toggle">
			<a role="button"
				on:click={() => {
					displayMenu = !displayMenu;
				}}><ArrowDownWideNarrow stroke-width="3" size="24" />Menu</a
			>
		</div>
	</div>
{/if}
{#if displayMenu}
	<div class="mobile-menu-toggle" transition:slide>
		<ul>
			<Menu {pages} {tags} />
		</ul>
	</div>
{/if}

<style>
    .toggle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-bottom: var(--pico-spacing);
		margin-bottom: var(--pico-spacing);
	}
	.mobile-menu {
		display: none;
	}

	.mobile-menu-toggle {
		display: none;
	}

	@media only screen and (max-width: 1000px) {
		.mobile-menu-toggle {
			display: none;
		}
		.mobile-menu {
			display: block;
		}
		.mobile-menu ul {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: var(--pico-spacing);
			margin: 0;
			padding: 0;
		}	
		.mobile-menu-toggle ul {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: var(--pico-spacing);
			margin: 0;
			padding-bottom: var(--pico-spacing);
		}
	}

	@media (max-width: 742px) {
		.mobile-menu-toggle {
			display: block;
		}
		.mobile-menu {
			display: none;
		}
	}
</style>