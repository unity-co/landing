<script lang="ts">
	import AOS from 'aos';
	import '../app.css';
	import 'aos/dist/aos.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { signatures } from '$lib/petition.store';
	import AlertComponent from '../components/AlertComponent.svelte';
	import FooterSection from '../sections/FooterSection.svelte';

	let { children } = $props();

	onMount(async () => {
		AOS.init({
			duration: 800,
			once: false
		});
		await signatures.load().then((res) => {
			console.log($signatures.data);
		});
	});

	let title = 'Маніфест збереження людини';
	let description = `Ми — рух “Збереження Людини”. Наше завдання — зменшити агресію в світі, відновити зв’язок людини з її сутністю і створити простір, де кожна особистість має значення. Ми розробляємо інструменти, працюємо з жертвами і агресорами, навчаємо людяності — щоб світ знову став придатним для життя.`;
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta name="keywords" content="Маніфест, збереження, людини" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://example.com" />
	<link rel="icon" type="image/x-icon" href="/logo.png" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>

<AlertComponent />

{@render children?.()}

<FooterSection />
