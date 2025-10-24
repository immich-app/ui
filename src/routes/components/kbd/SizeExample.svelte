<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Kbd, Stack, Text } from '@immich/ui';
</script>

<Stack class="items-start">
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Kbd {size}>SHIFT+TAB</Kbd>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
