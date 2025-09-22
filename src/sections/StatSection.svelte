<script lang="ts">
	import { onMount } from 'svelte';
	import { signatures } from '$lib/petition.store';

	import SectionComponent from '../components/SectionComponent.svelte';
	import LoadingSpinnerComponent from '../components/LoadingSpinnerComponent.svelte';

	let signature_count;

	$: signature_count = $signatures.count;
</script>

<SectionComponent title="СТАТИСТИКА">
	<div class="w-full">
		<div class="flex w-full rounded-lg border-3 border-black bg-white p-4">
			<h4 class="w-[50%] text-xl lg:text-2xl">Вже підписали</h4>
			<div class="flex w-[50%] items-center justify-end">
				{#if signature_count !== null}
					<h3 class="text-2xl font-bold lg:text-3xl">{signature_count}</h3>
				{:else}
					<LoadingSpinnerComponent width="1.8em" height="1.8em" />
				{/if}
			</div>
		</div>
	</div>
</SectionComponent>
