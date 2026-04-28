import { goto } from '$app/navigation';
import { asComponentHref } from '$docs/utilities.js';
import {
  asText,
  defaultProvider,
  linkCommands,
  MenuItemType,
  toastManager,
  type ActionItem,
  type ActionItemHandler,
  type CarouselImageItem,
  type IconLike,
  type MenuItems,
  type Theme,
} from '@immich/ui';
import {
  mdiAccountCircle,
  mdiAccountCircleOutline,
  mdiAlert,
  mdiAlertOutline,
  mdiApplication,
  mdiApplicationOutline,
  mdiBullhornVariant,
  mdiBullhornVariantOutline,
  mdiButtonCursor,
  mdiButtonPointer,
  mdiCalendar,
  mdiCard,
  mdiCardOutline,
  mdiCheckboxMarked,
  mdiCheckboxMultipleMarked,
  mdiCheckboxMultipleMarkedOutline,
  mdiCheckboxOutline,
  mdiClock,
  mdiClockOutline,
  mdiCloseCircle,
  mdiCloseCircleOutline,
  mdiCodeBlockBraces,
  mdiCodeBraces,
  mdiContentCopy,
  mdiDotsCircle,
  mdiDotsVertical,
  mdiDownload,
  mdiFormatHeaderPound,
  mdiFormDropdown,
  mdiFormTextarea,
  mdiFormTextbox,
  mdiFormTextboxPassword,
  mdiGauge,
  mdiHelpBox,
  mdiHelpBoxOutline,
  mdiHomeCircle,
  mdiHomeCircleOutline,
  mdiImage,
  mdiImageOutline,
  mdiInformationSlabCircle,
  mdiInformationSlabCircleOutline,
  mdiKeyboardVariant,
  mdiLanguageMarkdownOutline,
  mdiLink,
  mdiListBox,
  mdiListBoxOutline,
  mdiLockSmart,
  mdiMenu,
  mdiMessageAlert,
  mdiMessageAlertOutline,
  mdiNumeric,
  mdiPalette,
  mdiPanVertical,
  mdiPartyPopper,
  mdiPencilOutline,
  mdiProgressHelper,
  mdiShareVariant,
  mdiSlashForward,
  mdiSquare,
  mdiSquareOutline,
  mdiTable,
  mdiTag,
  mdiTagOutline,
  mdiThemeLightDark,
  mdiToggleSwitch,
  mdiToggleSwitchOutline,
  mdiTrashCanOutline,
  mdiVectorSquare,
  mdiViewCarousel,
  mdiViewCarouselOutline,
  mdiViewSequential,
  mdiViewSequentialOutline,
  mdiWindowMaximize,
} from '@mdi/js';
import { siGithub } from 'simple-icons';
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
  title: 'Immich UI',
  description: 'A Svelte component library for Immich',
};

export type ComponentItem = {
  name: string;
  title?: string;
  href?: string;
  icon: IconLike;
  activeIcon?: string;
  items?: ComponentItem[];
};

export type ComponentGroup = {
  title: string;
  components: ComponentItem[];
};

