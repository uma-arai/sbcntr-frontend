import { apiClient } from "utils/server/api-client";
import { Ctx } from "blitz";

const getHello = async (_ = null, { session }: Ctx) => {
  try {
    return await apiClient<{ data: string }>(`/v1/helloworld`, "GET");
  } catch (e) {
    console.log(e);
    return {
      statusCode: 999,
      result: null,
      error: {
        meta: {
          code: 88,
          title: "エラー",
        },
        body: {
          msg: "Hello worldの取得に失敗",
        },
      },
    };
  }
};

export default getHello;
