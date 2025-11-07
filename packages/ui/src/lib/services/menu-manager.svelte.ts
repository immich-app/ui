import ContextMenu from '$lib/components/ContextMenu/ContextMenu.svelte';
import { modalManager } from '$lib/services/modal-manager.svelte.js';
import type { ContextMenuBaseProps } from '$lib/types.js';

class MenuManager {
  show(props: ContextMenuBaseProps) {
    return modalManager.show(ContextMenu, {
      ...props,
    });
  }
}

export const menuManager = new MenuManager();
