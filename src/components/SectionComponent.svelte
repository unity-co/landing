<script>
	let { children, title } = $props();
</script>

<div>
	<div class="mb-4 flex w-full items-center gap-4">
		<h2 class="text-2xl font-bold text-[#2f6a80] lg:text-4xl">{title}</h2>
		<hr class="flex-1 border-t-4 border-[#2f6a80]" />
	</div>
	{@render children?.()}
</div>
