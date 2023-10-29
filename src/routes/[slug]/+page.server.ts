import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { HN_TOKEN, PUB_ID, DUMMY, DEV_PUB_ID } from '$env/static/private';

export const prerender = true;

export const load = (async ({ params }) => {
	// console.log(params.slug);
	let id = PUB_ID;
	if (DUMMY === 'true') {
		id = DEV_PUB_ID;
	}
	const query = gql`query GetPostBySlug($slug: String!, $id: ObjectId!){
        publication(id: $id){
            isTeam
            title
            post(slug: $slug){
            title
            publishedAt
            content{
                markdown
                html
            }
            tags {
                id
                name
            }
            comments(
            first: 10
          	sortBy: RECENT
          )
          {
            edges{
              node{
                author {
                  id
                }
                content{
                  text,
                  html
                }
              }
            }
          }
            }
        }
        }`;
	const requestHeaders = {
		Authorization: HN_TOKEN
	};
	const variables = {
		slug: params.slug,
		id: id
	};

	const post = await request(`https://gql.hashnode.com/`, query, variables, requestHeaders);
	return {
		post
	};
}) satisfies PageServerLoad;
