<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
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

	let {
		ref = $bindable(),
		type = 'button',
		href,
		variant = 'filled',
		color = 'primary',
		shape = 'semi-round',
		size = 'medium',
		loading = false,
		fullWidth = false,
		leadingIcon,
		trailingIcon,
		icon = false,
		class: className = '',
		children,
		...restProps
	}: InternalButtonProps = $props();

	const disabled = $derived((restProps as HTMLButtonAttributes).disabled || loading);

	const buttonVariants = tv({
		base: 'ring-offset-background focus-visible:ring-ring flex items-center justify-center gap-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
		variants: {
			disabled: {
				true: 'disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50',
				false: 'cursor-pointer',
			},
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
				small: 'px-4 py-2',
				medium: 'px-5 py-2',
				large: 'px-8 py-2.5',
				giant: 'px-10 py-3',
			},
			textSize: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-base',
				large: 'text-lg',
				giant: 'text-xl',
			},
			iconSize: {
				tiny: 'h-6 w-6',
				small: 'h-8 w-8',
				medium: 'h-10 w-10',
				large: 'h-12 w-12',
				giant: 'h-14 w-14',
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
				primary: 'border-primary bg-primary/10 text-primary hover:bg-primary/20 border',
				secondary: 'border-dark bg-dark/10 text-dark hover:bg-dark/20 border',
				success: 'border-success bg-success/10 text-success hover:bg-success/20 border',
				danger: 'border-danger bg-danger/10 text-danger hover:bg-danger/20 border',
				warning: 'border-warning bg-warning/10 text-warning hover:bg-warning/20 border',
				info: 'border-info bg-info/10 text-info hover:bg-info/20 border',
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
					disabled,
					roundedSize: shape === 'semi-round' ? size : undefined,
					filledColor: variant === 'filled' ? color : undefined,
					outlineColor: variant === 'outline' ? color : undefined,
					ghostColor: variant === 'ghost' ? color : undefined,
				}),
				className,
			),
		),
	);

	const iconSizes = {
		tiny: 'h-4 w-4',
		small: 'h-4 w-4',
		medium: 'h-4 w-4',
		large: 'h-6 w-6',
		giant: 'h-8 w-8',
	};
</script>

{#snippet content()}
	{#if leadingIcon && !loading}
		<div>
			<Icon size="100%" class={iconSizes[size]} icon={leadingIcon} aria-hidden />
		</div>
	{/if}
	{@render children?.()}
	{#if trailingIcon}
		<Icon size="100%" class={iconSizes[size]} icon={trailingIcon} aria-hidden />
	{/if}
{/snippet}

{#if href}
	<a
		bind:this={ref}
		{href}
		class={classList}
		aria-disabled={disabled}
		{...restProps as HTMLAnchorAttributes}
	>
		{#if loading}
			<div class="flex items-center justify-center gap-2">
				<LoadingSpinner {color} size={spinnerSizes[size]} />
				{@render content()}
			</div>
		{:else}
			{@render content()}
		{/if}
	</a>
{:else}
	<ButtonPrimitive.Root
		bind:ref
		class={classList}
		type={type as HTMLButtonAttributes['type']}
		{...restProps as HTMLButtonAttributes}
		{disabled}
		aria-disabled={disabled}
	>
		{#if loading}
			<div class="flex items-center justify-center gap-2">
				<LoadingSpinner {color} size={spinnerSizes[size]} />
				{@render content()}
			</div>
		{:else}
			{@render content()}
		{/if}
	</ButtonPrimitive.Root>
{/if}
