import type { FieldContext } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { getContext, setContext } from 'svelte';

const fieldKey = Symbol(withPrefix('field'));

export const setFieldContext = (context: () => FieldContext) => setContext(fieldKey, context);
export const getFieldContext = () => {
  return () => {
    const context = getContext(fieldKey) as undefined | (() => FieldContext);
    const {
      label,
      color = 'secondary',
      invalid = false,
      readOnly = false,
      required = false,
      disabled = false,
      description,
    } = context?.() || {};

    return { label, description, color, invalid, readOnly, required, disabled };
  };
};
