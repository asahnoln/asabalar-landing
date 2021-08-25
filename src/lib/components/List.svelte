<script lang="ts">
	import type { Link } from '$lib/types';

	export let links: Link[];
</script>

<ul class="buttons">
	{#each links as { href, name, icon }}
        <li class="button is-danger is-fullwidth">
            <span class="icon">
                <ion-icon name={icon}></ion-icon>
            </span>
            <span>
                <a {href} target="_blank" class="">{name}</a>
            </span>
        </li>
	{/each}
</ul>
