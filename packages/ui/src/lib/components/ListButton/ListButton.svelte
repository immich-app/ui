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

  const styles = tv({
    base: 'hover:bg-light-200 dark:hover:bg-light-300 text-dark',
    variants: {
      selected: {
        true: 'bg-light-200 dark:bg-light-300',
        false: '',
      },
    },
  });
</script>

<Button bind:ref fullWidth class={cleanClass(styles({ selected }), className)} {...props}>
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
