<script lang="ts" module>
	import { type SelectItem, type Variants } from '@immich/ui';
	export type DropdownItem = SelectItem & {
		icon?: string;
	};

	type T = DropdownItem;
</script>

<script lang="ts" generics="T extends DropdownItem">
	import { Button, type SelectProps } from '@immich/ui';
	import { mdiCheck } from '@mdi/js';
	import { Popover } from 'bits-ui';
	import { fly } from 'svelte/transition';
	import Icon from '../Icon/Icon.svelte';
	import type { Snippet } from 'svelte';
	import Text from '../Text/Text.svelte';

	type Props = SelectProps<T> & {
		fullWidth?: boolean;
		position?: 'bottom-left' | 'bottom-right';
		variant?: Variants;
		trigger?: Snippet<[{ props: Record<string, unknown>; selectedIcon?: string | undefined }]>;
		hideTextOnSmallScreen?: boolean;
	};

	let {
		data,
		class: className,
		color = 'primary',
		size = 'small',
		onChange,
		placeholder,
		shape,
		hideTextOnSmallScreen = true,
		value = $bindable(),
		fullWidth,
		variant,
		position = 'bottom-right',
		trigger,
	}: Props = $props();

	const handleSelectOption = (option: T) => {
		onChange?.(option);
		value = option;
		showDropdown = false;
	};

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

	let showDropdown = $state(false);
</script>

<!-- BUTTON TITLE -->
<Popover.Root bind:open={showDropdown}>
	<Popover.Trigger>
		{#snippet child({ props })}
			{#if trigger}
				{@render trigger({ props, selectedIcon: value?.icon })}
			{:else}
				<Button {...props} {fullWidth} title={placeholder} {color} {shape} {variant} {size}>
					{#if value?.icon}
						<Icon icon={value.icon} />
					{/if}

					<Text class={hideTextOnSmallScreen ? 'hidden sm:block' : ''}>
						{#if !value}
							{placeholder}
						{:else}
							{value?.label}
						{/if}
					</Text>
				</Button>
			{/if}
		{/snippet}
	</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content align={position === 'bottom-left' ? 'start' : 'end'} forceMount>
			{#snippet child({ props, wrapperProps, open })}
				<!-- DROP DOWN MENU -->
				{#if open}
					<div {...wrapperProps}>
						<div
							{...props}
							class={[
								'flex max-h-[50vh] min-w-[250px] flex-col overflow-y-auto rounded-2xl bg-gray-100 py-2 text-sm font-medium text-black shadow-lg dark:bg-gray-700 dark:text-white',
								className,
								props.class,
							]}
							transition:fly={{ y: -30, duration: 250 }}
						>
							{#each options as option (option.value)}
								{@const buttonStyle = option.disabled
									? ''
									: 'transition-all hover:bg-gray-300 dark:hover:bg-gray-800'}
								<button
									type="button"
									class="grid grid-cols-[36px_1fr] place-items-center p-2 disabled:opacity-40 {buttonStyle}"
									disabled={option.disabled}
									onclick={() => !option.disabled && handleSelectOption(option)}
								>
									{#if value?.value === option.value}
										<div class="text-primary">
											<Icon icon={mdiCheck} />
										</div>
										<p class="text-primary justify-self-start">
											{option.label}
										</p>
									{:else}
										<div></div>
										<p class="justify-self-start">
											{option.label}
										</p>
									{/if}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			{/snippet}
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
