import type { FieldContext, TableContext } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { getContext, hasContext, setContext } from 'svelte';

const fieldKey = Symbol(withPrefix('field'));

export const setFieldContext = (context: FieldContext) => setContext(fieldKey, context);
export const hasFieldContext = (): boolean => hasContext(fieldKey);
export const getFieldContext = () => {
  const {
    label,
    color = 'secondary',
    size = 'small',
    invalid = false,
    readOnly = false,
    required = false,
    disabled = false,
    description,
  } = (getContext(fieldKey) as FieldContext) || {};

  return { label, description, color, invalid, readOnly, required, disabled, size };
};

const tableKey = Symbol(withPrefix('table'));

export const setTableContext = (context: () => TableContext) => setContext(tableKey, context);
export const getTableContext = () => {
  return () => {
    const context = getContext(tableKey) as () => TableContext;
    const { spacing = 'medium', striped = false } = context?.() || {};
    return { spacing, striped };
  };
};
