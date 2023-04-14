<script lang="ts">
	import type { ActionData, PageData } from './$types'
	import { enhance } from '$app/forms'
	import '$src/app.css'
	import '$src/styles/app.css'

	export let data: PageData
	export let form: ActionData
	$: mainData = data
	$: formData = form
</script>

<main class="h-screen w-screen bg-[#f5f5f9] flex items-center justify-center">
	<!-- <div class="bg-white w-[90%] md:w-1/2 lg:w-1/4 rounded-lg shadow-lg p-4">
		<h2>login</h2>
		<form action="?/login" method="POST" use:enhance>
			<label for="username">usdername</label>
			<input type="text" name="username" />
			<br />
			<label for="password">password</label>
			<input type="password" name="password" />
			<br />
			<button type="submit">login</button>
		</form>
	</div> -->

	<div class="bg-white shadow-lg rounded-lg p-3 w-full mx-5 sm:mx-0 sm:w-2/4 md:w-1/3 lg:w-1/4">
		<img
			src="/logo.svg"
			height={150}
			width={150}
			alt=""
			class="mx-auto bg-white rounded-full -mt-12 p-1 box-content"
		/>
		<h5 class="text-green-500 font-extrabold text-center text-md mb-4 -mt-2">هتل ستاره طلایی</h5>
		<h2 class="font-bold text-2xl mb-4 text-blue-800 text-center">ورود</h2>
		<p class="text-xs font-light text-blue-400 -mt-2 text-center mb-5">ورود کاربران</p>
		<form action="?/login" method="POST" use:enhance>
			<div
				class="relative border-[1px] mb-3 border-blue-400 focus-within:border-blue-800 rounded-lg p-1 transition-all duration-300"
			>
				<input
					type="text"
					name="username"
					id="username"
					dir="ltr"
					class="peer block leading-relaxed w-full h-full outline-none"
				/>
				<label
					for="username"
					class="absolute right-2 peer-focus:bg-white peer-focus:-top-2 peer-focus:text-xs top-[7px] text-sm px-2 text-blue-400 peer-focus:text-blue-800 transition-all duration-300"
				>
					نام کاربری
				</label>
			</div>
			<div
				class="relative border-[1px] mb-3 border-blue-400 focus-within:border-blue-800 rounded-lg p-1 transition-all duration-300"
			>
				<input
					type="password"
					name="password"
					id="password"
					dir="ltr"
					class="peer block leading-relaxed w-full h-full outline-none"
				/>
				<label
					for="password"
					class="absolute right-2 peer-focus:bg-white peer-focus:-top-2 peer-focus:text-xs top-[7px] text-sm px-2 text-blue-400 peer-focus:text-blue-800 transition-all duration-300"
				>
					گذرواژه
				</label>
			</div>

			<button
				type="submit"
				class="block w-full bg-blue-700 rounded-lg py-1 font-bold hover:bg-blue-800 text-white transition-all"
				>ورود</button
			>
		</form>
	</div>
</main>
