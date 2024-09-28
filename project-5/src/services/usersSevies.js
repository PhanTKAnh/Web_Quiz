import {get, post} from "../untils/request"
export const login = async (email,password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}
export const register = async (options) =>{
    const result = await post("users",options);
    return result;
}
export const checkExits =async (key,email) => {
    const result = await get(`users?${key}=${email}`)
    return result;
}