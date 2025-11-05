<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import Navbar from '$docs/components/Navbar.svelte';
  import { componentGroups } from '$docs/constants.js';
  import { asComponentHref } from '$docs/utilities.js';
  import '$lib/theme/default.css';
  import {
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    asText,
    CommandPaletteContext,
    commandPaletteManager,
    Icon,
    IconButton,
    initializeTheme,
    NavbarGroup,
    NavbarItem,
    siteCommands,
    SiteFooter,
    Text,
    theme,
    ThemeSwitcher,
    toggleTheme,
    type CommandItem,
  } from '@immich/ui';
  import { mdiHome, mdiHomeOutline, mdiMagnify, mdiThemeLightDark } from '@mdi/js';
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

  const globalCommands: CommandItem[] = [];
  const commands: CommandItem[] = [...siteCommands];

  globalCommands.push({
    icon: mdiThemeLightDark,
    iconClass: 'text-gray-700 dark:text-gray-200',
    type: 'Command',
    title: 'Toggle theme',
    description: 'Switch between light and dark theme',
    shortcuts: [
      { shift: true, key: 't' },
      { alt: true, key: 't' },
    ],
    action: () => toggleTheme(),
    text: asText('Command', 'light', 'dark', 'theme', 'toggle'),
  });

  // components
  for (const group of componentGroups) {
    commands.push(
      ...group.components.map((component) => {
        const href = asComponentHref(component.name);

        return {
          icon: component.icon,
          iconClass: '',
          type: 'Component',
          title: component.name,
          description: `View the ${component.name} component`,
          href,
          text: asText('Component', group.title, component.name, href),
        };
      }),
    );
  }

  commandPaletteManager.enable();
  commandPaletteManager.setTranslations({
    command_palette_prompt_default: 'Quickly find components, links, and commands',
  });
</script>

<AppShell>
  <AppShellHeader>
    <Navbar theme={theme.value} onToggleSidebar={() => (open = !open)}>
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
          {@const href = asComponentHref(component.name)}
          <NavbarItem
            {href}
            isActive={() => page.url.pathname === href}
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

<CommandPaletteContext commands={globalCommands} global />
<CommandPaletteContext {commands} />
