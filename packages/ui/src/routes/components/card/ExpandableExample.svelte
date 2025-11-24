<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
  <Card expandable>
    <CardHeader>
      <CardTitle>Title</CardTitle>
    </CardHeader>
    <CardBody>
      <Lorem count={3} />
    </CardBody>
  </Card>

  <Card color="primary" expandable>
    <CardHeader>
      <CardTitle>Title</CardTitle>
    </CardHeader>
    <CardBody>
      <Lorem count={3} />
    </CardBody>
  </Card>
</Stack>
