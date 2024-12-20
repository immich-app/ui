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
		base: 'hover:bg-neutral hover:text-primary flex w-full place-items-center gap-4 rounded-r-full py-3 transition-[padding] delay-100 duration-100 pl-5 group-hover:sm:px-5 md:px-5',
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
		<Icon size="1.5em" class="shrink-0" aria-hidden={true} {...iconProps} />
		<span class="text-sm font-medium">{title}</span>
	</div>
	<div></div>
</a>
