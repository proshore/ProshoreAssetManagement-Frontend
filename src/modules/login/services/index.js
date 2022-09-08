import apiUrl from "@/constants/routes/login";

import API from "@/services/API";

const loginUser = async (loginData) => {
  return await API.post(apiUrl.LOGIN_URL, loginData);
};

export { loginUser };
