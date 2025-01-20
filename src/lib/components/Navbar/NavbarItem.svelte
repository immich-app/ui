<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconProps } from '$lib/types.js';
	import { tv } from 'tailwind-variants';

	type Props = {
		title: string;
		active?: boolean;
		href: string;
		variant?: 'compact';
		isActive?: () => boolean;
	} & { icon?: string & Omit<IconProps, 'icon'> };

	const startsWithHref = () => page.url.pathname.startsWith(href);

	let {
		href,
		isActive: isActiveOverride,
		title,
		variant,
		active: activeOverride,
		...iconProps
	}: Props = $props();

	const isActive = isActiveOverride ?? startsWithHref;
	let active = $derived(activeOverride ?? isActive());

	const styles = tv({
		base: 'flex w-full place-items-center gap-4 transition-[padding] delay-100 duration-100 hover:bg-subtle hover:text-primary group-hover:sm:px-5 md:rounded-r-full md:px-5',
		variants: {
			active: {
				true: 'bg-primary/10 text-primary',
				false: '',
			},
			variant: {
				default: 'py-3 pl-5',
				compact: 'py-2 pl-3',
			},
		},
	});
</script>

<a
	{href}
	draggable="false"
	aria-current={active ? 'page' : undefined}
	class={styles({ active, variant: variant ?? 'default' })}
>
	<div class="flex w-full place-items-center gap-4 overflow-hidden truncate">
		{#if iconProps.icon}
			<Icon
				size="1.375em"
				class="shrink-0"
				aria-hidden={true}
				{...iconProps}
				icon={iconProps.icon}
			/>
		{/if}
		<span class="text-sm font-medium">{title}</span>
	</div>
</a>
