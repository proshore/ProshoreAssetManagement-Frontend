import apiUrl from "@/constants/routes/login";

import API from "@/services/API";

const loginUser = async (loginData) => {
  return await API.post(apiUrl.LOGIN_URL, loginData);
};
const forgotPassword = async (forgotData)=>{
  return await API.post(apiUrl.FORGOT_URL,forgotData);
};
export { loginUser, forgotPassword };


