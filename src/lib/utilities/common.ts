import { env } from '$env/dynamic/public';
import type { DateTime } from 'luxon';

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

export type ArticleMetadata = {
  publishedTime: DateTime;
  modifiedTime?: DateTime;
  expirationTime?: DateTime;
  authors?: string[];
  section?: string;
  tags?: string[];
};

export const resolveMetadata = (site: Metadata, page?: Metadata, article?: ArticleMetadata) => {
  const title = page ? `${page.title} | ${site.title}` : site.title;
  const description = page?.description ?? site.description;
  const imageUrl = page?.imageUrl ?? site?.imageUrl;
  const siteName = page ? `${site.title} — ${site.description}` : site.title;
  const type = article ? 'article' : 'website';

  return {
    type,
    siteName,
    title,
    description,
    imageUrl,
    article: article
      ? {
          publishedTime: article.publishedTime.toISO(),
          modifiedTime: article.modifiedTime?.toISO(),
          expirationTime: article.expirationTime?.toISO(),
          authors: article.authors,
          section: article.section,
          tags: article.tags,
        }
      : undefined,
  };
};
