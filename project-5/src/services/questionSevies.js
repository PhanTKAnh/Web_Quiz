import { get } from "../untils/request"

export const getListQuestion = async (topicsId) => {
    const result = await get(`question?topicsId=${topicsId}`);
    return result;
}
