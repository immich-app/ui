import {
  MenuItemType,
  toastManager,
  type ActionItem,
  type ActionItemHandler,
  type CarouselImageItem,
  type MenuItems,
  type Theme,
} from '@immich/ui';
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
  mdiButtonPointer,
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
  mdiContentCopy,
  mdiDotsCircle,
  mdiDotsVertical,
  mdiDownload,
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
  mdiInformationSlabCircle,
  mdiInformationSlabCircleOutline,
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

export type ComponentItem = {
  name: string;
  title?: string;
  href?: string;
  icon: string;
  activeIcon?: string;
  items?: ComponentItem[];
};

export type ComponentGroup = {
  title: string;
  components: ComponentItem[];
};

export const componentGroups: ComponentGroup[] = [
  {
    title: 'Layout',
    components: [
      { name: 'Alert', icon: mdiAlertCircleOutline, activeIcon: mdiAlertCircle },
      { name: 'AnnouncementBanner', icon: mdiBullhornVariantOutline, activeIcon: mdiBullhornVariant },
      { name: 'AppShell', icon: mdiApplicationOutline, activeIcon: mdiApplication },
      { name: 'Breadcrumbs', icon: mdiSlashForward },
      { name: 'Card', icon: mdiCardOutline, activeIcon: mdiCard },
      { name: 'Container', icon: mdiSquareOutline, activeIcon: mdiSquare },
      { name: 'ContextMenu', icon: mdiDotsVertical },
      {
        name: 'ControlBar',
        icon: mdiApplicationOutline,
        activeIcon: mdiApplication,
        items: [{ name: 'ActionBar', icon: mdiCardOutline, activeIcon: mdiCard }],
      },
      { name: 'ImageCarousel', icon: mdiViewCarouselOutline, activeIcon: mdiViewCarousel },
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
      { name: 'Navbar', icon: mdiMenu },
      { name: 'Scrollable', icon: mdiPanVertical },
      { name: 'Stack', icon: mdiViewSequentialOutline, activeIcon: mdiViewSequential },
      { name: 'Table', icon: mdiTable },
      { name: 'Toast', icon: mdiMessageAlertOutline, activeIcon: mdiMessageAlert },
      { name: 'Tooltip', icon: mdiInformationSlabCircleOutline, activeIcon: mdiInformationSlabCircle },
    ],
  },
  {
    title: 'Forms',
    components: [
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
      { name: 'Checkbox', icon: mdiCheckboxOutline, activeIcon: mdiCheckboxMarked },
      { name: 'Field', icon: mdiListBoxOutline, activeIcon: mdiListBox },
      { name: 'HelperText', icon: mdiHelpBoxOutline, activeIcon: mdiHelpBox },
      { name: 'Input', icon: mdiFormTextbox },
      { name: 'NumberInput', icon: mdiNumeric },
      { name: 'PasswordInput', icon: mdiFormTextboxPassword },
      { name: 'ProgressBar', icon: mdiProgressHelper },
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
      { name: 'Icon', icon: mdiVectorSquare },
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
