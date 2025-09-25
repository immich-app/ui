<script lang="ts">
  import { styles } from '$lib/styles.js';
  import type { LabelProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';

  const { label, size, color, class: className, children, ...restProps }: LabelProps = $props();
</script>

<label class={cleanClass(styles.label({ size, color }), className)} {...restProps}>
  {#if label}{label}{/if}
  {@render children?.()}
</label>
