import type { Color, IconLike, IfLike, TextColor } from '$lib/types.js';
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

export const isEnabled = ({ $if }: IfLike) => $if?.() ?? true;
