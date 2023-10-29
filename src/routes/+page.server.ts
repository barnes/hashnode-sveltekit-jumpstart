import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { HN_TOKEN, DEV_PUB_ID, PUB_ID, DUMMY } from '$env/static/private';

export const prerender = true;

export const load = (async () => {
  console.log(typeof DUMMY);
	let id = PUB_ID;
	if (DUMMY === 'true') {
		id = DEV_PUB_ID;
	}
	const query = gql`
		query getPosts($id: ObjectId!) {
			publication(id: $id) {
				isTeam
				title
				about {
					markdown
					html
				}
				posts(first: 10) {
					edges {
						node {
							title
							subtitle
							brief
							url
							slug
							publishedAt
							tags {
								id
								name
								slug
							}
							comments(first: 10, sortBy: RECENT) {
								edges {
									node {
										author {
											id
										}
										content {
											text
											html
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`;
	const requestHeaders = {
		Authorization: HN_TOKEN
	};
	const variables = {
		id: id
	};
	const posts = await request(`https://gql.hashnode.com/`, query, variables, requestHeaders);

	return { posts };
}) satisfies PageServerLoad;
