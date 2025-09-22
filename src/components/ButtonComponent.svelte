<script>
	export let outline = false;

	let outlineClasses = outline
		? 'border-white bg-transparent text-white hover:bg-white hover:border-white hover:text-black'
		: 'border-[#2f6a80] bg-[#2f6a80] text-white hover:bg-[#1e424f] hover:border-[#1e424f] hover:text-white';

	let buttonProps = {
		class: [
			$$restProps.class,
			`px-6 py-2 rounded-2xl font-semibold border-3 transition-colors duration-200 uppercase`,
			outlineClasses,
			'active:scale-95'
		]
	};
</script>

<button on:click on:mouseover on:mouseenter on:mouseleave {...buttonProps}>
	<slot />
</button>
