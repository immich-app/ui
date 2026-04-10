<script lang="ts">
  import Closable from '$docs/components/Closable.svelte';
  import { Badge, IconButton, Stack, Text } from '@immich/ui';
  import { mdiCheckAll } from '@mdi/js';
</script>

<Stack gap={4}>
  <div>
    <Text fontWeight="medium" class="mb-2">Default</Text>
    <Closable>
      {#snippet child({ onClose })}
        <Badge {onClose}>Closable</Badge>
      {/snippet}
    </Closable>
  </div>

  <div>
    <Text fontWeight="medium" class="mb-2">Close text</Text>
    <Closable>
      {#snippet child({ onClose })}
        <Badge {onClose} translations={{ close: 'Clear failures' }}>Failures</Badge>
      {/snippet}
    </Closable>
  </div>

  <div>
    <Text fontWeight="medium" class="mb-2">Custom button</Text>
    <Closable>
      {#snippet child({ onClose })}
        <Badge>
          100 messages
          {#snippet close()}
            <IconButton aria-label="Mark as read" size="tiny" icon={mdiCheckAll} onclick={onClose} />
          {/snippet}
        </Badge>
      {/snippet}
    </Closable>
  </div>
</Stack>
