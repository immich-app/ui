<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import {
    Card,
    CardBody,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Stack,
  } from '@immich/ui';
</script>

<Stack>
  <Card>
    <CardHeader>
      <CardTitle>Card</CardTitle>
      <CardBody>
        <Lorem />
      </CardBody>
    </CardHeader>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Card with footer</CardTitle>
    </CardHeader>
    <CardBody>
      <Lorem />
    </CardBody>
    <CardFooter>Footer goes here</CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Card with description</CardTitle>
      <CardDescription>This is the description</CardDescription>
    </CardHeader>
    <CardBody>
      <Lorem />
    </CardBody>
  </Card>
</Stack>
