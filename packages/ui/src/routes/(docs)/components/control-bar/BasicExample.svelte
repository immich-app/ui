<script lang="ts">
  import { ControlBar, ControlBarHeader, ControlBarTitle, Stack, toastManager } from '@immich/ui';

  const onClose = () => {
    toastManager.primary('onClose');
  };
</script>

<Stack>
  <ControlBar {onClose}>
    <ControlBarHeader>
      <ControlBarTitle>2 Selected</ControlBarTitle>
    </ControlBarHeader>
  </ControlBar>
</Stack>
