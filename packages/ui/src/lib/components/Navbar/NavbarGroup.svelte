<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import type { FontWeight, NavbarVariant, Size, TextColor } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  type Props = {
    title: string;
    size?: Size;
    color?: TextColor;
    fontWeight?: FontWeight;
    variant?: NavbarVariant;
    inline?: boolean;
    class?: string;
  };

  let { title, size = 'small', variant, fontWeight, color, class: className }: Props = $props();

  const styles = tv({
    base: 'ps-6 transition-all duration-200',
    variants: {
      variant: {
        compact: 'py-4',
        default: 'py-6',
      },
    },
  });
</script>

<div class={cleanClass(styles({ variant: variant ?? 'default' }), className)}>
  <Text {color} {size} {fontWeight}>{title}</Text>
</div>
