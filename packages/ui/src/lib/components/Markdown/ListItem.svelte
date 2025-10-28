<script lang="ts">
  import Checkbox from '$lib/components/Checkbox/Checkbox.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    checked?: boolean;
    task?: boolean;
    children: Snippet;
  };

  const { children, checked, task }: Props = $props();
</script>

<li class:list-none={task}>
  {#if task}
    <Checkbox {checked} readonly size="tiny" color="secondary" />
  {/if}
  {@render children?.()}
</li>
