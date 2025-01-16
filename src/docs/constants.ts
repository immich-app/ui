import {
	mdiAccountCircle,
	mdiAccountCircleOutline,
	mdiAlertCircleOutline,
	mdiApplicationOutline,
	mdiButtonCursor,
	mdiCardOutline,
	mdiCheckboxMultipleMarkedOutline,
	mdiCheckboxOutline,
	mdiCloseCircleOutline,
	mdiCodeBraces,
	mdiDotsCircle,
	mdiFormatHeaderPound,
	mdiFormDropdown,
	mdiFormTextbox,
	mdiFormTextboxPassword,
	mdiHelpBoxOutline,
	mdiHomeCircleOutline,
	mdiImage,
	mdiImageOutline,
	mdiKeyboardVariant,
	mdiLink,
	mdiListBoxOutline,
	mdiMenu,
	mdiNumeric,
	mdiPanVertical,
	mdiPartyPopper,
	mdiThemeLightDark,
	mdiToggleSwitch,
	mdiViewSequentialOutline,
	mdiWindowMaximize,
} from '@mdi/js';
import type { Component } from 'svelte';

export enum DisplayOption {
	Both = 'both',
	Light = 'light',
	Dark = 'dark',
}

export type ExampleItem = {
	title: string;
	code: string;
	component: Component;
};

export type ExampleCardProps = ExampleItem;

export const componentGroups = [
	{
		title: 'Layout',
		components: [
			{ name: 'Alert', icon: mdiAlertCircleOutline },
			{ name: 'AppShell', icon: mdiApplicationOutline },
			{ name: 'Card', icon: mdiCardOutline },
			{ name: 'Navbar', icon: mdiMenu },
			{ name: 'Modal', icon: mdiWindowMaximize },
			{ name: 'Scrollable', icon: mdiPanVertical },
			{ name: 'Stack', icon: mdiViewSequentialOutline },
		],
	},
	{
		title: 'Forms',
		components: [
			{ name: 'Button', icon: mdiButtonCursor },
			{ name: 'IconButton', icon: mdiHomeCircleOutline },
			{ name: 'Checkbox', icon: mdiCheckboxOutline },
			{ name: 'CloseButton', icon: mdiCloseCircleOutline },
			{ name: 'Field', icon: mdiListBoxOutline },
			{ name: 'HelperText', icon: mdiHelpBoxOutline },
			{ name: 'Input', icon: mdiFormTextbox },
			{ name: 'LoadingSpinner', icon: mdiDotsCircle },
			{ name: 'MultiSelect', icon: mdiCheckboxMultipleMarkedOutline },
			{ name: 'PasswordInput', icon: mdiFormTextboxPassword },
			{ name: 'Select', icon: mdiFormDropdown },
			{ name: 'Switch', icon: mdiToggleSwitch },
		],
	},
	{
		title: 'Text',
		components: [
			{ name: 'Code', icon: mdiCodeBraces },
			{ name: 'Kbd', icon: mdiKeyboardVariant },
			{ name: 'Text', icon: mdiFormatHeaderPound },
			{ name: 'Heading', icon: mdiFormTextbox },
			{ name: 'Link', icon: mdiLink },
			{ name: 'FormatBytes', icon: mdiNumeric },
		],
	},
	{
		title: 'Miscellaneous',
		components: [
			{ name: 'Avatar', icon: mdiAccountCircleOutline },
			{ name: 'Logo', icon: mdiImageOutline },
			{ name: 'SupporterBadge', icon: mdiPartyPopper },
			{ name: 'ThemeSwitcher', icon: mdiThemeLightDark },
		],
	},
];
