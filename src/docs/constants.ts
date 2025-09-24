import type { Theme } from '@immich/ui';
import {
  mdiAccountCircle,
  mdiAccountCircleOutline,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiApplication,
  mdiApplicationOutline,
  mdiButtonCursor,
  mdiCard,
  mdiCardOutline,
  mdiCheckboxMarked,
  mdiCheckboxMultipleMarked,
  mdiCheckboxMultipleMarkedOutline,
  mdiCheckboxOutline,
  mdiCloseCircle,
  mdiCloseCircleOutline,
  mdiCodeBlockBraces,
  mdiCodeBraces,
  mdiDotsCircle,
  mdiFormatHeaderPound,
  mdiFormDropdown,
  mdiFormTextarea,
  mdiFormTextbox,
  mdiFormTextboxPassword,
  mdiHelpBox,
  mdiHelpBoxOutline,
  mdiHomeCircle,
  mdiHomeCircleOutline,
  mdiImage,
  mdiImageOutline,
  mdiKeyboardVariant,
  mdiLink,
  mdiListBox,
  mdiListBoxOutline,
  mdiMenu,
  mdiNumeric,
  mdiPanVertical,
  mdiPartyPopper,
  mdiSquare,
  mdiSquareOutline,
  mdiThemeLightDark,
  mdiToggleSwitch,
  mdiToggleSwitchOutline,
  mdiViewSequential,
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
  theme?: Theme;
};

export type ExampleCardProps = ExampleItem;

export const componentGroups = [
  {
    title: 'Layout',
    components: [
      { name: 'Alert', icon: mdiAlertCircleOutline, activeIcon: mdiAlertCircle },
      { name: 'AppShell', icon: mdiApplicationOutline, activeIcon: mdiApplication },
      { name: 'Card', icon: mdiCardOutline, activeIcon: mdiCard },
      { name: 'Container', icon: mdiSquareOutline, activeIcon: mdiSquare },
      { name: 'Navbar', icon: mdiMenu },
      { name: 'Modal', icon: mdiWindowMaximize },
      { name: 'ConfirmModal', icon: mdiCheckboxOutline },
      { name: 'Scrollable', icon: mdiPanVertical },
      { name: 'Stack', icon: mdiViewSequentialOutline, activeIcon: mdiViewSequential },
    ],
  },
  {
    title: 'Forms',
    components: [
      { name: 'Button', icon: mdiButtonCursor },
      { name: 'IconButton', icon: mdiHomeCircleOutline, activeIcon: mdiHomeCircle },
      { name: 'Checkbox', icon: mdiCheckboxOutline, activeIcon: mdiCheckboxMarked },
      { name: 'CloseButton', icon: mdiCloseCircleOutline, activeIcon: mdiCloseCircle },
      { name: 'Field', icon: mdiListBoxOutline, activeIcon: mdiListBox },
      { name: 'HelperText', icon: mdiHelpBoxOutline, activeIcon: mdiHelpBox },
      { name: 'Input', icon: mdiFormTextbox },
      { name: 'LoadingSpinner', icon: mdiDotsCircle },
      {
        name: 'MultiSelect',
        icon: mdiCheckboxMultipleMarkedOutline,
        activeIcon: mdiCheckboxMultipleMarked,
      },
      { name: 'PasswordInput', icon: mdiFormTextboxPassword },
      { name: 'Select', icon: mdiFormDropdown },
      { name: 'Switch', icon: mdiToggleSwitchOutline, activeIcon: mdiToggleSwitch },
    ],
  },
  {
    title: 'Text',
    components: [
      { name: 'Code', icon: mdiCodeBraces },
      { name: 'CodeBlock', icon: mdiCodeBlockBraces },
      { name: 'Kbd', icon: mdiKeyboardVariant },
      { name: 'Text', icon: mdiFormatHeaderPound },
      { name: 'Textarea', icon: mdiFormTextarea },
      { name: 'Heading', icon: mdiFormTextbox },
      { name: 'Link', icon: mdiLink },
      { name: 'FormatBytes', icon: mdiNumeric },
    ],
  },
  {
    title: 'Miscellaneous',
    components: [
      { name: 'Avatar', icon: mdiAccountCircleOutline, activeIcon: mdiAccountCircle },
      { name: 'Logo', icon: mdiImageOutline, activeIcon: mdiImage },
      { name: 'CommandPalette', icon: mdiMenu, activeIcon: mdiMenu },
      { name: 'SupporterBadge', icon: mdiPartyPopper },
      { name: 'ThemeSwitcher', icon: mdiThemeLightDark },
    ],
  },
];
