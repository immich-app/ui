<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import Navbar from '$docs/components/Navbar.svelte';
  import { componentGroups } from '$docs/constants.js';
  import { asComponentHref } from '$docs/utilities.js';
  import {
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    asText,
    CommandPalette,
    commandPaletteManager,
    IconButton,
    initializeTheme,
    Input,
    NavbarGroup,
    NavbarItem,
    siteCommands,
    SiteFooter,
    theme,
    ThemeSwitcher,
    toggleTheme,
  } from '@immich/ui';
  import '@immich/ui/theme/default.css';
  import {
    mdiHome,
    mdiHomeOutline,
    mdiMagnify,
    mdiSlashForwardBox,
    mdiThemeLightDark,
  } from '@mdi/js';
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

  commandPaletteManager.reset();

  // links
  commandPaletteManager.addCommands(siteCommands);

  // commands
  commandPaletteManager.addCommands([
    {
      icon: mdiThemeLightDark,
      iconClass: 'text-gray-700 dark:text-gray-200',
      type: 'Command',
      title: 'Toggle theme',
      description: 'Switch between light and dark theme',
      action: () => toggleTheme(),
      text: asText('Command', 'light', 'dark', 'theme', 'toggle'),
    },
  ]);

  // components
  for (const group of componentGroups) {
    commandPaletteManager.addCommands(
      group.components.map((component) => ({
        icon: component.icon,
        iconClass: '',
        type: 'Component',
        title: component.name,
        description: `View the ${component.name} component`,
        href: asComponentHref(component.name),
        text: asText('Component', group.title, component.name),
      })),
    );
  }

  commandPaletteManager.enable();
</script>

<AppShell>
  <AppShellHeader>
    <Navbar theme={theme.value} onToggleSidebar={() => (open = !open)}>
      {#if commandPaletteManager.isEnabled}
        <div class="hidden max-w-40 place-items-center p-1 lg:flex">
          <Input
            onfocus={() => commandPaletteManager.open()}
            leadingIcon={mdiMagnify}
            placeholder="Search..."
            class="bg-subtle! rounded-full border px-2 py-2"
            trailingIcon={mdiSlashForwardBox}
          />
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
    </Navbar>
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
          <NavbarItem
            href={asComponentHref(component.name)}
            title={component.name}
            icon={component.icon}
            activeIcon={component.activeIcon}
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

<CommandPalette
  translations={{ command_palette_prompt_default: 'Quickly find components, links, and commands' }}
/>
