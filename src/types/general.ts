export type CommonProps = {
  className?: string;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
