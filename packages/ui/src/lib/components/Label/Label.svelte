<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { LabelProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  const { label, size, color, class: className, children, requiredIndicator, ...restProps }: LabelProps = $props();

  const styles = tv({
    base: 'text-sm font-medium',
    variants: {
      size: styleVariants.textSize,
      color: styleVariants.textColor,
    },
  });
</script>

<div class="inline-block">
  <label class={cleanClass(styles({ size, color }), className)} {...restProps}>
    {#if label}{label}{/if}
    {@render children?.()}
  </label>

  {#if requiredIndicator}
    <span aria-hidden="true" class="text-danger">*</span>
  {/if}
</div>
