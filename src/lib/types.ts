import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

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
export type ButtonProps = ButtonBaseProps & { fullWidth?: boolean };

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
