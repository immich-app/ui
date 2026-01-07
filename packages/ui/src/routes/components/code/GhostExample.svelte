<script lang="ts">
  import ComponentTextColors from '$docs/components/ComponentTextColors.svelte';
  import { Code, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentTextColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text>Use <Code {color} variant="ghost">console.log</Code> to print text to the console.</Text>
      </div>
    {/snippet}
  </ComponentTextColors>
</Stack>
