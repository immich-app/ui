<script lang="ts">
  import { beforeNavigate, goto } from '$app/navigation';
  import { page } from '$app/state';
  import Navbar from '$docs/components/Navbar.svelte';
  import { componentGroups } from '$docs/constants.js';
  import { Font, initializeFont, setFont, uiFont } from '$docs/font.svelte.js';
  import { asComponentHref } from '$docs/utilities.js';
  import CommandPaletteDefaultProvider from '$lib/components/CommandPalette/CommandPaletteDefaultProvider.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import '$lib/theme/default.css';
  import {
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    asText,
    commandPaletteManager,
    Field,
    FormModal,
    Icon,
    IconButton,
    initializeTheme,
    NavbarGroup,
    NavbarItem,
    Select,
    siteCommands,
    SiteFooter,
    Text,
    theme,
    ThemeSwitcher,
    toastManager,
    toggleTheme,
    TooltipProvider,
    type ActionItem,
    type SelectItem,
  } from '@immich/ui';
  import { mdiCog, mdiHome, mdiHomeOutline, mdiMagnify, mdiThemeLightDark } from '@mdi/js';
  import { MediaQuery } from 'svelte/reactivity';
  import '../app.css';

  initializeTheme();
  initializeFont();

  let { children } = $props();

  const sidebar = new MediaQuery(`min-width: 850px`);
  let open = $derived(sidebar.current);

  beforeNavigate(() => {
    if (!sidebar.current) {
      open = false;
    }
  });

  toastManager.setOptions({ class: 'top-14.5' });

  const commands: ActionItem[] = [...siteCommands];

  commands.push({
    icon: mdiThemeLightDark,
    iconClass: 'text-gray-700 dark:text-gray-200',
    type: 'Command',
    title: 'Toggle theme',
    description: 'Switch between light and dark theme',
    shortcuts: [
      { shift: true, key: 't' },
      { alt: true, key: 't' },
    ],
    onAction: () => toggleTheme(),
    searchText: asText('Command', 'light', 'dark', 'theme', 'toggle'),
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
          onAction: () => goto(href),
          searchText: asText('Component', group.title, component.name, href),
        };
      }),
    );
  }

  commandPaletteManager.enable();
  commandPaletteManager.setTranslations({
    command_palette_prompt_default: 'Quickly find components, links, and commands',
  });

  let isPreferenceModalOpen = $state(false);

  const fontOptions: SelectItem[] = [
    { value: Font.Immich, label: 'Immich (Google Sans)' },
    { value: Font.System, label: 'System Font' },
  ];

  const getCurrentFont = () => fontOptions.find((f) => f.value === uiFont) ?? fontOptions[0];
  let selectedFont = $state(getCurrentFont());

  const handleFontChange = (item: SelectItem) => {
    setFont(item.value as Font);
    selectedFont = item;
  };
</script>

<TooltipProvider>
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

        <IconButton
          shape="round"
          color="secondary"
          variant="ghost"
          size="medium"
          aria-label="Preferences"
          icon={mdiCog}
          onclick={() => (isPreferenceModalOpen = true)}
        />
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

  <CommandPaletteDefaultProvider actions={commands} name="General" />

  {#if isPreferenceModalOpen}
    <FormModal
      title="Preferences"
      icon={mdiCog}
      onClose={() => (isPreferenceModalOpen = false)}
      onSubmit={() => (isPreferenceModalOpen = false)}
      submitText="Done"
      cancelText="Close"
    >
      <Stack gap={6}>
        <Label label="Theme">
          <ThemeSwitcher size="medium" />
        </Label>

        <Field label="Font">
          <Select data={fontOptions} value={selectedFont} onChange={handleFontChange} placeholder="Select font" />
        </Field>
      </Stack>
    </FormModal>
  {/if}
</TooltipProvider>
