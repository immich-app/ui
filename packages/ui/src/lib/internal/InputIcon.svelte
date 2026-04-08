<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import type { IconLike, Size } from '$lib/types.js';
  import { isIconLike } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    icon?: IconLike | Snippet;
    size?: Size;
  };

  const { icon, size }: Props = $props();

  const iconStyles = tv({
    base: 'flex shrink-0 items-center justify-center',
    variants: {
      size: {
        tiny: 'w-6',
        small: 'w-8',
        medium: 'w-10',
        large: 'w-12',
        giant: 'w-14',
      },
    },
  });
</script>

{#if icon}
  <div tabindex="-1" class={iconStyles({ size })}>
    {#if isIconLike(icon)}
      <Icon size="60%" {icon} />
    {:else}
      {@render icon()}
    {/if}
  </div>
{/if}
