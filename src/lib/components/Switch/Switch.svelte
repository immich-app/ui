<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Label from '$lib/components/Label/Label.svelte';
	import type { Color } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = {
		checked?: boolean;
		color?: Color;
		disabled?: boolean;
		class?: string;
		onToggle?: ((checked: boolean) => void) | undefined;
		inputSize?: HTMLInputAttributes['size'];
	} & Omit<HTMLInputAttributes, 'size'>;

	let {
		checked = $bindable(false),
		class: className,
		color = 'primary',
		onToggle = undefined,
		inputSize,
		...restProps
	}: Props = $props();

	const { readOnly, required, disabled, label, ...labelProps } = $derived(getFieldContext());

	const enabled = $derived(checked && !disabled);

	const handleToggle = () => {
		checked = !checked;
		onToggle?.(checked);
	};

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
				primary: 'bg-primary/60',
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
				primary: 'bg-primary',
				secondary: 'bg-dark',
				success: 'bg-success',
				danger: 'bg-danger',
				warning: 'bg-warning',
				info: 'bg-info',
			},
		},
	});

	const id = generateId();
	const inputId = `input-${id}`;
	const labelId = `label-${id}`;
</script>

<button class="flex justify-between gap-1" onclick={handleToggle}>
	{#if label}
		<Label id={labelId} for={inputId} {label} {...labelProps} />
	{/if}

	<span class={cleanClass(wrapper({ disabled }), className)}>
		<input
			id={inputId}
			aria-labelledby={label && labelId}
			class="hidden"
			type="checkbox"
			bind:checked
			{required}
			aria-required={required}
			{disabled}
			aria-disabled={disabled}
			readonly={readOnly}
			aria-readonly={readOnly}
			size={inputSize}
			{...restProps}
		/>
		<span class={bar({ fillColor: enabled ? color : 'default' })}> </span>
		<span class={dot({ checked: enabled, fillColor: enabled ? color : 'default' })}></span>
	</span>
</button>
