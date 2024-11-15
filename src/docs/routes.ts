import ButtonExamples from '$docs/examples/ButtonExamples.svelte';
import CardExamples from '$docs/examples/CardExamples.svelte';
import CheckboxExamples from '$docs/examples/CheckboxExamples.svelte';
import LogoExamples from '$docs/examples/LogoExamples.svelte';
import IconButtonExamples from '$docs/examples/IconButtonExamples.svelte';
import type { Component } from 'svelte';

type Route = {
	name: string;
	link: string;
	component: Component | Component<{ theme?: 'light' | 'dark' }>;
};

export const routes: Route[] = [
	{ name: 'Button', link: '/examples/button', component: ButtonExamples },
	{ name: 'Checkbox', link: '/examples/checkbox', component: CheckboxExamples },
	{ name: 'Card', link: '/examples/card', component: CardExamples },
	{ name: 'IconButton', link: '/examples/icon-button', component: IconButtonExamples },
	{ name: 'Logo', link: '/examples/logo', component: LogoExamples },
];
