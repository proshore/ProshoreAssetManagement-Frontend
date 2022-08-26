const {getInvitationData,inviteUser} = import('../services/index')

export default async function reInvite(){
const invitationData = await getInvitationData()
const invite = await inviteUser(invitationData)
console.log("User Invited");
}

