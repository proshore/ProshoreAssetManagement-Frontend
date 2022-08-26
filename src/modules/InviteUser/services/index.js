import apiUrl from '@/constants/routes/invite'

import API from "@/services/API"

const inviteUser = async(inviteData)=>{
    return await API.post(apiUrl.INVITE_URL);
}
//get invitation data from server
 const getInvitationData = async ()=>{
    return await API.get(apiUrl.RESEND_INVITE_URL);
    // pass token in headers
    //server will expire previous token and sends another invitation
    // success response will be provided
 }

 export {getInvitationData, inviteUser}