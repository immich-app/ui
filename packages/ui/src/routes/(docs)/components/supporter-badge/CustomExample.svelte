<script lang="ts">
  import { Heading, Logo, Stack, SupporterBadge } from '@immich/ui';
</script>

<Stack>
  <Stack class="w-62.5">
    <SupporterBadge effect="always" text="Buy Immich" />
  </Stack>

  <Stack>
    <Heading size="tiny">Title</Heading>
    <SupporterBadge effect="always">
      <Logo size="large" variant="icon" />
      <Heading tag="h1" size="large" color="primary">Purchase Immich</Heading>
    </SupporterBadge>
  </Stack>

  <Stack>
    <Heading size="tiny">Center</Heading>
    <SupporterBadge effect="hover" center class="bg-light-200 border-0" />
  </Stack>
</Stack>
