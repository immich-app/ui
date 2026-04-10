<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Badge, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Badge shape="semi-round" {color}>#immich</Badge>
      </div>
    {/snippet}
  </ComponentColors>
</Stack>
