<script>
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Stack, Text, ThemeSwitcher } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <ThemeSwitcher {color} />
      </div>
    {/snippet}
  </ComponentColors>
</Stack>
