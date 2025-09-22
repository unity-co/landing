<script lang="ts">
	export let placeholder: string = '';
	export let icon: any = '';
	export let value: string = '';
</script>

<div
	class="flex items-center rounded-xl border-3 border-black
            bg-white px-3
            py-3 transition-colors focus-within:bg-[#e6e6e6] hover:bg-[#e6e6e6]"
>
	{#if icon}
		<span class="mr-2 text-gray-500">{@render icon?.()}</span>
	{/if}
	<input
		type="text"
		class="flex-1 bg-transparent text-black placeholder-gray-400 focus:outline-none"
		bind:value
		{placeholder}
	/>
</div>
