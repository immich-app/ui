<script>
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Meter, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Meter value={0.8} {size} />
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
