<script lang="ts">
	import type { Link } from '$lib/types';
	import List from '$lib/components/List.svelte';

	const subtitles: string[] = [
		'Театр, который мы заслужили',
		'Андерграунд вашего сердца',
		'Театральное завтра в мире искусства сегодня',
		'Не тамады'
	];

	const title: string = subtitles[Math.floor(Math.random() * subtitles.length)];

	const links: Link[] = [
		{ href: 'https://instagram.com/asabalar_theatre', name: 'Инстаграм' },
		{ href: 'https://tiktok.com/asabalar', name: 'ТикТок' },
		{ href: 'https://facebook.com/asabalar', name: 'Фейсбук' },
		{ href: 'https://vk.com/asabalar', name: 'ВКонтакте' }
	];

	const contacts: Link[] = [
		{ href: 'mailto:bas@asabalar.kz', name: 'Почта' },
		{ href: 'tel:+77059858859', name: 'Телефон' }
	];
</script>

<section class="hero is-bold is-danger is-fullheight">
	<div class="hero-body">
		<div class="container has-text-centered">
			<h1 class="title is-1">АсАбАлАр</h1>
			<p class="subtitle is-3">
				{title}
			</p>
			<div class="columns">
				<div class="column is-offset-3 is-3">
					<h2 class="title is-4">Мы в соцсетях</h2>
					<List {links} />
				</div>
				<div class="column is-3">
					<h2 class="title is-4">Контакты</h2>
					<List links={contacts} />
				</div>
			</div>
		</div>
	</div>
</section>
