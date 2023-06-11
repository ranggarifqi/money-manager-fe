export interface Dict<T> {
  [key: string]: T;
}

export type AnyCallback = (...args: any[]) => void;
