<script lang="ts">
  import Code from '$lib/components/Code/Code.svelte';
  import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
  import * as languages from 'svelte-highlight/languages';

  type Props = {
    code: string;
    multiline?: boolean;
    lang?: string;
  };

  const { code, lang, multiline }: Props = $props();

  const getLanguage = (lang: string | undefined) => {
    switch (lang) {
      case 'js': {
        lang = 'javascript';
        break;
      }

      case 'ts': {
        lang = 'typescript';
        break;
      }
    }

    if (lang) {
      return languages[lang as keyof typeof languages];
    }
  };

  let language = $derived(getLanguage(lang) ?? languages.plaintext);
</script>

{#if multiline}
  <div class="mt-2 mb-2">
    <CodeBlock {code} {language} />
  </div>
{:else}
  <Code>{code}</Code>
{/if}
