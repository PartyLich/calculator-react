export const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

export const compose = (...fns) => (x) =>
  fns.reduceRight((acc, f) => f(acc), x);
