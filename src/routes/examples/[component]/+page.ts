import type { PageLoad } from './$types.js';

export const load = (({ params, url }) => {
	return {
		component: params.component,
		link: url.pathname,
	};
}) satisfies PageLoad;
