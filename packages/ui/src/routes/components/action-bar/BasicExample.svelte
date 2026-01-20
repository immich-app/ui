<script lang="ts">
  import { ExampleActions, exampleActions } from '$docs/constants.js';
  import { ActionBar, ControlBarHeader, ControlBarTitle, Stack } from '@immich/ui';

  const onClose = () => {};
</script>

<Stack>
  <ActionBar {onClose} actions={exampleActions}>
    <ControlBarHeader>
      <ControlBarTitle>2 Selected</ControlBarTitle>
    </ControlBarHeader>
  </ActionBar>

  <ActionBar
    {onClose}
    actions={[ExampleActions.Share, ExampleActions.Copy, ExampleActions.Download]}
    overflowActions={[ExampleActions.Edit, ExampleActions.Delete]}
  >
    <ControlBarHeader>
      <ControlBarTitle>2 Selected</ControlBarTitle>
    </ControlBarHeader>
  </ActionBar>
</Stack>
