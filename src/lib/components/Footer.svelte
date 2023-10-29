<script lang="ts">
    import { Twitter, Linkedin, Github } from 'lucide-svelte';
    let strokeWidth = 1;
    let size = 50
    export let metadata;
</script>

<footer>
    <p>{metadata.title} &copy {new Date().getFullYear()}</p>
    <!-- Add in social links here. -->
    <div class="footer-links">
        <a href="#"><Linkedin {size} {strokeWidth} /></a>
        <a href="#"><Github {size} {strokeWidth}/></a>
        <a href="#"><Twitter {size} {strokeWidth}/></a>
    </div>

</footer>

<style>
    footer {
        margin: 2rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
    .footer-links {
        display: flex;
        gap: 1rem;
    }
    a {
        text-decoration: none;
    }
    p {
        margin: 0;
    }
</style>