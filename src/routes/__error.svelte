<script context="module" lang="ts">
	export function load({
		error,
		status
	}: {
		error: string;
		status: string;
	}): { props: { title: string; status: string } } {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
	export let status: string;
</script>

<svelte:head>
	<title>{status} &mdash; Театр АсАбАлАр</title>
</svelte:head>

<section class="hero is-warning is-fullheight">
	<div class="hero-body">
		<div class="container has-text-centered">
			<h1 class="title is-1">{title}</h1>
			<a class="button is-large is-link" href="/">Вернуться на главную</a>
		</div>
	</div>
</section>
