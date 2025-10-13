<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { LabelProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  const { label, size, color, class: className, children, ...restProps }: LabelProps = $props();

  const styles = tv({
    base: '',
    variants: {
      size: styleVariants.textSize,
      color: styleVariants.textColor,
    },
  });
</script>

<label class={cleanClass(styles({ size, color }), className)} {...restProps}>
  {#if label}{label}{/if}
  {@render children?.()}
</label>
