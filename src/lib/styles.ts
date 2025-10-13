const color = {
  primary: 'text-primary',
  secondary: 'text-dark',
  success: 'text-success',
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-info',
};

export const styleVariants = {
  color,
  textColor: {
    ...color,
    muted: 'text-gray-600 dark:text-gray-400',
  },
  textSize: {
    tiny: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    giant: 'text-xl',
  },
};
