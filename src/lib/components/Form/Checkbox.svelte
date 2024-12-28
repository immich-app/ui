<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { Color, Shape, Size } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import { mdiCheck, mdiMinus } from '@mdi/js';
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { tv } from 'tailwind-variants';

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

	const {
		label,
		readOnly = false,
		required = false,
		invalid = false,
		disabled = false,
	} = $derived(getFieldContext());

	const containerStyles = tv({
		base: 'border-2 ring-offset-background focus-visible:ring-ring peer box-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[state=checked]:bg-primary data-[disabled=true]:opacity-50 overflow-hidden',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': 'rounded-lg',
				round: 'rounded-full',
			},
			color: {
				primary: 'border-primary',
				secondary: 'border-dark',
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

	const iconStyles = tv({
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

	const labelStyles = tv({
		base: '',
		variants: {
			size: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},
		},
	});

	const id = generateId();
	const inputId = `input-${id}`;
	const labelId = `label-${id}`;
</script>

<div class="flex flex-col gap-1">
	{#if label}
		<label id={labelId} for={inputId} class={labelStyles({ size })}>{label}</label>
	{/if}

	<CheckboxPrimitive.Root
		bind:ref
		class={cleanClass(
			containerStyles({
				size,
				color: invalid ? 'danger' : color,
				shape,
				roundedSize: shape === 'semi-round' ? size : undefined,
			}),
			className,
		)}
		bind:checked
		disabled={disabled || readOnly}
		{required}
		aria-readonly={disabled || readOnly}
		{...restProps}
	>
		{#snippet children({ checked, indeterminate })}
			<div class={cleanClass('flex items-center justify-center text-current')}>
				{#if indeterminate}
					<Icon icon={mdiMinus} size="100%" class={cleanClass(iconStyles({ color }))} />
				{:else if checked}
					<Icon icon={mdiCheck} size="100%" class={cleanClass(iconStyles({ color }))} />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
</div>
