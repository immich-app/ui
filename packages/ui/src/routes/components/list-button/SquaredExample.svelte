<script lang="ts">
  import { HStack, ListButton } from '@immich/ui';
  let selected = $state(false);
</script>

<HStack wrap gap={0}>
  <ListButton shape="rectangle" {selected} onclick={() => (selected = !selected)}>Hello World!</ListButton>
  <ListButton shape="rectangle" selected>Hello selected world!</ListButton>
</HStack>
