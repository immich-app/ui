<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import Text from '$lib/internal/Text.svelte';
  import { CloseButton, HStack } from '@immich/ui';
</script>

<Text class="mb-1" fontWeight="bold">Ghost</Text>
<HStack class="mb">
  <ComponentColors>
    {#snippet child({ color })}
      <div>
        <CloseButton variant="ghost" {color} />
      </div>
    {/snippet}
  </ComponentColors>
</HStack>

<Text class="mt-4 mb-1" fontWeight="bold">Outline</Text>
<HStack>
  <ComponentColors>
    {#snippet child({ color })}
      <div>
        <CloseButton variant="outline" {color} />
      </div>
    {/snippet}
  </ComponentColors>
</HStack>

<Text class="mt-4 mb-1" fontWeight="bold">Filled</Text>
<HStack>
  <ComponentColors>
    {#snippet child({ color })}
      <div>
        <CloseButton variant="filled" {color} />
      </div>
    {/snippet}
  </ComponentColors>
</HStack>
