<script lang="ts">
	import { onMount } from 'svelte';

	let mapContainer: HTMLElement;

	export let markers: Marker[] = [];

	onMount(async () => {
		const L = (await import('leaflet')).default;

		const map = L.map(mapContainer).setView([50, 10], 2);

		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: '&copy; OpenStreetMap &copy; CARTO',
			maxZoom: 14
		}).addTo(map);

		markers.forEach((country) => {
			const html = `<div class="marker-circle">${country.signatures}</div>`;
			const icon = L.divIcon({ html, className: 'map-marker', iconSize: [40, 40] });
			const marker = L.marker([country.lat, country.lng], { icon }).addTo(map);
			marker.bindPopup(`<strong>${country.name}</strong><br>Підписів: ${country.signatures}`);
		});
	});
</script>

<div class="map" bind:this={mapContainer}></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />

<style>
	.map {
		height: 100%;
		width: 100%;
	}

	/* родитель маркера */
	.map :global(.map-marker) {
		transform: translate(-50%, -50%);
	}

	/* кружочек с числом */
	.map :global(.marker-circle) {
		width: 40px;
		height: 40px;
		background-color: #2f6a80;
		color: white;
		font-weight: bold;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid white;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		font-size: 14px;
	}
</style>
