<script>
  import { Input, IconButton, Stack } from '@immich/ui';
  import { mdiMagnify } from '@mdi/js';
</script>

<Stack>
  <Input placeholder="Trailing icon" trailingIcon={mdiMagnify} />
  <Input placeholder="Trailing icon button">
    {#snippet trailingIcon()}
      <IconButton icon={mdiMagnify} shape="round" variant="ghost" color="secondary" aria-label="Search" />
    {/snippet}
  </Input>
  <Input placeholder="Leading icon" leadingIcon={mdiMagnify} />
  <Input placeholder="Leading icon button">
    {#snippet leadingIcon()}
      <IconButton icon={mdiMagnify} size="medium" shape="round" variant="ghost" color="secondary" aria-label="Search" />
    {/snippet}
  </Input>
</Stack>
