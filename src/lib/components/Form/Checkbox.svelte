<script lang="ts">
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { mdiCheck, mdiMinus } from '@mdi/js';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { tv } from 'tailwind-variants';
	import type { Color, Shape, Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';

	type CheckboxProps = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		color?: Color;
		shape?: Shape;
		size?: Size;
	};

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		class: className,
		color = 'primary',
		shape = 'semi-round',
		size = 'small',
		...restProps
	}: CheckboxProps = $props();

	const container = tv({
		base: 'ring-offset-background focus-visible:ring-ring peer box-content border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[state=checked]:bg-primary data-[disabled=true]:opacity-50 overflow-hidden',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': 'rounded-lg',
				round: 'rounded-full',
			},
			color: {
				primary: 'border-primary',
				secondary: 'border-secondary',
				success: 'border-success',
				danger: 'border-danger',
				warning: 'border-warning',
				info: 'border-info',
			},
			size: {
				tiny: 'size-4',
				small: 'size-5',
				medium: 'size-6',
				large: 'size-8',
				giant: 'size-10',
			},
			roundedSize: {
				tiny: 'rounded-md',
				small: 'rounded-md',
				medium: 'rounded-md',
				large: 'rounded-lg',
				giant: 'rounded-xl',
			},
		},
	});

	const icon = tv({
		variants: {
			fullWidth: {
				true: 'w-full',
			},
			color: {
				primary: 'bg-primary text-light hover:bg-primary/80',
				secondary: 'bg-dark text-light hover:bg-dark/80',
				success: 'bg-success text-light hover:bg-success/80',
				danger: 'bg-danger text-light hover:bg-danger/80',
				warning: 'bg-warning text-light hover:bg-warning/80',
				info: 'bg-info text-light hover:bg-info/80',
			},
		},
	});
</script>

<CheckboxPrimitive.Root
	bind:ref
	class={cleanClass(
		container({ size, color, shape, roundedSize: shape === 'semi-round' ? size : undefined }),
		className,
	)}
	bind:checked
	{...restProps}
>
	{#snippet children({ checked })}
		<div class={cleanClass('flex items-center justify-center text-current')}>
			{#if checked === true}
				<Icon icon={mdiCheck} size="100%" class={cleanClass(icon({ color }))} />
			{:else if checked === 'indeterminate'}
				<Icon icon={mdiMinus} size="100%" class={cleanClass(icon({ color }))} />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
