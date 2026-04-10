<script>
  import { Meter, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
  <div>
    <Meter value={0.8} shape="round" label="Round" valueLabel="80% storage used" />
  </div>
  <div>
    <Meter value={0.8} shape="semi-round" label="Semi-round" valueLabel="80% storage used" />
  </div>
  <div>
    <Meter value={0.8} shape="rectangle" label="Rectangle" valueLabel="80% storage used" />
  </div>
</Stack>
