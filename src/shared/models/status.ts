type ObjectsValues<T> = T[keyof T];

export type TSTATUS = ObjectsValues<typeof STATUS>;

export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;
