<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { componentCommands, componentGroups } from '$docs/constants.js';
  import { asComponentHref } from '$docs/utilities.js';
  import CommandPaletteProvider from '$lib/components/CommandPalette/CommandPaletteProvider.svelte';
  import '$lib/theme/default.css';
  import {
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    asText,
    commandPaletteManager,
    ControlBar,
    ControlBarHeader,
    ControlBarOverflow,
    defaultProvider,
    Icon,
    IconButton,
    initializeTheme,
    Logo,
    NavbarGroup,
    NavbarItem,
    siteCommands,
    SiteFooter,
    Text,
    ThemeSwitcher,
    toastManager,
    toggleTheme,
    TooltipProvider,
    type ActionItem,
    type NavbarProps,
  } from '@immich/ui';
  import { mdiHome, mdiHomeOutline, mdiMagnify, mdiMenu, mdiThemeLightDark } from '@mdi/js';
  import { MediaQuery } from 'svelte/reactivity';
  import '../app.css';

  initializeTheme();

  let { children } = $props();

  const sidebar = new MediaQuery(`min-width: 850px`);
  let open = $derived(sidebar.current);

  beforeNavigate(() => {
    if (!sidebar.current) {
      open = false;
    }
  });

  toastManager.setOptions({ class: 'top-[58px]' });

  const commands: ActionItem[] = [
    {
      icon: mdiThemeLightDark,
      iconClass: 'text-gray-700 dark:text-gray-200',
      title: 'Toggle theme',
      description: 'Switch between light and dark theme',
      shortcuts: [
        { shift: true, key: 't' },
        { alt: true, key: 't' },
      ],
      onAction: () => toggleTheme(),
      searchText: asText('Command', 'light', 'dark', 'theme', 'toggle'),
    },
  ];

  commandPaletteManager.enable();
  commandPaletteManager.setTranslations({
    command_palette_prompt_default: 'Quickly find components, links, and commands',
  });
</script>

<CommandPaletteProvider
  providers={[
    defaultProvider({ name: 'Commands', actions: commands }),
    defaultProvider({ name: 'Components', actions: componentCommands }),
    defaultProvider({ name: 'Links', actions: siteCommands }),
  ]}
/>

<TooltipProvider>
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
          {#if commandPaletteManager.isEnabled}
            <div class="hidden place-items-center lg:flex">
              <button
                onclick={() => commandPaletteManager.open()}
                class="border-light flex cursor-pointer place-items-center gap-2 rounded-2xl bg-gray-200 px-4 py-2 text-sm dark:bg-neutral-700"
              >
                <Icon icon={mdiMagnify} size="1.25rem" />
                <Text>Search</Text>
                <span class="rounded-lg bg-white px-2 py-0.5 dark:bg-neutral-900">/</span>
              </button>
            </div>
            <IconButton
              icon={mdiMagnify}
              shape="round"
              variant="ghost"
              color="secondary"
              aria-label="Search"
              class="lg:hidden"
              onclick={() => commandPaletteManager.open()}
            />
          {/if}
          <ThemeSwitcher size="medium" />
        </ControlBarOverflow>
      </ControlBar>
    </AppShellHeader>

    <AppShellSidebar bind:open>
      <div class="my-4 me-4">
        <NavbarItem
          title="Home"
          icon={mdiHomeOutline}
          activeIcon={mdiHome}
          href="/"
          isActive={() => page.url.pathname === '/'}
        />
        {#each componentGroups as group (group.title)}
          <NavbarGroup title={group.title} />
          {#each group.components as component (component.name)}
            {@const href = asComponentHref(component.name)}
            <NavbarItem
              {href}
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
</TooltipProvider>
