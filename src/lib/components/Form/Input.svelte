<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Label from '$lib/components/Label/Label.svelte';
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

	const { label, readOnly, required, invalid, disabled, ...labelProps } =
		$derived(getFieldContext());

	const inputStyles = tv({
		base: 'w-full bg-gray-200 outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-200 aria-readonly:text-dark/50 dark:bg-gray-600 dark:disabled:bg-gray-800 dark:aria-readonly:text-dark/75',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': '',
				round: 'rounded-full',
			},
			padding: {
				base: 'px-4 py-3',
				round: 'px-5 py-3',
			},
			roundedSize: {
				tiny: 'rounded-xl',
				small: 'rounded-xl',
				medium: 'rounded-2xl',
				large: 'rounded-2xl',
				giant: 'rounded-2xl',
			},
			// match with Button `iconSize` variants
			paddingRight: {
				tiny: 'pr-6',
				small: 'pr-8',
				medium: 'pr-10',
				large: 'pr-12',
				giant: 'pr-14',
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

<div class="flex w-full flex-col gap-1" bind:this={containerRef}>
	{#if label}
		<Label id={labelId} for={inputId} {label} {...labelProps} />
	{/if}

	<div class="relative mt-1.5 w-full">
		<input
			id={inputId}
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
					paddingRight: trailingIcon ? size : undefined,
					roundedSize: shape === 'semi-round' ? size : undefined,
					invalid,
				}),
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
