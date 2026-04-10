<script lang="ts">
  import { Button, IconButton, Stack } from '@immich/ui';
  import { mdiInformation } from '@mdi/js';
</script>

<Stack gap={2}>
  <div>
    <Button title="This is a tooltip" leadingIcon={mdiInformation}>Hover me</Button>
  </div>
  <IconButton aria-label="This is a tooltip" icon={mdiInformation} />
</Stack>
