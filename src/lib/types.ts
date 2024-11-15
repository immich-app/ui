import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type Shape = 'rectangle' | 'semi-round' | 'round';
export type Variants = 'filled' | 'outline' | 'ghost' | 'hero';

type ButtonOrAnchor =
	| ({ href?: never } & HTMLButtonAttributes)
	| ({ href: string } & HTMLAnchorAttributes);

type ButtonBaseProps = {
	class?: string;
	color?: Color;
	size?: Size;
	shape?: Shape;
	variant?: Variants;
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
export type InternalButtonProps = ButtonProps & {
	/** when true, button width to height ratio is 1:1 */
	icon?: boolean;
};
