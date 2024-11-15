import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type Shape = 'rectangle' | 'semi-round' | 'round';

type ButtonOrAnchor =
	| ({ href?: never } & HTMLButtonAttributes)
	| ({ href: string } & HTMLAnchorAttributes);

type ButtonBaseProps = {
	class?: string;
	color?: Color;
	size?: Size;
	shape?: Shape;
	variant?: 'filled' | 'outline' | 'ghost' | 'hero';
} & ButtonOrAnchor;

export type IconButtonProps = ButtonBaseProps & {
	/** icon from `@mdi/js` (svg string) */
	icon: string;
};
export type ButtonProps = ButtonBaseProps & { fullWidth?: boolean };
export type InternalButtonProps = ButtonProps & {
	/** when true, button width to height ratio is 1:1 */
	icon?: boolean;
};
