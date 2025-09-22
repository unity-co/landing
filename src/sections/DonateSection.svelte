<script lang="ts">
	import ButtonComponent from '../components/ButtonComponent.svelte';
	import Draw2Image from '../components/Draw2Image.svelte';
	import SectionCenterComponent from '../components/SectionCenterComponent.svelte';

	let text1 = `Ваш внесок — це підтримка глобального руху за збереження людяності.
Ми створюємо інноваційні механізми захисту сутності людини в умовах постійного тиску, системної агресії та байдужості.
Ми працюємо з обома сторонами конфлікту, бо віримо: вирішити проблему агресії можна тільки через усвідомлення, взаємодію та трансформацію.`;
</script>

<SectionCenterComponent title="ЗАДОНАТИТИ">
	<div class="flex flex-col items-center gap-2 md:flex-row">
		<div class="w-[16em] pl-8 lg:w-[80em] lg:pl-0">
			<Draw2Image />
		</div>
		<div class="px-8 lg:px-0 lg:pb-12">
			<p class="text-lg whitespace-pre-line lg:text-lg">{text1}</p>

			<a href="#" class="mt-4 block w-full">
				<ButtonComponent class="w-full">ПІДТРИМАТИ ІНІЦІАТИВУ</ButtonComponent>
			</a>
		</div>
	</div>
</SectionCenterComponent>
