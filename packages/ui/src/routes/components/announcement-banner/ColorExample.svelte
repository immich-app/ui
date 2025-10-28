<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { AnnouncementBanner, Link, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color })}
      <AnnouncementBanner {color}>
        Super important announcement &mdash; Read more <Link href="#">here</Link> ({color})
      </AnnouncementBanner>
    {/snippet}
  </ComponentColors>
</Stack>
