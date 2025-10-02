import { env } from '$env/dynamic/public';

const getImmichApp = (host: string | undefined) => {
  if (!host || !host.endsWith('immich.app')) {
    return false;
  }

  if (host === 'immich.app' || host.startsWith('pr-')) {
    return 'root';
  }

  return host.split('.')[0];
};

export const resolveUrl = (url: string, currentHostname?: string) => {
  if (!isExternalLink(url)) {
    return url;
  }

  const target = new URL(url);
  const targetApp = getImmichApp(target.hostname);
  const currentApp = getImmichApp(currentHostname ?? globalThis.location?.hostname ?? env.PUBLIC_IMMICH_HOSTNAME);

  return targetApp && targetApp === currentApp ? target.pathname : target.href;
};

export const isExternalLink = (href: string): boolean => {
  return !(href.startsWith('/') || href.startsWith('#'));
};

export type Metadata = {
  title: string;
  description: string;
  imageUrl?: string;
};

export const resolveMetadata = (site: Metadata, page?: Metadata) => {
  const title = page ? `${page.title} | ${site.title}` : site.title;
  const description = page?.description ?? site.description;
  const imageUrl = page?.imageUrl ?? site?.imageUrl;
  const siteName = page ? `${site.title} — ${site.description}` : site.title;

  return {
    siteName,
    title,
    description,
    imageUrl,
  };
};
