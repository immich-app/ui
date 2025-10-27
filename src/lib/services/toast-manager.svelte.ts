import ToastPanel from '$lib/components/Toast/ToastPanel.svelte';
import { t } from '$lib/services/translation.svelte.js';
import type { ToastCustom, ToastId, ToastItem, ToastOptions, ToastShow } from '$lib/types.js';
import { generateId } from '$lib/utilities/internal.js';
import { mount, unmount } from 'svelte';

export const isCustomToast = (item: ToastItem): item is ToastCustom => !!(item as ToastCustom).component;

const expand = (item: string | ToastShow): ToastShow => (typeof item === 'string' ? { description: item } : item);

class ToastManager {
  #ref: unknown;
  #props = $state({ items: [] as Array<ToastItem & ToastId> });

  show(item: ToastShow, options?: ToastOptions) {
    return this.open(item, options);
  }

  custom(item: ToastCustom, options?: ToastOptions) {
    return this.open(item, options);
  }

  open(item: ToastItem, options?: ToastOptions) {
    const { timeout = 3000, closable = true, id = generateId() } = options || {};

    const toast = item as ToastId;

    toast.id = id;

    if (closable) {
      const onClose = () => this.remove(toast);
      if (isCustomToast(item)) {
        item.props.onClose = onClose;
      } else {
        item.onClose = onClose;
      }
    }

    this.#props.items.push(toast);
    void this.mount();

    if (timeout) {
      setTimeout(() => this.remove(toast), timeout);
    }
  }

  async unmount() {
    if (this.#ref) {
      await unmount(this.#ref);
    }
  }

  success(item: string | ToastShow) {
    this.show({ title: t('toast_success_title'), color: 'success', ...expand(item) });
  }

  info(item: string | ToastShow) {
    this.show({ title: t('toast_info_title'), color: 'info', ...expand(item) });
  }

  warning(item: string | ToastShow) {
    this.show({ title: t('toast_warning_title'), color: 'warning', ...expand(item) });
  }

  danger(item: string | ToastShow) {
    this.show({ title: t('toast_danger_title'), color: 'danger', ...expand(item) });
  }

  async mount() {
    if (!this.#ref) {
      this.#ref = await mount(ToastPanel, {
        target: document.body,
        props: this.#props,
      });
    }
  }

  private remove(target: ToastItem & ToastId) {
    this.#props.items = this.#props.items.filter((item) => item.id !== target.id);
  }
}

export const toastManager = new ToastManager();
