<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Field from '$lib/components/Field/Field.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import type { SelectCommonProps, SelectItem } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { mdiArrowDown, mdiArrowUp, mdiCheck, mdiUnfoldMoreHorizontal } from '@mdi/js';
  import { Select } from 'bits-ui';

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

  const { readOnly, required, invalid, disabled, label, ...labelProps } = $derived(getFieldContext());

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

  let internalValue = $derived(multiple ? values.map(({ value }) => value) : (values[0]?.value ?? ''));
</script>

<div class={cleanClass('flex flex-col gap-1', className)} bind:this={ref}>
  {#if label}
    <Label id={labelId} for={inputId} {label} {...labelProps} />
  {/if}

  <Select.Root type={multiple ? 'multiple' : 'single'} bind:value={internalValue as never} {onValueChange}>
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
              aria-label="Expand"
            />
          {/snippet}
        </Input>
      </Field>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        bind:ref={contentRef}
        class="bg-light text-dark max-h-96 rounded-xl border py-3 outline-none select-none"
        sideOffset={10}
      >
        <Select.ScrollUpButton class="flex w-full items-center justify-center">
          <Icon icon={mdiArrowUp} />
        </Select.ScrollUpButton>
        <Select.Viewport>
          {#each options as { value, label, disabled }, i (i + value)}
            <Select.Item
              class={cleanClass(
                'hover:bg-subtle data-[selected]:bg-primary/10 flex h-10 w-full items-center px-5 py-3 text-sm duration-75 outline-none select-none data-disabled:opacity-50',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              {value}
              {label}
              {disabled}
            >
              {#snippet children({ selected })}
                <div
                  class="flex cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors"
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
