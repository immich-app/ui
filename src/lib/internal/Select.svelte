<script lang="ts">
	import { getFieldContext } from '$lib/common/context.svelte.js';
	import Field from '$lib/components/Form/Field.svelte';
	import Input from '$lib/components/Form/Input.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import type { SelectCommonProps, SelectItem } from '$lib/types.js';
	import { cleanClass, generateId } from '$lib/utils.js';
	import { mdiArrowDown, mdiArrowUp, mdiCheck, mdiUnfoldMoreHorizontal } from '@mdi/js';
	import { Select } from 'bits-ui';
	import { tv } from 'tailwind-variants';

	type T = SelectItem;

	type Props = {
		multiple?: boolean;
		values?: T[];
		asLabel?: (items: T[]) => string;
		onChange?: (values: T[]) => void;
	} & SelectCommonProps<T>;

	let {
		data,
		shape,
		color = 'primary',
		size = 'medium',
		multiple = false,
		values = $bindable([]),
		onChange,
		asLabel = (options: T[]) => options.map(({ label }) => label).join(', '),
		placeholder,
		class: className,
	}: Props = $props();

	const asOptions = (items: string[] | T[]) => {
		return items.map((item) => {
			if (typeof item === 'string') {
				return { value: item, label: item } as T;
			}

			const label = item.label ?? item.value;
			return { ...item, label };
		});
	};

	const options = $derived(asOptions(data));

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

	const id = generateId();
	const inputId = `input-${id}`;
	const labelId = `label-${id}`;

	const selectedLabel = $derived(asLabel(values));

	let inputRef = $state<HTMLElement | null>(null);
	let contentRef = $state<HTMLElement | null>(null);
	let ref = $state<HTMLElement | null>(null);

	$effect(() => {
		if (ref && contentRef) {
			contentRef.style.width = `${ref.clientWidth}px`;
		}
	});

	const findOption = (value: string) => options.find((option) => option.value === value);

	const onValueChange = (items: string[] | string) => {
		values = multiple
			? ((items as string[]).map(findOption) as T[])
			: [findOption(items as string) as T].filter(Boolean);

		onChange?.(values);
	};
</script>

<div class={cleanClass('flex flex-col gap-1', className)} bind:this={ref}>
	{#if label}
		<label id={labelId} for={inputId} class={labelStyles({ size })}>{label}</label>
	{/if}

	<Select.Root type={multiple ? 'multiple' : 'single'} {onValueChange}>
		<Select.Trigger
			{disabled}
			class="w-full items-center gap-1 rounded-lg focus-visible:outline-none"
			aria-label={placeholder}
		>
			<Field {readOnly} {required} {disabled} {invalid}>
				<Input
					bind:containerRef={inputRef}
					id={inputId}
					{size}
					{shape}
					{color}
					{placeholder}
					value={selectedLabel}
					readonly
					aria-labelledby={labelId}
					aria-readonly
				>
					{#snippet trailingIcon()}
						<IconButton
							variant="ghost"
							shape="round"
							color="secondary"
							class="m-1"
							icon={mdiUnfoldMoreHorizontal}
							{disabled}
						/>
					{/snippet}
				</Input>
			</Field>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content
				bind:ref={contentRef}
				class="max-h-96 select-none rounded-xl border bg-light py-3 text-dark outline-none"
				sideOffset={10}
			>
				<Select.ScrollUpButton class="flex w-full items-center justify-center">
					<Icon icon={mdiArrowUp} />
				</Select.ScrollUpButton>
				<Select.Viewport>
					{#each options as { value, label, disabled }, i (i + value)}
						<Select.Item
							class={cleanClass(
								'flex h-10 w-full select-none items-center px-5 py-3 text-sm outline-none duration-75 hover:bg-subtle data-[selected]:bg-primary/10 data-[disabled]:opacity-50',
								disabled ? 'cursor-not-allowed' : 'cursor-pointer',
							)}
							{value}
							{label}
							{disabled}
						>
							{#snippet children({ selected })}
								<div
									class="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors"
								>
									<span>{label}</span>
								</div>
								{#if selected}
									<div class="ml-auto">
										<Icon icon={mdiCheck} />
									</div>
								{/if}
							{/snippet}
						</Select.Item>
					{/each}
				</Select.Viewport>
				<Select.ScrollDownButton class="flex w-full items-center justify-center">
					<Icon icon={mdiArrowDown} />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
</div>
