<script lang="ts">
	import type { InternalButtonProps } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

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
				tiny: 'px-2 py-1',
				small: 'px-2 py-1',
				medium: 'px-4 py-2',
				large: 'px-4 py-2',
				giant: 'px-8 py-4',
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
				medium: 'h-8 w-8 text-md',
				large: 'h-10 w-10 text-lg',
				giant: 'h-12 w-12 text-lg',
			},
			roundedSize: {
				tiny: 'rounded-md',
				small: 'rounded-md',
				medium: 'rounded-lg',
				large: 'rounded-lg',
				giant: 'rounded-lg',
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
				primary: 'bg-primary/10 text-primary border border-primary hover:bg-primary/20',
				secondary: 'bg-dark/10 text-dark border border-dark hover:bg-dark/20',
				success: 'bg-success/10 text-success border border-success hover:bg-success/20',
				danger: 'bg-danger/10 text-danger border border-danger hover:bg-danger/20',
				warning: 'bg-warning/10 text-warning border border-warning hover:bg-warning/20',
				info: 'bg-info/10 text-info border border-info hover:bg-info/20',
			},
			heroColor: {
				primary: 'bg-gradient-to-tr from-primary to-primary/60 text-light hover:bg-primary',
				secondary: 'bg-gradient-to-tr from-dark to-dark/60 text-light hover:bg-dark',
				success: 'bg-gradient-to-tr from-success to-success/60 text-light hover:bg-success',
				danger: 'bg-gradient-to-tr from-danger to-danger/60 text-light hover:bg-danger',
				warning: 'bg-gradient-to-tr from-warning to-warning/60 text-light hover:bg-warning',
				info: 'bg-gradient-to-tr from-info to-info/60 text-light hover:bg-info',
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

	const {
		type = 'button',
		href,
		variant = 'filled',
		color = 'primary',
		shape = 'semi-round',
		size = 'medium',
		fullWidth = false,
		icon = false,
		class: className = '',
		children,
		...restProps
	}: InternalButtonProps = $props();

	const classList = $derived(
		cleanClass(
			buttonVariants({
				shape,
				fullWidth,
				textPadding: icon ? undefined : size,
				textSize: size,
				iconSize: icon ? size : undefined,
				roundedSize: shape === 'semi-round' ? size : undefined,
				filledColor: variant === 'filled' ? color : undefined,
				outlineColor: variant === 'outline' ? color : undefined,
				heroColor: variant === 'hero' ? color : undefined,
				ghostColor: variant === 'ghost' ? color : undefined,
			}),
			className,
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
	>
		{@render children?.()}
	</ButtonPrimitive.Root>
{/if}
