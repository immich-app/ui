<script lang="ts">
  import Card from '$lib/components/Card/Card.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { theme } from '$lib/services/theme.svelte.js';
  import { Theme, type TranslationProps } from '$lib/types.js';
  import { t } from '@immich/ui/services/translation.svelte.js';
  import { mdiCheckCircle, mdiContentCopy } from '@mdi/js';
  import { Highlight, LineNumbers } from 'svelte-highlight';
  import { typescript, type LanguageType } from 'svelte-highlight/languages';
  import vsLight from 'svelte-highlight/styles/vs';
  import vsDark from 'svelte-highlight/styles/vs2015';

  type Props = {
    code: string;
    language?: LanguageType<string>;
    lineNumbers?: boolean;
    lightTheme?: string;
    darkTheme?: string;
    copy?: boolean;
    translations?: TranslationProps<'code_copy' | 'code_copied'>;
  };

  let {
    code,
    copy = true,
    language = typescript,
    lineNumbers,
    lightTheme = vsLight,
    darkTheme = vsDark,
    translations,
  }: Props = $props();

  let copied = $state(false);
  let canCopy = $derived<boolean>(copy && !!(navigator.clipboard && globalThis.ClipboardItem));

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => (copied = false), 3000);
    } catch (error) {
      console.error('Failed to copy code to clipboard', error);
    }
  };
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html theme.value === Theme.Dark ? darkTheme : lightTheme}
</svelte:head>

<Card class="relative">
  <div class="text-sm">
    {#if canCopy}
      <span class="absolute top-2 right-2 cursor-pointer">
        <IconButton
          icon={copied ? mdiCheckCircle : mdiContentCopy}
          size="small"
          aria-label={copied ? t('code_copied', translations) : t('code_copy', translations)}
          variant="ghost"
          color={copied ? 'success' : 'secondary'}
          onclick={handleCopy}
        />
      </span>
    {/if}
    {#if lineNumbers}
      <Highlight {language} {code} let:highlighted>
        <LineNumbers {highlighted} hideBorder wrapLines />
      </Highlight>
    {:else}
      <Highlight {language} {code} />
    {/if}
  </div>
</Card>
