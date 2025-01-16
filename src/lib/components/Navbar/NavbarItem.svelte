<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconProps } from '$lib/types.js';
	import { tv } from 'tailwind-variants';

	type Props = {
		title: string;
		active?: boolean;
		href: string;
	} & IconProps;

	let { href, title, active = false, ...iconProps }: Props = $props();

	const styles = tv({
		base: 'flex w-full place-items-center gap-4 rounded-r-full py-3 pl-5 transition-[padding] delay-100 duration-100 hover:bg-subtle hover:text-primary group-hover:sm:px-5 md:px-5',
		variants: {
			active: {
				true: 'bg-primary/10 text-primary',
				false: '',
			},
		},
	});
</script>

<a {href} draggable="false" aria-current={active ? 'page' : undefined} class={styles({ active })}>
	<div class="flex w-full place-items-center gap-4 overflow-hidden truncate">
		<Icon size="1.375em" class="shrink-0" aria-hidden={true} {...iconProps} />
		<span class="text-sm font-medium">{title}</span>
	</div>
</a>
