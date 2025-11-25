import { goto } from '$app/navigation';
import { asText } from '$lib/services/command-palette-manager.svelte.js';
import { mdiOpenInNew } from '@mdi/js';

export const Constants = {
  Socials: {
    Futo: 'https://futo.org/',
    Github: 'https://github.com/immich-app/immich',
    Discord: 'https://discord.immich.app/',
    Reddit: 'https://www.reddit.com/r/immich/',
    Rss: 'https://immich.app/blog/feed.xml',
    Weblate: 'https://hosted.weblate.org/projects/immich/immich/',
    X: 'https://x.com/immichapp',
    YouTube: 'https://www.youtube.com/@immich-app',
  },
  Get: {
    iOS: 'https://get.immich.app/ios',
    Android: 'https://get.immich.app/android',
    FDroid: 'https://get.immich.app/fdroid',
    GithubRelease: 'https://github.com/immich-app/immich/releases/latest',
    Download: 'https://immich.app/download',
  },

  Sites: {
    Api: 'https://api.immich.app/',
    Buy: 'https://buy.immich.app/',
    Data: 'https://data.immich.app/',
    Datasets: 'https://datasets.immich.app/',
    Demo: 'https://demo.immich.app/',
    Docs: 'https://docs.immich.app/',
    Get: 'https://get.immich.app/',
    My: 'https://my.immich.app/',
    Store: 'https://immich.store/',
    Ui: 'https://ui.immich.app/',
  },
  Pages: {
    CursedKnowledge: 'https://immich.app/cursed-knowledge',
    Roadmap: 'https://immich.app/roadmap',
    PrivacyPolicy: 'https://immich.app/privacy-policy',
  },
  Npm: {
    Sdk: 'https://www.npmjs.com/package/@immich/sdk',
    Ui: 'https://www.npmjs.com/package/@immich/ui',
  },
};

export const siteCommands = [
  {
    title: 'Immich Documentation',
    description: 'View the Immich documentation',
    href: Constants.Sites.Docs,
  },
  {
    title: 'Buy Immich',
    description: 'Support Immich by buying a product key.',
    href: Constants.Sites.Buy,
  },
  {
    title: 'My Immich',
    description: 'Immich link proxy to redirect to your personal instance',
    href: Constants.Sites.My,
  },
  {
    title: 'Get Immich',
    description: 'View downloads links for Immich apps and server',
    href: Constants.Sites.Get,
  },
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
  {
    title: 'Immich Demo',
    description: 'Test out Immich with our public demo server',
    href: Constants.Sites.Demo,
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
  {
    title: 'Immich UI',
    description: 'View our Svelte component library, @immich/ui',
    href: Constants.Sites.Ui,
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
].map((site) => ({
  icon: mdiOpenInNew,
  type: 'Link',
  iconClass: 'text-indigo-700 dark:text-indigo-200',
  title: site.title,
  description: site.description,
  onAction: () => goto(site.href),
  searchText: asText('Site', 'Link', site.title, site.description, site.href),
}));
