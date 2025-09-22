<script lang="ts">
	import ButtonComponent from '../components/ButtonComponent.svelte';
	import Draw1Svg from '../components/Draw1Image.svelte';

	function scrollDown(percent: number): void {
		const scrollHeight = document.body.scrollHeight;
		const target = window.scrollY + scrollHeight * (percent / 100);
		window.scrollTo({
			top: target,
			left: 0,
			behavior: 'smooth'
		});
	}
</script>

<div class="hero relative flex h-[80vh] w-full overflow-hidden px-8 lg:px-24">
	<div class="flex h-full w-full flex-col justify-center text-white md:w-[50%]">
		<div class="flex flex-col gap-2">
			<h1 data-aos="fade-right" class="text-4xl font-bold lg:text-5xl">
				МАНІФЕСТ<br />ЗБЕРЕЖЕННЯ<br />ЛЮДИНИ
			</h1>
			<h4 data-aos="fade-right" class="text-xl lg:text-2xl">
				Голос кожного має значення.<br />Підпиши, аби зберегти людяність
			</h4>

			<div data-aos="fade-right" class="mt-4 flex w-full flex-col gap-2 lg:w-[20em]">
				<ButtonComponent class="w-full" on:click={() => scrollDown(40)}
					>ПІДПИСАТИ МАНІФЕСТ</ButtonComponent
				>

				<ButtonComponent outline={true} on:click={() => scrollDown(20)}
					>ДЕТАЛЬНІШЕ ПРО МАНІФЕСТ</ButtonComponent
				>
			</div>
		</div>
	</div>
	<div
		data-aos="fade-up"
		class="absolute bottom-[-8em] left-[50%] hidden h-[34em] w-[34em] rounded-full bg-white md:flex"
	>
		<div class="ml-[5em] w-[80%]">
			<Draw1Svg />
		</div>
	</div>
</div>

<style>
	.hero {
		background: -webkit-linear-gradient(
			180deg,
			rgba(123, 197, 224, 0.5) 5%,
			/* светлый сверху */ rgba(123, 197, 224, 1) 40%,
			/* основной синий — начало */ rgbargba(123, 197, 224, 1) 70%,
			/* основной синий — конец */ rgba(200, 225, 255, 1) 100% /* светлый снизу */
		);
		background: -moz-linear-gradient(
			180deg,
			rgba(123, 197, 224, 0.5) 5%,
			rgba(123, 197, 224, 1) 40%,
			rgba(123, 197, 224, 1) 70%,
			rgba(200, 225, 255, 1) 100%
		);
		background: linear-gradient(
			180deg,
			rgba(123, 197, 224, 0.5) 5%,
			rgba(123, 197, 224, 1) 40%,
			rgba(123, 197, 224, 1) 70%,
			rgba(200, 225, 255, 1) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(
			startColorstr="#51a2ff80",
			endColorstr="#c8e1ff",
			GradientType=0
		);
	}
</style>
