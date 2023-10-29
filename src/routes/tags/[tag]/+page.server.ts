import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { HN_TOKEN, DUMMY, PUB_ID, DEV_PUB_ID } from '$env/static/private';

export const prerender = true;

export const load = (async ({params}) => {
  console.log('LOADING NEW TAG PAGE: ' + params.tag)
  let tag = params.tag
  let id = PUB_ID;
	if (DUMMY === 'true') {
		id = DEV_PUB_ID;
	}
	const query = gql`query GetPostsByTags($tag: [String!], $id: ObjectId!){
  publication(id: $id){
    isTeam
    title
    about{
      markdown
    }
    posts(
        first: 10
        filter: {tagSlugs: $tag}
        ){
      edges{
        node {
          title
          brief
          url
          slug
          publishedAt
          tags {
            id
            name
            slug
          }
        }
      }
    }
  }
}`;
    const requestHeaders = {
        'Authorization': HN_TOKEN
    }
    const variables = {
        tag: tag,
        id: id
    }
	const res = await request(`https://gql.hashnode.com/`, query, variables, requestHeaders);

	return {res, tag};
}) satisfies PageServerLoad;