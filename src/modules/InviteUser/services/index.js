import apiUrl from '@/constants/routes/invite'

import API from "@/services/API"

const inviteUser = async(inviteData)=>{
    return await API.post(apiUrl.INVITE_URL,inviteData);
    // pass authorization token as header on third argument
}
//get invitation data from server
 const reInviteUser = async (reInviteData)=>{
    return await API.post(apiUrl.RESEND_INVITE_URL,reInviteData);
    // pass token in headers
    //server will expire previous token and sends another invitation
    // success response will be provided
 }

 const revokeUser = async (revokeData)=>{
    return await API.post(apiUrl.REVOKE_INVITE_URL,revokeData);
    // pass token in headers
 }
 const deleteUser = async (deleteData)=>{
   return await API.delete(apiUrl.DELETE_INVITE_URL,deleteData)
 }
 const invitationList = async ()=>{
   return await API.get(apiUrl.INVITATION_LIST_URL)
 }

 export {inviteUser,reInviteUser,revokeUser, deleteUser, invitationList}