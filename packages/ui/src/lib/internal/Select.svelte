<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import { zIndex } from '$lib/constants.js';
  import type { SelectCommonProps, SelectItem } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiArrowDown, mdiArrowUp, mdiCheck, mdiChevronDown } from '@mdi/js';
  import { Select } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  type T = SelectItem;

  type Props = {
    multiple?: boolean;
    values: T[];
    asLabel?: (items: T[]) => string;
    onChange?: (values: T[]) => void;
  } & SelectCommonProps<T>;

  let {
    data,
    shape,
    size: initialSize,
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

  const context = getFieldContext();
  const { invalid, disabled, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');

  const selectedLabel = $derived(asLabel(values));

  const triggerStyles = tv({
    base: 'w-full gap-1 rounded-lg py-0 text-start focus-visible:outline-none',
    variants: {
      invalid: {
        true: 'border-danger border',
        false: '',
      },
    },
  });

  let inputRef = $state<HTMLInputElement | null>(null);
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

  let internalValue = $derived(multiple ? values.map(({ value }) => value) : (values[0]?.value ?? ''));
</script>

<div class={cleanClass('flex flex-col gap-1', className)} bind:this={ref}>
  <Select.Root type={multiple ? 'multiple' : 'single'} bind:value={internalValue as never} {onValueChange}>
    <Select.Trigger {disabled} class={cleanClass(triggerStyles({ invalid: false }))} aria-label={placeholder}>
      <Input
        bind:containerRef={inputRef}
        {size}
        {shape}
        {placeholder}
        value={selectedLabel}
        readonly
        class={cleanClass('text-start', invalid && 'border-danger')}
      >
        {#snippet trailingIcon()}
          <IconButton
            variant="ghost"
            shape="round"
            color="secondary"
            size="tiny"
            class="m-1"
            icon={mdiChevronDown}
            {disabled}
            aria-label="Expand"
          />
        {/snippet}
      </Input>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        bind:ref={contentRef}
        class="text-dark dark:bg-primary-100 bg-light-100 max-h-96 rounded-xl border py-3 outline-none select-none {zIndex.SelectDropdown}"
        customAnchor={inputRef}
        sideOffset={4}
      >
        <Select.ScrollUpButton class="flex w-full items-center justify-center">
          <Icon icon={mdiArrowUp} />
        </Select.ScrollUpButton>
        <Select.Viewport>
          {#each options as { value, label, disabled }, i (i + value)}
            <Select.Item
              class={cleanClass(
                'hover:bg-light-200 hover:dark:bg-primary-200 data-selected:bg-light-200 dark:data-selected:bg-primary-200 flex h-10 w-full items-center px-5 py-3 text-sm duration-75 outline-none select-none data-disabled:opacity-50',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              {value}
              {label}
              {disabled}
            >
              {#snippet children({ selected })}
                <div
                  class="flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors"
                >
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
