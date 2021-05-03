// 別エンドポイントを呼び出しする場合のAPIクライアント
import { APP_SERVICE_HOST } from "app/config";
import fetch from "isomorphic-unfetch";
import {
  ApiErrorResponse,
  ApiSuccessResponse,
  createApiResponse,
} from "./api-response";

type ApiMethod = "GET" | "POST" | "DELETE";
export type ApiResponse<T = any> =
  | {
      statusCode: number;
      result: ApiSuccessResponse<T>;
      error: null;
    }
  | {
      statusCode: number;
      result: null;
      error: ApiErrorResponse;
    };

export const apiClient = async <T = any>(
  path: string,
  method: ApiMethod,
  header?: { [key: string]: string },
  payload?: any,
  host?: string
): Promise<ApiResponse<T>> => {
  const _host = host ?? APP_SERVICE_HOST;
  const url = new URL(`${_host}${path}`);
  const headers = {
    ...(method !== "GET" && {
      "Content-Type": "application/json; charset=utf-8",
    }),
    ...header,
  };
  const options: RequestInit = {
    method,
    headers,
    body: payload,
  };

  if (method === "GET") {
    if (!header) {
      delete options.headers;
    }
    delete options.body;
  }
  const res = await fetch(url.toString(), options);
  const statusCode = res.status;
  const apiReturn = await res.json();
  const { result: originalResult, error: originalError } = createApiResponse(
    apiReturn
  );

  const result: ApiSuccessResponse<T> | null =
    statusCode === 404 ? null : originalResult;
  const error: ApiErrorResponse | null =
    statusCode === 404
      ? {
          meta: {
            code: 404,
            title: "Not Found",
          },
          body: {},
        }
      : originalError;

  if (error !== null) {
    return {
      statusCode,
      result: null,
      error,
    };
  }

  return {
    statusCode,
    result: result ?? ({} as T),
    error: null,
  };
};
