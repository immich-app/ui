<script>
  import { Meter, Stack, Text } from '@immich/ui';

  const colors = [
    { from: 0.8, className: 'bg-warning' },
    { from: 0.95, className: 'bg-danger' },
  ];
</script>

<Stack gap={4}>
  <div>
    <Meter label="Completely empty" valueLabel="Current usage: 0%" />
  </div>
  <div>
    <Meter value={0.001} label="Almost empty" valueLabel="Current usage: 0.1%" />
  </div>
  <div>
    <Text fontWeight="medium" class="mb-1">Storage card</Text>
    <Meter
      size="tiny"
      value={0.11}
      label="Storage space"
      valueLabel="87,6 GiB of 831,8 GiB used"
      class="bg-light-200"
      containerClass="bg-light-100 w-60 p-4 rounded-lg"
    />
  </div>
  <Stack>
    <Text fontWeight="medium">Color change</Text>
    <Meter value={0.75} thresholds={colors} />
    <Meter value={0.85} thresholds={colors} />
    <Meter value={0.95} thresholds={colors} />
  </Stack>
  <div>
    <Meter value={0.2} border label="With border" />
  </div>
  <div>
    <Meter value={0.2} stop={false} label="No stop" />
  </div>
  <div dir="rtl">
    <Meter value={0.2} label="RTL" />
  </div>
</Stack>
