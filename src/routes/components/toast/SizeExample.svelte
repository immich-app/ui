<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, Toast } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Toast {size} title={label} description="This is a {size} toast" />
    {/snippet}
  </ComponentSizes>
</Stack>
