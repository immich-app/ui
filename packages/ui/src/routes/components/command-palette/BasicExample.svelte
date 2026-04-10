<script lang="ts">
  import { Button, commandPaletteManager, HStack } from '@immich/ui';

  const onSearch = (query: string) => {
    commandPaletteManager.open(query);
  };
</script>

<HStack wrap>
  <Button onclick={() => onSearch('')}>Open</Button>
  <Button onclick={() => onSearch('type:setting')}>View settings</Button>
  <Button onclick={() => onSearch('type:site')}>View sites</Button>
  <Button onclick={() => onSearch('type:social')}>View socials</Button>
  <Button onclick={() => onSearch('type:project')}>View project pages</Button>
</HStack>
