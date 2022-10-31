import apiUrl from '@/constants/routes/invite'

import API from "@/services/API"
import getToken from '@/utils/getToken'


const inviteUser = async(inviteData)=>{
  const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + getToken(),
    },
    }
    return await API.post(apiUrl.INVITE_URL,inviteData,config);
    // pass authorization token as header on third argument
}
//get invitation data from server
 const reInviteUser = async (reInviteData)=>{
  const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + getToken(),
    },
    }
    return await API.post(`${apiUrl.RESEND_INVITE_URL}/${reInviteData.id}`,reInviteData, config);
    // pass token in headers
    //server will expire previous token and sends another invitation
    // success response will be provided
}
 const revokeUser = async (revokeData)=>{
  const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + getToken(),
    },
    }
    return await API.get(`${apiUrl.REVOKE_INVITE_URL}/${revokeData.id}`, config);
    // pass token in headers
 }
 const deleteUser = async (inviteId)=>{
   return await API.delete(`${apiUrl.DELETE_INVITE_URL}/${inviteId}`)
 }
 const invitationList = async ()=>{
  const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + getToken(),
    },
    }
  
   return await API.get(apiUrl.INVITATION_LIST_URL,config)
 }
 export {inviteUser,reInviteUser,revokeUser, deleteUser, invitationList}