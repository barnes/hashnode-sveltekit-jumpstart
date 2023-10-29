import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { HN_TOKEN, PUB_ID, DEV_PUB_ID, DUMMY } from '$env/static/private';
import { dev } from '$app/environment';

export const prerender = true;

export const load: PageServerLoad = async () => {
	let id = PUB_ID;
	if (DUMMY === 'true') {
		id = DEV_PUB_ID;
	}
	const pageQuery = gql`
		query GetAllPages($id: ObjectId!) {
			publication(id: $id) {
				id
				title
				displayTitle
				about {
					html
				}
				staticPages(first: 10) {
					edges {
						node {
							slug
							title
						}
					}
				}
			}
		}
	`;

	const tagQuery = gql`
		query GetAllTags($id: ObjectId!) {
			publication(id: $id) {
				posts(first: 20) {
					edges {
						node {
							tags {
								slug
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

	const pages = await request(`https://gql.hashnode.com/`, pageQuery, variables, requestHeaders);
	const tags = await request(`https://gql.hashnode.com/`, tagQuery, variables, requestHeaders);
	// let pageList = pages.publication.static.edges;
	// let tagList = tags.publication.posts.edges[0].node.tags;
	return { pages, tags };
};
