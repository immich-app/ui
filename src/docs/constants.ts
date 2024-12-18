import type { Component } from 'svelte';

export enum DisplayOption {
	Both = 'both',
	Light = 'light',
	Dark = 'dark',
}

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

export type ExampleItem = {
	title: string;
	code: string;
	component: Component | Component<{ theme: Theme }>;
};

export type ExampleCardProps = ExampleItem & { theme: Theme };
