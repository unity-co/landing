<script lang="ts">
	import ButtonComponent from '../components/ButtonComponent.svelte';
	import InputComponent from '../components/InputComponent.svelte';
	import SectionCenterComponent from '../components/SectionCenterComponent.svelte';
	import SelectComponent from '../components/SelectComponent.svelte';

	import PeopleIcon from 'svelte-google-materialdesign-icons/People.svelte';
	import MapIcon from 'svelte-google-materialdesign-icons/Map.svelte';

	import { countrys } from '$lib/countries.store';
	import { signatures } from '$lib/petition.store';
	import { alertStore } from '$lib/alert.store';

	let name: string = '';
	let country: string = '';
	let city: string = '';

	async function showErrorModal(message: string) {
		setTimeout(() => {
			alertStore.set({
				show: true,
				title: 'Помилка',
				message: `Помилка! ${message}`,
				loading: false,
				buttons: [
					{
						label: 'Добре',
						color:
							'bg-black hover:bg-white border-2 border-black hover:border-black text-white hover:text-black'
					}
				]
			});
		}, 1000);
	}

	async function formDataReset() {
		name = '';
		country = '';
		city = '';
	}

	async function handleSubmit() {
		if (!name || !country || !city) {
			showErrorModal("Всі поля в формі є обов'язковими");
			return;
		}
		alertStore.set({
			show: true,
			title: 'Підпистати маніфест',
			message: `Ви точно бажаєте підписати маніфест?\n\nІм'я: ${name}\nКраїна: ${country}\nМісто: ${city}`,
			loading: false,
			buttons: [
				{
					label: 'Відмінити',
					color: 'bg-red-600 hover:bg-red-700 text-white'
				},
				{
					label: 'Підписати',
					color: 'bg-green-600 hover:bg-green-700 text-white',
					action: async () => await sendRequest()
				}
			]
		});
	}
	async function sendRequest() {
		try {
			const res = await signatures.addRecord({ name, country, city });
			if (res.status === 'ok') {
				setTimeout(() => {
					alertStore.set({
						show: true,
						title: 'Підписати',
						message: `Дякую! Ми отримали ваш підпис`,
						loading: false,
						buttons: [
							{
								label: 'Добре',
								color: 'bg-green-600 hover:bg-green-700 text-white'
							}
						]
					});
				}, 1000);
			} else {
				showErrorModal(res.message || 'Помилка при відправці');
			}
		} catch (err) {
			showErrorModal('Спробуйте пізніше');
			console.error(err);
		}
		formDataReset();
	}
</script>

<SectionCenterComponent title="ПІДПИСАТИ МАНІФЕСТ">
	<div class="flex w-full flex-col gap-4 pt-2" id="form">
		<InputComponent placeholder="Ім'я" bind:value={name}>
			{#snippet icon()}
				<PeopleIcon />
			{/snippet}
		</InputComponent>
		<SelectComponent options={countrys} placeholder="Оберіть країну..." bind:value={country}>
			{#snippet icon()}
				<MapIcon />
			{/snippet}
		</SelectComponent>
		<InputComponent placeholder="Місто" bind:value={city}>
			{#snippet icon()}
				<MapIcon />
			{/snippet}
		</InputComponent>
		<ButtonComponent on:click={handleSubmit}>ПІДПИСАТИ</ButtonComponent>
	</div>
</SectionCenterComponent>
