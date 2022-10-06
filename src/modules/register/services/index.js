import apiUrl from '@/constants/routes/register'

import API from "@/services/API"


 const registerUser = async (registerData)=>{
    return await API.post(apiUrl.REGISTER_URL,registerData);
 }

 const updateUser = async(updateData)=>{
   return await API.post(apiUrl.RESET_PASSWORD_URL,updateData);
 }
 

 export {registerUser,updateUser}