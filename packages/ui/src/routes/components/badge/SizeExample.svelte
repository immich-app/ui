<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Badge, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Badge {size}>#immich</Badge>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
