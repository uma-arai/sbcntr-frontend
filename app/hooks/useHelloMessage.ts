import { useQuery } from "blitz";
import getHello from "app/hello/queries/getHello";

export const useHelloMessage = () => {
  const [hello] = useQuery(getHello, null, { suspense: false });
  if (hello?.error) {
    const error = hello.error;
    return error.body.msg;
  }

  return hello?.result.data;
};
