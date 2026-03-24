<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Shape, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { Meter, Progress } from 'bits-ui';
  import type { ComponentProps, Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  export type Props = ComponentProps<typeof Meter.Root> & {
    value?: number;
    max?: number;
    min?: number;
    border?: boolean;
    class?: string;
    color?: Color;
    containerClass?: string;
    label?: string;
    size?: Size;
    shape?: Shape;
    stop?: boolean;
    type?: 'meter' | 'progress';
    valueLabel?: string;
    thresholds?: { from: number; className: string }[];
    ref?: HTMLElement | null;
    children?: Snippet;
  };

  let {
    value = 0,
    max = 1,
    min = 0,
    border = false,
    class: className,
    color: baseColor = 'primary',
    containerClass,
    thresholds = [],
    shape = 'round',
    size = 'medium',
    stop = true,
    type = 'progress',
    label,
    valueLabel,
    children,
    ...props
  }: Props = $props();

  const containerStyles = tv({
    base: 'bg-light-100 dark:bg-light-200 relative box-content w-full overflow-hidden',
    variants: {
      shape: styleVariants.shape,
      size: {
        tiny: 'h-2',
        small: 'h-3',
        medium: 'h-4',
        large: 'h-5',
        giant: 'h-7',
      },
      roundedSize: {
        tiny: 'rounded-sm',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-xl',
      },
      border: {
        true: 'dark:border-light-300 border',
      },
    },
  });

  const barStyles = tv({
    base: 'h-full transition-all duration-700 ease-in-out',
    variants: {
      color: styleVariants.filledColor,
      shape: styleVariants.shape,
      size: {
        tiny: 'min-w-2',
        small: 'min-w-3',
        medium: 'min-w-4',
        large: 'min-w-5',
        giant: 'min-w-7',
      },
      roundedSize: {
        tiny: 'rounded-sm',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-xl',
      },
    },
  });

  const barClass = $derived.by(() => {
    for (let threshold of thresholds.sort((a, b) => b.from - a.from)) {
      if (value >= threshold.from) {
        return threshold.className;
      }
    }
  });

  const stopStyles = tv({
    base: 'absolute inset-y-[calc(50%-var(--spacing)*0.75)] size-1.5 rounded-full opacity-70',
    variants: {
      color: styleVariants.filledColor,
      size: {
        tiny: 'inset-y-0.5 end-0.5 size-1',
        small: 'end-0.75',
        medium: 'end-1.25',
        large: 'end-1.75',
        giant: 'end-2.75',
      },
    },
  });

  const ComponentType = $derived(type === 'progress' ? Progress.Root : Meter.Root);
  const fillPercentage = $derived((100 * value) / (max - min));
  const labelId = $props.id();
</script>

<div class={cleanClass('flex w-full flex-col gap-1', containerClass)}>
  {#if label}
    <div class="flex flex-wrap justify-between">
      <span id={labelId} class="text-immich-dark-gray font-medium dark:text-white">{label}</span>
      <span class="text-gray-500 dark:text-gray-300">{valueLabel}</span>
    </div>
  {/if}

  <ComponentType
    aria-labelledby={label ? labelId : undefined}
    aria-valuetext={valueLabel ?? `${value} / ${max}`}
    {value}
    {min}
    {max}
    class={cleanClass(
      containerStyles({ shape, size, roundedSize: shape === 'semi-round' ? size : undefined, border }),
      className,
    )}
    {...props}
  >
    <div class="absolute flex h-full w-full items-center justify-center">
      {@render children?.()}
    </div>
    <div
      class={cleanClass(
        barStyles({
          color: baseColor,
          shape,
          size: value > 0 ? size : undefined,
          roundedSize: shape === 'semi-round' ? size : undefined,
        }),
        barClass,
      )}
      style="width: {fillPercentage}%"
    ></div>
    {#if stop}
      <div class={cleanClass(stopStyles({ color: baseColor, size }), barClass)}></div>
    {/if}
  </ComponentType>
</div>
