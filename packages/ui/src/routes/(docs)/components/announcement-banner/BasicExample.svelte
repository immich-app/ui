<script lang="ts">
  import { AnnouncementBanner, Link, Stack } from '@immich/ui';
  import { mdiCheckAll } from '@mdi/js';
</script>

<Stack>
  <AnnouncementBanner>
    Super important announcement &mdash; Read more <Link href="#">here</Link>
  </AnnouncementBanner>
  <AnnouncementBanner icon={mdiCheckAll}>Super important announcement (custom icon)</AnnouncementBanner>
  <AnnouncementBanner icon={false}>Super important announcement (no icon)</AnnouncementBanner>
  <AnnouncementBanner center>Super important announcement (content centered)</AnnouncementBanner>
</Stack>
