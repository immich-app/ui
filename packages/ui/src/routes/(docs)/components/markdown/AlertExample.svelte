<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Markdown, Stack, Text } from '@immich/ui';
</script>

<Text class="mb-1" fontWeight="bold">Alert</Text>

<Stack gap={4}>
  <Markdown.Alert variant="note">
    <Lorem />
  </Markdown.Alert>

  <Markdown.Alert variant="tip">
    <Lorem />
  </Markdown.Alert>

  <Markdown.Alert variant="important">
    <Lorem />
  </Markdown.Alert>

  <Markdown.Alert variant="warning">
    <Lorem />
  </Markdown.Alert>

  <Markdown.Alert variant="caution">
    <Lorem />
  </Markdown.Alert>
</Stack>
