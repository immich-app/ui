<script lang="ts">
  import Heading from '$lib/components/Heading/Heading.svelte';
  import Logo from '$lib/components/Logo/Logo.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import VStack from '$lib/components/Stack/VStack.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { Constants } from '$lib/site/constants.js';
  import SiteFooterLink from '$lib/site/SiteFooterLink.svelte';
  import { Icon } from '@immich/ui';
  import { siDiscord, siGithub, siReddit } from 'simple-icons';
</script>

<div class="footer-gradient mt-16 p-8">
  <div class="grid grid-cols-[1fr_auto_1fr]">
    <div class="invisible 2xl:visible">
      <Logo variant="footer" size="landing" class="align-center ml-24 w-[120px] self-center" />
    </div>
    <div class="mx-auto max-w-(--breakpoint-lg) xl:py-8">
      <Stack gap={8}>
        <div class="place-center grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Stack>
            <Heading size="tiny" class="text-dark mb-3 font-semibold">Download</Heading>
            <SiteFooterLink href={Constants.Get.Android} text="Android" />
            <SiteFooterLink href={Constants.Get.iOS} text="iOS" />
            <SiteFooterLink href={Constants.Get.Download} text="Server" />
          </Stack>

          <Stack>
            <Heading size="tiny" class="text-dark mb-3 font-semibold">Company</Heading>
            <SiteFooterLink href={Constants.Socials.Futo} text="FUTO" />
            <SiteFooterLink href={Constants.Sites.Buy} text="Purchase" />
            <SiteFooterLink href={Constants.Sites.Store} text="Merch" />
          </Stack>

          <Stack>
            <Heading size="tiny" class="text-dark mb-3 font-semibold">Sites</Heading>
            <SiteFooterLink href={Constants.Sites.Docs} text="Documentation" />
            <SiteFooterLink href={Constants.Sites.My} text="My Immich" />
            <SiteFooterLink href={Constants.Sites.Api} text="Immich API" />
          </Stack>

          <Stack>
            <Heading size="tiny" class="text-dark mb-3 font-semibold">Miscellaneous</Heading>
            <SiteFooterLink href={Constants.Pages.Roadmap} text="Roadmap" />
            <SiteFooterLink href={Constants.Pages.CursedKnowledge} text="Cursed Knowledge" />
            <SiteFooterLink href={Constants.Pages.PrivacyPolicy} text="Privacy Policy" />
          </Stack>
        </div>
      </Stack>
    </div>
  </div>

  <hr class="my-10" />

  <div class="grid grid-cols-3">
    <div></div>
    <VStack class="text-center">
      <Text variant="italic">Privacy should not be a luxury</Text>
    </VStack>
    <div class="place-end flex items-center justify-end gap-4">
      <HStack gap={3}>
        <a href={Constants.Socials.Github}>
          <Icon icon={siGithub} size="24" />
        </a>
        <a href={Constants.Socials.Reddit}>
          <Icon icon={siReddit} size="24" />
        </a>
        <a href={Constants.Socials.Discord}>
          <Icon icon={siDiscord} size="24" />
        </a>
      </HStack>
    </div>
  </div>
</div>

<style>
  .footer-gradient {
    position: relative;
    background: linear-gradient(
      to right,
      rgba(198, 221, 247, 0.25) 0%,
      rgba(255, 240, 204, 0.25) 25%,
      rgba(152, 191, 163, 0.25) 50%,
      rgba(198, 221, 247, 0.25) 75%,
      rgba(237, 190, 214, 0.25) 100%
    );
  }

  :global(.dark) .footer-gradient {
    background: linear-gradient(
      to right,
      rgba(198, 221, 247, 0.11) 0%,
      rgba(255, 240, 204, 0.11) 25%,
      rgba(152, 191, 163, 0.11) 50%,
      rgba(198, 221, 247, 0.11) 75%,
      rgba(237, 190, 214, 0.11) 100%
    );
  }

  :global(.dark) .footer-gradient::before {
    background: rgba(0, 0, 0, 0);
  }

  .footer-gradient > * {
    position: relative;
    z-index: 1;
  }
</style>
