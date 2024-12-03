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
