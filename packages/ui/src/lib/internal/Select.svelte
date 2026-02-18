<script lang="ts" generics="T extends string">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { zIndex } from '$lib/constants.js';
  import { styleVariants } from '$lib/styles.js';
  import type { SelectCommonProps, SelectOption } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { mdiArrowDown, mdiArrowUp, mdiCheck, mdiChevronDown } from '@mdi/js';
  import { Select } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  type Props = {
    multiple?: boolean;
    values: T[];
    asLabel?: (items: SelectOption<T>[]) => string;
    onChange?: (values: T[]) => void;
    onSelect?: (items: SelectOption<T>[]) => void;
  } & SelectCommonProps<T>;

  let {
    options: optionsOrItems,
    shape = 'semi-round',
    size: initialSize,
    multiple = false,
    values = $bindable([]),
    onChange,
    onSelect: onItemChange,
    asLabel = (options: SelectOption<T>[]) => options.map(({ label }) => label).join(', '),
    placeholder,
    class: className,
  }: Props = $props();

  const asOptions = (items: string[] | SelectOption<T>[]) => {
    return items.map((item) => {
      if (typeof item === 'string') {
        return { value: item, label: item } as SelectOption<T>;
      }

      const label = item.label ?? item.value;
      return { ...item, label };
    });
  };

  const context = getFieldContext();
  const { label, description, required, invalid, disabled, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');
  const roundedSize = $derived(shape === 'semi-round' ? size : undefined);
  const options = $derived(asOptions(optionsOrItems));

  const findOption = (value: string) => options.find((option) => option.value === value);
  const valuesToOptions = (values: T[]) =>
    values.map(findOption).filter((item): item is SelectOption<T> => Boolean(item));

  let open = $state(false);
  let triggerRef = $state<HTMLButtonElement | null>(null);
  let internalValue = $derived(multiple ? values : (values[0] ?? ''));
  const selectedLabel = $derived(asLabel(valuesToOptions(values)));

  const id = generateId();
  const triggerId = `trigger-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);

  const triggerStyles = tv({
    base: 'w-full gap-1 p-0 text-start ring-1 ring-gray-200 outline-none focus-visible:outline-none dark:ring-neutral-900',
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
      shape: styleVariants.shape,
      roundedSize: styleVariants.inputRoundedSize,
      invalid: {
        true: 'ring-danger-300 dark:ring-danger-300 focus-visible:ring-danger dark:focus-visible:ring-danger',
        false: 'focus-visible:ring-primary dark:focus-visible:ring-primary',
      },
    },
  });

  const containerStyles = tv({
    base: 'flex w-full items-center bg-gray-100 dark:bg-gray-800',
    variants: {
      shape: styleVariants.shape,
      roundedSize: styleVariants.inputRoundedSize,
      disabled: {
        true: 'bg-light-300 dark:bg-gray-900',
        false: '',
      },
    },
  });

  const valueStyles = tv({
    base: 'block w-full min-w-0 flex-1 truncate py-2.5 text-start',
    variants: {
      textSize: styleVariants.textSize,
      height: {
        tiny: 'h-9',
        small: 'h-10',
        medium: 'h-11',
        large: 'h-12',
        giant: 'h-12',
      },
      leadingPadding: {
        base: 'pl-4',
        icon: 'pl-0',
      },
      trailingPadding: {
        base: 'pr-4',
        icon: 'pr-0',
      },
      roundedSize: styleVariants.inputRoundedSize,
    },
  });

  const contentStyles = tv({
    base: cleanClass(
      'text-dark dark:bg-primary-100 bg-light-100 max-h-96 w-(--bits-select-anchor-width) min-w-(--bits-select-anchor-width) border py-3 outline-none select-none',
      zIndex.SelectDropdown,
    ),
    variants: {
      shape: {
        rectangle: 'rounded-none',
        'semi-round': '',
        round: 'rounded-2xl',
      },
      roundedSize: styleVariants.inputRoundedSize,
    },
  });

  const itemStyles = tv({
    base: 'hover:bg-light-200 hover:dark:bg-primary-200 data-highlighted:bg-light-200 dark:data-highlighted:bg-primary-200 flex w-full items-center duration-75 outline-none select-none data-disabled:opacity-50',
    variants: {
      size: {
        tiny: 'h-9 px-4 text-xs',
        small: 'h-10 px-5 text-sm',
        medium: 'h-11 px-5 text-base',
        large: 'h-12 px-5 text-lg',
        giant: 'h-12 px-6 text-xl',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
  });

  const onValueChange = (newValues: string[] | string) => {
    values = (Array.isArray(newValues) ? newValues : [newValues]) as T[];
    const items = values
      .map((value) => findOption(value))
      .filter((item): item is SelectOption<T> => item !== undefined);

    onChange?.(values);
    onItemChange?.(items);
  };
</script>

<div class={cleanClass('flex w-full flex-col gap-1', className)}>
  {#if label}
    <Label
      {...labelProps}
      {label}
      {size}
      requiredIndicator={required === 'indicator'}
      for={triggerId}
      onclick={() => {
        if (disabled) {
          return;
        }
        open = true;
        triggerRef?.focus();
      }}
    />
  {/if}

  {#if description}
    <Text color="muted" size="small" id={descriptionId} class="mb-2">{description}</Text>
  {/if}

  <Select.Root
    type={multiple ? 'multiple' : 'single'}
    bind:value={internalValue as never}
    bind:open
    items={options.map(({ value, label, disabled }) => ({ value, label: label ?? value, disabled }))}
    {onValueChange}
  >
    <Select.Trigger
      bind:ref={triggerRef}
      {disabled}
      id={triggerId}
      class={triggerStyles({
        disabled,
        invalid,
        shape,
        roundedSize,
      })}
      aria-describedby={descriptionId}
      aria-label={label ? undefined : placeholder}
    >
      <div
        class={containerStyles({
          disabled,
          shape,
          roundedSize,
        })}
      >
        <span
          class={cleanClass(
            valueStyles({
              textSize: size,
              height: size,
              leadingPadding: 'base',
              trailingPadding: 'icon',
              roundedSize,
            }),
            !selectedLabel && placeholder && 'text-gray-600 dark:text-gray-400',
          )}
        >
          {selectedLabel || placeholder}
        </span>

        <Icon icon={mdiChevronDown} class={cleanClass('mx-3 shrink-0')} aria-hidden />
      </div>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content class={contentStyles({ shape, roundedSize })} sideOffset={4}>
        <Select.ScrollUpButton class="flex w-full items-center justify-center">
          <Icon icon={mdiArrowUp} />
        </Select.ScrollUpButton>
        <Select.Viewport>
          {#each options as { value, label, disabled }, i (i + value)}
            <Select.Item class={cleanClass(itemStyles({ size, disabled }))} {value} {label} {disabled}>
              {#snippet children({ selected })}
                <div class="flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors">
                  <span>{label}</span>
                </div>
                {#if selected}
                  <div class="ms-auto">
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
