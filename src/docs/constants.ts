import type { Color, Shape, Size } from '@immich/ui';

export const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
export const colors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
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
	{ name: 'Alert', link: '/examples/alert' },
	{ name: 'Button', link: '/examples/button' },
	{ name: 'Card', link: '/examples/card' },
	{ name: 'Checkbox', link: '/examples/checkbox' },
	{ name: 'CloseButton', link: '/examples/close-button' },
	{ name: 'Field', link: '/examples/field' },
	{ name: 'Heading', link: '/examples/heading' },
	{ name: 'IconButton', link: '/examples/icon-button' },
	{ name: 'Input', link: '/examples/input' },
	{ name: 'Link', link: '/examples/link' },
	{ name: 'Logo', link: '/examples/logo' },
	{ name: 'LoadingSpinner', link: '/examples/loading-spinner' },
	{ name: 'PasswordInput', link: '/examples/password-input' },
	{ name: 'Stack', link: '/examples/stack' },
	{ name: 'SupporterBadge', link: '/examples/supporter-badge' },
	{ name: 'Text', link: '/examples/text' },
];
