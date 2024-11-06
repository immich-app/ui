<script lang="ts">
	import type { Color, Shape, Size } from '$lib/types.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { Button as ButtonPrimitive } from 'bits-ui';

	type ButtonVariant = 'filled' | 'outline' | 'ghost' | 'hero';
	type ButtonProps = {
		class?: string;
		color?: Color;
		size?: Size;
		shape?: Shape;
		variant?: ButtonVariant;
		fullWidth?: boolean;
	} & (({ href?: never } & HTMLButtonAttributes) | ({ href: string } & HTMLAnchorAttributes));

	const asOverride = (variant: ButtonVariant, colors: Record<Color, string>) =>
		(Object.keys(colors) as Color[]).map((color) => ({ variant, color, class: colors[color] }));

	const colorPlaceholder = {
		primary: '',
		secondary: '',
		success: '',
		danger: '',
		warning: '',
		info: '',
	};

	const variantPlaceholder = {
		outline: '',
		filled: '',
		ghost: '',
		hero: '',
	};

	const buttonVariants = tv({
		base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': 'rounded-lg',
				round: 'rounded-full',
			},
			size: {
				tiny: 'px-2 py-1 text-xs',
				small: 'px-2 py-1 text-sm',
				medium: 'px-4 py-2 text-md',
				large: 'px-4 py-2 text-lg',
				giant: 'px-8 py-4 text-xl',
			},
			fullWidth: {
				true: 'w-full',
			},
			color: colorPlaceholder,
			variant: variantPlaceholder,
		},
		compoundVariants: [
			...asOverride('filled', {
				primary: 'bg-primary text-light hover:bg-primary/80',
				secondary: 'bg-dark text-light hover:bg-dark/80',
				success: 'bg-success text-light hover:bg-success/80',
				danger: 'bg-danger text-light hover:bg-danger/80',
				warning: 'bg-warning text-light hover:bg-warning/80',
				info: 'bg-info text-light hover:bg-info/80',
			}),

			...asOverride('outline', {
				primary: 'bg-primary/10 text-primary border border-primary hover:bg-primary/20',
				secondary: 'bg-dark/10 text-dark border border-dark hover:bg-dark/20',
				success: 'bg-success/10 text-success border border-success hover:bg-success/20',
				danger: 'bg-danger/10 text-danger border border-danger hover:bg-danger/20',
				warning: 'bg-warning/10 text-warning border border-warning hover:bg-warning/20',
				info: 'bg-info/10 text-info border border-info hover:bg-info/20',
			}),

			...asOverride('ghost', {
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			}),

			...asOverride('hero', {
				primary: 'bg-gradient-to-tr from-primary to-primary/60 text-light',
				secondary: 'bg-gradient-to-tr from-dark to-dark/60 text-light',
				success: 'bg-gradient-to-tr from-success to-success/60 text-light',
				danger: 'bg-gradient-to-tr from-danger to-danger/60 text-light',
				warning: 'bg-gradient-to-tr from-warning to-warning/60 text-light',
				info: 'bg-gradient-to-tr from-info to-info/60 text-light',
			}),
		],
	});

	const {
		type,
		href,
		variant = 'filled',
		color = 'primary',
		shape = 'semi-round',
		size = 'medium',
		fullWidth = false,
		class: className = '',
		children,
		...restProps
	}: ButtonProps = $props();

	const classList = $derived(
		[buttonVariants({ variant, color, shape, size, fullWidth }), className].join(' '),
	);
</script>

{#if href}
	<a {href} class={classList} {...restProps as HTMLAnchorAttributes}>
		{@render children?.()}
	</a>
{:else}
	<ButtonPrimitive.Root class={classList} {...restProps as HTMLButtonAttributes}>
		{@render children?.()}
	</ButtonPrimitive.Root>
{/if}
