import { mount, unmount, type Component, type ComponentProps } from 'svelte';
import ConfirmModal from '$lib/components/ConfirmModal/ConfirmModal.svelte';

// if `T = () => void`, `R` will be `unknown` which we turn into `void` instead
type OnCloseData<T> = T extends { onClose: (data: infer R) => void }
  ? unknown extends R
    ? void
    : R
  : T extends { onClose: (data?: infer R) => void }
    ? R | undefined
    : never;
type ExtendsEmptyObject<T> = keyof T extends never ? never : T;
type StripParamIfOptional<T> = T extends void ? [] : [T];

// if the modal does not expect any props, makes the props param optional but also allows passing `{}` and `undefined`
type OptionalParamIfEmpty<T> = ExtendsEmptyObject<T> extends never ? [] | [Record<string, never> | undefined] : [T];

class ModalManager {
  show<T extends object>(Component: Component<T>, ...props: OptionalParamIfEmpty<Omit<T, 'onClose'>>) {
    return this.open(Component, ...props).onClose;
  }

  open<T extends object, K = OnCloseData<T>>(
    Component: Component<T>,
    ...props: OptionalParamIfEmpty<Omit<T, 'onClose'>>
  ) {
    type OnCloseParams = StripParamIfOptional<K>;
    let modal: object = {};
    let onClose: (...args: OnCloseParams) => Promise<void>;

    const deferred = new Promise<K>((resolve) => {
      onClose = async (...args: OnCloseParams) => {
        await unmount(modal);
        // make sure bits-ui clean up finishes before resolving
        setTimeout(() => resolve(args[0] as K), 10);
      };

      modal = mount(Component, {
        target: document.body,
        props: {
          ...((props?.[0] ?? {}) as T),
          onClose,
        },
      });
    });

    return {
      onClose: deferred,
      close: (...args: OnCloseParams) => onClose(...args),
    };
  }

  showDialog(options: Omit<ComponentProps<typeof ConfirmModal>, 'onClose'>) {
    return this.show(ConfirmModal, options);
  }
}

export const modalManager = new ModalManager();
