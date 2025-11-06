<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Alert, Stack } from '@immich/ui';
  import { mdiHelpCircleOutline } from '@mdi/js';
</script>

<Stack gap={4}>
  <Alert icon={mdiHelpCircleOutline} title="This is an alert">
    <Lorem />
  </Alert>

  <Alert icon={false} title="No icon">
    <Lorem />
  </Alert>

  <Alert icon={false}>
    <p>No icon</p>
  </Alert>
</Stack>
