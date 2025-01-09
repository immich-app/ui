<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import type { Color } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = {
		checked?: boolean;
		color?: Color;
		disabled?: boolean;
		class?: string;
		onToggle?: ((checked: boolean) => void) | undefined;
	} & HTMLInputAttributes;

	let {
		checked = $bindable(false),
		class: className,
		color = 'primary',
		onToggle = undefined,
		...restProps
	}: Props = $props();

	const {
		label,
		readOnly = false,
		required = false,
		disabled = false,
	} = $derived(getFieldContext());

	const enabled = $derived(checked && !disabled);

	const handleToggle = (event: Event) => onToggle?.((event.target as HTMLInputElement).checked);

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
				default: 'bg-gray-400',
				primary: 'bg-primary/50',
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
				true: 'translate-x-6',
				false: '',
			},
			fillColor: {
				default: 'bg-gray-600',
				primary: 'bg-primary',
				secondary: 'bg-dark',
				success: 'bg-success',
				danger: 'bg-danger',
				warning: 'bg-warning',
				info: 'bg-info',
			},
		},
	});
</script>

<label class={cleanClass(className)}>
	{label}
	<span class={wrapper({ disabled })}>
		<input
			class="hidden"
			type="checkbox"
			bind:checked
			onclick={handleToggle}
			{required}
			aria-required={required}
			{disabled}
			aria-disabled={disabled}
			readonly={readOnly}
			aria-readonly={readOnly}
			{...restProps}
		/>
		<span class={bar({ fillColor: enabled ? color : 'default' })}> </span>
		<span class={dot({ checked: enabled, fillColor: enabled ? color : 'default' })}></span>
	</span>
</label>
