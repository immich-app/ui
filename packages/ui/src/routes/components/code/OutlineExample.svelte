<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Code, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text>Use <Code {color} variant="outline">console.log</Code> to print text to the console.</Text>
      </div>
    {/snippet}
  </ComponentColors>
</Stack>
