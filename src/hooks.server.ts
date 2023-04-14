import type { Handle } from '@sveltejs/kit'
import prisma from './lib/db/database'

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session')

	if (!session) return await resolve(event)

	const user = await prisma.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true, role: true, name: true }
	})

	if (user) {
		event.locals.user = {
			name: user.name,
			username: user.username,
			role: user.role
		}
	}

	return await resolve(event)
}
