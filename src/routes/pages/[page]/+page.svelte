<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    let page = data.page.publication.staticPage
</script>

<article>
    <h1>{page.title}</h1>
    <div>{@html page.content.html}</div>
</article>