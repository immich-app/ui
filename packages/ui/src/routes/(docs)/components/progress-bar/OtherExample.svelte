<script>
  import { ProgressBar, Stack, Text } from '@immich/ui';
</script>

<Stack>
  <div>
    <Text fontWeight="bold" class="mb-1">No progress</Text>
    <ProgressBar progress={0} />
  </div>
  <div>
    <Text fontWeight="bold" class="mb-1">Barely any progress</Text>
    <ProgressBar progress={0.001} />
  </div>
  <div>
    <Text fontWeight="bold" class="mb-1">With border</Text>
    <ProgressBar progress={0.2} border />
  </div>
  <div dir="rtl">
    <Text fontWeight="bold" class="mb-1">RTL</Text>
    <ProgressBar progress={0.2} />
  </div>
</Stack>
