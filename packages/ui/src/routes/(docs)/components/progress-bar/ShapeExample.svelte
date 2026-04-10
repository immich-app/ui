<script>
  import { ProgressBar, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <div>
    <Text fontWeight="bold" class="mb-1">Round</Text>
    <ProgressBar progress={0.8} shape="round" />
  </div>
  <div>
    <Text fontWeight="bold" class="mb-1">Semi-round</Text>
    <ProgressBar progress={0.8} shape="semi-round" />
  </div>
  <div>
    <Text fontWeight="bold" class="mb-1">Rectangle</Text>
    <ProgressBar progress={0.8} shape="rectangle" />
  </div>
</Stack>
