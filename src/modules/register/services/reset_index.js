import apiUrl from '@/constants/routes/resetPassword'

import API from "@/services/API"


 const resetPassword = async (resetPassword)=>{
    return await API.post(apiUrl.RESETPASSWORD_URL,resetPassword);
 }

 

 export {resetPassword}