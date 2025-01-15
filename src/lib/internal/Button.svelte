<script lang="ts">
	import LoadingSpinner from '$lib/components/LoadingSpinner/LoadingSpinner.svelte';
	import type { ButtonProps, Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { tv } from 'tailwind-variants';

	type InternalButtonProps = ButtonProps & {
		/** when true, button width to height ratio is 1:1 */
		icon?: boolean;
	};

	const {
		type = 'button',
		href,
		variant = 'filled',
		color = 'primary',
		shape = 'semi-round',
		size = 'medium',
		loading = false,
		fullWidth = false,
		icon = false,
		class: className = '',
		children,
		...restProps
	}: InternalButtonProps = $props();

	const disabled = $derived((restProps as HTMLButtonAttributes).disabled || loading);

	const buttonVariants = tv({
		base: 'ring-offset-background focus-visible:ring-ring flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': 'rounded-xl',
				round: 'rounded-full',
			},
			fullWidth: {
				true: 'w-full',
			},
			textPadding: {
				tiny: 'px-3 py-1',
				small: 'px-4 py-1.5',
				medium: 'px-5 py-2',
				large: 'px-8 py-2.5',
				giant: 'px-10 py-3',
			},
			textSize: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},
			iconSize: {
				tiny: 'h-4 w-4 text-xs',
				small: 'h-6 w-6 text-sm',
				medium: 'text-md h-8 w-8',
				large: 'h-10 w-10 text-lg',
				giant: 'h-12 w-12 text-lg',
			},
			roundedSize: {
				tiny: 'rounded-lg',
				small: 'rounded-lg',
				medium: 'rounded-xl',
				large: 'rounded-xl',
				giant: 'rounded-2xl',
			},
			filledColor: {
				primary: 'bg-primary text-light hover:bg-primary/80',
				secondary: 'bg-dark text-light hover:bg-dark/80',
				success: 'bg-success text-light hover:bg-success/80',
				danger: 'bg-danger text-light hover:bg-danger/80',
				warning: 'bg-warning text-light hover:bg-warning/80',
				info: 'bg-info text-light hover:bg-info/80',
			},
			outlineColor: {
				primary: 'border border-primary bg-primary/10 text-primary hover:bg-primary/20',
				secondary: 'border border-dark bg-dark/10 text-dark hover:bg-dark/20',
				success: 'border border-success bg-success/10 text-success hover:bg-success/20',
				danger: 'border border-danger bg-danger/10 text-danger hover:bg-danger/20',
				warning: 'border border-warning bg-warning/10 text-warning hover:bg-warning/20',
				info: 'border border-info bg-info/10 text-info hover:bg-info/20',
			},
			ghostColor: {
				primary: 'text-primary hover:bg-primary/10',
				secondary: 'text-dark hover:bg-dark/10',
				success: 'text-success hover:bg-success/10',
				danger: 'text-danger hover:bg-danger/10',
				warning: 'text-warning hover:bg-warning/10',
				info: 'text-info hover:bg-info/10',
			},
		},
	});

	const spinnerSizes: Record<Size, Size> = {
		tiny: 'tiny',
		small: 'tiny',
		medium: 'small',
		large: 'medium',
		giant: 'large',
	};

	const classList = $derived(
		cleanClass(
			twMerge(
				buttonVariants({
					shape,
					fullWidth,
					textPadding: icon ? undefined : size,
					textSize: size,
					iconSize: icon ? size : undefined,
					roundedSize: shape === 'semi-round' ? size : undefined,
					filledColor: variant === 'filled' ? color : undefined,
					outlineColor: variant === 'outline' ? color : undefined,
					ghostColor: variant === 'ghost' ? color : undefined,
				}),
				className,
			),
		),
	);
</script>

{#if href}
	<a {href} class={classList} {...restProps as HTMLAnchorAttributes}>
		{@render children?.()}
	</a>
{:else}
	<ButtonPrimitive.Root
		class={classList}
		type={type as HTMLButtonAttributes['type']}
		{...restProps as HTMLButtonAttributes}
		{disabled}
		aria-disabled={disabled}
	>
		{#if loading}
			<div class="flex items-center justify-center gap-2">
				<LoadingSpinner {color} size={spinnerSizes[size]} />
				{@render children?.()}
			</div>
		{:else}
			{@render children?.()}
		{/if}
	</ButtonPrimitive.Root>
{/if}
