<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import type { GithubLinkProps } from '$lib/types.js';
  import { asGithubLink } from '$lib/utilities/common.js';
  import { siGithub } from 'simple-icons';

  const { org, repo, number, type, icon = true, ...rest }: GithubLinkProps = $props();
  const { href, text } = $derived(asGithubLink({ org, repo, number, type }));
</script>

<span class="flex items-center gap-1">
  {#if icon}
    <Icon icon={siGithub} />
  {/if}
  <Link {...rest} {href}>
    {text}
  </Link>
</span>
