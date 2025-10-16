<script lang="ts">
  import { AnnouncementBanner, Link, Stack, Text } from '@immich/ui';
  import { DateTime } from 'luxon';

  const nowPlus = (seconds: number) => DateTime.now().plus({ seconds });
</script>

<Stack>
  <AnnouncementBanner>
    {#snippet content()}
      <Stack>
        <Text color="secondary">Super important announcement with custom content</Text>
        <Text color="secondary">
          Read more <Link href="#">here</Link>
        </Text>
      </Stack>
    {/snippet}
  </AnnouncementBanner>

  <AnnouncementBanner color="success" until={nowPlus(5)}>
    This announcement expires after a few seconds
  </AnnouncementBanner>

  <AnnouncementBanner color="primary" since={nowPlus(3)}>
    This announcement appears after a certain date
  </AnnouncementBanner>

  <AnnouncementBanner color="danger" since={nowPlus(8)} until={nowPlus(12)}>
    This announcement appears after a certain date and expires after a few seconds
  </AnnouncementBanner>
</Stack>
