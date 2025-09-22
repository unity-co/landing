<script>
	import HeroSection from '../sections/HeroSection.svelte';
	import MissionSection from '../sections/MissionSection.svelte';
	import ManifestSection from '../sections/ManifestSection.svelte';
	import ManifestFormSection from '../sections/ManifestFormSection.svelte';
	import StatSection from '../sections/StatSection.svelte';
	import InteractiveMapSection from '../sections/InteractiveMapSection.svelte';
	import DonateSection from '../sections/DonateSection.svelte';

	import { signatures } from '$lib/petition.store';
</script>

<svelte:head>
	<title>Маніфест збереження людини</title>
</svelte:head>

<HeroSection />
<div class="mt-12 flex w-full flex-col gap-14 px-4 lg:mt-20 lg:px-[22vw]">
	<div data-aos="fade-up">
		<MissionSection />
	</div>
	<div data-aos="fade-up">
		<ManifestSection />
	</div>
	<div data-aos="zoom-in">
		<ManifestFormSection />
	</div>
	<div data-aos="zoom-in">
		<StatSection />
	</div>
	<div data-aos="zoom-in">
		<InteractiveMapSection />
	</div>
	<div data-aos="fade-up">
		<DonateSection />
	</div>
</div>
