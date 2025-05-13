<script lang="ts">
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import { type Snippet } from 'svelte';

	type Props = {
		class?: string;
		children: Snippet;
		open?: boolean;
	};

	let { class: className, children, open = $bindable(true) }: Props = $props();
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellSidebar}>
	<Scrollable
		class={cleanClass(
			'relative shrink-0 bg-light text-dark transition-all duration-200',
			open ? 'w-[min(100vw,16rem)]' : 'w-[0px]',
			className,
		)}
	>
		{@render children?.()}
	</Scrollable>
</Child>
