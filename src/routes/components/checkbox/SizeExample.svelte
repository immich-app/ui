<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Checkbox, HStack, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <HStack>
          <Checkbox {size} checked />
          <Checkbox {size} />
          <Checkbox {size} indeterminate />
        </HStack>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
