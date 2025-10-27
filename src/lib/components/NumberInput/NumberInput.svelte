<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import type { NumberInputProps } from '$lib/types.js';

  let { value = $bindable(), color = 'secondary', size, ...props }: NumberInputProps = $props();

  const getValue = () => (typeof value === 'number' ? String(value) : '');
  const setValue = (newValue: string | number | null) => {
    if (typeof newValue === 'number') {
      value = newValue;
      return;
    }

    // empty string or null
    if (!newValue) {
      value = undefined;
      return;
    }

    const parsed = parseFloat(newValue);
    if (Number.isNaN(parsed)) {
      return;
    }

    value = parsed;
  };
</script>

<Input bind:value={getValue, setValue} {size} type="number" {color} {...props} />
