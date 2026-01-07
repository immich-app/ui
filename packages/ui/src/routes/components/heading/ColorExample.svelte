<script lang="ts">
  import ComponentTextColors from '$docs/components/ComponentTextColors.svelte';
  import { Heading, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentTextColors>
    {#snippet child({ color, label })}
      <Heading tag="h1" size="medium" {color}>Heading ({label})</Heading>
    {/snippet}
  </ComponentTextColors>
</Stack>
