import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) throw redirect(301, '/auth/login')
	return {
		user: event.locals.user
	}
}
