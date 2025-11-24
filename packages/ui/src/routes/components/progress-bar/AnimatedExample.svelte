<script>
  import { HStack, ProgressBar } from '@immich/ui';

  let progress = $state(0);
  setInterval(() => (progress = progress === 1 ? 0 : progress + 0.2), 500);
</script>

<HStack wrap>
  <ProgressBar {progress} />
</HStack>
