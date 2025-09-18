<script lang="ts">
  import Heading from '$lib/components/Heading/Heading.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import VStack from '$lib/components/Stack/VStack.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import ThemeSwitcher from '$lib/components/ThemeSwitcher/ThemeSwitcher.svelte';
  import { Constants } from '$lib/site/constants.js';
  import SiteFooterLink from '$lib/site/SiteFooterLink.svelte';
  import {
    mdiBookshelf,
    mdiChartGantt,
    mdiCubeOutline,
    mdiHomeSearchOutline,
    mdiKey,
    mdiOfficeBuildingOutline,
    mdiScriptTextOutline,
    mdiServerOutline,
    mdiShoppingOutline,
  } from '@mdi/js';
  import { siAndroid, siApple, siDiscord, siGithub, siReddit } from 'simple-icons';
</script>

<div class="bg-dark/10 mt-16 rounded-t-3xl p-8">
  <div class="mx-auto max-w-(--breakpoint-lg) xl:py-8">
    <Stack gap={8}>
      <div class="place-center grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <Stack>
          <Heading size="tiny">Social</Heading>
          <SiteFooterLink href={Constants.Socials.Github} icon={siGithub} text="GitHub" />
          <SiteFooterLink href={Constants.Socials.Discord} icon={siDiscord} text="Discord" />
          <SiteFooterLink href={Constants.Socials.Reddit} icon={siReddit} text="Reddit" />
        </Stack>

        <Stack>
          <Heading size="tiny">Download</Heading>
          <SiteFooterLink href={Constants.Get.Android} icon={siAndroid} text="Android" />
          <SiteFooterLink href={Constants.Get.iOS} icon={siApple} text="iOS" />
          <SiteFooterLink
            href={Constants.Get.DockerCompose}
            icon={mdiServerOutline}
            text="Server"
          />
        </Stack>

        <Stack>
          <Heading size="tiny">Company</Heading>
          <SiteFooterLink
            href={Constants.Socials.Futo}
            icon={mdiOfficeBuildingOutline}
            text="FUTO"
          />
          <SiteFooterLink href={Constants.Sites.Buy} icon={mdiKey} text="Purchase" />
          <SiteFooterLink href={Constants.Sites.Store} icon={mdiShoppingOutline} text="Merch" />
        </Stack>

        <Stack>
          <Heading size="tiny">Sites</Heading>
          <SiteFooterLink
            href={Constants.Sites.Docs}
            icon={mdiScriptTextOutline}
            text="Documentation"
          />
          <SiteFooterLink href={Constants.Sites.My} icon={mdiHomeSearchOutline} text="My Immich" />
          <SiteFooterLink href={Constants.Sites.Api} icon={mdiCubeOutline} text="Immich API" />
        </Stack>

        <Stack>
          <Heading size="tiny">Miscellaneous</Heading>
          <SiteFooterLink href={Constants.Pages.Roadmap} icon={mdiChartGantt} text="Roadmap" />
          <SiteFooterLink
            href={Constants.Pages.CursedKnowledge}
            icon={mdiBookshelf}
            text="Cursed Knowledge"
          />
        </Stack>
      </div>
      <VStack class="text-center">
        <Text size="large">This project is available under GNU AGPL v3 license.</Text>
        <Text color="muted" variant="italic">Privacy should not be a luxury</Text>
        <ThemeSwitcher color="secondary" />
      </VStack>
    </Stack>
  </div>
</div>
