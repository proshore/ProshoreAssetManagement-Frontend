import apiUrl from '@/constants/routes/resetPassword'

import API from "@/services/API"


 const resetPassword = async (resetPassword)=>{
    const config = {
        headers:{
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + "1bxXVTgMmdgiClqXZ8Rdmg"    
        }
    }
    
    return await API.post(apiUrl.RESETPASSWORD_URL,resetPassword,config);
 }

 

 export {resetPassword}