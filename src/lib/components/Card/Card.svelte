<script lang="ts">
	import { withChildrenSnippets } from '$lib/common/use-context.svelte.js';
	import { ContextKey } from '$lib/constants.js';
	import type { Color, Shape } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { IconButton } from '@immich/ui';
	import { mdiChevronDown } from '@mdi/js';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = HTMLAttributes<HTMLDivElement> & {
		color?: Color;
		shape?: Shape;
		variant?: 'filled' | 'outline';
		expandable?: boolean;
		children: Snippet;
	};

	let {
		color = 'secondary',
		class: className,
		expandable = false,
		variant,
		children,
		...restProps
	}: Props = $props();

	const cardStyles = tv({
		base: 'rounded-2xl bg-light text-dark shadow-sm dark:border-gray-600 w-full overflow-hidden',
		variants: {
			defaultStyle: {
				true: 'border border-gray-300 dark:border-gray-600',
				false: '',
				default: '',
			},
			outlineColor: {
				primary: 'border border-primary',
				secondary: 'border border-gray-300 dark:border-gray-600',
				success: 'border border-success',
				danger: 'border border-danger',
				warning: 'border border-warning',
				info: 'border border-info',
			},
		},
	});

	const iconColor = tv({
		variants: {
			filledColor: {
				primary: 'text-light',
				secondary: 'text-light',
				success: 'text-light',
				danger: 'text-light',
				warning: 'text-light',
				info: 'text-light',
			},
			outlineColor: {
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},
		},
	});

	const headerContainerStyles = tv({
		variants: {
			bottomPadding: {
				true: '',
				false: 'pb-0',
			},
			filledColor: {
				primary: 'bg-primary text-light rounded-t-xl',
				secondary: 'bg-dark text-light rounded-t-xl',
				success: 'bg-success text-light rounded-t-xl',
				danger: 'bg-danger text-light rounded-t-xl',
				warning: 'bg-warning text-light rounded-t-xl',
				info: 'bg-info text-light rounded-t-xl',
			},
			outlineColor: {
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},
		},
	});

	let expanded = $state(!expandable);
	const onToggle = () => {
		expanded = !expanded;
	};

	const { getChildren: getChildSnippet } = withChildrenSnippets(ContextKey.Card);
	const headerChildren = $derived(getChildSnippet(ContextKey.CardHeader));
	const bodyChildren = $derived(getChildSnippet(ContextKey.CardBody));
	const footerChildren = $derived(getChildSnippet(ContextKey.CardFooter));

	const headerClasses = 'flex flex-col space-y-1.5';
	const headerContainerClasses = $derived(
		cleanClass(
			headerContainerStyles({
				bottomPadding: !expanded || !bodyChildren || variant === 'filled' || variant === 'outline',
				outlineColor: variant === 'outline' ? color : undefined,
				filledColor: variant === 'filled' ? color : undefined,
			}),
		),
	);
</script>

{#snippet header()}
	{#if expandable}
		<button type="button" onclick={onToggle} class="w-full">
			<div class={cleanClass(headerContainerClasses, 'flex items-center justify-between px-4')}>
				<div class={cleanClass(headerClasses, 'py-4')}>
					{@render headerChildren?.()}
				</div>
				<div>
					<IconButton
						class={iconColor({
							filledColor: variant === 'filled' ? color : undefined,
							outlineColor: variant === 'outline' ? color : undefined,
						}) as Color}
						icon={mdiChevronDown}
						flopped={expanded}
						variant="ghost"
						shape="round"
						size="large"
					/>
				</div>
			</div>
		</button>
	{:else}
		<div class={cleanClass(headerClasses, headerContainerClasses, 'p-4')}>
			{@render headerChildren?.()}
		</div>
	{/if}
{/snippet}

{#snippet body()}
	<div class="p-4">
		{@render bodyChildren?.()}
	</div>
{/snippet}

{#snippet footer()}
	<div class="flex items-center p-4 pt-0">
		{@render footerChildren?.()}
	</div>
{/snippet}

<div
	class={cleanClass(
		cardStyles({
			defaultStyle: variant === undefined,
			outlineColor: variant === 'outline' || variant === 'filled' ? color : undefined,
		}),
		className,
	)}
	{...restProps}
>
	{#if headerChildren}
		{@render header()}
	{/if}

	{#if bodyChildren && expanded}
		{@render body()}
	{/if}

	{#if footerChildren}
		{@render footer()}
	{/if}

	{@render children()}
</div>
