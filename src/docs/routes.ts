import ButtonExamples from '$docs/examples/ButtonExamples.svelte';
import CardExamples from '$docs/examples/CardExamples.svelte';
import CheckboxExamples from '$docs/examples/CheckboxExamples.svelte';
import type { Component } from 'svelte';

type Route = {
	name: string;
	link: string;
	component: Component;
};

export const routes: Route[] = [
	{ name: 'Button', link: '/examples/button', component: ButtonExamples },
	{ name: 'Checkbox', link: '/examples/checkbox', component: CheckboxExamples },
	{ name: 'Card', link: '/examples/card', component: CardExamples },
];
