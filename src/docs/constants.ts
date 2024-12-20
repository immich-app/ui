import {
	mdiAlertCircleOutline,
	mdiApplicationOutline,
	mdiButtonCursor,
	mdiCardOutline,
	mdiCheckboxMarked,
	mdiCloseCircle,
	mdiCreditCardOutline,
	mdiFormatHeaderPound,
	mdiFormTextbox,
	mdiFormTextboxPassword,
	mdiHomeCircle,
	mdiImage,
	mdiLink,
	mdiListBoxOutline,
	mdiNumeric,
	mdiPartyPopper,
	mdiViewSequential,
} from '@mdi/js';
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

export const componentGroups = [
	{
		name: 'Layout',
		components: [
			{ name: 'Alert', icon: mdiAlertCircleOutline },
			{ name: 'AppShell', icon: mdiApplicationOutline },
			{ name: 'Card', icon: mdiCardOutline },
			{ name: 'Stack', icon: mdiViewSequential },
		],
	},
	{
		name: 'Forms',
		components: [
			{ name: 'Button', icon: mdiButtonCursor },
			{ name: 'IconButton', icon: mdiHomeCircle },
			{ name: 'Checkbox', icon: mdiCheckboxMarked },
			{ name: 'CloseButton', icon: mdiCloseCircle },
			{ name: 'Field', icon: mdiListBoxOutline },
			{ name: 'Input', icon: mdiFormTextbox },
			{ name: 'LoadingSpinner', icon: mdiCreditCardOutline },
			{ name: 'PasswordInput', icon: mdiFormTextboxPassword },
		],
	},
	{
		name: 'Text',
		components: [
			{ name: 'Text', icon: mdiFormatHeaderPound },
			{ name: 'Heading', icon: mdiFormTextbox },
			{ name: 'Link', icon: mdiLink },
			{ name: 'FormatBytes', icon: mdiNumeric },
		],
	},
	{
		name: 'Immich',
		components: [
			{ name: 'Logo', icon: mdiImage },
			{ name: 'SupporterBadge', icon: mdiPartyPopper },
		],
	},
];
