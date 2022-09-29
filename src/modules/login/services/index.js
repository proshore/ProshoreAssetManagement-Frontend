import apiUrl from "@/constants/routes/login";

import API from "@/services/API";

const loginUser = async (data) => {
  return await API.post(apiUrl.LOGIN_URL, data);
};
const forgotPassword = async (forgotData)=>{
  return await API.post(apiUrl.FORGOT_URL,forgotData);
};
const inviteUser = async (data) => {
  return await API.post(apiUrl.INVITE_URL,data);
}
export { loginUser, forgotPassword,inviteUser };


