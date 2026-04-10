<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { components } from '$docs/constants.js';
  import { asComponentHref } from '$docs/utilities.js';
  import '$lib/theme/default.css';
  import {
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    CommandPaletteButton,
    commandPaletteManager,
    ControlBar,
    ControlBarHeader,
    ControlBarOverflow,
    IconButton,
    Logo,
    NavbarGroup,
    NavbarItem,
    SiteFooter,
    ThemeSwitcher,
    toastManager,
    type NavbarProps,
  } from '@immich/ui';
  import { mdiCodeBraces, mdiCompass, mdiCompassOutline, mdiMenu, mdiNote, mdiNoteOutline } from '@mdi/js';
  import { MediaQuery } from 'svelte/reactivity';

  let { children } = $props();

  const sidebar = new MediaQuery(`min-width: 850px`);
  let open = $derived(sidebar.current);

  beforeNavigate(() => {
    if (!sidebar.current) {
      open = false;
    }
  });

  toastManager.setOptions({ class: 'top-[58px]' });

  commandPaletteManager.enable();
  commandPaletteManager.setTranslations({
    command_palette_prompt_default: 'Quickly find components, links, and commands',
  });
</script>

<AppShell>
  <AppShellHeader>
    <ControlBar static variant="ghost">
      <ControlBarHeader class="flex-row items-center">
        <IconButton
          shape="round"
          color="secondary"
          variant="ghost"
          size="medium"
          aria-label="Main menu"
          icon={mdiMenu}
          onclick={() => (open = !open)}
          class="md:hidden"
        />
        <a href={resolve('/')}>
          <Logo variant="inline" />
        </a>
      </ControlBarHeader>
      <ControlBarOverflow>
        <CommandPaletteButton />
        <ThemeSwitcher size="medium" />
      </ControlBarOverflow>
    </ControlBar>
  </AppShellHeader>

  <AppShellSidebar bind:open>
    <div class="my-4 me-4 mb-24">
      <NavbarItem
        icon={{ icon: mdiNoteOutline, flopped: true, flipped: true }}
        activeIcon={{ icon: mdiNote, flopped: true, flipped: true }}
        href="/introduction"
        title="Introduction"
      />
      <NavbarItem icon={mdiCompassOutline} activeIcon={mdiCompass} href="/getting-started" title="Getting started" />
      <NavbarItem icon={mdiCodeBraces} href="/components" title="Components" />
      <NavbarGroup title="Components" variant="compact" />
      {#each components as component (component.name)}
        {@const href = asComponentHref(component.name)}
        <NavbarItem
          {href}
          variant="compact"
          isActive={() => page.url.pathname === href}
          title={component.title ?? component.name}
          icon={component.icon}
          activeIcon={component.activeIcon}
          items={component.items?.map(
            ({ name, ...item }) =>
              ({
                title: name,
                href: asComponentHref(name),
                ...item,
              }) as NavbarProps,
          )}
        />
      {/each}
    </div>
  </AppShellSidebar>

  <section class="flex h-full flex-col">
    <div class="grow">
      {@render children?.()}
    </div>
    <SiteFooter />
  </section>
</AppShell>
