<script lang="ts">
	import { enhance } from '$app/forms'
	import Icon from 'svelte-icons-pack/Icon.svelte'
	import BsXLg from 'svelte-icons-pack/bs/BsXLg'
	import BiHomeCircle from 'svelte-icons-pack/bi/BiHomeCircle'
	import BiChart from 'svelte-icons-pack/bi/BiChart'
	import BiMenu from 'svelte-icons-pack/bi/BiMenu'
	import BsPower from 'svelte-icons-pack/bs/BsPower'

	import { clickOutside } from '$lib/utils/clickOutside'

	export let name
	export let role

	let innerWidth = 0
	let innerHeight = 0
	$: isOpen = innerWidth >= 768
	$: isDropOpen = false
	const handleClickOutside = (event) => {
		isDropOpen = false
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<main class="bg-[#f5f5f9] min-h-screen w-screen overflow-x-hidden">
	<aside
		class={`${
			isOpen ? 'right-0' : '-right-full'
		} transition-all duration-500 ease-in-out fixed h-screen w-[16rem] bg-white `}
	>
		<div class="shadow-lg shadow-[#a1acb826] p-3 h-full">
			<div class="mb-12 flex items-center justify-between">
				<span
					class="md:hidden absolute left-2 top-2 rounded-full hover:bg-slate-200 p-1 cursor-pointer"
				>
					<Icon src={BsXLg} />
				</span>
				<h1 class={`block font-bold text-xl pl-2 `}>هتل ستاره طلایی</h1>
			</div>
			<ul>
				<li class="mb-2">
					<a
						class="flex relative before:-left-3 before:top-0 items-stretch bg-indigo-100 text-indigo-500 p-2 transition-all rounded-lg before:content-[''] before:rounded-r-lg before:h-full before:absolute before:bg-indigo-600 before:w-1"
						href="/"
					>
						<Icon size="1.5em" src={BiHomeCircle} className="fill-indigo-700" />
						<span class="align-middle mr-2 font-bold leading-relaxed">پیشخوان</span>
					</a>
				</li>
				<li class="mb-2">
					<a
						class="flex group items-stretch hover:bg-indigo-100 hover:text-indigo-500 p-2 transition-all rounded-lg"
						href="/"
					>
						<Icon src={BiChart} size="1.5em" className="group-hover:fill-indigo-500" />
						<span class="align-middle mr-3 leading-relaxed">گزارشات</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>
	<section
		class={`${
			isOpen ? ' md:w-[calc(100%_-_16rem)] md:mr-[16rem] w-full mr-0' : 'w-full'
		} duration-500 ease-in-out transition-all h-screen p-3`}
	>
		<div class="max-w-[2520px] mx-auto md:px-5 sm:px-2 px-4">
			<nav class="flex w-full">
				<div
					class="flex justify-between w-full bg-white shadow-lg shadow-[#a1acb826] rounded-lg font-extrabold text-xl p-2 mb-3"
				>
					<span
						class="cursor-pointer rounded-full hover:bg-slate-200 p-2 inline-block transition-all"
						on:click={() => (isOpen = !isOpen)}
						on:keypress={() => {}}
					>
						<Icon src={BiMenu} size="1.5rem" />
					</span>

					<div
						class="flex relative items-center text-indigo-400 cursor-pointer"
						on:click={() => (isDropOpen = !isDropOpen)}
						on:keypress={() => (isDropOpen = !isDropOpen)}
					>
						<span class="text-sm font-bold ml-4">{name}</span>
						<img
							src="/avatar.png"
							alt=""
							width={40}
							height={40}
							class="rounded-full border-indigo-200 border-[1px]"
						/>
						<div
							class={`${
								isDropOpen ? '' : 'hidden'
							} absolute font-bold text-base top-[calc(100%+0.7rem)] bg-white shadow-lg shadow-[#a1acb826] rounded-lg overflow-hidden block min-w-[12rem] -left-2`}
							use:clickOutside
							on:click_outside={(e) => handleClickOutside(e)}
						>
							<ul>
								<li>
									<div class="flex items-center px-2 py-4 border-b-[1px]">
										<img
											src="/avatar.png"
											alt=""
											height={40}
											width={40}
											class="rounded-full border-indigo-200 border-[1px] ml-3"
										/>
										<div class="flex flex-col font-normal">
											<h4 class="font-bold text-[0.8rem] text-slate-500">{name}</h4>
											<span class="font-normal text-xs text-slate-400"
												>{role && role === 'ADMIN' ? 'مدیریت هتل' : 'پذیرش'}</span
											>
										</div>
									</div>
								</li>
								<li class="text-slate-500 text-base">
									<form action="/auth/login?/logout" method="POST" use:enhance>
										<button
											type="submit"
											class="py-2 hover:bg-slate-50 px-4 text-base font-normal w-full flex items-center"
										>
											<Icon src={BsPower} size="1.2rem" className="ml-2" />
											<span class="leading-relaxed">خروج</span>
										</button>
									</form>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<section class="pb-3">
				<slot />
			</section>
		</div>
	</section>
</main>
