<script lang="ts">
  import NumberInput from '$lib/components/NumberInput/NumberInput.svelte';
  import { toastManager } from '$lib/services/toast-manager.svelte.js';
  import {
    Button,
    Checkbox,
    Field,
    Input,
    Select,
    Stack,
    type Color,
    type Shape,
    type Size,
    type ToastVariant,
  } from '@immich/ui';
  import CustomExample from './CustomExample.svelte';

  let title = $state('Success');
  let description = $state('Saved your profile successfully');
  let timeout = $state(5000);
  let closable = $state(true);

  const colors: Array<{ label: string; value: Color }> = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
    { label: 'Info', value: 'info' },
  ];
  let color = $state(colors[0]);

  const sizes: Array<{ label: string; value: Size }> = [
    { label: 'Tiny', value: 'tiny' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Giant', value: 'giant' },
  ];
  let size = $state(sizes[2]);

  const shapes: Array<{ label: string; value: Shape }> = [
    { label: 'Round', value: 'round' },
    { label: 'Semi-round', value: 'semi-round' },
    { label: 'Rectangle', value: 'rectangle' },
  ];
  let shape = $state(shapes[1]);

  const variants: Array<{ label: string; value: ToastVariant }> = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outline', value: 'outline' },
  ];
  let variant = $state(variants[0]);

  const handleOpen = async () => {
    toastManager.show(
      {
        title,
        description,
        variant: variant?.value,
        shape: shape?.value,
        color: color?.value,
        size: size?.value,
      },
      {
        timeout,
        closable,
      },
    );
  };

  const handleClick = () => {
    for (const variant of ['filled', 'outline'] as const) {
      for (const color of ['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as const) {
        toastManager.show(
          {
            title: `${variant}-${color}`,
            description,
            color,
            variant,
          },
          {
            timeout,
          },
        );
      }
    }
  };

  const handleCustom = () => {
    toastManager.custom({ component: CustomExample, props: {} }, { timeout, closable });
  };
</script>

<div class="flex gap-2">
  <Button onclick={handleClick}>Open color examples</Button>
  <Button onclick={handleCustom}>Open custom content</Button>
</div>

<hr class="my-6" />

<Stack>
  <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
    <div class="col-span-full">
      <Field label="Title">
        <Input bind:value={title} />
      </Field>
    </div>

    <div class="col-span-full">
      <Field label="Description">
        <Input bind:value={description} />
      </Field>
    </div>

    <div>
      <Field label="Size">
        <Select data={sizes} bind:value={size} />
      </Field>
    </div>

    <div>
      <Field label="Color">
        <Select data={colors} bind:value={color} />
      </Field>
    </div>

    <div>
      <Field label="Shape">
        <Select data={shapes} bind:value={shape} />
      </Field>
    </div>

    <div>
      <Field label="Variant">
        <Select data={variants} bind:value={variant} />
      </Field>
    </div>

    <div>
      <Field label="Timeout">
        <NumberInput bind:value={timeout} step={1000} />
      </Field>
    </div>

    <div>
      <Field label="Closable">
        <Checkbox bind:checked={closable} />
      </Field>
    </div>
  </div>

  <div class="flex justify-end gap-2">
    <Button onclick={handleOpen}>Open toast</Button>
  </div>
</Stack>
