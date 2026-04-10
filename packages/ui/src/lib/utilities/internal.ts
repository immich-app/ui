import type { ActionItem, Color, IconLike, MaybeArray, TextColor } from '$lib/types.js';
import { asText } from '$lib/utilities/common.js';
import { twMerge } from 'tailwind-merge';

export const cleanClass = (...classNames: unknown[]) => {
  return twMerge(
    classNames
      .filter((className) => {
        if (!className || typeof className === 'boolean') {
          return false;
        }

        return typeof className === 'string';
      })
      .join(' '),
  );
};

export const withPrefix = (key: string) => `immich-ui-${key}`;

let _count = 0;
export const generateId = (): string => `ui-id-${_count++}`;

export const isIconLike = (icon: unknown): icon is IconLike => {
  return typeof icon === 'string' || !!(icon && typeof icon === 'object' && 'path' in icon);
};

export const resolveIcon = ({
  icons,
  color,
  override,
  fallback,
}: {
  color: Color | TextColor;
  fallback: IconLike;
  override?: IconLike | false;
  icons: Partial<Record<Color | TextColor, string>>;
}) => {
  if (override) {
    return override;
  }

  if (override === false) {
    return;
  }

  return icons[color] ?? fallback;
};

export const asArray = <T>(items?: MaybeArray<T>) => (Array.isArray(items) ? items : items ? [items] : []);

const normalize = <T = unknown>(items: T | T[] | undefined) => (items ? asArray(items) : []);
export const getSearchString = ({ title, description, tags, extraText }: ActionItem) =>
  asText(title, description, ...normalize(tags), ...normalize(extraText));
