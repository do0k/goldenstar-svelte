<script lang="ts">
	import { browser } from '$app/environment'
	import DashboardNav from '$lib/components/DashboardNav.svelte'
	import Progress from '$src/lib/components/Progress.svelte'
	import RoomItem from '$src/lib/components/RoomItem.svelte'
	import '../app.css'
	import '../styles/app.css'
	import type { PageData } from './$types'

	export let data: PageData
	$: console.log(data)
</script>

<DashboardNav name={data.user.name} role={data.user.role}>
	<div class="bg-white shadow-lg shadow-[#a1acb826] rounded-lg p-2 mb-3">
		<div class="flex justify-between text-xs">
			<RoomItem type="THREE" state="AVAILABLE" number="در دسترس" />
			<RoomItem type="THREE" state="UNAVAILABLE" number="اشغال" />
			<RoomItem type="THREE" state="CLEANING" number="در حال نظافت" />
			<RoomItem type="THREE" state="UNOPERATIONAL" number="غیرعملیاتی" />
		</div>
	</div>
	<div class="grid grid-cols-3">
		<div class="col-span-3 md:col-span-1 md:px-2 md:pr-0">
			<div class="bg-white rounded-lg shadow-lg shadow-[#a1acb826] p-2 mb-3">
				<div class="flex justify-between mb-2 border-b-[1px] pb-1">
					<h2 class="font-bold">واحد های سه تخته (سوئیت)</h2>
					<span class="font-extrabold farsi block leading-relaxed">22</span>
				</div>
				<div class="flex flex-col items-center justify-between">
					<Progress
						color="#22c55e"
						secondary="#fda4af"
						radius="45"
						stroke="5"
						progress="10"
						textColor="#22c55e"
					/>
					<table class="farsi border-separate border-spacing-1 text-xs w-full text-center">
						<tr>
							<th
								class="border-[1px] bg-rose-300 border-neutral-300 m-1 rounded-md py-1 font-medium"
								>اشغال</th
							>
							<td class="border-[1px] border-neutral-300 m-1 rounded-md py-1 font-semibold">5</td>
							<th
								class="border-[1px] bg-green-300 border-neutral-300 m-1 rounded-md py-1 font-medium"
								>در دسترس</th
							>
							<td class="border-[1px] border-neutral-300 m-1 rounded-md py-1 font-semibold">5</td>
						</tr>
						<tr>
							<th
								class="border-[1px] bg-amber-300 border-neutral-300 m-1 rounded-md py-1 w-2/5 font-medium"
								>نظافتی</th
							>
							<td class="border-[1px] border-neutral-300 m-1 rounded-md py-1 font-semibold">5</td>
							<th
								class="border-[1px] bg-neutral-300 border-neutral-300 m-1 rounded-md py-1 w-2/5 font-medium"
								>غیرعملیاتی</th
							>
							<td class="border-[1px] border-neutral-300 m-1 rounded-md py-1 font-semibold">5</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="bg-white rounded-lg shadow-lg shadow-[#a1acb826] p-2 h-60">
				<div class="flex justify-between mb-2 border-b-[1px] pb-1">
					<h2 class="font-bold">وضعیت واحدها</h2>
				</div>
				<ul class="farsi grid grid-cols-3 justify-around h-48">
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="102" state="AVAILABLE" /></li>
					<li><RoomItem type="THREE" number="103" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="104" state="AVAILABLE" /></li>
					<li><RoomItem type="THREE" number="105" state="UNAVAILABLE" /></li>
					<li><RoomItem type="THREE" number="106" state="AVAILABLE" /></li>
					<li><RoomItem type="THREE" number="107" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="108" state="CLEANING" /></li>
					<li><RoomItem type="THREE" number="201" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="202" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="203" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
					<li><RoomItem type="THREE" number="101" state="UNOPERATIONAL" /></li>
				</ul>
			</div>
		</div>
		<div class="col-span-3 md:col-span-1 md:px-2">
			<div class="bg-white rounded-lg shadow-lg shadow-[#a1acb826] p-2">
				<h2 class="font-bold mb-2 border-b-[1px] pb-2">واحد های چهار تخته (یک خوابه)</h2>
			</div>
		</div>
		<div class="col-span-3 md:col-span-1 md:px-2 md:pl-0">
			<div class="bg-white rounded-lg shadow-lg shadow-[#a1acb826] p-2">
				<h2 class="font-bold mb-2 border-b-[1px] pb-2">واحد های پنج تخته (دو خوابه)</h2>
			</div>
		</div>
	</div>
</DashboardNav>
