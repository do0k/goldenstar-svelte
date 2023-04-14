<script lang="ts">
	let circle: SVGCircleElement
	export let radius: number
	export let stroke: number
	export let color: String
	export let textColor: String
	export let secondary: String
	export let progress: number
	const normalizedRadius = radius - stroke * 2
	export let circumference = normalizedRadius * 2 * Math.PI
	export let offset = circumference - (progress / 100) * circumference
	console.log(progress)
	// const setProgress = (percent) => {
	// 	const offset = circumference - (percent / 100) * circumference
	// 	circle.style.strokeDashoffset = offset.toString()
	// }
</script>

<div class="relative flex items-center justify-center">
	<svg height={`${radius * 2}`} width={`${radius * 2}`}>
		<circle
			stroke={`${secondary}`}
			stroke-dasharray={`${circumference} ${circumference}`}
			stroke-linecap="round"
			style={`stroke-dashoffset:0`}
			stroke-width={`2`}
			fill="transparent"
			r={`${normalizedRadius}`}
			cx={`${radius}`}
			cy={`${radius}`}
		/>
		<circle
			bind:this={circle}
			stroke={`${color}`}
			stroke-dasharray={`${circumference} ${circumference}`}
			stroke-linecap="round"
			style={`stroke-dashoffset:${offset}`}
			stroke-width={`${stroke}`}
			fill="transparent"
			r={`${normalizedRadius}`}
			cx={`${radius}`}
			cy={`${radius}`}
		/>
	</svg>
	<span class={`farsi font-extrabold absolute`} style={`color: ${textColor};`}>%{progress}</span>
</div>

<style>
	circle {
		transition: stroke-dashoffset 0.35s;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
	}
</style>
