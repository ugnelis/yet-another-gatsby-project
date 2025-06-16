import { Breakpoints } from './breakpoints';

const keys = Object.keys(Breakpoints) as Array<keyof typeof Breakpoints>;

export const breakpointUp = keys.reduce(
  (accumulator, label) => {
    accumulator[label] = `@media (min-width: ${Breakpoints[label]})`;

    return accumulator;
  },
  {} as Record<keyof typeof Breakpoints, any>,
);

export const breakpointDown = keys.reduce(
  (accumulator, label) => {
    accumulator[label] = `@media (max-width: ${Breakpoints[label]})`;

    return accumulator;
  },
  {} as Record<keyof typeof Breakpoints, any>,
);
