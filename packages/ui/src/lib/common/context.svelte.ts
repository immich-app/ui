import type { FieldContext } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { getContext, hasContext, setContext } from 'svelte';

const fieldKey = Symbol(withPrefix('field'));

export const setFieldContext = (field: FieldContext) => setContext(fieldKey, field);
export const hasFieldContext = (): boolean => hasContext(fieldKey);
export const getFieldContext = () => {
  const {
    label,
    color = 'secondary',
    invalid = false,
    readOnly = false,
    required = false,
    requiredIndicator = false,
    disabled = false,
    description,
  } = (getContext(fieldKey) as FieldContext) || {};

  return { label, description, color, invalid, readOnly, required, requiredIndicator, disabled };
};
