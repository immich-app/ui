<script lang="ts">
  import { HStack, ListButton } from '@immich/ui';

  let selected = $state(false);
</script>

<HStack wrap>
  <ListButton {selected} onclick={() => (selected = !selected)}>Hello World!</ListButton>
  <ListButton selected>Hello selected world!</ListButton>
</HStack>
