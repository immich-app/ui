<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { PasswordInput, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <PasswordInput value="super-secret-password" placeholder={label} {size} />
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
