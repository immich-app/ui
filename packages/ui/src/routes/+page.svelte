<script lang="ts">
  import imageUrl from '$docs/assets/design_placeholder.svg';
  import { siteMetadata } from '$docs/constants.js';
  import CommandPaletteButton from '$lib/components/CommandPalette/CommandPaletteButton.svelte';
  import {
    AppShell,
    AppShellHeader,
    Button,
    Constants,
    Container,
    ControlBar,
    ControlBarHeader,
    ControlBarOverflow,
    Heading,
    Link,
    Logo,
    SiteFooter,
    SiteMetadata,
    Text,
    ThemeSwitcher,
    VStack,
  } from '@immich/ui';
  import { mdiCodeBraces, mdiOpenInNew } from '@mdi/js';
</script>

<SiteMetadata site={siteMetadata} />

<AppShell>
  <AppShellHeader class="w-full">
    <ControlBar static variant="ghost">
      <ControlBarHeader class="flex-row items-center">
        <a href="/">
          <Logo variant="inline" />
        </a>
      </ControlBarHeader>
      <ControlBarOverflow>
        <Button href="/getting-started" shape="round" color="secondary" size="small" class="hidden sm:block">
          Get started
        </Button>
        <CommandPaletteButton />
        <ThemeSwitcher size="medium" />
      </ControlBarOverflow>
    </ControlBar>
  </AppShellHeader>

  <Container size="medium" center class="mb-24">
    <VStack gap={8} class="mt-4 text-center lg:mt-16">
      <Logo size="giant" variant="logo" class="border" />
      <div class="flex flex-col gap-2">
        <Heading size="title" tag="h1">Immich UI</Heading>
        <Text color="muted" size="large">
          A collection of <Link href="https://svelte.dev">Svelte</Link> components for building Immich-themed applications,
          published on <Link href={Constants.Npm.Ui}>npm</Link>.
        </Text>
      </div>
      <Button size="large" href="/components" color="secondary" shape="round" leadingIcon={mdiCodeBraces}
        >View components</Button
      >

      <img src={imageUrl} alt="Designing a website" />

      <div class="flex flex-col gap-2">
        <Heading tag="h3">Looking for Immich?</Heading>
        <Text color="muted">
          Read the Immich Documentation at <Link href={Constants.Sites.Docs}>{Constants.Sites.Docs}</Link>
        </Text>
      </div>
      <Button href={Constants.Sites.Docs} target="_blank" color="secondary" shape="round" leadingIcon={mdiOpenInNew}
        >Open the Docs</Button
      >
    </VStack>
  </Container>

  <SiteFooter />
</AppShell>
