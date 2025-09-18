<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Alert, Stack } from '@immich/ui';
</script>

<Stack>
  <Alert title="This is an alert" />
  <Alert>
    <p>This is an alert</p>
  </Alert>
  <Alert color="primary" title="This is a primary alert">
    <Lorem />
  </Alert>
</Stack>
