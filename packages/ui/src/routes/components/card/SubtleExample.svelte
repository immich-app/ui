<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import Lorem from '$docs/components/Lorem.svelte';
  import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <Card {color}>
        <CardHeader>
          <CardTitle>Title ({label})</CardTitle>
        </CardHeader>
        <CardBody>
          <Lorem />
        </CardBody>
      </Card>
    {/snippet}
  </ComponentColors>
</Stack>
