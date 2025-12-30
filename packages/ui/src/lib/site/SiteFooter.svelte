<script lang="ts">
  import Heading from '$lib/components/Heading/Heading.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import { Constants } from '$lib/site/constants.js';
  import SiteFooterLink from '$lib/site/SiteFooterLink.svelte';
  import { siDiscord, siGithub, siReddit, siRss, siWeblate, siX, siYoutube } from 'simple-icons';
</script>

<div class="mt-16 rounded-t-md bg-gray-50 p-8 lg:p-4 lg:py-8 dark:bg-neutral-900">
  <div class="mx-auto max-w-(--breakpoint-lg)">
    <Stack gap={8}>
      <div class="place-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Stack>
          <Heading size="small" class="mb-2">Download</Heading>
          <SiteFooterLink href={Constants.Get.Android} text="Android" />
          <SiteFooterLink href={Constants.Get.iOS} text="iOS" />
          <SiteFooterLink href={Constants.Get.Download} text="Server" />
        </Stack>

        <Stack>
          <Heading size="small" class="mb-2">Company</Heading>
          <SiteFooterLink href={Constants.Socials.Futo} text="FUTO" />
          <SiteFooterLink href={Constants.Sites.Buy} text="Purchase" />
          <SiteFooterLink href={Constants.Sites.Store} text="Merch" />
        </Stack>

        <Stack>
          <Heading size="small" class="mb-2">Sites</Heading>
          <SiteFooterLink href={Constants.Sites.Docs} text="Documentation" />
          <SiteFooterLink href={Constants.Sites.My} text="My Immich" />
          <SiteFooterLink href={Constants.Sites.Api} text="Immich API" />
          <SiteFooterLink href={Constants.Sites.Data} text="Immich Data" />
          <SiteFooterLink href={Constants.Sites.Datasets} text="Immich Datasets" />
          <SiteFooterLink href={Constants.Sites.Awesome} text="Awesome Immich" />
        </Stack>

        <Stack>
          <Heading size="small" class="mb-2">Miscellaneous</Heading>
          <SiteFooterLink href={Constants.Pages.Roadmap} text="Roadmap" />
          <SiteFooterLink href={Constants.Pages.CursedKnowledge} text="Cursed Knowledge" />
          <SiteFooterLink href={Constants.Pages.PrivacyPolicy} text="Privacy Policy" />
        </Stack>
      </div>

      <hr />

      <HStack>
        <IconButton
          href={Constants.Socials.Github}
          icon={siGithub}
          aria-label="GitHub"
          variant="ghost"
          color="secondary"
          size="small"
        />
        <IconButton
          href={Constants.Socials.Discord}
          icon={siDiscord}
          aria-label="Discord"
          variant="ghost"
          color="secondary"
          size="small"
        />
        <IconButton
          href={Constants.Socials.Reddit}
          icon={siReddit}
          aria-label="reddit"
          variant="ghost"
          color="secondary"
          size="small"
        />
        <IconButton href={Constants.Socials.X} icon={siX} aria-label="X" variant="ghost" color="secondary" />
        <IconButton
          href={Constants.Socials.YouTube}
          icon={siYoutube}
          aria-label="YouTube"
          variant="ghost"
          color="secondary"
          size="small"
        />
        <IconButton
          href={Constants.Socials.Weblate}
          icon={siWeblate}
          aria-label="Weblate"
          variant="ghost"
          color="secondary"
          size="small"
        />
        <IconButton href={Constants.Socials.Rss} icon={siRss} aria-label="RSS" variant="ghost" color="secondary" />
      </HStack>
    </Stack>
  </div>
</div>
