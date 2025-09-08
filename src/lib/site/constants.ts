import { asText } from '$lib/services/command-palette-manager.svelte.js';
import { mdiOpenInNew } from '@mdi/js';

export const Constants = {
	Socials: {
		Futo: 'https://futo.org/',
		Github: 'https://github.com/immich-app/immich',
		Discord: 'https://discord.immich.app/',
		Reddit: 'https://www.reddit.com/r/immich/',
		Weblate: 'https://hosted.weblate.org/projects/immich/immich/',
	},
	Get: {
		iOS: 'https://get.immich.app/ios',
		Android: 'https://get.immich.app/android',
		FDroid: 'https://get.immich.app/fdroid',
		GithubRelease: 'https://github.com/immich-app/immich/releases/latest',
		DockerCompose: 'https://get.immich.app/docker-compose',
	},

	Sites: {
		Api: 'https://api.immich.app/',
		Demo: 'https://demo.immich.app/',
		My: 'https://my.immich.app/',
		Buy: 'https://buy.immich.app/',
		Get: 'https://get.immich.app/',
		Docs: 'https://docs.immich.app/',
		Store: 'https://immich.store/',
	},
	Pages: {
		CursedKnowledge: 'https://immich.app/cursed-knowledge',
		Roadmap: 'https://immich.app/roadmap',
	},
	Npm: {
		Sdk: 'https://www.npmjs.com/package/@immich/sdk',
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
	href: site.href,
	external: true,
	text: asText('Site', 'Link', site.title, site.description, site.href),
}));
