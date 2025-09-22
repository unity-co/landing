<script lang="ts">
	import SectionComponent from "../components/SectionComponent.svelte";
	import MapComponent from "../components/MapComponent.svelte";
	import { getCoordsByCountry } from '$lib/countries.store';
	import { signatures } from '$lib/petition.store';
	import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent.svelte";

	// Формируем массив маркеров
	$: markers = Object.entries($signatures.data).map(([name, signatures]) => {
		const coords = getCoordsByCountry(name);
		if (!coords) return null;
		return {
			name,
			lat: coords.lat,
			lng: coords.lng,
			signatures
		};
	}).filter(Boolean) as Marker[];
</script>

<SectionComponent title="ІНТЕРАКТИВНА МАПА">
    <div class="w-full h-[18em] relative">
        {#if Object.keys($signatures.data).length !== 0}
            <MapComponent markers={markers} />
        {:else}
            <div class="absolute inset-0 flex items-center justify-center bg-gray-100">
                <LoadingSpinnerComponent />
			</div>
        {/if}
    </div>
</SectionComponent>
