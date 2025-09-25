<script lang="ts">
  import type { Color, Size } from '@immich/ui';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: Color;
    width?: Size | 'full';
    height?: Size | 'full';
  };

  const { width = 'medium', height = 'medium', color = 'primary' }: Props = $props();

  const styles = tv({
    base: '',
    variants: {
      color: {
        primary: 'bg-primary',
        secondary: 'bg-dark',
        success: 'bg-success',
        danger: 'bg-danger',
        warning: 'bg-warning',
        info: 'bg-info',
      },
      width: {
        tiny: 'w-4',
        small: 'w-8',
        medium: 'w-16',
        large: 'w-32',
        giant: 'w-64',
        full: 'w-full',
      },
      height: {
        tiny: 'h-4',
        small: 'h-8',
        medium: 'h-16',
        large: 'h-32',
        giant: 'h-64',
        full: 'h-full',
      },
    },
  });
</script>

<div class={cleanClass(styles({ width, height, color }))}></div>
