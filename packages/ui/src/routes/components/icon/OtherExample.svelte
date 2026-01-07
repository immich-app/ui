<script lang="ts">
  import { Icon, Stack, Text } from '@immich/ui';
  import { mdiAlphaRBoxOutline } from '@mdi/js';

  const icon = mdiAlphaRBoxOutline;
  const custom = 'M12 1 L6 20 L18 20 Z';
  const size = '2em';
</script>

<Stack>
  <div class="flex place-items-center gap-2">
    <Icon {icon} {size} />
    <Text>Normal</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon {icon} {size} flipped />
    <Text>Flipped</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon {icon} {size} flopped />
    <Text>Flopped</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon {icon} {size} spin />
    <Text>Spin</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon {icon} {size} title="Title" description="Description" />
    <Text>Title/description</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon icon={custom} {size} />
    <Text>Custom SVG</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon icon={custom} {size} color="none" strokeColor="black" />
    <Text>Custom SVG (outline)</Text>
  </div>
  <div class="flex place-items-center gap-2">
    <Icon icon={custom} {size} color="none" strokeColor="black" strokeWidth={1} />
    <Text>Custom SVG (stroke width)</Text>
  </div>
</Stack>
