export type ApiSuccessResponse<T> = T;
export type ApiErrorResponse = {
  meta: ErrorMetaInfo;
  body: ErrorBody;
};

type ErrorMetaInfo = {
  code: number;
  title: string;
};
type ErrorBody = {
  msg?: string;
};

export const createApiResponse = <
  T extends Record<keyof ApiErrorResponse, never>
>(
  input: T | ApiErrorResponse
) => {
  const error: ApiErrorResponse | null =
    input && "meta" in input ? input : null;
  const result: ApiSuccessResponse<T> | null = !error ? (input as T) : null;

  return { result, error };
};

export const createApiErrorResponse = (input: ApiErrorResponse) => {
  return { result: null, error: input };
};
