<script lang="ts">
  import { Button, Stack, Toast } from '@immich/ui';
  import { mdiCheckAll } from '@mdi/js';

  let open = $state(true);
</script>

<Stack>
  <Toast title="Saved profile changes" />
  <Toast title="Success" description="Saved profile changes" />
  <Toast icon={mdiCheckAll} title="Success" description="Saved profile changes" />
  <Toast icon={false} title="Success" description="Saved profile changes" />
  <Toast
    title="Success"
    description="This is a toast with a very, very, very long description, which will wrap by default, and if you want to truncate it after a certain point, you can use the children snippet to have full control over the text length."
  />

  {#if open}
    <Toast title="Success" description="Saved profile changes" onClose={() => (open = false)} />
  {:else}
    <div>
      <Button onclick={() => (open = true)}>Reset</Button>
    </div>
  {/if}
</Stack>
