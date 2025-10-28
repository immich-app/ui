<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Heading, HStack, IconButton, Stack } from '@immich/ui';
  import { mdiMagnify } from '@mdi/js';

  const icon = mdiMagnify;
</script>

<HStack gap={4}>
  <Stack>
    <Heading size="tiny">Semi-Round</Heading>
    <ComponentSizes>
      {#snippet child({ size, label })}
        <div>
          <IconButton {icon} {size} aria-label={label} />
        </div>
      {/snippet}
    </ComponentSizes>
  </Stack>

  <Stack>
    <Heading size="tiny">Round</Heading>
    <ComponentSizes>
      {#snippet child({ size, label })}
        <div>
          <IconButton {icon} shape="round" {size} aria-label={label} />
        </div>
      {/snippet}
    </ComponentSizes>
  </Stack>

  <Stack>
    <Heading size="tiny">Rectangle</Heading>
    <ComponentSizes>
      {#snippet child({ size, label })}
        <div>
          <IconButton {icon} shape="rectangle" {size} aria-label={label} />
        </div>
      {/snippet}
    </ComponentSizes>
  </Stack>
</HStack>