export const components: ComponentItem[] = [
  { name: 'AnnouncementBanner', icon: mdiBullhornVariantOutline, activeIcon: mdiBullhornVariant },
  { name: 'AppShell', icon: mdiApplicationOutline, activeIcon: mdiApplication },
  { name: 'Alert', icon: mdiAlertOutline, activeIcon: mdiAlert },
  { name: 'Avatar', icon: mdiAccountCircleOutline, activeIcon: mdiAccountCircle },
  { name: 'Badge', icon: mdiTagOutline, activeIcon: mdiTag },
  { name: 'Breadcrumbs', icon: mdiSlashForward },
  {
    name: 'Button',
    title: 'Buttons',
    icon: mdiButtonCursor,
    items: [
      { name: 'ActionButton', icon: mdiButtonPointer },
      { name: 'CloseButton', icon: mdiCloseCircleOutline, activeIcon: mdiCloseCircle },
      { name: 'IconButton', icon: mdiHomeCircleOutline, activeIcon: mdiHomeCircle },
      { name: 'ListButton', icon: mdiButtonPointer },
    ],
  },
  { name: 'Card', icon: mdiCardOutline, activeIcon: mdiCard },
  { name: 'Checkbox', icon: mdiCheckboxOutline, activeIcon: mdiCheckboxMarked },
  { name: 'Code', icon: mdiCodeBraces },
  { name: 'CodeBlock', icon: mdiCodeBlockBraces },
  { name: 'Colors', icon: mdiPalette },
  { name: 'CommandPalette', icon: mdiMenu, activeIcon: mdiMenu },
  { name: 'Container', icon: mdiSquareOutline, activeIcon: mdiSquare },
  { name: 'ContextMenu', icon: mdiDotsVertical },
  {
    name: 'ControlBar',
    icon: mdiApplicationOutline,
    activeIcon: mdiApplication,
    items: [{ name: 'ActionBar', icon: mdiCardOutline, activeIcon: mdiCard }],
  },
  { name: 'DatePicker', icon: mdiCalendar },
  { name: 'Field', icon: mdiListBoxOutline, activeIcon: mdiListBox },
  { name: 'FormatBytes', icon: mdiNumeric },
  { name: 'GithubLink', icon: siGithub },
  { name: 'Heading', icon: mdiFormTextbox },
  { name: 'HelperText', icon: mdiHelpBoxOutline, activeIcon: mdiHelpBox },
  { name: 'Icon', icon: mdiVectorSquare },
  { name: 'ImageCarousel', icon: mdiViewCarouselOutline, activeIcon: mdiViewCarousel },
  { name: 'Input', icon: mdiFormTextbox },
  { name: 'Kbd', icon: mdiKeyboardVariant },
  { name: 'Link', icon: mdiLink },
  { name: 'LoadingSpinner', icon: mdiDotsCircle },
  { name: 'Logo', icon: mdiImageOutline, activeIcon: mdiImage },
  { name: 'Markdown', icon: mdiLanguageMarkdownOutline, activeIcon: mdiLanguageMarkdownOutline },
  { name: 'Meter', icon: mdiGauge },
  {
    name: 'Modal',
    title: 'Modals',
    icon: mdiWindowMaximize,
    items: [
      { name: 'BasicModal', icon: mdiWindowMaximize },
      { name: 'ConfirmModal', icon: mdiCheckboxOutline },
      { name: 'FormModal', icon: mdiWindowMaximize },
    ],
  },
  { name: 'MultiSelect', icon: mdiCheckboxMultipleMarkedOutline, activeIcon: mdiCheckboxMultipleMarked },
  { name: 'Navbar', icon: mdiMenu },
  { name: 'NumberInput', icon: mdiNumeric },
  { name: 'PasswordInput', icon: mdiFormTextboxPassword },
  { name: 'PinInput', icon: mdiLockSmart },
  { name: 'ProgressBar', icon: mdiProgressHelper },
  { name: 'Select', icon: mdiFormDropdown },
  { name: 'SupporterBadge', icon: mdiPartyPopper },
  { name: 'Switch', icon: mdiToggleSwitchOutline, activeIcon: mdiToggleSwitch },
  { name: 'Scrollable', icon: mdiPanVertical },
  { name: 'Stack', icon: mdiViewSequentialOutline, activeIcon: mdiViewSequential },
  { name: 'Table', icon: mdiTable },
  { name: 'Text', icon: mdiFormatHeaderPound },
  { name: 'Textarea', icon: mdiFormTextarea },
  { name: 'ThemeSwitcher', icon: mdiThemeLightDark },
  { name: 'TimeInput', icon: mdiClockOutline, activeIcon: mdiClock },
  { name: 'Toast', icon: mdiMessageAlertOutline, activeIcon: mdiMessageAlert },
  { name: 'Tooltip', icon: mdiInformationSlabCircleOutline, activeIcon: mdiInformationSlabCircle },
];

const onAction: ActionItemHandler = (item) => {
  toastManager.show({
    title: `Clicked ${item.title}`,
    color: item.color ?? 'primary',
    icon: item.icon,
  });
};

export const ExampleActions = {
  Copy: { title: 'Copy', icon: mdiContentCopy, onAction },
  Share: { title: 'Share', icon: mdiShareVariant, onAction },
  Edit: { title: 'Edit album', icon: mdiPencilOutline, onAction },
  Download: { title: 'Download', icon: mdiDownload, onAction },
  Delete: { title: 'Delete', icon: mdiTrashCanOutline, color: 'danger', onAction },
} satisfies Record<string, ActionItem>;

export const exampleActions: ActionItem[] = [
  ExampleActions.Share,
  ExampleActions.Copy,
  ExampleActions.Download,
  ExampleActions.Edit,
  ExampleActions.Delete,
];

export const exampleMenuItems: MenuItems = [
  ExampleActions.Share,
  ExampleActions.Copy,
  ExampleActions.Edit,
  ExampleActions.Download,
  MenuItemType.Divider,
  ExampleActions.Delete,
];

export const carouselImageItems: CarouselImageItem[] = [
  {
    title: '1 year ago',
    href: '#',
    src: 'https://picsum.photos/id/1011/800/600',
    alt: 'Sample image',
  },
  {
    title: '2 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1012/800/600',
    alt: 'Sample image',
  },
  {
    title: '3 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1013/800/600',
    alt: 'Sample image',
  },
  {
    title: '4 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1015/800/600',
    alt: 'Sample image',
  },
  {
    title: '5 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1016/800/600',
    alt: 'Sample image',
  },
  {
    title: '6 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1018/800/600',
    alt: 'Sample image',
  },
  {
    title: '7 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1020/800/600',
    alt: 'Sample image',
  },
  {
    title: '8 years ago',
    href: '#',
    src: 'https://picsum.photos/id/1024/800/600',
    alt: 'Sample image',
  },
];

const asCommand = (component: ComponentItem): ActionItem => {
  const href = asComponentHref(component.name);
  return {
    icon: component.icon,
    iconClass: '',
    title: component.name,
    description: `View the ${component.name} component`,
    onAction: () => goto(href),
    extraText: asText(href),
  };
};

export const getDocsProviders = () => {
  const commands: ActionItem[] = [];
  for (const component of components) {
    commands.push(asCommand(component), ...(component.items ?? []).map(asCommand));
  }

  return [
    defaultProvider({
      name: 'Pages',
      types: ['page', 'pages'],
      actions: linkCommands([
        {
          title: 'Getting started',
          description: 'Learn how to get started using @immich/ui in your project',
          href: '/getting-started',
        },
        { title: 'Introduction', description: 'A Svelte component library for Immich', href: '/introduction' },
        { title: 'Components', description: 'List of components', href: '/components' },
      ]),
    }),
    defaultProvider({ name: 'Components', types: ['component', 'components'], actions: commands }),
  ];
};
