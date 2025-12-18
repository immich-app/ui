<script lang="ts">
  import { Button, commandPaletteManager, HStack } from '@immich/ui';

  const onSearch = (query: string) => {
    commandPaletteManager.open({ query });
  };
</script>

<HStack wrap>
  <Button onclick={() => onSearch('')}>Open</Button>
  <Button onclick={() => onSearch('site')}>View sites</Button>
  <Button onclick={() => onSearch('command')}>View commands</Button>
  <Button onclick={() => onSearch('component')}>View components</Button>
</HStack>
