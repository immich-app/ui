import type { Color, Shape, Size } from '@immich/ui';

export const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
export const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
export const sizes: Size[] = ['tiny', 'small', 'medium', 'large', 'giant'];

export enum DisplayOption {
	Both = 'both',
	Light = 'light',
	Dark = 'dark',
}

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

type Route = { name: string; link: string };

export const routes: Route[] = [
	{ name: 'Button', link: '/examples/button' },
	{ name: 'Checkbox', link: '/examples/checkbox' },
	{ name: 'Card', link: '/examples/card' },
	{ name: 'IconButton', link: '/examples/icon-button' },
	{ name: 'Logo', link: '/examples/logo' },
];
