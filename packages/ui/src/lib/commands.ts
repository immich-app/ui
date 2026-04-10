import { defaultProvider } from '$lib/services/command-palette-manager.svelte.js';
import { screencastManager } from '$lib/services/screencast-manager.svelte.js';
import { themeManager } from '$lib/services/theme-manager.svelte.js';
import { Constants } from '$lib/site/constants.js';
import { ThemePreference, type ActionItem, type LinkItem } from '$lib/types.js';
import { isExternalLink, navigateTo, resolveUrl } from '$lib/utilities/common.js';
import { mdiKeyboard, mdiOpenInNew, mdiThemeLightDark } from '@mdi/js';

export const linkCommands = (items: LinkItem[]): ActionItem[] => {
  return items.map(linkCommand);
};

export const linkCommand = (item: LinkItem): ActionItem => ({
  icon: isExternalLink(resolveUrl(item.href)) ? mdiOpenInNew : undefined,
  iconClass: 'text-indigo-700 dark:text-indigo-200',
  title: item.title,
  description: item.description,
  onAction: () => navigateTo(item.href),
  extraText: item.href,
});

export const CORE_PAGE_COMMANDS = linkCommands([
  {
    title: 'Documentation',
    description: 'View the documentation for Immich',
    href: Constants.Sites.Docs,
  },
  {
    title: 'Blog',
    description: 'Latest updates, announcements, and stories from the Immich team',
    href: Constants.Pages.Blog,
  },
  {
    title: 'Cursed Knowledge',
    description: 'View our collection of cursed knowledge',
    href: Constants.Pages.CursedKnowledge,
  },
  {
    title: 'Roadmap',
    description: 'View our project roadmap',
    href: Constants.Pages.Roadmap,
  },
  {
    title: 'Privacy Policy',
    description: 'View how we collect, use, and share information when you use Immich',
    href: Constants.Pages.PrivacyPolicy,
  },
]);

export const PROJECT_SUPPORT_COMMANDS = linkCommands([
  {
    title: 'Buy Immich',
    description: 'Support Immich by buying a product key.',
    href: Constants.Sites.Buy,
  },
  {
    title: 'Immich Store',
    description: 'Support the project by purchasing Immich merchandise',
    href: Constants.Sites.Store,
  },
  {
    title: 'Immich Datasets',
    description: 'Help improve Immich by contributing your own files',
    href: Constants.Sites.Datasets,
  },
]);

export const MOBILE_APP_COMMANDS = linkCommands([
  {
    title: 'Immich on the PlayStore',
    description: 'View Immich on the Google Play Store',
    href: Constants.Get.Android,
  },
  {
    title: 'Immich on the iOS App Store',
    description: 'View Immich on the iOS App Store',
    href: Constants.Get.iOS,
  },
]);

export const OTHER_SITE_COMMANDS = linkCommands([
  {
    title: 'Awesome Immich',
    description: 'A list of awesome Immich apps, integrations, tools, distributions, and guides',
    href: Constants.Sites.Awesome,
  },
  {
    title: 'Buy Immich',
    description: 'Support Immich by buying a product key.',
    href: Constants.Sites.Buy,
  },
  {
    title: 'Get Immich',
    description: 'View downloads links for Immich apps and server',
    href: Constants.Sites.Get,
  },
  {
    title: 'My Immich',
    description: 'Immich link proxy to redirect to your personal instance',
    href: Constants.Sites.My,
  },
  {
    title: 'Immich API',
    description: 'Documentation for the REST API that powers Immich',
    href: Constants.Sites.Api,
  },
  {
    title: 'Immich Data',
    description: 'View interesting data about the growth of Immich over time',
    href: Constants.Sites.Data,
  },
  {
    title: 'Immich Documentation',
    description: 'View the documentation for Immich',
    href: Constants.Sites.Docs,
  },
  {
    title: 'Immich Demo',
    description: 'Test out Immich with our public demo server',
    href: Constants.Sites.Demo,
  },
  {
    title: 'Immich UI',
    description: 'View our Svelte component library, @immich/ui',
    href: Constants.Sites.Ui,
  },
]);

export const SOCIAL_COMMANDS = linkCommands([
  {
    title: 'reddit',
    description: 'Join the Immich community on reddit',
    href: Constants.Socials.Reddit,
  },
  {
    title: 'GitHub',
    description: 'View our project on GitHub',
    href: Constants.Socials.Github,
  },
  {
    title: 'Discord',
    description: 'Join the conversation on Discord',
    href: Constants.Socials.Discord,
  },
  {
    title: 'Weblate',
    description: 'Support the project by translating Immich on Weblate',
    href: Constants.Socials.Weblate,
  },
  {
    title: 'FUTO',
    description: 'Learn more about FUTO, the company behind Immich',
    href: Constants.Sites.Docs,
  },
]);

// for reactivity
export const getSettingCommands = (): ActionItem[] => [
  {
    icon: mdiThemeLightDark,
    iconClass: 'text-gray-700 dark:text-gray-200',
    title: 'Toggle theme',
    description: 'Switch between light and dark theme',
    shortcuts: [{ alt: true, key: 't' }],
    onAction: () => themeManager.toggle(),
  },
  {
    icon: mdiThemeLightDark,
    iconClass: 'text-gray-700 dark:text-gray-200',
    title: 'System theme',
    description: `Use the system theme (${themeManager.prefersDark ? 'dark' : ' light'})`,
    tags: themeManager.preference === ThemePreference.System ? ['Active'] : undefined,
    onAction: () => themeManager.setPreference(ThemePreference.System),
  },
  {
    title: `Toggle screencast mode`,
    description: 'Show/hide keyboard and mouse events on the screen',
    icon: mdiKeyboard,
    tags: screencastManager.enabled ? ['Active'] : undefined,
    onAction: () => screencastManager.toggle(),
  },
];

export const getSiteProviders = () => [
  defaultProvider({ name: 'Pages', types: ['page', 'pages'], actions: CORE_PAGE_COMMANDS }),
  defaultProvider({ name: 'Support', actions: PROJECT_SUPPORT_COMMANDS }),
  defaultProvider({ name: 'Socials', types: ['social', 'socials'], actions: SOCIAL_COMMANDS }),
  defaultProvider({ name: 'Mobile App', actions: MOBILE_APP_COMMANDS }),
  defaultProvider({ name: 'Sites', types: ['site', 'sites'], actions: OTHER_SITE_COMMANDS }),
  defaultProvider({ name: 'Settings', types: ['setting', 'settings'], actions: getSettingCommands() }),
];
