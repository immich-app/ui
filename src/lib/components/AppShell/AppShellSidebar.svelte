<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import { mdiClose, mdiMenu } from '@mdi/js';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children: Snippet;
		noBorder?: boolean;
	};

	let { class: className, children, noBorder = false }: Props = $props();

	afterNavigate(() => {
		if (!hidden) {
			hidden = true;
		}
	});

	let hidden = $state(true);
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellSidebar}>
	<IconButton
		size="giant"
		onclick={() => (hidden = !hidden)}
		icon={hidden ? mdiMenu : mdiClose}
		shape="round"
		color={hidden ? 'primary' : 'secondary'}
		variant="filled"
		class="absolute bottom-2 end-4 m-2 opacity-100 md:hidden"
		aria-label="Menu"
	/>
	<Scrollable
		class={cleanClass(
			'h-dvh w-full shrink-0 bg-light pb-16 text-dark md:relative md:block md:w-min md:pb-0',

			hidden ? 'hidden' : '',
			className,
			noBorder || 'border-e',
		)}
	>
		{@render children?.()}
	</Scrollable>
</Child>
