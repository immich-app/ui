import type { FieldContext } from '$lib/types.js';
import { withPrefix } from '$lib/utils.js';
import { getContext, hasContext, setContext } from 'svelte';

const fieldKey = Symbol(withPrefix('field'));

export const setFieldContext = (field: FieldContext) => setContext(fieldKey, field);
export const hasFieldContext = (): boolean => hasContext(fieldKey);
export const getFieldContext = (): FieldContext => (getContext(fieldKey) || {}) as FieldContext;
