<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1>Sorry! Something went wrong. We got the following error.</h1>
	<h2>{$page.status}: {$page.error?.message}</h2>
	<a role="button" href="/">Return to Home</a>
</div>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
    h2 {
        text-align: center;
    }
</style>
