<script>
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, Text, ThemeSwitcher } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <ThemeSwitcher {size} />
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
