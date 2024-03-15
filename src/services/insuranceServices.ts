import { getMethod } from "../helpers/api";

const getListInsurace = async () => {
  const response = await getMethod("/Insurance");
  return response;
};

const getInsuraceInfo = async (id: string | undefined) => {
  const response = await getMethod("/Insurance/" + id);
  return response;
};

export { getListInsurace, getInsuraceInfo };
