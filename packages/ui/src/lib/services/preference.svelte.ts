import { browser } from '$app/environment';

const asKey = (key: string) => `immich-ui-${key}`;

const readPreference = <T>(key: string, defaults: T) => {
  if (!browser || !window?.localStorage) {
    throw new Error('Local storage is not available');
  }

  const text = window.localStorage.getItem(asKey(key));
  const stored = text ? (JSON.parse(text) as T) : {};

  return { ...defaults, ...stored };
};

const writePreference = <T>(key: string, value: T) => {
  if (!browser || !window.localStorage) {
    throw new Error('Local storage is not available');
  }
  const text = JSON.stringify(value);
  window.localStorage.setItem(asKey(key), text);
};

type PreferenceOptions<T> = {
  key: string;
  defaults: T;
  onReadError?: (error: unknown) => void;
  onWriteError?: (error: unknown) => void;
};
export const preference = <T>(options: PreferenceOptions<T>) => {
  const { key, defaults, onReadError, onWriteError } = options;

  let initialValue = defaults;
  try {
    initialValue = readPreference<T>(key, defaults);
  } catch (error) {
    onReadError?.(error);
  }

  const state = $state<T>(initialValue);

  const sync = () => {
    try {
      writePreference(key, state);
    } catch (error) {
      onWriteError?.(error);
    }
  };

  return { state, sync };
};
