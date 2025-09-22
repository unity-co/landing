<script lang="ts">
	export let options: { en: string; ua: string }[] = [];
	export let placeholder: string = 'Оберіть значення...';
	export let icon: any;
	export let value: string = '';

	let selectElement: HTMLSelectElement;
</script>

<div class="relative">
	<select bind:value class="absolute inset-0 h-full w-full cursor-pointer opacity-0">
		{#each options as opt}
			<option value={opt.en}>{opt.ua}</option>
		{/each}
	</select>

	<div class="flex items-center rounded-xl border-3 border-black bg-white px-3 py-3">
		{#if icon}
			<span class="mr-2 text-gray-500">{@render icon?.()}</span>
		{/if}
		<span class="flex-1">{value ? options.find((o) => o.en === value)?.ua : placeholder}</span>
	</div>
</div>
