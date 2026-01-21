import type { ChildKey } from '$lib/constants.js';
import type { ChildContext, ChildData, FieldContext, TableContext } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { getContext, setContext } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

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
      ...restProps
    } = context?.() || {};

    return { label, description, color, invalid, readOnly, required, disabled, ...restProps };
  };
};

const tableKey = Symbol(withPrefix('table'));

export const setTableContext = (context: () => TableContext) => setContext(tableKey, context);
export const getTableContext = () => {
  return () => {
    const context = getContext(tableKey) as () => TableContext;
    const { spacing = 'medium', size = 'medium', striped = false } = context?.() || {};
    return { spacing, size, striped };
  };
};

const asChildKey = (key: ChildKey) => withPrefix(key);

export const setChildContext = (key: ChildKey) => {
  const map = new SvelteMap<ChildKey, () => ChildData>();
  const context: ChildContext = {
    register: (child: ChildKey, data: () => ChildData) => {
      map.set(child, data);
      return () => {
        map.delete(child);
      };
    },
  };

  setContext<() => ChildContext>(asChildKey(key), () => context);

  return {
    getByKey: (key: ChildKey) => map.get(key)?.() as ChildData | undefined,
  };
};

const noop = () => {};

export const getChildContext = (key: ChildKey) => {
  return () => {
    const context = getContext<undefined | (() => ChildContext)>(asChildKey(key));
    if (!context) {
      console.log(`Unable to find child context for key: ${key}`);
    }

    const { register } = context?.() ?? { register: () => noop };

    return { register };
  };
};
