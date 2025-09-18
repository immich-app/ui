<script lang="ts">
  import { resolve } from '$app/paths';
  import { IconButton, Logo, Theme } from '@immich/ui';
  import { mdiMenu } from '@mdi/js';
  import type { Snippet } from 'svelte';

  type Props = {
    theme?: Theme;
    children?: Snippet;
    onToggleSidebar?: () => void;
  };

  const { children, theme = Theme.Dark, onToggleSidebar }: Props = $props();
</script>

<nav class="{theme} flex items-center gap-2 p-2">
  <IconButton
    shape="round"
    color="secondary"
    variant="ghost"
    size="medium"
    aria-label="Main menu"
    icon={mdiMenu}
    onclick={() => onToggleSidebar?.()}
    class="md:hidden"
  />
  <a href={resolve('/')} class="flex grow gap-2 text-4xl">
    <Logo variant="inline" />
  </a>
  {@render children?.()}
</nav>
