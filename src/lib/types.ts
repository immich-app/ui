import type { Translations } from '$lib/services/translation.svelte.js';
import type { Snippet } from 'svelte';
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
	HTMLInputAttributes,
	HTMLLabelAttributes,
} from 'svelte/elements';

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type TextColor = Color | 'muted';
export type HeadingColor = TextColor;
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type ModalSize = Size | 'full';
export type ContainerSize = ModalSize;
export type HeadingSize = Size | 'title';
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type Shape = 'rectangle' | 'semi-round' | 'round';
export type Variants = 'filled' | 'outline' | 'ghost';
export type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

export type TranslationProps<T extends keyof Translations> = { [K in T]?: string };

export type IconProps = {
	icon: string;
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
	| ({ href?: never } & HTMLButtonAttributes)
	| ({ href: string } & HTMLAnchorAttributes);

type ButtonBase = {
	size?: Size;
	variant?: Variants;
	class?: string;
	color?: Color;
	shape?: Shape;
};

export type ButtonProps = ButtonBase & {
	fullWidth?: boolean;
	loading?: boolean;
	leadingIcon?: string;
	trailingIcon?: string;
} & ButtonOrAnchor;

export type CloseButtonProps = {
	size?: Size;
	variant?: Variants;
	class?: string;
	translations?: TranslationProps<'close'>;
} & ButtonOrAnchor;

export type IconButtonProps = ButtonBase & {
	icon: string;
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

type BaseInputProps = {
	class?: string;
	value?: string;
	size?: Size;
	shape?: Shape;
	inputSize?: HTMLInputAttributes['size'];
} & Omit<HTMLInputAttributes, 'size' | 'type'>;

export type InputProps = BaseInputProps & {
	containerRef?: HTMLElement | null;
	type?: HTMLInputAttributes['type'];
	trailingIcon?: Snippet;
};

export type PasswordInputProps = BaseInputProps & {
	translations?: TranslationProps<'showPassword' | 'hidePassword'>;
	isVisible?: boolean;
};

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
