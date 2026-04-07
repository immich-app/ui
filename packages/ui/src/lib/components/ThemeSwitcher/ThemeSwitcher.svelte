<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { themeManager } from '$lib/services/theme-manager.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import { Theme, type Color, type Size, type TranslationProps, type Variants } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

  type Props = {
    size?: Size;
    class?: string;
    color?: Color;
    variant?: Variants;
    translations?: TranslationProps<'dark_theme'>;
    onChange?: (theme: Theme) => void;
  };

  const { color = 'primary', variant = 'ghost', size, class: className, translations, onChange }: Props = $props();

  const handleChange = () => {
    themeManager.toggle();
    onChange?.(themeManager.value);
  };

  const themeIcon = $derived(themeManager.value === Theme.Light ? mdiWeatherSunny : mdiWeatherNight);
</script>

<IconButton
  shape="round"
  {color}
  {size}
  {variant}
  icon={themeIcon}
  onclick={handleChange}
  class={cleanClass(className)}
  aria-label={t('dark_theme', translations)}
  role="switch"
  aria-checked={themeManager.value === Theme.Dark}
/>
