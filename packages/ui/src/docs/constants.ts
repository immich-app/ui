import type { Theme } from '@immich/ui';
import {
  mdiAccountCircle,
  mdiAccountCircleOutline,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiApplication,
  mdiApplicationOutline,
  mdiBullhornVariant,
  mdiBullhornVariantOutline,
  mdiButtonCursor,
  mdiCalendar,
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
  mdiDotsVertical,
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
  mdiLanguageMarkdownOutline,
  mdiLink,
  mdiListBox,
  mdiListBoxOutline,
  mdiMenu,
  mdiMessageAlert,
  mdiMessageAlertOutline,
  mdiNumeric,
  mdiPalette,
  mdiPanVertical,
  mdiPartyPopper,
  mdiSquare,
  mdiSquareOutline,
  mdiTag,
  mdiTagOutline,
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

export const siteMetadata = {
  title: '@immich/ui',
  description: 'A Svelte component library for Immich',
};

export const componentGroups = [
  {
    title: 'Layout',
    components: [
      { name: 'Alert', icon: mdiAlertCircleOutline, activeIcon: mdiAlertCircle },
      { name: 'AnnouncementBanner', icon: mdiBullhornVariantOutline, activeIcon: mdiBullhornVariant },
      { name: 'AppShell', icon: mdiApplicationOutline, activeIcon: mdiApplication },
      { name: 'Card', icon: mdiCardOutline, activeIcon: mdiCard },
      { name: 'ConfirmModal', icon: mdiCheckboxOutline },
      { name: 'Container', icon: mdiSquareOutline, activeIcon: mdiSquare },
      { name: 'ContextMenu', icon: mdiDotsVertical },
      { name: 'FormModal', icon: mdiWindowMaximize },
      { name: 'Modal', icon: mdiWindowMaximize },
      { name: 'Navbar', icon: mdiMenu },
      { name: 'Scrollable', icon: mdiPanVertical },
      { name: 'Stack', icon: mdiViewSequentialOutline, activeIcon: mdiViewSequential },
      { name: 'Toast', icon: mdiMessageAlertOutline, activeIcon: mdiMessageAlert },
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
      { name: 'NumberInput', icon: mdiNumeric },
      { name: 'PasswordInput', icon: mdiFormTextboxPassword },
      { name: 'LoadingSpinner', icon: mdiDotsCircle },
      {
        name: 'MultiSelect',
        icon: mdiCheckboxMultipleMarkedOutline,
        activeIcon: mdiCheckboxMultipleMarked,
      },
      { name: 'Select', icon: mdiFormDropdown },
      { name: 'Switch', icon: mdiToggleSwitchOutline, activeIcon: mdiToggleSwitch },
      { name: 'DatePicker', icon: mdiCalendar },
    ],
  },
  {
    title: 'Text',
    components: [
      { name: 'Badge', icon: mdiTagOutline, activeIcon: mdiTag },
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
      { name: 'CommandPalette', icon: mdiMenu, activeIcon: mdiMenu },
      { name: 'Logo', icon: mdiImageOutline, activeIcon: mdiImage },
      { name: 'Markdown', icon: mdiLanguageMarkdownOutline, activeIcon: mdiLanguageMarkdownOutline },
      { name: 'SupporterBadge', icon: mdiPartyPopper },
      { name: 'ThemeSwitcher', icon: mdiThemeLightDark },
    ],
  },
  {
    title: 'Design',
    components: [{ name: 'Colors', icon: mdiPalette }],
  },
];
