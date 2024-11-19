<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import type { Shape, Size } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = {
		class?: string;
		value?: string;
		size?: Size;
		shape?: Shape;
		inputSize?: HTMLInputAttributes['size'];
	} & Omit<HTMLInputAttributes, 'size'>;

	let {
		shape = 'semi-round',
		size = 'medium',
		class: className,
		value = $bindable<string>(),
		...restProps
	}: Props = $props();

	const {
		label,
		readOnly = false,
		required = false,
		invalid = false,
		disabled = false,
	} = $derived(getFieldContext());

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

	const inputStyles = tv({
		base: 'outline-none disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-200 dark:disabled:bg-gray-800 aria-readonly:text-dark/50 dark:aria-readonly:text-dark/75',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': '',
				round: 'rounded-full',
			},
			padding: {
				base: 'px-3 py-2',
				round: 'px-4 py-2',
			},
			roundedSize: {
				tiny: 'rounded-xl',
				small: 'rounded-xl',
				medium: 'rounded-2xl',
				large: 'rounded-2xl',
				giant: 'rounded-2xl',
			},
			textSize: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},
			invalid: {
				true: 'border border-danger/80',
				false: '',
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
	<input
		id={label && inputId}
		aria-labelledby={label && labelId}
		{required}
		aria-required={required}
		{disabled}
		aria-disabled={disabled}
		readonly={readOnly}
		aria-readonly={readOnly}
		class={cleanClass(
			inputStyles({
				shape,
				textSize: size,
				padding: shape === 'round' ? 'round' : 'base',
				roundedSize: shape === 'semi-round' ? size : undefined,
				invalid,
			}),
			className,
		)}
		bind:value
		{...restProps}
	/>
</div>
