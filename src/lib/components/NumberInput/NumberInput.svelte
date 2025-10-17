<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import type { NumberInputProps } from '$lib/types.js';

  let { value = $bindable<number>(), color = 'secondary', size, ...props }: NumberInputProps = $props();

  const getValue = () => String(value ?? 0);
  const setValue = (newValue: string) => {
    const parsed = parseFloat(newValue);
    if (isNaN(parsed)) {
      return;
    }
    value = parsed;
  };
</script>

<Input bind:value={getValue, setValue} {size} type="number" {color} {...props} />
