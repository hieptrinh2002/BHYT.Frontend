import { getMethod } from "../helpers/api";

const getListInsurace = async () => {
  const response = await getMethod("/Insurance");
  return response;
};
export { getListInsurace };
