<script lang="ts">
  import { HStack, Heading, Icon, Stack, Text } from '@immich/ui';
  import { mdiAccount } from '@mdi/js';

  const icon = mdiAccount;
  const size = '32';

  type Item = { item: string; label: string };

  const classColors: Item[] = [
    { item: 'text-primary', label: 'Primary' },
    { item: 'text-secondary', label: 'Secondary' },
    { item: 'text-muted', label: 'Muted' },
    { item: 'text-success', label: 'Success' },
    { item: 'text-info', label: 'Info' },
    { item: 'text-warning', label: 'Warning' },
    { item: 'text-danger', label: 'Danger' },
  ];

  const cssColors: Item[] = [
    { item: 'pink', label: 'Pink' },
    { item: 'green', label: 'Green' },
    { item: '#2e6dfb', label: 'RGB' },
    { item: 'hsl(356 74.5% 43.1%)', label: 'HSL' },
  ];
</script>

<HStack gap={8}>
  <Stack>
    <Heading size="tiny">Classes</Heading>
    {#each classColors as item (item.item)}
      <div class="flex place-items-center gap-2">
        <Icon {icon} {size} class={item.item} />
        <Text>{item.label}</Text>
      </div>
    {/each}
  </Stack>
  <Stack>
    <Heading size="tiny">CSS Colors</Heading>
    {#each cssColors as item (item.item)}
      <div class="flex place-items-center gap-2">
        <Icon {icon} {size} color={item.item} />
        <Text>{item.label}</Text>
      </div>
    {/each}
  </Stack>
</HStack>
