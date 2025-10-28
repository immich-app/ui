<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    effect?: 'hover' | 'always';
    text?: string;
    size?: Size;
    children?: Snippet;
  };

  const { effect = 'hover', text = 'Supporter', size = 'medium', children }: Props = $props();

  const iconSize: Record<Size, Size> = {
    tiny: 'tiny',
    small: 'tiny',
    medium: 'small',
    large: 'medium',
    giant: 'medium',
  };

  const containerStyles = tv({
    base: 'bg-secondary flex place-items-center gap-2 overflow-hidden rounded-lg transition-all',
    variants: {
      size: {
        tiny: 'px-2 py-1',
        small: 'px-2 py-1',
        medium: 'px-3 py-2',
        large: 'px-3 py-2',
        giant: 'px-3 py-2',
      },
      effect: {
        hover: 'supporter-effect-hover border-dark/25 border',
        always: 'supporter-effect shadow',
      },
    },
  });
</script>

<div class={cleanClass(containerStyles({ effect, size }))}>
  {#if children}
    {@render children()}
  {:else}
    <Logo size={iconSize[size]} variant="icon" />
    <Text fontWeight="normal" color="secondary" {size}>{text}</Text>
  {/if}
</div>

<style>
  .supporter-effect,
  .supporter-effect-hover:hover {
    position: relative;
    background-clip: padding-box;
    animation: gradient 10s ease infinite;
    z-index: 1;
  }

  .supporter-effect:after,
  .supporter-effect-hover:hover:after {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(
      to right,
      rgba(16, 132, 254, 0.15),
      rgba(229, 125, 175, 0.15),
      rgba(254, 36, 29, 0.15),
      rgba(255, 183, 0, 0.15),
      rgba(22, 193, 68, 0.15)
    );
    content: '';
    animation: gradient 10s ease infinite;
    background-size: 400% 400%;
    z-index: -1;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
