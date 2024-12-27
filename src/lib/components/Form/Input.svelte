<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import type { InputProps } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import { tv } from 'tailwind-variants';

	let {
		containerRef = $bindable(null),
		shape = 'semi-round',
		size = 'medium',
		class: className,
		value = $bindable<string>(),
		trailingIcon,
		...restProps
	}: InputProps = $props();

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
		base: 'w-full outline-none disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-200 dark:disabled:bg-gray-800 aria-readonly:text-dark/50 dark:aria-readonly:text-dark/75',
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

<div class="flex flex-col gap-1" bind:this={containerRef}>
	{#if label}
		<label id={labelId} for={inputId} class={labelStyles({ size })}>{label}</label>
	{/if}

	<div class="relative">
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
				trailingIcon && '!pr-10',
				className,
			)}
			bind:value
			{...restProps}
		/>
		{#if trailingIcon}
			<div tabindex="-1" class={cleanClass('absolute inset-y-0 end-0 flex items-center')}>
				{@render trailingIcon()}
			</div>
		{/if}
	</div>
</div>

<style>
	input::-ms-reveal {
		display: none;
	}
</style>
