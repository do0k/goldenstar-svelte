import type { PageLoad } from './$types'

export const load: PageLoad = (event) => {
	const user = event
	return { user }
}
