<script lang="ts">
	import '$src/app.css'
	export let type
	export let state
	export let number: String
	let color: String

	if (state === 'AVAILABLE') {
		color = '#22c55e'
	} else if (state === 'UNOPERATIONAL') {
		color = '#737373'
	} else if (state === 'CLEANING') {
		color = '#f59e0b'
	} else if (state === 'UNAVAILABLE') {
		color = '#f43f5e'
	}
</script>

<div class="flex items-center">
	<!-- {type === 'THREE' ? 'سوئیت' : type === 'FOUR' ? 'یک خوابه' : 'دوخوابه'} -->
	<span class={`w-[30px] h-[15px] rounded-md ml-3`} style={`background-color: ${color}`} />
	<span class="ml-auto">{number}</span>
</div>
