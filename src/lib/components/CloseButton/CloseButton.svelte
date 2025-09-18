<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import type { CloseButtonProps } from '$lib/types.js';
  import { mdiClose } from '@mdi/js';

  const {
    size = 'medium',
    variant = 'ghost',
    translations,
    ...restProps
  }: CloseButtonProps = $props();
</script>

<IconButton
  {...restProps}
  icon={mdiClose}
  shape="round"
  {variant}
  {size}
  color="secondary"
  aria-label={t('close', translations)}
/>
