<script lang="ts">
	import { alertStore } from '$lib/alert.store';

	// Обёртка: включает лоадер, ждёт action, закрывает модалку
	async function handleClick(action?: () => Promise<void> | void) {
		if (!action) {
			alertStore.update((a) => ({ ...a, show: false }));
			return;
		}
		try {
			alertStore.update((a) => ({ ...a, loading: true }));
			await action();
			alertStore.update((a) => ({ ...a, show: false }));
		} finally {
			alertStore.update((a) => ({ ...a, loading: false }));
		}
	}
</script>

{#if $alertStore.show}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
			<h2 class="text-lg font-semibold">{$alertStore.title}</h2>
			<p class="mt-2 whitespace-pre-line">{$alertStore.message}</p>

			<div class="mt-6 flex flex-wrap justify-end gap-3">
				{#each $alertStore.buttons as btn}
					<button
						class={`rounded-xl px-4 py-2 ${btn.color || 'bg-[#2f6a80] text-white hover:bg-blue-700'}`}
						on:click={() => handleClick(btn.action)}
						disabled={$alertStore.loading}
					>
						{#if $alertStore.loading && btn.label === 'Підписати'}
							<span
								class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
							></span>
							Завантаження…
						{:else}
							{btn.label}
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
