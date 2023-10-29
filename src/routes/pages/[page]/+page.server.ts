import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { HN_TOKEN, DUMMY, PUB_ID, DEV_PUB_ID } from '$env/static/private';

export const prerender = true;

export const load = (async ({ params }) => {
	let id = PUB_ID;
	if (DUMMY === 'true') {
		id = DEV_PUB_ID;
	}
	const query = gql`
		query GetPageBySlug($slug: String!, $id: ObjectId!) {
			publication(id: $id) {
				staticPage(slug: $slug) {
					title
					slug
					content {
						html
					}
				}
			}
		}
	`;

	const requestHeaders = {
		Authorization: HN_TOKEN
	};

	const variables = {
		slug: params.page,
        id: id
	};
	try {
		const page = await request(`https://gql.hashnode.com/`, query, variables, requestHeaders);
		if(page.publication.staticPage === null) throw error(404, `Could not find ${params.page}`);
		return {
			page
		};
	} catch (err) {
		throw error(404, `Could not find ${params.page}`);
	}
}) satisfies PageServerLoad;
