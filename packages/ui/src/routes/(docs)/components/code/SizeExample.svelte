<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Code, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text>Use <Code {size}>console.log</Code> to print text to the console.</Text>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
