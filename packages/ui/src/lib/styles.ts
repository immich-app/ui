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

  inputCommon:
    'disabled:bg-gray-300 disabled:text-dark dark:disabled:bg-gray-900 dark:disabled:text-gray-200 bg-transparent transition outline-none disabled:cursor-not-allowed',
  inputContainerCommon:
    'bg-gray-100 ring-1 ring-gray-200 focus-within:ring-primary dark:focus-within:ring-primary transition outline-none focus-within:ring-1 disabled:cursor-not-allowed dark:bg-gray-800 dark:ring-neutral-900',

  shape: {
    rectangle: 'rounded-none',
    'semi-round': '',
    round: 'rounded-full',
  },

  inputRoundedSize: {
    tiny: 'rounded-lg',
    small: 'rounded-lg',
    medium: 'rounded-lg',
    large: 'rounded-lg',
    giant: 'rounded-lg',
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
    primary: 'not-disabled:hover:bg-primary/80',
    secondary: 'not-disabled:hover:bg-dark/80',
    success: 'not-disabled:hover:bg-success/80',
    danger: 'not-disabled:hover:bg-danger/80',
    warning: 'not-disabled:hover:bg-warning/80',
    info: 'not-disabled:hover:bg-info/80',
  },

  textSize: {
    tiny: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    giant: 'text-xl',
  },

  fontWeight: {
    thin: 'font-thin',
    'extra-light': 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    'semi-bold': 'font-semibold',
    bold: 'font-bold',
    'extra-bold': 'font-extrabold',
    black: 'font-black',
  },

  tableSpacing: {
    tiny: '',
    small: 'py-1',
    medium: 'py-2',
    large: 'py-3',
    giant: 'py-4',
  },
};
