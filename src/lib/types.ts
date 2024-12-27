import type { Snippet } from 'svelte';
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
	HTMLInputAttributes,
} from 'svelte/elements';

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type HeadingSize = Size | 'title';
export type Shape = 'rectangle' | 'semi-round' | 'round';
export type Variants = 'filled' | 'outline' | 'ghost' | 'hero';
export type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type ButtonOrAnchor =
	| ({ href?: never } & HTMLButtonAttributes)
	| ({ href: string } & HTMLAnchorAttributes);

export type CloseButtonProps = {
	size?: Size;
	variant?: Variants;
};

type ButtonBaseProps = CloseButtonProps & {
	class?: string;
	color?: Color;
	shape?: Shape;
} & ButtonOrAnchor;

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

export type IconButtonProps = ButtonBaseProps & IconProps;
export type ButtonProps = ButtonBaseProps & {
	fullWidth?: boolean;
	loading?: boolean;
};

type StackBaseProps = {
	class?: string;
	children: Snippet;
	gap?: Gap;
	wrap?: boolean;
	fullWidth?: boolean;
	fullHeight?: boolean;
};

export type StackProps = StackBaseProps & {
	align?: 'start' | 'center' | 'end';
	direction?: 'row' | 'column';
};
export type HStackProps = StackBaseProps;
export type VStackProps = StackBaseProps;

export type FieldContext = {
	label?: string;
	invalid?: boolean;
	disabled?: boolean;
	required?: boolean;
	readOnly?: boolean;
};

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
	showLabel?: string;
	hideLabel?: string;
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
	color?: Color;
	shape?: Shape;
	placeholder?: string;
	class?: string;
};

export type SelectProps<T extends SelectItem> = SelectCommonProps<T> & {
	value?: T;
	onChange?: (value: T) => void;
};

export type MultiSelectProps<T extends SelectItem> = SelectCommonProps<T> & {
	value?: T[];
	onChange?: (values: T[]) => void;
};
