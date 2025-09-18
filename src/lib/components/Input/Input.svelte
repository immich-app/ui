<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Label from '$lib/components/Label/Label.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import type { InputProps } from '$lib/types.js';
	import { cleanClass, generateId, isIconLike } from '$lib/utils.js';
	import { tv } from 'tailwind-variants';

	let {
		ref = $bindable(null),
		containerRef = $bindable(null),
		shape = 'semi-round',
		size = 'medium',
		class: className,
		value = $bindable<string>(),
		leadingIcon,
		trailingIcon,
		trailingText,
		inputSize,
		...restProps
	}: InputProps = $props();

	const { label, description, readOnly, required, invalid, disabled, ...labelProps } =
		$derived(getFieldContext());

	const iconStyles = tv({
		base: 'flex flex-shrink-0 items-center justify-center',
		variants: {
			size: {
				tiny: 'w-6',
				small: 'w-8',
				medium: 'w-10',
				large: 'w-12',
				giant: 'w-14',
			},
		},
	});

	const containerStyles = tv({
		base: 'flex w-full items-center bg-gray-200 outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 dark:bg-gray-600 dark:disabled:bg-gray-800 dark:disabled:text-gray-200',
		variants: {
			shape: {
				rectangle: 'rounded-none',
				'semi-round': '',
				round: 'rounded-full',
			},
			roundedSize: {
				tiny: 'rounded-xl',
				small: 'rounded-xl',
				medium: 'rounded-2xl',
				large: 'rounded-2xl',
				giant: 'rounded-2xl',
			},
			invalid: {
				true: 'border-danger/80 border',
				false: '',
			},
		},
	});

	const inputStyles = tv({
		base: 'flex-1 bg-transparent py-3 outline-none disabled:cursor-not-allowed',
		variants: {
			textSize: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-base',
				large: 'text-lg',
				giant: 'text-xl',
			},
			leadingPadding: {
				base: 'pl-4',
				icon: 'pl-0',
			},
			trailingPadding: {
				base: 'pr-4',
				icon: 'pr-0',
			},
		},
	});

	const trailingTextStyles = tv({
		variants: {
			padding: {
				base: 'px-4',
				icon: 'pl-4',
			},
		},
	});

	const id = generateId();
	const inputId = `input-${id}`;
	const labelId = `label-${id}`;
	const descriptionId = $derived(description ? `description-${id}` : undefined);
</script>

<div class="flex w-full flex-col gap-1" bind:this={containerRef}>
	{#if label}
		<Label id={labelId} for={inputId} {label} {...labelProps} />
	{/if}

	{#if description}
		<Text color="secondary" size="small" id={descriptionId}>{description}</Text>
	{/if}

	<div
		class={cleanClass(
			containerStyles({
				shape,
				roundedSize: shape === 'semi-round' ? size : undefined,
				invalid,
			}),
			className,
		)}
	>
		{#if leadingIcon}
			<div tabindex="-1" class={iconStyles({ size })}>
				{#if isIconLike(leadingIcon)}
					<Icon size="60%" icon={leadingIcon} />
				{:else}
					{@render leadingIcon()}
				{/if}
			</div>
		{/if}

		<input
			id={inputId}
			aria-labelledby={label && labelId}
			{required}
			aria-required={required}
			{disabled}
			aria-disabled={disabled}
			aria-describedby={descriptionId}
			readonly={readOnly}
			size={inputSize}
			aria-readonly={readOnly}
			class={inputStyles({
				textSize: size,
				leadingPadding: leadingIcon ? 'icon' : 'base',
				trailingPadding: trailingIcon || trailingText ? 'icon' : 'base',
			})}
			bind:this={ref}
			bind:value
			{...restProps}
		/>
		{#if trailingText}
			<Text
				{size}
				color="muted"
				class={trailingTextStyles({ padding: trailingIcon ? 'icon' : 'base' })}>{trailingText}</Text
			>
		{/if}

		{#if trailingIcon}
			<div tabindex="-1" class={iconStyles({ size })}>
				{#if isIconLike(trailingIcon)}
					<Icon size="60%" icon={trailingIcon} />
				{:else}
					<div>
						{@render trailingIcon()}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	input::-ms-reveal {
		display: none;
	}
</style>
