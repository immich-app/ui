<script>
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, Input } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Input placeholder={label} {size} />
    {/snippet}
  </ComponentSizes>
</Stack>
