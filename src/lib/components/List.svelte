<script lang="ts">
	import type { Link } from '$lib/types';

	export let links: Link[];
</script>

<ul class="buttons">
	{#each links as { href, name }}
		<li class="button is-danger is-fullwidth"><a {href} target="_blank" class="">{name}</a></li>
	{/each}
</ul>
