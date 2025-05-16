<script lang="ts">
	import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import { ChildKey } from '$lib/constants.js';
	import type { Color } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { mdiChevronDown } from '@mdi/js';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { tv } from 'tailwind-variants';

	type Props = HTMLAttributes<HTMLDivElement> & {
		color?: Color;
		shape?: 'round' | 'rectangle';
		expanded?: boolean;
		expandable?: boolean;
		children: Snippet;
	};

	let {
		color,
		class: className,
		shape = 'round',
		expanded = $bindable(true),
		expandable = false,
		children,
		...restProps
	}: Props = $props();

	const containerStyles = tv({
		base: 'w-full overflow-hidden shadow-sm',
		variants: {
			shape: {
				rectangle: '',
				round: 'rounded-2xl',
			},
			border: {
				true: 'border',
				false: '',
			},
		},
	});

	const cardStyles = tv({
		base: 'flex h-full w-full flex-col',
		variants: {
			color: {
				primary: 'bg-primary/25 dark:bg-primary/25',
				secondary: 'text-dark bg-gray-50 dark:bg-neutral-900 dark:text-white',
				success: 'bg-success/15 dark:bg-success/30',
				danger: 'bg-danger/15 dark:bg-danger/50',
				warning: 'bg-warning/25 dark:bg-warning/50',
				info: 'bg-info/25 dark:bg-info/50',
			},
		},
	});

	const headerContainerStyles = tv({
		base: 'p-4',
		variants: {
			padding: {
				true: '',
				false: 'pb-0',
			},
			border: {
				true: 'border-b',
				false: '',
			},
		},
	});

	const onToggle = () => {
		expanded = !expanded;
	};

	const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.Card);
	const headerChild = $derived(getChildSnippet(ChildKey.CardHeader));
	const bodyChild = $derived(getChildSnippet(ChildKey.CardBody));
	const footerChild = $derived(getChildSnippet(ChildKey.CardFooter));

	const headerBorder = $derived(!color);
	const headerPadding = $derived(headerBorder || !expanded);

	const headerContainerClasses = $derived(
		twMerge(
			cleanClass(
				headerContainerStyles({
					padding: headerPadding,
					border: headerBorder,
				}),
				headerChild?.class,
			),
		),
	);
</script>

{#snippet header()}
	{#if expandable}
		<button
			type="button"
			onclick={onToggle}
			class={cleanClass('flex w-full items-center justify-between px-4', headerContainerClasses)}
		>
			<div class="flex flex-col">
				{@render headerChild?.snippet()}
			</div>
			<div>
				<IconButton
					color="secondary"
					icon={mdiChevronDown}
					flopped={expanded}
					variant="ghost"
					shape="round"
					size="large"
					aria-label="Expand"
				/>
			</div>
		</button>
	{:else}
		<div class={cleanClass('flex flex-col', headerContainerClasses)}>
			{@render headerChild?.snippet()}
		</div>
	{/if}
{/snippet}

<div class={cleanClass(containerStyles({ shape, border: !color }), className)} {...restProps}>
	<div class={cleanClass(cardStyles({ color }))}>
		{#if headerChild}
			{@render header()}
		{/if}

		{#if bodyChild && expanded}
			<Scrollable class={twMerge(cleanClass('p-4', bodyChild?.class))}>
				{@render bodyChild?.snippet()}
			</Scrollable>
		{/if}

		{#if footerChild}
			<div class={twMerge(cleanClass('flex items-center border-t p-4', footerChild.class))}>
				{@render footerChild.snippet()}
			</div>
		{/if}

		{@render children()}
	</div>
</div>
