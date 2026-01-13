<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
  import Button from '$lib/internal/Button.svelte';
  import type { ButtonProps, IconLike } from '$lib/types.js';
  import { cleanClass, isIconLike } from '$lib/utilities/internal.js';
  import { mdiCheck } from '@mdi/js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    selected = false,
    class: className,
    selectedIcon = mdiCheck,
    children,
    ...props
  }: ButtonProps & {
    color?: never;
    selected?: boolean;
    disabled?: boolean;
    selectedIcon?: IconLike | Snippet | false;
  } = $props();

  const color = $derived(selected ? 'secondary' : 'primary');

  const styles = tv({
    base: 'justify-between',
    variants: {
      color: {
        primary: 'dark:bg-primary-200 dark:hover:bg-primary-300 bg-light-200 hover:bg-light-300 text-dark',
        secondary: 'bg-light-300 dark:bg-primary-300 text-dark',
      },
    },
  });
</script>

<Button bind:ref fullWidth {color} class={cleanClass(styles({ color }), className)} {...props}>
  {#if selectedIcon}
    <HStack fullWidth class="justify-between">
      {@render children?.()}
      {#if selected}
        {#if isIconLike(selectedIcon)}
          <Icon icon={selectedIcon} />
        {:else}
          {@render selectedIcon()}
        {/if}
      {/if}
    </HStack>
  {:else}
    {@render children?.()}
  {/if}
</Button>
