<script lang="ts">
  import { ExampleActions } from '$docs/constants.js';
  import { ActionButton, Heading } from '@immich/ui';
</script>

<Heading size="small" class="mb-2">Icon buttons</Heading>
<div class="flex gap-2">
  <ActionButton action={ExampleActions.Copy} />
  <ActionButton action={ExampleActions.Edit} />
  <ActionButton action={ExampleActions.Share} />
  <ActionButton action={ExampleActions.Delete} />
  <ActionButton action={ExampleActions.Download} variant="filled" color="primary" />
</div>

<Heading size="small" class="mt-6 mb-2">Buttons</Heading>
<div class="flex gap-2">
  <ActionButton type="button" action={ExampleActions.Copy} />
  <ActionButton type="button" action={ExampleActions.Edit} />
  <ActionButton type="button" action={ExampleActions.Share} />
  <ActionButton type="button" action={ExampleActions.Delete} />
  <ActionButton type="button" action={ExampleActions.Download} variant="filled" color="primary" />
</div>
