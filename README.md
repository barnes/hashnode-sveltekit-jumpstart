# Sveltekit / Hashnode Headless Boilerplate
## A jumpstart to building a headless Hashnode blog with Sveltekit.

First and foremost, I am not a Sveltekit expert, nor an expert with Hashnode's GraphQL API, so this might not be exactly perfect or follow all best practices. But its functional, and handles most of the grunt work of getting data from Hashnode and into your Sveltekit app.

## .env needs

Our .env needs a few values: 
1. HN_TOKEN - Your Hashnode developer token.
2. PUB_ID - Your Hashnode Blogs publication ID
3. DEV_PUB_ID - The publication ID of our 'development' data. I've been using Hashnode's Engineering blog to fill up the site and validate my styling and over all functionality.
4. DUMMY - If true, than our requests to Hashnode's API will use the DEV_PUB_ID instead of your PUB_ID.

## General Stack

- Sveltekit does the heavy lifting of making requests and displaying data.
- PicoCSS for fundamental CSS styling that is semantic and easy to deal with. Customize your PicoCSS variables in ./src/global.css.
- Vitest for testing our endpoints.
- Playwright for testing our UI.

## Routes

- Index route displays posts.
- posts/[slug] route will display a single post given it's slug from the URL param.
- tag/[tag] route will list all posts of a given tag from the URL param.
- pages/[page] route will display a page from Hashnode.
- +layout handles the overall layout, as well as fetching our pages and tags.

## Next Steps

- More dynamic / interesting styling. Global styles can defined in global.css, specific styles can live in components / routes.
- Build up more robust testing
- Deployment workflow.
