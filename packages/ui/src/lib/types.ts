import type { Translations } from '$lib/services/translation.svelte.js';
import type { Component, Snippet } from 'svelte';
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLTextareaAttributes,
} from 'svelte/elements';

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type TextColor = Color | 'muted';
export type TextVariant = 'italic';
export type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold' | 'extra-bold';
export type HeadingColor = TextColor;
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type ModalSize = Size | 'full';
export type ContainerSize = ModalSize;
export type MenuSize = ModalSize;
export type HeadingSize = Size | 'title';
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type Shape = 'rectangle' | 'semi-round' | 'round';
export type Variants = 'filled' | 'outline' | 'ghost';
export type ToastVariant = 'filled' | 'outline';
export type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type TranslationProps<T extends keyof Translations> = { [K in T]?: string };

export type IconLike = string | { path: string };

export type IconProps = {
  icon: IconLike;
  title?: string;
  description?: string;
  size?: string;
  color?: Color | 'currentColor' | string;
  flipped?: boolean;
  flopped?: boolean;
  spin?: boolean;
  class?: string;
  viewBox?: string;
  strokeWidth?: number;
  strokeColor?: string;
};

type ButtonOrAnchor =
  | ({ href?: never } & Omit<HTMLButtonAttributes, 'color' | 'size'>)
  | ({ href: string } & Omit<HTMLAnchorAttributes, 'color' | 'size'>);

type ButtonBase = {
  size?: Size;
  variant?: Variants;
  class?: string;
  color?: Color;
  shape?: Shape;
  loading?: boolean;
};

export type ButtonProps = ButtonBase & {
  ref?: HTMLElement | null;
  fullWidth?: boolean;
  leadingIcon?: IconLike;
  trailingIcon?: IconLike;
} & ButtonOrAnchor;

export type CloseButtonProps = {
  size?: Size;
  color?: Color;
  variant?: Variants;
  class?: string;
  translations?: TranslationProps<'close'>;
} & ButtonOrAnchor;

export type IconButtonProps = ButtonBase & {
  icon: IconLike;
  flipped?: boolean;
  flopped?: boolean;
  'aria-label': string;
} & ButtonOrAnchor;

type StackBaseProps = {
  class?: string;
  children: Snippet;
  gap?: Gap;
  wrap?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export type ChildData = {
  snippet: Snippet;
  class?: string;
};

export type StackProps = StackBaseProps & {
  align?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column';
};
export type HStackProps = StackBaseProps;
export type VStackProps = StackBaseProps;

export type LabelProps = {
  label?: string;
  class?: string;
  size?: Size;
  color?: TextColor;
  children?: Snippet;
} & HTMLLabelAttributes;

export type FieldContext = {
  label?: string;
  description?: string;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
} & LabelProps;

type BaseInputProps<T> = {
  ref?: HTMLInputElement | null;
  class?: string;
  size?: Size;
  value?: T;
  shape?: Shape;
  inputSize?: HTMLInputAttributes['size'];
  leadingIcon?: IconLike | Snippet;
  trailingIcon?: IconLike | Snippet;
  trailingText?: string;
  containerRef?: HTMLElement | null;
} & Omit<HTMLInputAttributes, 'size' | 'type' | 'value'>;

export type InputProps = BaseInputProps<string> & {
  type?: HTMLInputAttributes['type'];
};

export type NumberInputProps = BaseInputProps<number | undefined>;

export type PasswordInputProps = BaseInputProps<string> & {
  translations?: TranslationProps<'show_password' | 'hide_password'>;
  isVisible?: boolean;
};

export type TextareaProps = {
  ref?: HTMLTextAreaElement | null;
  containerRef?: HTMLElement | null;
  class?: string;
  value?: string;
  size?: Size;
  shape?: Shape;
  grow?: boolean;
} & HTMLTextareaAttributes;

export type SelectItem = {
  label?: string;
  value: string;
  disabled?: boolean;
};

export type SelectCommonProps<T extends SelectItem> = {
  data: string[] | T[];
  size?: Size;
  shape?: Shape;
  placeholder?: string;
  class?: string;
};

export type SelectProps<T extends SelectItem> = SelectCommonProps<T> & {
  value?: T;
  onChange?: (value: T) => void;
};

export type MultiSelectProps<T extends SelectItem> = SelectCommonProps<T> & {
  values?: T[];
  onChange?: (values: T[]) => void;
};

export type ToastId = { id: string };

type ToastCommonProps = {
  color?: Color;
  variant?: ToastVariant;
};

export type ToastContentProps = ToastCommonProps & {
  title?: string | Snippet;
  description?: string | Snippet;
  icon?: IconLike | false;
  onClose?: () => void;
  children?: Snippet;
};

export type ToastContainerProps = ToastCommonProps & {
  shape?: Shape;
  size?: ContainerSize;
} & Omit<HTMLAttributes<HTMLElement>, 'title' | 'color' | 'size'>;

export type ToastProps = ToastContentProps & ToastContainerProps;

type Closable = { onClose: () => void };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ToastCustom<T extends Closable = any> = {
  component: Component<T>;
  props: T;
};

export type ToastShow = {
  title?: string;
  description?: string;
  color?: Color;
  shape?: Shape;
  icon?: IconLike | false;
  size?: ContainerSize;
  variant?: ToastVariant;
};

export type ToastOptions = {
  id?: string;
  timeout?: number;
  closable?: boolean;
};

export type ToastItem = ToastProps | ToastCustom;

export type ToastButton = {
  label: string;
  size?: Size;
  color?: Color;
  shape?: Shape;
  variant?: Variants;
  onClick: () => void;
};

export type MenuSelectHandler = (context: { event: Event; item: MenuItem }) => void;

export type MenuItem = {
  title: string;
  icon: IconLike;
  color?: Color;
  onSelect?: MenuSelectHandler;
};

export enum MenuItemType {
  Divider = 'divider',
}

export type MenuItems = Array<MenuItem | MenuItemType>;

export type MenuProps = {
  items: MenuItems;
  bottomItems?: MenuItem[];
  size?: MenuSize;
} & HTMLAttributes<HTMLDivElement>;

export type ContextMenuPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type ContextMenuBaseProps = MenuProps & {
  position?: ContextMenuPosition;
};

export type ContextMenuProps = ContextMenuBaseProps & {
  onClose: () => void;
  anchor: HTMLElement;
};
