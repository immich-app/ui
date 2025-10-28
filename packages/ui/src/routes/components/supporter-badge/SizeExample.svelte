<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, SupporterBadge, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Stack class="w-[250px]">
        <div>
          <Text class="mb-1" fontWeight="bold">{label}</Text>
          <SupporterBadge {size} effect="always" />
        </div>
      </Stack>
    {/snippet}
  </ComponentSizes>
</Stack>
