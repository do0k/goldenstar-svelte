import prisma from '$src/lib/db/database'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) throw redirect(302, '/')
}

export const actions: Actions = {
	login: async (event) => {
		const data = await event.request.formData()

		const username = await data.get('username')
		const password = await data.get('password')

		if (!username) {
			return fail(400, { username, missing: true })
		}

		if (!password) {
			return fail(400, { password, missing: true })
		}

		const user = await prisma.user.findUnique({
			where: {
				username
			}
		})

		const isUserValid = await bcrypt.compareSync(password, user?.password)

		if (!isUserValid) {
			return fail(403, { password, invalid: true })
		}

		const authUser = await prisma.user.update({
			where: {
				username: user?.username
			},
			data: {
				userAuthToken: crypto.randomUUID()
			}
		})

		event.cookies.set('session', authUser.userAuthToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production'
		})

		return { success: true }
	},
	register: async (event) => {
		const data = await event.request.formData()
		const username = data.get('username')
		const password = data.get('password')
		const role = data.get('role')
		const name = data.get('name')

		if (!username) {
			return fail(400, { username, missing: true })
		}

		if (!password) {
			return fail(400, { password, missing: true })
		}

		if (!role) {
			return fail(400, { role, missing: true })
		}

		if (!name) {
			return fail(400, { name, missing: true })
		}

		const passwordHash = await bcrypt.hashSync(password, 12)

		const user = await prisma.user.create({
			data: {
				username,
				password: passwordHash,
				name,
				role
			}
		})

		if (!user) {
			return fail(500, { user, invalid: true })
		}

		event.locals.userRegister = user
		return { success: true }
	},
	logout: async ({ cookies }) => {
		cookies.set('session', '', { path: '/', expires: new Date(0) })

		throw redirect(302, '/auth/login')
	}
}
