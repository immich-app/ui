<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { theme, toggleTheme } from '$lib/services/theme.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import {
    Theme,
    type Color,
    type Size,
    type TranslationProps,
    type Variants,
  } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

  type Props = {
    size?: Size;
    class?: string;
    color?: Color;
    variant?: Variants;
    translations?: TranslationProps<'dark_theme'>;
    onChange?: (theme: Theme) => void;
  };

  const {
    color = 'primary',
    variant = 'ghost',
    size,
    class: className,
    translations,
    onChange,
  }: Props = $props();

  const handleToggleTheme = () => {
    toggleTheme();
    onChange?.(theme.value);
  };

  const themeIcon = $derived(theme.value === Theme.Light ? mdiWeatherSunny : mdiWeatherNight);
</script>

<IconButton
  shape="round"
  {color}
  {size}
  {variant}
  icon={themeIcon}
  onclick={handleToggleTheme}
  class={cleanClass(className)}
  aria-label={t('dark_theme', translations)}
  role="switch"
  aria-checked={theme.value === Theme.Dark}
/>
