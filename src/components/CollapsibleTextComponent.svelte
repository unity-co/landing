<script lang="ts">
	export let text: string | undefined = undefined; // Можна передати текстом або через <slot>
	export let lines: number = 3; // Скільки рядків показувати в згорнутому стані
	export let expandLabel = 'Розгорнути';
	export let collapseLabel = 'Згорнути';
	export let children: any;

	let expanded = false;
</script>

<div class="relative">
	<div id="expandable-text" class:clamped={!expanded} style={`--lines:${lines};`}>
		{#if text}
			{text}
		{:else}
			{@render children?.()}
		{/if}
	</div>

	{#if !expanded}
		<!-- Легкий градієнт, що натякає на наявність прихованого тексту -->
		<div
			class="pointer-events-none absolute right-0 bottom-8 left-0 h-10
                bg-gradient-to-t from-white to-transparent"
		></div>
	{/if}
	<div class="flex justify-center">
		<button
			type="button"
			class="black mt-2 inline-flex items-center gap-1 rounded-xl px-2
            py-1 text-sm font-medium hover:underline
            focus:outline-none focus-visible:ring focus-visible:ring-blue-400/50"
			on:click={() => (expanded = !expanded)}
			aria-expanded={expanded}
			aria-controls="expandable-text"
		>
			{expanded ? collapseLabel : expandLabel}
			<svg
				class="h-4 w-4 transition-transform"
				viewBox="0 0 20 20"
				fill="currentColor"
				style:transform={`rotate(${expanded ? 180 : 0}deg)`}
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	/* Працює без плагіна line-clamp */
	.clamped {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: var(--lines);
		overflow: hidden;
	}
</style>
