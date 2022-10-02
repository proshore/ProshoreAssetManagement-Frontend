import apiUrl from "@/constants/routes/account";

import API from "@/services/API";

 const logoutUser = async (token) => {
  return await API.post(apiUrl.LOGOUT_URL,null,{
    headers:{ 'Authorization':`Bearer ${token}`},});
};

export {logoutUser};

