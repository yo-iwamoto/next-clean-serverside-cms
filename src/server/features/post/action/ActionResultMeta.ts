// boolean ではなく true | false で扱うための constant
export const ACTION_RESULT_META_SUCCESS = {
  success: true,
  failure: false,
} as const;

// Action の返り値
export type ActionResultMeta<T = unknown> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      displayMessage: string;
      code?: string;
      error?: unknown;
    };
