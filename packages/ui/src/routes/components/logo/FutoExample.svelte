<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Logo, Text } from '@immich/ui';
</script>

<ComponentSizes>
  {#snippet child({ size, label })}
    <Text class="mb-1" fontWeight="bold">{label}</Text>
    <Logo {size} variant="stacked-futo" />
  {/snippet}
</ComponentSizes>
