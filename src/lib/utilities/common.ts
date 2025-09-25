const getImmichApp = (host: string) => {
  if (!host.endsWith('immich.app')) {
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
  const currentApp = getImmichApp(currentHostname ?? globalThis.location.hostname);

  return targetApp && targetApp === currentApp ? target.pathname : target.href;
};

export const isExternalLink = (href: string): boolean => {
  return !(href.startsWith('/') || href.startsWith('#'));
};
