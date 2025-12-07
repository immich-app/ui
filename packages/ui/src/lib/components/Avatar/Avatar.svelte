<script lang="ts">
  import type { Size } from '$lib/types.js';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size;
    color?: 'primary' | 'pink' | 'red' | 'yellow' | 'blue' | 'green' | 'purple' | 'orange' | 'gray' | 'amber';
    name: string;
  };

  const { color = 'primary', size = 'medium', name }: Props = $props();

  const styles = tv({
    base: 'flex h-full w-full items-center justify-center font-medium text-white select-none',
    variants: {
      size: {
        tiny: 'h-5 w-5 text-xs',
        small: 'h-7 w-7 text-sm',
        medium: 'h-10 w-10 text-base',
        large: 'h-12 w-12 text-lg',
        giant: 'h-16 w-16 text-xl',
      },
      color: {
        primary: 'bg-primary text-light',
        pink: 'bg-pink-400',
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
        purple: 'bg-purple-600',
        orange: 'bg-orange-600',
        gray: 'bg-gray-600',
        amber: 'bg-amber-600',
        blue: 'bg-blue-500',
        green: 'bg-green-600',
      },
    },
  });

  const wrapper = tv({
    base: 'overflow-hidden rounded-full shadow-md',
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.at(0))
      .join('')
      .substr(0, 2)
      .toUpperCase();
  };

  const initials = $derived(getInitials(name));
</script>

<figure class={wrapper()}>
  <span class={styles({ size, color })}>{initials}</span>
</figure>
