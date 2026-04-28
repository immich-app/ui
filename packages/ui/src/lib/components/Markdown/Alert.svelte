<script lang="ts">
  import Alert from '$lib/components/Alert/Alert.svelte';
  import type { Color, IconLike, MarkdownAlertVariant } from '$lib/types.js';
  import {
    mdiAlertCircleOutline,
    mdiAlertOctagonOutline,
    mdiAlertOutline,
    mdiCheckCircleOutline,
    mdiCloseCircleOutline,
    mdiInformationOutline,
    mdiLightbulbOutline,
  } from '@mdi/js';
  import type { Snippet } from 'svelte';

  type Props = {
    variant?: MarkdownAlertVariant;
    title?: string;
    icon?: IconLike;
    children: Snippet;
  };

  const { variant = 'note', icon, title, children }: Props = $props();

  const variants: Record<MarkdownAlertVariant, { color: Color; icon: string; title: string }> = {
    note: { color: 'info', icon: mdiInformationOutline, title: 'Note' },
    tip: { color: 'success', icon: mdiLightbulbOutline, title: 'Tip' },
    important: { color: 'primary', icon: mdiAlertCircleOutline, title: 'Important' },
    warning: { color: 'warning', icon: mdiAlertOutline, title: 'Warning' },
    caution: { color: 'danger', icon: mdiAlertOctagonOutline, title: 'Caution' },
    info: { color: 'info', icon: mdiInformationOutline, title: 'Info' },
    success: { color: 'success', icon: mdiCheckCircleOutline, title: 'Success' },
    danger: { color: 'danger', icon: mdiCloseCircleOutline, title: 'Danger' },
  };

  const config = $derived(variants[variant]);
</script>

<Alert color={config.color} icon={icon ?? config.icon} title={title ?? config.title} shape="rectangle" {children} />
