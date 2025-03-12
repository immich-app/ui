<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Label from '$lib/components/Label/Label.svelte';
	import type { Color } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import { Switch, type WithoutChildrenOrChild } from 'bits-ui';
	import { tv } from 'tailwind-variants';

	type Props = {
		checked?: boolean;
		color?: Color;
		disabled?: boolean;
		class?: string;
	} & WithoutChildrenOrChild<Switch.RootProps>;

	let {
		id = generateId(),
		checked = $bindable(false),
		ref = $bindable(null),
		color = 'primary',
		class: className,
		...restProps
	}: Props = $props();

	const { readOnly, required, disabled, label, ...labelProps } = $derived(getFieldContext());

	const enabled = $derived(checked && !disabled);

	const wrapper = tv({
		base: 'relative flex flex-col justify-center',
		variants: {
			disabled: {
				true: 'cursor-not-allowed',
				false: 'cursor-pointer',
			},
		},
	});

	const bar = tv({
		base: 'my-2 h-3 w-12 rounded-full border border-transparent',
		variants: {
			fillColor: {
				default: 'bg-gray-300 dark:bg-gray-400',
				primary: 'bg-primary/50 dark:bg-primary',
				secondary: 'bg-dark/50',
				success: 'bg-success/50',
				danger: 'bg-danger/50',
				warning: 'bg-warning/50',
				info: 'bg-info/50',
			},
		},
	});

	const dot = tv({
		base: 'absolute h-6 w-6 rounded-full transition-transform duration-[400ms]',
		variants: {
			checked: {
				true: 'translate-x-6 border border-gray-500/10 shadow-sm dark:border-gray-800/50',
				false: '',
			},
			fillColor: {
				default: 'bg-gray-400 dark:bg-gray-500',
				primary: 'bg-[#4250af]',
				secondary: 'bg-dark',
				success: 'bg-success',
				danger: 'bg-danger',
				warning: 'bg-warning',
				info: 'bg-info',
			},
		},
	});

	const inputId = `input-${id}`;
	const labelId = `label-${id}`;
</script>

<Switch.Root
	bind:checked
	bind:ref
	id={inputId}
	{disabled}
	{required}
	class={cleanClass(label && 'w-full', className)}
	aria-readonly={readOnly}
	aria-labelledby={labelId}
	{...restProps}
>
	<Switch.Thumb>
		{#snippet child()}
			<div class={cleanClass(label && 'flex items-center justify-between gap-1')}>
				{#if label}
					<Label id={labelId} for={inputId} {label} {...labelProps} />
				{/if}
				<span class={wrapper({ disabled })}>
					<span class={bar({ fillColor: enabled ? color : 'default' })}> </span>
					<span class={dot({ checked: enabled, fillColor: enabled ? color : 'default' })}></span>
				</span>
			</div>
		{/snippet}
	</Switch.Thumb>
</Switch.Root>
