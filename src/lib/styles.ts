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

  shape: {
    rectangle: 'rounded-none',
    'semi-round': '',
    round: 'rounded-full',
  },

  border: {
    true: 'border',
    false: '',
  },

  borderColor: {
    primary: 'border-primary',
    secondary: 'border-dark',
    success: 'border-success',
    danger: 'border-danger',
    warning: 'border-warning',
    info: 'border-info',
  },

  fillColor: {
    primary: 'fill-primary',
    secondary: 'fill-dark',
    success: 'fill-success',
    danger: 'fill-danger',
    warning: 'fill-warning',
    info: 'fill-info',
  },

  filledColor: {
    primary: 'bg-primary text-light',
    secondary: 'bg-dark text-light',
    success: 'bg-success text-light',
    danger: 'bg-danger text-light',
    warning: 'bg-warning text-light',
    info: 'bg-info text-light',
  },

  filledColorHover: {
    primary: 'hover:bg-primary/80',
    secondary: 'hover:bg-dark/80',
    success: 'hover:bg-success/80',
    danger: 'hover:bg-danger/80',
    warning: 'hover:bg-warning/80',
    info: 'hover:bg-info/80',
  },

  textSize: {
    tiny: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    giant: 'text-xl',
  },

  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    'semi-bold': 'font-semibold',
    bold: 'font-bold',
    'extra-bold': 'font-extrabold',
  },
};
