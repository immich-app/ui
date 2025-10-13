<script lang="ts">
  import { AnnouncementBanner, Link, Stack, Text } from '@immich/ui';
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
</Stack>
