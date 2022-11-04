import apiUrl from "@/constants/routes/resetPassword";

import API from "@/services/API";
import getToken from "@/utils/getToken";

const resetPassword = async (resetPassword) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
  };

  return await API.post(apiUrl.RESETPASSWORD_URL, resetPassword, config);
};

export { resetPassword };
